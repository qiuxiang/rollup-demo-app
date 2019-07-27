import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import sucrase from "rollup-plugin-sucrase";
import css from "rollup-plugin-css-porter";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;
export default [
  {
    context: "this",
    input: "src/vendor.ts",
    output: { format: "iife", file: "dist/vendor.js" },
    plugins: [
      resolve(),
      commonjs({
        namedExports: {
          react: [
            "useState",
            "useRef",
            "useMemo",
            "useEffect",
            "useCallback",
            "useDebugValue",
            "memo",
            "forwardRef",
            "createContext",
            "createElement",
            "cloneElement",
            "Children",
            "Component",
            "PureComponent"
          ],
          "react-dom": ["unstable_batchedUpdates"]
        }
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(production ? "production" : "development")
      }),
      css({ minified: true }),
      production && terser()
    ]
  },
  {
    context: "this",
    input: "src/index.tsx",
    output: {
      sourcemap: true,
      format: "iife",
      file: "dist/main.js",
      globals: {
        react: "react",
        "react-dom": "reactDom",
        mobx: "mobx",
        "mobx-react": "mobxReact",
        "antd-mobile": "antd"
      }
    },
    plugins: [sucrase({ production, transforms: ["typescript", "jsx"] }), production && terser()],
    external: ["react", "react-dom", "mobx", "mobx-react", "antd-mobile"]
  }
];

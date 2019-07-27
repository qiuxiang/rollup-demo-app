import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import alias from "rollup-plugin-alias";
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
      commonjs(),
      alias({
        react: "node_modules/nervjs/dist/index.js",
        "react-dom": "node_modules/nervjs/dist/index.js"
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
      globals: { react: "react", "react-dom": "react", "antd-mobile": "antd" }
    },
    plugins: [sucrase({ production, transforms: ["typescript", "jsx"] }), production && terser()],
    external: ["react", "react-dom", "antd-mobile"]
  }
];

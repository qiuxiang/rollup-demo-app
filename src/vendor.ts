import * as react from "react";
import reactDom from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import Button from "antd-mobile/es/button";
import WingBlank from "antd-mobile/es/wing-blank";
import WhiteSpace from "antd-mobile/es/white-space";
import "antd-mobile/es/button/style/css";
import "antd-mobile/es/wing-blank/style/css";
import "antd-mobile/es/white-space/style/css";

window["react"] = react;
window["reactDom"] = reactDom;
window["antd"] = { Button, WingBlank, WhiteSpace };
window["mobx"] = { observable };
window["mobxReact"] = { observer };

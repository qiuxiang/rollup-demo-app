import * as React from "react";
import { render } from "react-dom";
import { Button, WingBlank, WhiteSpace } from "antd-mobile";

render(
  <WingBlank>
    <WhiteSpace size="lg" />
    <Button>Hello</Button>
  </WingBlank>,
  document.querySelector("#main")
);

import * as React from "react";
import { render } from "react-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Button, WingBlank, WhiteSpace } from "antd-mobile";

const state = observable.object({ name: "World" });

const Main = observer(() => (
  <WingBlank>
    <WhiteSpace size="lg" />
    <Button>Hello {state.name}</Button>
  </WingBlank>
));

render(<Main />, document.querySelector("#main"));

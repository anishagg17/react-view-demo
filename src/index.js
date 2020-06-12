import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./Button";
import * as serviceWorker from "./serviceWorker";
import "@elastic/eui/dist/eui_theme_light.css";
import Popover from "./Popover";

ReactDOM.render(<Popover />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

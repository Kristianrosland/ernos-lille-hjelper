import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Algorithms from "./Algorithms";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Timer from "./timer/Timer";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route exact path="/" component={Timer} />
      <Route path="/algorithms" component={Algorithms} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

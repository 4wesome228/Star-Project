import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import ErrorBoundry from "./components/ErrorBoundry/errorBoundry";

ReactDom.render(
  <ErrorBoundry>
    <App />
  </ErrorBoundry>,
  document.getElementById("root")
);

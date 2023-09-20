import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Containers/App";
import "tachyons";
import "./nav.css";
import "./Containers/App.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

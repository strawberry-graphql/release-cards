import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./components/card";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Card version="0.68" contributor="Jake" description="Description" />
  </React.StrictMode>,
  document.getElementById("root")
);

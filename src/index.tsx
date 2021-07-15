import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./components/card";
import "./index.css";

import data from "./data.json";

ReactDOM.render(
  <React.StrictMode>
    <Card
      version={data.version}
      contributor={data.contributor}
      description={data.description}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

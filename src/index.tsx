import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { Card } from "./components/card";

import data from "./data.json";

const App = () => (
  <React.StrictMode>
    <Card
      version={data.version}
      contributor={data.contributor}
      description={data.description}
    />
  </React.StrictMode>
);

if (typeof document !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("root"));
}

module.exports.renderCard = (data: {
  version: string;
  contributor: string;
  description: string;
}) =>
  ReactDOMServer.renderToStaticMarkup(
    <Card
      version={data.version}
      contributor={data.contributor}
      description={data.description}
    />
  );

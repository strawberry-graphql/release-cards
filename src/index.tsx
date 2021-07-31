import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { Card } from "./components/card";

const App = () => {
  const description = `
This release adds support for disabling auto camel casing. It does so by introducing a new configuration parameter to the schema.

You can use it like so:

\`\`\`python
@strawberry.type
class Query:
    example_field: str = "Example"

schema = strawberry.Schema(
    query=Query,
    config=StrawberryConfig(auto_camel_case=False)
)
\`\`\`
`;

  return (
    <React.StrictMode>
      <Card
        version="1.0"
        contributor="Jake"
        description={description}
      />
    </React.StrictMode>
  );
};

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

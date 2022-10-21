import React from "react";
import { createElement, ReactNode } from "react";
import marksy from "marksy";

import hljs from "highlight.js";
// @ts-ignore
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("python", python);

const compile = marksy({
  createElement,

  elements: {
    h1: ({ id, children }) =>
      (<h1 id={id} className="text-2xl font-bold">{children}</h1>),
    h2: ({ id, children }) =>
      (<h2 id={id} className="text-xl font-bold">{children}</h2>),
    h3: ({ id, children }) =>
      (<h3 id={id} className="text-lg font-bold">{children}</h3>),
    p: ({ children }: { children: ReactNode }) => (
      <p className="mb-4">{children}</p>
    ),
    code: ({
      code,
      language = "plaintext",
    }: {
      code: string;
      language: string;
    }) => {
      return (
        <pre className="text-3xl leading-10 mb-4">
          <code
            dangerouslySetInnerHTML={{
              __html: hljs.highlight(code, { language }).value,
            }}
          />
        </pre>
      );
    },
  },
});

export const ReleaseDescription = ({
  description,
}: {
  description: string;
}) => <div className="leading-tight text-4xl break-words">{compile(description).tree}</div>;

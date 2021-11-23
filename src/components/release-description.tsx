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

"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  language: string;
  code: string;
}

export default function CodeBlock({
  language,
  code,
}: Props) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm my-8">

      <div className="bg-slate-900 text-white px-5 py-3 flex justify-between items-center">

        <span className="uppercase font-medium">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="text-sm bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>

      </div>

      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          margin: 0,
          fontSize: "15px",
          padding: "25px",
          borderRadius: 0,
        }}
      >
        {code}
      </SyntaxHighlighter>

    </div>
  );
}
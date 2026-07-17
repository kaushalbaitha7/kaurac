"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

interface Props {
  content: string;
}

export default function MarkdownViewer({
  content,
}: Props) {
  return (
    <article className="prose prose-slate max-w-none">

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const { className, children } = props;

            const match = /language-(\w+)/.exec(
              className || ""
            );

            if (match) {
              return (
                <CodeBlock
                  language={match[1]}
                  code={String(children).replace(/\n$/, "")}
                />
              );
            }

            return (
              <code className="bg-slate-100 px-2 py-1 rounded">
                {children}
              </code>
            );
          },

          h1: ({ children }) => (
            <h1 className="text-5xl font-bold mt-10 mb-6">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-10 mb-4">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-8 mb-3">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="leading-8 text-slate-700 my-5">
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className="list-disc ml-8 my-5">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="list-decimal ml-8 my-5">
              {children}
            </ol>
          ),

          table: ({ children }) => (
            <div className="overflow-auto my-8">
              <table className="w-full border border-slate-300">
                {children}
              </table>
            </div>
          ),

          th: ({ children }) => (
            <th className="border p-3 bg-slate-100">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border p-3">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>

    </article>
  );
}
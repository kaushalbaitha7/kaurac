"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CodeBlock from "./CodeBlock";
import Callout from "./Callout";

interface Props {
  content: string;
}

export default function MarkdownViewer({ content }: Props) {
  return (
    <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{

          code({ className, children }) {

            const match = /language-(\w+)/.exec(className || "");

            if (match) {
              return (
                <div className="my-8">
                  <CodeBlock
                    language={match[1]}
                    code={String(children).replace(/\n$/, "")}
                  />
                </div>
              );
            }

            return (
              <code className="bg-slate-100 text-blue-700 px-2 py-1 rounded-md font-mono text-sm">
                {children}
              </code>
            );
          },

          blockquote({ children }) {

            const text = String(children);

            if (text.includes("[!TIP]")) {
              return (
                <Callout type="tip">
                  {text.replace("[!TIP]", "").trim()}
                </Callout>
              );
            }

            if (text.includes("[!NOTE]")) {
              return (
                <Callout type="note">
                  {text.replace("[!NOTE]", "").trim()}
                </Callout>
              );
            }

            if (text.includes("[!WARNING]")) {
              return (
                <Callout type="warning">
                  {text.replace("[!WARNING]", "").trim()}
                </Callout>
              );
            }

            if (text.includes("[!IMPORTANT]")) {
              return (
                <Callout type="important">
                  {text.replace("[!IMPORTANT]", "").trim()}
                </Callout>
              );
            }

            return (
              <blockquote className="border-l-4 border-blue-500 bg-blue-50 rounded-r-xl px-6 py-4 my-8 italic text-slate-700">
                {children}
              </blockquote>
            );
          },

          h1: ({ children }) => (
            <h1 className="text-5xl font-extrabold text-slate-900 mt-2 mb-8 border-b border-slate-200 pb-4">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-slate-900 mt-14 mb-5">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-slate-800 mt-10 mb-4">
              {children}
            </h3>
          ),

          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-slate-800 mt-8 mb-3">
              {children}
            </h4>
          ),

          p: ({ children }) => (
            <p className="text-lg leading-9 text-slate-700 mb-6">
              {children}
            </p>
          ),

          strong: ({ children }) => (
            <strong className="font-bold text-slate-900">
              {children}
            </strong>
          ),

          em: ({ children }) => (
            <em className="italic text-slate-700">
              {children}
            </em>
          ),

          ul: ({ children }) => (
            <ul className="list-disc marker:text-blue-600 pl-8 space-y-3 my-6 text-slate-700">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="list-decimal marker:text-blue-600 pl-8 space-y-3 my-6 text-slate-700">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="leading-8">
              {children}
            </li>
          ),

          hr: () => (
            <hr className="my-12 border-slate-200" />
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 underline hover:text-blue-700"
            >
              {children}
            </a>
          ),

          img: ({ src, alt }) => (
            <img
              src={src || ""}
              alt={alt || ""}
              className="rounded-2xl border border-slate-200 shadow-md my-8 mx-auto"
            />
          ),

          table: ({ children }) => (
            <div className="overflow-x-auto my-10 rounded-2xl border border-slate-200">
              <table className="min-w-full border-collapse">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-slate-100">
              {children}
            </thead>
          ),

          th: ({ children }) => (
            <th className="px-5 py-4 text-left font-bold text-slate-800 border-b">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="px-5 py-4 border-b text-slate-700">
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
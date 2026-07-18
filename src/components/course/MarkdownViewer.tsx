"use client";

import Image from "next/image";
import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

import CodeBlock from "./CodeBlock";
import Callout from "./Callout";

interface Props {
  content: string;
}

export default function MarkdownViewer({
  content,
}: Props) {
  // Convert GitHub callouts into custom blocks
  const processedContent = content.replace(
    /> \[!(TIP|NOTE|WARNING|IMPORTANT)\]\n((?:>.*(?:\n|$))*)/g,
    (_, type: string, body: string) => {
      const cleaned = body
        .replace(/^> ?/gm, "")
        .trim();

      return `:::${type.toLowerCase()}
${cleaned}
:::`;
    }
  );

  const lines = processedContent.split("\n");

  const elements: ReactNode[] = [];

  let markdownBuffer: string[] = [];

  let calloutType:
    | "tip"
    | "note"
    | "warning"
    | "important"
    | "" = "";

  let calloutContent: string[] = [];

  const markdownComponents: Components = {
       code({ className, children }) {
      const match = /language-(\w+)/.exec(className || "");

      if (match) {
        return (
          <div className="my-8 overflow-hidden rounded-2xl">
            <CodeBlock
              language={match[1]}
              code={String(children).replace(/\n$/, "")}
            />
          </div>
        );
      }

      return (
        <code className="rounded-md bg-slate-100 px-2 py-1 font-mono text-sm font-semibold text-pink-600">
          {children}
        </code>
      );
    },

    h1({ children }) {
      return (
        <h1 className="mb-8 border-b border-slate-200 pb-4 text-5xl font-extrabold tracking-tight text-slate-900">
          {children}
        </h1>
      );
    },

    h2({ children }) {
      return (
        <h2 className="mt-14 mb-5 text-3xl font-bold text-slate-900">
          {children}
        </h2>
      );
    },

    h3({ children }) {
      return (
        <h3 className="mt-10 mb-4 text-2xl font-semibold text-slate-800">
          {children}
        </h3>
      );
    },

    h4({ children }) {
      return (
        <h4 className="mt-8 mb-3 text-xl font-semibold text-slate-800">
          {children}
        </h4>
      );
    },

    p({ children }) {
      return (
        <p className="mb-6 text-lg leading-9 text-slate-700">
          {children}
        </p>
      );
    },

    strong({ children }) {
      return (
        <strong className="font-bold text-slate-900">
          {children}
        </strong>
      );
    },

    em({ children }) {
      return (
        <em className="italic text-slate-700">
          {children}
        </em>
      );
    },

    blockquote({ children }) {
      return (
        <blockquote className="my-8 rounded-r-xl border-l-4 border-blue-600 bg-blue-50 px-6 py-4 italic text-slate-700">
          {children}
        </blockquote>
      );
    },

    ul({ children }) {
      return (
        <ul className="my-6 list-disc space-y-3 pl-8 marker:text-blue-600">
          {children}
        </ul>
      );
    },

    ol({ children }) {
      return (
        <ol className="my-6 list-decimal space-y-3 pl-8 marker:text-blue-600">
          {children}
        </ol>
      );
    },

    li({ children }) {
      return (
        <li className="leading-8 text-slate-700">
          {children}
        </li>
      );
    },

    hr() {
      return (
        <hr className="my-14 border-slate-200" />
      );
    },

    a({ href, children }) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-700"
        >
          {children}
        </a>
      );
    },

    img({ src, alt }) {
  if (typeof src !== "string") {
    return null;
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
      <Image
        src={src}
        alt={alt ?? ""}
        width={1200}
        height={700}
        className="h-auto w-full"
      />
    </div>
  );
},

    table({ children }) {
      return (
        <div className="my-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full text-sm">
            {children}
          </table>
        </div>
      );
    },

    thead({ children }) {
      return (
        <thead className="bg-slate-100">
          {children}
        </thead>
      );
    },

    tbody({ children }) {
      return (
        <tbody className="divide-y divide-slate-200">
          {children}
        </tbody>
      );
    },

    th({ children }) {
      return (
        <th className="border-b px-5 py-4 text-left font-bold text-slate-800">
          {children}
        </th>
      );
    },

    td({ children }) {
      return (
        <td className="border-b px-5 py-4 text-slate-700">
          {children}
        </td>
      );
    },
  };
    const flushMarkdown = () => {
    if (!markdownBuffer.length) return;

    elements.push(
      <ReactMarkdown
        key={`markdown-${elements.length}`}
        remarkPlugins={[remarkGfm]}
        components={markdownComponents}
      >
        {markdownBuffer.join("\n")}
      </ReactMarkdown>
    );

    markdownBuffer = [];
  };
     for (const line of lines) {
    // Handle custom callouts
    if (line.startsWith(":::")) {
      if (!calloutType) {
        flushMarkdown();

        calloutType = line.replace(
          ":::",
          ""
        ) as "tip" | "note" | "warning" | "important";

        continue;
      }

      elements.push(
        <Callout
          key={`callout-${elements.length}`}
          type={calloutType}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={markdownComponents}
          >
            {calloutContent.join("\n")}
          </ReactMarkdown>
        </Callout>
      );

      calloutType = "";
      calloutContent = [];

      continue;
    }

    if (calloutType) {
      calloutContent.push(line);
    } else {
      markdownBuffer.push(line);
    }
  }

  flushMarkdown();
    return (
    <article
      className="
        prose
        prose-slate
        max-w-none
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        md:p-12

        prose-headings:scroll-mt-28
        prose-headings:font-bold
        prose-p:text-slate-700
        prose-p:leading-8
        prose-strong:text-slate-900
        prose-code:before:content-none
        prose-code:after:content-none
        prose-pre:bg-transparent
        prose-pre:p-0
        prose-img:rounded-2xl
        prose-table:my-8
      "
    >
      {elements}
    </article>
  );
}
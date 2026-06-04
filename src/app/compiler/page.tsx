"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

const templates: Record<string, string> = {
  c: `#include<stdio.h>

int main()
{
    printf("Hello KAURAC");
    return 0;
}`,

  cpp: `#include<iostream>
using namespace std;

int main()
{
    cout << "Hello KAURAC";
    return 0;
}`,

  java: `class Main
{
    public static void main(String[] args)
    {
        System.out.println("Hello KAURAC");
    }
}`,

  python: `print("Hello KAURAC")`,
};

export default function CompilerPage() {
  const [language, setLanguage] = useState("c");
  const [code, setCode] = useState(templates.c);
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const jdoodleLanguages: Record<string, any> = {
    c: {
      language: "c",
      versionIndex: "5",
    },
    cpp: {
      language: "cpp17",
      versionIndex: "0",
    },
    java: {
      language: "java",
      versionIndex: "5",
    },
    python: {
      language: "python3",
      versionIndex: "4",
    },
  };

  const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(code);
    alert("Code copied successfully!");
  } catch {
    alert("Failed to copy code");
  }
};

  const runCode = async () => {
  const needsInput =
    code.includes("scanf") ||
    code.includes("cin") ||
    code.includes("input(") ||
    code.includes("Scanner");

  if (needsInput && !input.trim()) {
    setShowInput(true);
    setOutput(
      "⚠ This program requires input. Please enter values in Program Input."
    );
    return;
  }

  try {
    setLoading(true);
    setOutput("Compiling your program...");

    const selected = jdoodleLanguages[language];

    const response = await fetch("/api/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        script: code,
        language: selected.language,
        versionIndex: selected.versionIndex,
        stdin: input,
      }),
    });

    const data = await response.json();

    setOutput(
      data.output ||
      data.error ||
      data.statusCode ||
      "No Output"
    );
  } catch (error) {
    console.error(error);
    setOutput("Execution Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Header */}

      <div className="border-b border-slate-800 backdrop-blur-lg bg-slate-950/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              KauraC
            </h1>

            <p className="text-slate-400 text-sm md:text-base">
              Learn • Practice • Build • Execute
            </p>
          </div>

          <select
            className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl"
            value={language}
            onChange={(e) => {
              const selected = e.target.value;
              setLanguage(selected);
              setCode(templates[selected]);
              setOutput("");
            }}
          >
            <option value="c">C Programming</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
          </select>

        </div>
      </div>

    

      <div className="max-w-7xl mx-auto p-4 md:p-6">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          

          <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">

            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">

              <span className="text-slate-300">
                Editor
              </span>

              <span className="text-xs text-slate-500">
                {language.toUpperCase()}
              </span>

            </div>

            <Editor
              height="600px"
              theme="vs-dark"
              language={language}
              value={code}
              options={{
                fontSize: 15,
                minimap: {
                  enabled: false,
                },
                readOnly: loading,
              }}
              onChange={(value) =>
                setCode(value || "")
              }
            />

          </div>

          

          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl p-5">

            <div className="flex flex-wrap gap-3 mb-5">

              <button
                onClick={runCode}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl transition"
              >
                {loading
                  ? "⏳ Compiling..."
                  : "▶ Run Code"}
              </button>

              <button
                onClick={() => {
                  setCode(templates[language]);
                  setInput("");
                  setOutput("");
                }}
                className="bg-slate-700 hover:bg-slate-600 px-5 py-3 rounded-xl transition"
              >
                Reset Code
              </button>
              
                <button
                onClick={() => setShowInput(!showInput)}
                className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl transition"
              >
                {showInput ? "Hide Input" : "Program Input"}
              </button>

              <button
                onClick={copyCode}
                className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-xl transition"
              >
                📋 Copy Code
              </button>

              <button
                onClick={() => setOutput("")}
                className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-xl transition"
              >
                Clear Output
              </button>

            </div>

            {showInput && (
              <div className="mb-6">

                <h2 className="text-xl font-semibold mb-3">
                  Program Input
                </h2>

                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Examples:

            5

            5 A

            KauraC`}
                  className="w-full bg-black border border-slate-700 rounded-xl p-4 h-32 text-white resize-none"
                />

                <p className="text-slate-400 text-sm mt-2">
                  Only fill this if your program uses scanf(), cin, input(), Scanner, etc.
                </p>

              </div>
            )}

            <h2 className="text-xl font-semibold mb-4">
              Terminal Output
            </h2>

            <div className="bg-black rounded-xl p-4 min-h-[500px] overflow-auto border border-slate-800">

              <pre className="whitespace-pre-wrap text-green-400 font-mono">
                {output ||
                  "Run your code to see output..."}
              </pre>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}
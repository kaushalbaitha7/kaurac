"use client";

import Link from "next/link";

interface TryCompilerButtonProps {
  language?: string;
  title?: string;
}

export default function TryCompilerButton({
  language = "C",
  title = "Try this example in KauraC",
}: TryCompilerButtonProps) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-lg">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

        <div>

          <h2 className="text-3xl font-bold">
            💻 {title}
          </h2>

          <p className="mt-3 text-blue-100 leading-7">
            Practice the code directly in KauraC.
            Modify it, execute it and understand the output
            by experimenting yourself.
          </p>

        </div>

        <Link
          href="/compiler"
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl hover:scale-105 transition"
        >
          Open KauraC →
        </Link>

      </div>

    </div>
  );
}
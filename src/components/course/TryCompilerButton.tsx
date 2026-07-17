"use client";

import Link from "next/link";

interface TryCompilerButtonProps {
  language?: string;
  title?: string;
}

export default function TryCompilerButton({
  language = "C",
  title = "Practice in KauraC",
}: TryCompilerButtonProps) {
  return (
    <section className="mt-10 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg overflow-hidden">

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-7">

        <div className="flex items-start gap-4">

          <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center text-3xl">
            💻
          </div>

          <div>

            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>

            <p className="mt-2 text-blue-100 leading-7 max-w-xl">
              Run, edit and debug your {language} programs instantly using the
              built-in <strong>KauraC Compiler</strong>. No installation
              required.
            </p>

          </div>

        </div>

        <Link
          href="/compiler"
          className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          Open KauraC →
        </Link>

      </div>

    </section>
  );
}
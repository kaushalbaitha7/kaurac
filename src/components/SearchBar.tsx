"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <section className="bg-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <h2 className="text-3xl font-bold text-slate-900 text-center">
            Search Anything
          </h2>

          <p className="text-slate-500 text-center mt-2">
            Search programming topics, interview questions, examples and notes.
          </p>

          <div className="relative mt-8 max-w-3xl mx-auto">

            <Search
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search C Variables, Java OOP, Python Loops..."
              className="w-full rounded-2xl border border-slate-300 bg-slate-50 py-4 pl-14 pr-5 text-lg outline-none focus:border-blue-500 focus:bg-white transition"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
"use client";

import Link from "next/link";
import { ArrowRight, Code2, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-100">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

              🚀 India's Programming Learning Platform

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">

              Learn.

              <br />

              Practice.

              <br />

              Build.

            </h1>

            <p className="mt-8 text-lg text-slate-600 leading-8 max-w-xl">

              Master C, C++, Java, Python, Data Structures,
              Machine Learning and Artificial Intelligence
              with structured lessons, live compiler,
              quizzes and real-world projects.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/courses"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition shadow-lg"
              >
                Start Learning

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/compiler"
                className="border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 px-8 py-4 rounded-xl transition flex items-center gap-2"
              >
                <Code2 size={20} />

                Open Compiler

              </Link>

            </div>

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>

                <h2 className="text-4xl font-bold text-blue-600">
                  100+
                </h2>

                <p className="text-slate-500 mt-2">
                  Lessons
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">
                  500+
                </h2>

                <p className="text-slate-500 mt-2">
                  Programs
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-600">
                  24×7
                </h2>

                <p className="text-slate-500 mt-2">
                  Compiler
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">

              <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold text-slate-900">

                  Today's Learning

                </h2>

                <BookOpen
                  className="text-blue-600"
                  size={28}
                />

              </div>

              <div className="space-y-5">

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition">

                  <h3 className="font-bold text-lg">

                    C Programming

                  </h3>

                  <p className="text-slate-500 mt-1">

                    Beginner to Advanced

                  </p>

                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition">

                  <h3 className="font-bold text-lg">

                    Java Programming

                  </h3>

                  <p className="text-slate-500 mt-1">

                    OOP Concepts

                  </p>

                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition">

                  <h3 className="font-bold text-lg">

                    Python

                  </h3>

                  <p className="text-slate-500 mt-1">

                    AI & Automation

                  </p>

                </div>

                <div className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 transition">

                  <h3 className="font-bold text-lg">

                    Data Structures

                  </h3>

                  <p className="text-slate-500 mt-1">

                    Interview Preparation

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
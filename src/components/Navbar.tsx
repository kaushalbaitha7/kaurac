"use client";

import Link from "next/link";
import { Code2, BookOpen, BrainCircuit, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="bg-blue-600 p-3 rounded-xl text-white">
              <Code2 size={24} />
            </div>

            <div>

              <h1 className="text-2xl font-bold text-slate-900">
                KauraX
              </h1>

              <p className="text-xs text-slate-500">
                Programming Learning Platform
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <div className="hidden lg:flex items-center gap-8">

            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              href="/courses"
              className="text-slate-700 hover:text-blue-600 font-medium transition"
            >
              Courses
            </Link>

            <Link
              href="/compiler"
              className="text-slate-700 hover:text-blue-600 font-medium transition"
            >
              Compiler
            </Link>

            <Link
              href="/practice"
              className="text-slate-700 hover:text-blue-600 font-medium transition"
            >
              Practice
            </Link>

            <Link
              href="/quiz"
              className="text-slate-700 hover:text-blue-600 font-medium transition"
            >
              Quiz
            </Link>

            <Link
              href="/certifications"
              className="text-slate-700 hover:text-blue-600 font-medium transition"
            >
              Certificates
            </Link>

          </div>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-3">

            <button className="flex items-center gap-2 border border-slate-300 px-5 py-2 rounded-xl hover:bg-slate-100 transition">

              <BookOpen size={18} />

              Resources

            </button>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition flex items-center gap-2">

              <BrainCircuit size={18} />

              Login

            </button>

          </div>

          {/* Mobile */}

          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu size={28} />
          </button>

        </div>

      </div>

      {open && (

        <div className="lg:hidden border-t border-slate-200 bg-white">

          <div className="flex flex-col p-6 gap-5">

            <Link href="/">Home</Link>

            <Link href="/courses">Courses</Link>

            <Link href="/compiler">Compiler</Link>

            <Link href="/practice">Practice</Link>

            <Link href="/quiz">Quiz</Link>

            <Link href="/certifications">
              Certificates
            </Link>

            <button className="bg-blue-600 text-white py-3 rounded-xl">
              Login
            </button>

          </div>

        </div>

      )}

    </nav>
  );
}
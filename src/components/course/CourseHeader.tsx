"use client";

import Link from "next/link";

interface CourseHeaderProps {
  title: string;
  description: string;
  lessons: number;
  duration: string;
  level: string;
  rating: number;
  students: string;
  compilerLink?: string;
}

export default function CourseHeader({
  title,
  description,
  lessons,
  duration,
  level,
  rating,
  students,
  compilerLink = "/compiler",
}: CourseHeaderProps) {
  return (
    <section className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 p-8 md:p-12 text-white">

        <div className="flex flex-col lg:flex-row justify-between gap-8">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium mb-6">
              📘 Programming Course
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {title}
            </h1>

            <p className="mt-5 text-lg md:text-xl text-blue-100 leading-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <Link
                href="/language/c/introduction"
                className="bg-white text-blue-700 px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                ▶ Start Learning
              </Link>

              <Link
                href={compilerLink}
                className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-blue-700 transition"
              >
                💻 Open KauraC
              </Link>

            </div>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 gap-4 min-w-[300px]">

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5">

              <p className="text-blue-100 text-sm">
                Lessons
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {lessons}
              </h2>

            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5">

              <p className="text-blue-100 text-sm">
                Duration
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {duration}
              </h2>

            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5">

              <p className="text-blue-100 text-sm">
                Difficulty
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {level}
              </h2>

            </div>

            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-5">

              <p className="text-blue-100 text-sm">
                Rating
              </p>

              <h2 className="text-2xl font-bold mt-2">
                ⭐ {rating}
              </h2>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Info */}

      <div className="grid md:grid-cols-3 gap-6 p-8">

        <div>

          <p className="text-slate-500 text-sm uppercase tracking-wide">
            Students Enrolled
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-2">
            {students}
          </h3>

        </div>

        <div>

          <p className="text-slate-500 text-sm uppercase tracking-wide">
            Certificate
          </p>

          <h3 className="text-2xl font-bold text-green-600 mt-2">
            Available
          </h3>

        </div>

        <div>

          <p className="text-slate-500 text-sm uppercase tracking-wide">
            Last Updated
          </p>

          <h3 className="text-2xl font-bold text-slate-800 mt-2">
            July 2026
          </h3>

        </div>

      </div>

    </section>
  );
}
"use client";

import Link from "next/link";

interface PreviousLessonProps {
  title: string;
  href: string;
}

export default function PreviousLesson({
  title,
  href,
}: PreviousLessonProps) {
  return (
    <Link
      href={href}
      className="group bg-slate-100 hover:bg-slate-200 rounded-2xl p-6 transition flex justify-between items-center"
    >
      <span className="text-4xl group-hover:-translate-x-2 transition">
        ←
      </span>

      <div className="text-right">

        <p className="text-slate-500 text-sm">
          Previous Lesson
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-2">
          {title}
        </h2>

      </div>

    </Link>
  );
}
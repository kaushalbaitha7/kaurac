"use client";

import Link from "next/link";

interface NextLessonProps {
  title: string;
  href: string;
}

export default function NextLesson({
  title,
  href,
}: NextLessonProps) {
  return (
    <Link
      href={href}
      className="group bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 transition flex justify-between items-center"
    >
      <div>

        <p className="text-blue-100 text-sm">
          Next Lesson
        </p>

        <h2 className="text-2xl font-bold mt-2">
          {title}
        </h2>

      </div>

      <span className="text-4xl group-hover:translate-x-2 transition">
        →
      </span>

    </Link>
  );
}
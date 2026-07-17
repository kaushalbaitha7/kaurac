"use client";

import Link from "next/link";

interface Lesson {
  number: number;
  title: string;
  href: string;
  difficulty?: string;
  completed?: boolean;
}

interface LessonSidebarProps {
  course: string;
  lessons: Lesson[];
  currentLesson: string;
}

export default function LessonSidebar({
  course,
  lessons,
  currentLesson,
}: LessonSidebarProps) {
  return (
    <aside className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white">

        <h2 className="text-2xl font-bold">
          {course}
        </h2>

        <p className="mt-2 text-blue-100">
          Course Curriculum
        </p>

      </div>

      {/* Scrollable Lesson List */}

      <div className="min-h-0 flex-1 overflow-y-auto">

        {lessons.map((lesson) => (

          <Link
            key={lesson.number}
            href={lesson.href}
            className={`block border-b px-6 py-5 transition-all duration-200

            ${
              currentLesson === lesson.href
                ? "border-l-4 border-blue-600 bg-blue-50"
                : "hover:bg-slate-50"
            }`}
          >

            <div className="flex items-start justify-between">

              <div>

                <p className="text-xs text-slate-400">
                  Lesson {lesson.number}
                </p>

                <h3 className="mt-1 font-semibold text-slate-800">
                  {lesson.title}
                </h3>

                {lesson.difficulty && (
                  <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
                    {lesson.difficulty}
                  </span>
                )}

              </div>

              <div className="ml-4">

                {lesson.completed ? (
                  <span className="text-lg text-green-600">
                    ✓
                  </span>
                ) : (
                  <span className="text-lg text-slate-300">
                    ○
                  </span>
                )}

              </div>

            </div>

          </Link>

        ))}

      </div>

    </aside>
  );
}
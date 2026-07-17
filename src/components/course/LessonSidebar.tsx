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
    <aside className="w-full lg:w-80 bg-white rounded-3xl border border-slate-200 shadow-sm lg:sticky lg:top-24 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-6">

        <h2 className="text-2xl font-bold">
          {course}
        </h2>

        <p className="text-blue-100 mt-2">
          Course Curriculum
        </p>

      </div>

      {/* Lessons */}

      <div className="max-h-full overflow-y-auto">

        {lessons.map((lesson) => (

          <Link
            key={lesson.number}
            href={lesson.href}
            className={`block px-6 py-5 border-b transition-all duration-200

            ${
              currentLesson === lesson.href
                ? "bg-blue-50 border-l-4 border-blue-600"
                : "hover:bg-slate-50"
            }`}
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-xs text-slate-400">
                  Lesson {lesson.number}
                </p>

                <h3 className="font-semibold text-slate-800 mt-1">
                  {lesson.title}
                </h3>

                {lesson.difficulty && (
                  <span className="inline-block mt-2 px-2 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                    {lesson.difficulty}
                  </span>
                )}

              </div>

              <div className="ml-4">

                {lesson.completed ? (
                  <span className="text-green-600 text-lg">
                    ✓
                  </span>
                ) : (
                  <span className="text-slate-300 text-lg">
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
"use client";

import Link from "next/link";

interface LessonCardProps {
  lessonNo: number;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  href: string;
  completed?: boolean;
  locked?: boolean;
}

export default function LessonCard({
  lessonNo,
  title,
  description,
  duration,
  difficulty,
  href,
  completed = false,
  locked = false,
}: LessonCardProps) {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <div
      className="
      group
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-sm
      hover:shadow-xl
      hover:border-blue-400
      transition-all
      duration-300
      overflow-hidden"
    >
      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b border-slate-100">

        <div className="flex items-center gap-5">

          <div
            className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-blue-600
            to-cyan-500
            text-white
            font-bold
            text-xl
            flex
            items-center
            justify-center"
          >
            {lessonNo}
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition">
              {title}
            </h2>

            <p className="text-slate-500 mt-2">
              {description}
            </p>

          </div>

        </div>

        {completed && (
          <div className="text-green-600 font-semibold text-sm">
            ✅ Completed
          </div>
        )}

      </div>

      {/* Body */}

      <div className="p-6">

        <div className="flex flex-wrap gap-3 mb-6">

          <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
            📖 {duration}
          </span>

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${difficultyColor[difficulty]}`}
          >
            {difficulty}
          </span>

        </div>

        {!locked ? (
          <Link
            href={href}
            className="
            inline-flex
            items-center
            gap-2
            px-6
            py-3
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            transition"
          >
            ▶ Start Lesson
          </Link>
        ) : (
          <button
            disabled
            className="
            px-6
            py-3
            rounded-xl
            bg-slate-200
            text-slate-500
            cursor-not-allowed"
          >
            🔒 Locked
          </button>
        )}

      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  BookOpen,
  Code2,
  Briefcase,
  CircleHelp,
  FileCode2,
  FolderKanban,
  GraduationCap,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Circle,
} from "lucide-react";

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

type Section = {
  title: string;
  icon: React.ReactNode;
  lessons: Lesson[];
};

export default function LessonSidebar({
  course,
  lessons,
  currentLesson,
}: LessonSidebarProps) {

  const grouped = useMemo<Section[]>(() => [
    {
      title: "Theory",
      icon: <BookOpen size={18} />,
      lessons: lessons.filter((l) => l.number >= 1 && l.number <= 24),
    },
    {
      title: "Practice",
      icon: <Code2 size={18} />,
      lessons: lessons.filter((l) => l.number >= 25 && l.number <= 34),
    },
    {
      title: "Interview Prep",
      icon: <Briefcase size={18} />,
      lessons: lessons.filter((l) => l.number >= 35 && l.number <= 38),
    },
    {
      title: "MCQs",
      icon: <CircleHelp size={18} />,
      lessons: lessons.filter((l) => l.number >= 39 && l.number <= 43),
    },
    {
      title: "Output Questions",
      icon: <FileCode2 size={18} />,
      lessons: lessons.filter((l) => l.number >= 44 && l.number <= 48),
    },
    {
      title: "Mini Projects",
      icon: <FolderKanban size={18} />,
      lessons: lessons.filter((l) => l.number >= 49 && l.number <= 58),
    },
    {
      title: "Final Assessment",
      icon: <GraduationCap size={18} />,
      lessons: lessons.filter((l) => l.number >= 59),
    },
  ], [lessons]);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Theory: true,
    Practice: true,
    "Interview Prep": true,
    MCQs: false,
    "Output Questions": false,
    "Mini Projects": false,
    "Final Assessment": false,
  });

  const toggle = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <aside className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            {/* Header */}

      <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-6 text-white">

        <h2 className="text-2xl font-bold">
          {course}
        </h2>

        <p className="mt-2 text-sm text-blue-100">
          Professional C Programming Course
        </p>

        <div className="mt-6">

          <div className="mb-2 flex items-center justify-between text-sm">

            <span>Course Progress</span>

            <span>{progress}%</span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-blue-300/30">

            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

          </div>

          <div className="mt-3 text-xs text-blue-100">

            {completedCount} / {lessons.length} Lessons Completed

          </div>

        </div>

      </div>

      {/* Sections */}

      <div className="flex-1 overflow-y-auto">

        {grouped.map((section) => (

          <div
            key={section.title}
            className="border-b border-slate-200"
          >

            {/* Section Header */}

            <button
              onClick={() => toggle(section.title)}
              className="flex w-full items-center justify-between bg-slate-50 px-5 py-4 text-left transition hover:bg-slate-100"
            >

              <div className="flex items-center gap-3">

                <div className="text-blue-600">

                  {section.icon}

                </div>

                <div>

                  <p className="font-semibold text-slate-800">

                    {section.title}

                  </p>

                  <p className="text-xs text-slate-500">

                    {section.lessons.length} Lessons

                  </p>

                </div>

              </div>

              {openSections[section.title] ? (

                <ChevronDown size={18} />

              ) : (

                <ChevronRight size={18} />

              )}

            </button>

            {/* Lessons */}

            {openSections[section.title] && (

              <div>

                {section.lessons.map((lesson) => {

                  const active =
                    lesson.href === currentLesson;

                  return (

                    <Link
                      key={lesson.number}
                      href={lesson.href}
                      className={`flex items-start justify-between border-l-4 px-5 py-4 transition-all

                      ${
                        active
                          ? "border-blue-600 bg-blue-50"
                          : "border-transparent hover:bg-slate-50"
                      }`}
                    >

                      <div className="min-w-0">

                        <p className="text-xs text-slate-400">

                          Lesson {lesson.number}

                        </p>

                        <h4
                          className={`mt-1 text-sm font-semibold

                          ${
                            active
                              ? "text-blue-700"
                              : "text-slate-800"
                          }`}
                        >

                          {lesson.title}

                        </h4>

                        {lesson.difficulty && (

                          <span className="mt-2 inline-flex rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-600">

                            {lesson.difficulty}

                          </span>

                        )}

                      </div>

                      <div className="ml-4 mt-1">

                        {lesson.completed ? (

                          <CheckCircle2
                            size={18}
                            className="text-green-600"
                          />

                        ) : (

                          <Circle
                            size={18}
                            className="text-slate-300"
                          />

                        )}

                      </div>

                    </Link>

                  );

                })}

              </div>

            )}

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 bg-slate-50 p-5">

        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">

          <p className="text-sm font-semibold">

            🎓 Complete all lessons

          </p>

          <p className="mt-1 text-xs text-blue-100">

            Finish the theory, practice, MCQs, mini projects and final
            assessment to earn your KauraX Course Certificate.

          </p>

        </div>

      </div>

    </aside>
  );
}
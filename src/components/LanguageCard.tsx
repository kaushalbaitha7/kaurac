"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  lessons: string;
  level: string;
  duration: string;
  icon: string;
  color: string;
  href: string;
}

export default function LanguageCard({
  title,
  description,
  lessons,
  level,
  duration,
  icon,
  color,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mt-6">
        {title}
      </h2>

      <p className="text-slate-600 mt-3 leading-7 flex-grow">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-3 mt-6">

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">
            Lessons
          </p>

          <h4 className="font-bold text-slate-900">
            {lessons}
          </h4>
        </div>

        <div className="bg-slate-50 rounded-xl p-3">
          <p className="text-xs text-slate-500">
            Level
          </p>

          <h4 className="font-bold text-slate-900">
            {level}
          </h4>
        </div>

      </div>

      <div className="mt-4 bg-slate-50 rounded-xl p-3">

        <p className="text-xs text-slate-500">
          Duration
        </p>

        <h4 className="font-bold text-slate-900">
          {duration}
        </h4>

      </div>

      <button className="mt-7 bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 group-hover:bg-blue-700 transition">

        Start Learning

        <ArrowRight size={18} />

      </button>

    </Link>
  );
}
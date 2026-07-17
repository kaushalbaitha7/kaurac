"use client";

import Link from "next/link";

interface TopicNavigationProps {
  previous?: {
    title: string;
    href: string;
  };

  next?: {
    title: string;
    href: string;
  };
}

export default function TopicNavigation({
  previous,
  next,
}: TopicNavigationProps) {
  return (
    <section className="mt-12 grid gap-4 md:grid-cols-2">

      {/* Previous */}

      <div>
        {previous && (
          <Link
            href={previous.href}
            className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md"
          >
            <p className="text-sm font-medium text-slate-500">
              ← Previous Lesson
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-800 group-hover:text-blue-600">
              {previous.title}
            </h3>
          </Link>
        )}
      </div>

      {/* Next */}

      <div>
        {next && (
          <Link
            href={next.href}
            className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-blue-300 hover:shadow-md text-right"
          >
            <p className="text-sm font-medium text-slate-500">
              Next Lesson →
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-800 group-hover:text-blue-600">
              {next.title}
            </h3>
          </Link>
        )}
      </div>

    </section>
  );
}
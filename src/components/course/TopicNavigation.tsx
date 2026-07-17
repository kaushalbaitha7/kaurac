"use client";

import PreviousLesson from "./PreviousLesson";
import NextLesson from "./NextLesson";

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
    <div className="grid md:grid-cols-2 gap-6 mt-12">

      <div>
        {previous && (
          <PreviousLesson
            title={previous.title}
            href={previous.href}
          />
        )}
      </div>

      <div>
        {next && (
          <NextLesson
            title={next.title}
            href={next.href}
          />
        )}
      </div>

    </div>
  );
}
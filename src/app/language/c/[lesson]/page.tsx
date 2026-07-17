import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";

import { cLessons } from "@/data/cLessons";

import LessonSidebar from "@/components/course/LessonSidebar";
import MarkdownViewer from "@/components/course/MarkdownViewer";
import TryCompilerButton from "@/components/course/TryCompilerButton";
import TopicNavigation from "@/components/course/TopicNavigation";

interface Props {
  params: Promise<{
    lesson: string;
  }>;
}

export default async function LessonPage({ params }: Props) {
  const { lesson } = await params;

  const currentLesson = cLessons.find(
    (item) => item.slug === lesson
  );

  if (!currentLesson) {
    notFound();
  }

  const lessonIndex = cLessons.findIndex(
    (item) => item.slug === lesson
  );

  const previousLesson =
    lessonIndex > 0 ? cLessons[lessonIndex - 1] : null;

  const nextLesson =
    lessonIndex < cLessons.length - 1
      ? cLessons[lessonIndex + 1]
      : null;

  const markdownPath = path.join(
    process.cwd(),
    "src",
    "content",
    "c",
    currentLesson.markdown
  );

  const markdown = await fs.readFile(
    markdownPath,
    "utf-8"
  );

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-[320px_1fr] gap-8">

          <LessonSidebar
            course="C Programming"
            lessons={cLessons.map((lesson) => ({
                number: lesson.id,
                title: lesson.title,
                href: `/language/c/${lesson.slug}`,
                difficulty: lesson.difficulty,
            }))}
            currentLesson={`/language/c/${lesson}`}
          />

          <div>

            <MarkdownViewer
              content={markdown}
            />

            <div className="mt-10">

              <TryCompilerButton
                language="C"
              />

            </div>

            <TopicNavigation
              previous={
                previousLesson
                  ? {
                      title: previousLesson.title,
                      href: `/language/c/${previousLesson.slug}`,
                    }
                  : undefined
              }
              next={
                nextLesson
                  ? {
                      title: nextLesson.title,
                      href: `/language/c/${nextLesson.slug}`,
                    }
                  : undefined
              }
            />

          </div>

        </div>

      </div>

    </main>
  );
}
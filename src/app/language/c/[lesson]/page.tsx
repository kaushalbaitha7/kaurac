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
    lessonIndex > 0
      ? cLessons[lessonIndex - 1]
      : null;

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

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

  <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">

    {/* Sidebar */}

    <aside className="hidden lg:block">

      <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden">

        <LessonSidebar
          course="C Programming"
          lessons={cLessons.map((lesson) => ({
            number: lesson.id,
            title: lesson.title,
            href: `/language/c/${lesson.slug}`,
            difficulty: lesson.difficulty,
          }))}
          currentLesson={`/language/c/${currentLesson.slug}`}
        />

      </div>

    </aside>

          {/* ================= Content ================= */}

          <div className="min-w-0">

            <div className="mx-auto w-full max-w-4xl">

              {/* Lesson Hero */}

              <section className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 mb-8">

                <div className="flex flex-wrap gap-3 mb-6">

                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                    Lesson {currentLesson.id}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                    {currentLesson.difficulty}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm">
                    {currentLesson.duration}
                  </span>

                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">

                  {currentLesson.title}

                </h1>

                <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600">

                  Learn <strong>{currentLesson.title}</strong> through
                  simple explanations, diagrams, examples, interview
                  questions and hands-on coding practice using KauraC.

                </p>

              </section>

              {/* Markdown */}

              <MarkdownViewer
                content={markdown}
              />

              {/* Compiler */}

              <div className="mt-8">

                <TryCompilerButton
                  language="C"
                />

              </div>

              {/* Navigation */}

              <div className="mt-8">

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

        </div>

      </div>

    </main>
  );
}
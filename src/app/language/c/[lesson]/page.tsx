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

  let markdown = "";

  try {
    markdown = await fs.readFile(markdownPath, "utf-8");
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">

          {/* Sidebar */}

          <aside className="hidden lg:block">

            <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-hidden">

              <LessonSidebar
                course="KauraX • C Programming"
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

          {/* Main Content */}

          <div className="min-w-0">

            <div className="mx-auto w-full max-w-4xl">

              {/* Hero */}

              <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm mb-8">

                <div className="flex flex-wrap gap-3 mb-6">

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {currentLesson.category}
                  </span>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                    {currentLesson.difficulty}
                  </span>

                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                    ⭐ {currentLesson.xp} XP
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    📖 {currentLesson.readingTime}
                  </span>

                </div>

                <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">

                  {currentLesson.title}

                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">

                  Master{" "}
                  <strong>{currentLesson.title}</strong> with
                  easy-to-understand explanations, examples,
                  interview-focused concepts, coding practice,
                  and real-world applications through
                  <strong> KauraX</strong>.

                </p>

              </section>

              {/* Markdown */}

              <MarkdownViewer
                content={markdown}
              />

              {/* Compiler */}

              <div className="mt-10">

                <TryCompilerButton
                  language="C"
                />

              </div>

              {/* Navigation */}

              <div className="mt-10">

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
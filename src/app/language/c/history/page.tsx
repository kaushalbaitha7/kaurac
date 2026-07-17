import LessonSidebar from "@/components/course/LessonSidebar";
import MarkdownViewer from "@/components/course/MarkdownViewer";
import TryCompilerButton from "@/components/course/TryCompilerButton";
import TopicNavigation from "@/components/course/TopicNavigation";

const lessons = [
  {
    number: 1,
    title: "Introduction",
    href: "/language/c/introduction",
    completed: true,
  },
  {
    number: 2,
    title: "History",
    href: "/language/c/history",
    completed: true,
  },
  {
    number: 3,
    title: "Installation",
    href: "/language/c/installation",
  },
  {
    number: 4,
    title: "First Program",
    href: "/language/c/first-program",
  },
];

const markdown = `
# History of C Programming

C was developed by Dennis Ritchie at Bell Laboratories in 1972.

It was created mainly to develop the UNIX operating system.

## Evolution

- BCPL
- B
- C
- C++
- Java

## Importance

- Fast
- Portable
- Powerful
`;

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">

          <LessonSidebar
            course="C Programming"
            lessons={lessons}
            currentLesson="/language/c/history"
          />

          <div>

            <MarkdownViewer content={markdown} />

            <div className="mt-10">
              <TryCompilerButton language="C" />
            </div>

            <TopicNavigation
              previous={{
                title: "Introduction",
                href: "/language/c/introduction",
              }}
              next={{
                title: "Installation",
                href: "/language/c/installation",
              }}
            />

          </div>

        </div>

      </div>
    </main>
  );
}
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
    completed: true,
  },
  {
    number: 4,
    title: "Structure of a C Program",
    href: "/language/c/structure",
    completed: true,
  },
  {
    number: 5,
    title: "First C Program",
    href: "/language/c/first-program",
  },
];

const markdown = `
# Structure of a C Program

Every C program follows a standard structure.

## Example

\`\`\`c
#include<stdio.h>

int main()
{
    printf("Welcome to Kaura");

    return 0;
}
\`\`\`

Execution starts from the main() function.
`;

export default function StructurePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">

          <LessonSidebar
            course="C Programming"
            lessons={lessons}
            currentLesson="/language/c/structure"
          />

          <div>

            <MarkdownViewer content={markdown} />

            <div className="mt-10">

              <TryCompilerButton language="C" />

            </div>

            <TopicNavigation
              previous={{
                title: "Installation & Setup",
                href: "/language/c/installation",
              }}
              next={{
                title: "First C Program",
                href: "/language/c/first-program",
              }}
            />

          </div>

        </div>

      </div>

    </main>
  );
}
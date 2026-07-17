import CourseHeader from "@/components/course/CourseHeader";
import CourseProgress from "@/components/course/CourseProgress";
import LessonCard from "@/components/course/LessonCard";
import TryCompilerButton from "@/components/course/TryCompilerButton";

export default function CProgrammingPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* ==========================
            Course Header
        ========================== */}

        <CourseHeader
          title="C Programming"
          description="Master C Programming from beginner to advanced through structured lessons, interactive coding examples, quizzes, projects and the KauraC online compiler."
          lessons={45}
          duration="25 Hours"
          level="Beginner"
          rating={4.9}
          students="12,500+"
        />

        {/* ==========================
            Progress
        ========================== */}

        <div className="mt-8">

          <CourseProgress
            completedLessons={0}
            totalLessons={45}
          />

        </div>

        {/* ==========================
            Course Overview
        ========================== */}

        <section className="mt-10 bg-white rounded-3xl border border-slate-200 shadow-sm p-8">

          <h2 className="text-3xl font-bold text-slate-800">
            About this Course
          </h2>

          <p className="mt-5 text-slate-600 leading-8">

            C Programming is one of the world's most influential programming
            languages and serves as the foundation for modern software
            development. In this course, you will learn programming from the
            very beginning through structured lessons, practical examples,
            quizzes, interview questions and hands-on coding practice using
            <span className="font-semibold text-blue-600"> KauraC</span>.

          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

            <div className="bg-slate-50 rounded-2xl p-5 border">

              <h3 className="font-bold text-lg">
                📘 Lessons
              </h3>

              <p className="text-slate-600 mt-2">
                45 Complete Lessons
              </p>

            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border">

              <h3 className="font-bold text-lg">
                💻 Coding
              </h3>

              <p className="text-slate-600 mt-2">
                120+ Practice Programs
              </p>

            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border">

              <h3 className="font-bold text-lg">
                📝 Assessment
              </h3>

              <p className="text-slate-600 mt-2">
                Topic-wise Quiz
              </p>

            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border">

              <h3 className="font-bold text-lg">
                🏆 Certificate
              </h3>

              <p className="text-slate-600 mt-2">
                After Course Completion
              </p>

            </div>

          </div>

        </section>

        {/* ==========================
            Curriculum
        ========================== */}

        <section className="mt-12">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-4xl font-bold text-slate-800">
                Course Curriculum
              </h2>

              <p className="text-slate-500 mt-2">
                Learn C Programming step-by-step from fundamentals to advanced concepts.
              </p>

            </div>

          </div>

          <div className="space-y-6">

            <LessonCard
              lessonNo={1}
              title="Introduction to C"
              description="Learn what C Programming is, its applications, advantages and why it is still one of the most powerful programming languages."
              duration="12 min"
              difficulty="Beginner"
              href="/language/c/introduction"
            />

            <LessonCard
              lessonNo={2}
              title="History of C"
              description="Understand how Dennis Ritchie developed C and how it became the foundation of modern programming."
              duration="8 min"
              difficulty="Beginner"
              href="/language/c/history"
            />

            <LessonCard
              lessonNo={3}
              title="Installation & Setup"
              description="Install VS Code, GCC Compiler and prepare your development environment."
              duration="10 min"
              difficulty="Beginner"
              href="/language/c/installation"
            />

            <LessonCard
              lessonNo={4}
              title="Your First C Program"
              description="Write, compile and execute your very first C program."
              duration="15 min"
              difficulty="Beginner"
              href="/language/c/first-program"
            />

            <LessonCard
              lessonNo={5}
              title="Variables & Data Types"
              description="Understand variables, constants and built-in data types in C."
              duration="18 min"
              difficulty="Beginner"
              href="/language/c/variables"
            />

          </div>

        </section>

        {/* ==========================
            Compiler
        ========================== */}

        <div className="mt-14">

          <TryCompilerButton
            language="C"
            title="Practice C Programming in KauraC"
          />

        </div>

      </div>

    </main>
  );
}
"use client";

interface CourseProgressProps {
  completedLessons: number;
  totalLessons: number;
}

export default function CourseProgress({
  completedLessons,
  totalLessons,
}: CourseProgressProps) {

  const percentage = Math.round(
    (completedLessons / totalLessons) * 100
  );

  return (
    <section className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>

          <h2 className="text-3xl font-bold text-slate-800">
            Your Progress
          </h2>

          <p className="text-slate-500 mt-2">
            Continue where you left off and complete the course.
          </p>

        </div>

        <div className="text-right">

          <h3 className="text-5xl font-bold text-blue-600">
            {percentage}%
          </h3>

          <p className="text-slate-500">
            Completed
          </p>

        </div>

      </div>

      {/* Progress Bar */}

      <div className="mt-8">

        <div className="w-full bg-slate-200 rounded-full h-5 overflow-hidden">

          <div
            className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 h-5 rounded-full transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      {/* Lesson Counter */}

      <div className="mt-6 flex flex-wrap gap-6">

        <div className="bg-slate-50 rounded-2xl px-6 py-4 border">

          <p className="text-slate-500 text-sm">
            Lessons Completed
          </p>

          <h3 className="text-3xl font-bold text-slate-800 mt-1">
            {completedLessons}
          </h3>

        </div>

        <div className="bg-slate-50 rounded-2xl px-6 py-4 border">

          <p className="text-slate-500 text-sm">
            Total Lessons
          </p>

          <h3 className="text-3xl font-bold text-slate-800 mt-1">
            {totalLessons}
          </h3>

        </div>

        <div className="bg-slate-50 rounded-2xl px-6 py-4 border">

          <p className="text-slate-500 text-sm">
            Remaining
          </p>

          <h3 className="text-3xl font-bold text-red-500 mt-1">
            {totalLessons - completedLessons}
          </h3>

        </div>

      </div>

      {/* Motivation Card */}

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 p-6">

        {percentage === 0 && (
          <>
            <h3 className="text-xl font-bold text-slate-800">
              🚀 Ready to Begin?
            </h3>

            <p className="text-slate-600 mt-2">
              Start your first lesson and begin mastering this course.
            </p>
          </>
        )}

        {percentage > 0 && percentage < 100 && (
          <>
            <h3 className="text-xl font-bold text-slate-800">
              💪 Keep Going!
            </h3>

            <p className="text-slate-600 mt-2">
              You're making excellent progress. Complete the remaining lessons to unlock your certificate.
            </p>
          </>
        )}

        {percentage === 100 && (
          <>
            <h3 className="text-xl font-bold text-green-700">
              🎉 Congratulations!
            </h3>

            <p className="text-slate-600 mt-2">
              You have completed the course successfully. You are now ready to claim your certificate.
            </p>
          </>
        )}

      </div>

    </section>
  );
}
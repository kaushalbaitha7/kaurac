export default function CPage() {
  const topics = [
    "Introduction",
    "Variables",
    "Data Types",
    "Operators",
    "Loops",
    "Arrays",
    "Functions",
    "Pointers",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold">
        C Programming
      </h1>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {topics.map((topic) => (
          <div
            key={topic}
            className="bg-slate-900 p-5 rounded-xl"
          >
            {topic}
          </div>
        ))}
      </div>
    </main>
  );
}
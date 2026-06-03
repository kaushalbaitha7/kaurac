import Link from "next/link";

const languages = [
  { name: "C", icon: "💻", link: "/language/c" },
  { name: "C++", icon: "⚙️", link: "/language/cpp" },
  { name: "Java", icon: "☕", link: "/language/java" },
  { name: "Python", icon: "🐍", link: "/language/python" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-7xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          KAURAC
        </h1>

        <p className="mt-5 text-xl text-slate-400">
          Learn • Practice • Build • Execute
        </p>

        <div className="flex gap-4 justify-center mt-8">
          <Link
            href="/compiler"
            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            Open Compiler
          </Link>

          <button className="px-8 py-4 rounded-xl border border-slate-600 hover:bg-slate-800 transition">
            Explore Languages
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {languages.map((lang) => (
            <Link
              key={lang.name}
              href={lang.link}
              className="bg-[#111827] p-8 rounded-3xl border border-slate-800 hover:border-blue-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl">
                {lang.icon}
              </div>

              <h2 className="text-2xl font-semibold mt-5">
                {lang.name}
              </h2>

              <p className="text-slate-400 mt-2">
                Learn from basics to advanced.
              </p>
            </Link>
          ))}

        </div>
      </section>
    </main>
  );
}
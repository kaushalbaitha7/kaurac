import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "💻",
    title: "Live Compiler",
    description:
      "Write, compile and execute programs directly inside KAURAC.",
  },
  {
    icon: "📘",
    title: "Structured Notes",
    description:
      "Easy-to-understand notes from beginner to advanced.",
  },
  {
    icon: "📝",
    title: "Practice Quiz",
    description:
      "MCQs after every topic to strengthen concepts.",
  },
  {
    icon: "🏆",
    title: "Certificates",
    description:
      "Earn certificates after completing courses and quizzes.",
  },
  {
    icon: "📂",
    title: "Projects",
    description:
      "Hands-on mini and major projects with complete guidance.",
  },
  {
    icon: "🤖",
    title: "AI Mentor",
    description:
      "Coming Soon - AI powered programming assistant.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            Why Choose KauraX?
          </h2>

          <p className="text-slate-600 mt-4 text-lg">
            Everything you need to master programming in one platform.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
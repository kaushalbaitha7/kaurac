"use client";

import LanguageCard from "./LanguageCard";

const courses = [
  {
    title: "C Programming",
    description: "Master C Programming from basic syntax to file handling and projects.",
    lessons: "45 Lessons",
    level: "Beginner",
    duration: "8 Weeks",
    icon: "💻",
    color: "#DBEAFE",
    href: "/language/c",
  },
  {
    title: "C++",
    description: "Object Oriented Programming, STL and Competitive Coding.",
    lessons: "42 Lessons",
    level: "Beginner",
    duration: "8 Weeks",
    icon: "⚙️",
    color: "#DCFCE7",
    href: "/language/cpp",
  },
  {
    title: "Java",
    description: "Learn Java, OOP, Collections, JDBC and Projects.",
    lessons: "55 Lessons",
    level: "Intermediate",
    duration: "10 Weeks",
    icon: "☕",
    color: "#FEF3C7",
    href: "/language/java",
  },
  {
    title: "Python",
    description: "Programming, Automation, AI and Machine Learning.",
    lessons: "60 Lessons",
    level: "Beginner",
    duration: "10 Weeks",
    icon: "🐍",
    color: "#F3E8FF",
    href: "/language/python",
  },
  {
    title: "Data Structures",
    description: "Arrays, Linked Lists, Trees, Graphs and Interview Questions.",
    lessons: "70 Lessons",
    level: "Intermediate",
    duration: "12 Weeks",
    icon: "🧠",
    color: "#FCE7F3",
    href: "/language/dsa",
  },
  {
    title: "Artificial Intelligence",
    description: "Introduction to AI, Neural Networks and Generative AI.",
    lessons: "40 Lessons",
    level: "Advanced",
    duration: "8 Weeks",
    icon: "🤖",
    color: "#E0F2FE",
    href: "/language/ai",
  },
];

export default function Courses() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-900">
            Popular Courses
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Structured learning paths designed for engineering students.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

          {courses.map((course) => (
            <LanguageCard
              key={course.title}
              {...course}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
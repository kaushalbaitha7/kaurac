import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-3xl font-bold">
              KauraX
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Programming Learning Platform built to help
              engineering students learn, practice and build
              real-world programming skills.
            </p>

          </div>

          <div>

            <h3 className="font-semibold text-lg">
              Platform
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <Link href="/">Home</Link>

              <Link href="/courses">Courses</Link>

              <Link href="/compiler">Compiler</Link>

              <Link href="/practice">Practice</Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold text-lg">
              Resources
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <Link href="/quiz">Quiz</Link>

              <Link href="/certifications">
                Certifications
              </Link>

              <Link href="/about">
                About
              </Link>

            </div>

          </div>

          <div>

            <h3 className="font-semibold text-lg">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-slate-400">

              <p>kaurahub@gmail.com</p>

              <p>EETIRP</p>

              <p>Bengaluru, India</p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">

          © 2026 KauraX | Built by EETIRP

        </div>

      </div>

    </footer>
  );
}
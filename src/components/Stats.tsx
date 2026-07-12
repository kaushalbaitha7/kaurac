const stats = [
  {
    number: "100+",
    title: "Lessons",
  },
  {
    number: "500+",
    title: "Programs",
  },
  {
    number: "1000+",
    title: "MCQs",
  },
  {
    number: "7",
    title: "Learning Paths",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {stats.map((item) => (
            <div key={item.title}>

              <h2 className="text-5xl font-bold text-white">
                {item.number}
              </h2>

              <p className="text-blue-100 mt-3 text-lg">
                {item.title}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
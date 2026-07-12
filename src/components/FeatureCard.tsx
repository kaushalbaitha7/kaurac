interface Props {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition">

      <div className="text-5xl">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mt-6 text-slate-900">
        {title}
      </h3>

      <p className="text-slate-600 mt-3 leading-7">
        {description}
      </p>

    </div>
  );
}
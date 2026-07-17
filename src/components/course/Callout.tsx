interface CalloutProps {
  type?: "tip" | "note" | "warning" | "important";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  tip: {
    icon: "💡",
    title: "Tip",
    bg: "bg-blue-50",
    border: "border-blue-500",
    text: "text-blue-900",
    badge: "bg-blue-100 text-blue-700",
  },

  note: {
    icon: "📝",
    title: "Note",
    bg: "bg-slate-50",
    border: "border-slate-400",
    text: "text-slate-800",
    badge: "bg-slate-200 text-slate-700",
  },

  warning: {
    icon: "⚠️",
    title: "Warning",
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    text: "text-yellow-900",
    badge: "bg-yellow-200 text-yellow-800",
  },

  important: {
    icon: "🚀",
    title: "Important",
    bg: "bg-green-50",
    border: "border-green-500",
    text: "text-green-900",
    badge: "bg-green-200 text-green-800",
  },
};

export default function Callout({
  type = "note",
  title,
  children,
}: CalloutProps) {
  const style = styles[type];

  return (
    <div
      className={`
        my-8
        rounded-2xl
        border-l-4
        ${style.bg}
        ${style.border}
        shadow-sm
        overflow-hidden
      `}
    >
      <div className="px-6 py-4">

        <div className="flex items-center gap-3 mb-4">

          <span className="text-2xl">
            {style.icon}
          </span>

          <span
            className={`
              px-3
              py-1
              rounded-full
              text-sm
              font-semibold
              ${style.badge}
            `}
          >
            {title || style.title}
          </span>

        </div>

        <div
          className={`
            leading-8
            ${style.text}
          `}
        >
          {children}
        </div>

      </div>
    </div>
  );
}
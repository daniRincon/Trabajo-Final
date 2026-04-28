const colorMap = {
  blue: {
    bg:      "bg-primary-50",
    border:  "border-primary-200",
    badge:   "bg-primary-100 text-primary-800",
    icon:    "bg-primary-100 text-primary-700",
    title:   "text-primary-900",
    stat:    "bg-primary-600",
    heading: "text-primary-700",
    dot:     "bg-primary-500",
  },
  amber: {
    bg:      "bg-amber-50",
    border:  "border-amber-200",
    badge:   "bg-amber-100 text-amber-800",
    icon:    "bg-amber-100 text-amber-700",
    title:   "text-amber-900",
    stat:    "bg-amber-500",
    heading: "text-amber-700",
    dot:     "bg-amber-500",
  },
  green: {
    bg:      "bg-emerald-50",
    border:  "border-emerald-200",
    badge:   "bg-emerald-100 text-emerald-800",
    icon:    "bg-emerald-100 text-emerald-700",
    title:   "text-emerald-900",
    stat:    "bg-emerald-600",
    heading: "text-emerald-700",
    dot:     "bg-emerald-500",
  },
  purple: {
    bg:      "bg-purple-50",
    border:  "border-purple-200",
    badge:   "bg-purple-100 text-purple-800",
    icon:    "bg-purple-100 text-purple-700",
    title:   "text-purple-900",
    stat:    "bg-purple-600",
    heading: "text-purple-700",
    dot:     "bg-purple-500",
  },
};

export default function TopicSection({ tema, index }) {
  const c       = colorMap[tema.color] || colorMap.blue;
  const isEven  = index % 2 === 0;

  return (
    <section
      id={`subtema-${index + 1}`}
      className={`py-20 ${isEven ? "bg-white" : c.bg}`}
      aria-labelledby={`heading-${tema.id}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera del subtema */}
        <div className="mb-12 flex flex-col md:flex-row md:items-start gap-6">
          <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${c.icon} flex items-center justify-center text-3xl shadow-sm`}>
            {tema.icon}
          </div>
          <div>
            <span className={`inline-block mb-2 px-3 py-1 text-xs font-semibold rounded-full ${c.badge}`}>
              Subtema {index + 1}
            </span>
            <h2
              id={`heading-${tema.id}`}
              className={`text-3xl md:text-4xl font-bold mb-3 ${c.title}`}
            >
              {tema.titulo}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              {tema.resumen}
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {tema.estadisticas.map((stat, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 text-white ${c.stat} shadow-md text-center`}
            >
              <p className="text-3xl font-black mb-1">{stat.valor}</p>
              <p className="text-sm font-medium opacity-90">{stat.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tema.contenido.map((bloque, i) => (
            <article
              key={i}
              className={`bg-white rounded-2xl p-6 shadow-sm border ${c.border} hover:shadow-md transition-shadow`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className={`mt-1.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.dot}`} />
                <h3 className={`text-lg font-semibold ${c.heading}`}>
                  {bloque.subtitulo}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm pl-5">
                {bloque.texto}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

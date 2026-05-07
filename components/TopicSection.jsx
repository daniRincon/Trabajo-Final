const colorMap = {
  blue: {
    bg:           "bg-primary-50",
    border:       "border-primary-200",
    badge:        "bg-primary-100 text-primary-800",
    icon:         "bg-primary-100 text-primary-700",
    title:        "text-primary-900",
    stat:         "bg-primary-600",
    heading:      "text-primary-700",
    dot:          "bg-primary-500",
    videoBanner:  "bg-primary-700",
    videoSection: "bg-primary-50 border-primary-200",
    videoCard:    "border-primary-200 bg-white",
    videoTitle:   "text-primary-800",
  },
  amber: {
    bg:           "bg-amber-50",
    border:       "border-amber-200",
    badge:        "bg-amber-100 text-amber-800",
    icon:         "bg-amber-100 text-amber-700",
    title:        "text-amber-900",
    stat:         "bg-amber-500",
    heading:      "text-amber-700",
    dot:          "bg-amber-500",
    videoBanner:  "bg-amber-600",
    videoSection: "bg-amber-50 border-amber-200",
    videoCard:    "border-amber-200 bg-white",
    videoTitle:   "text-amber-800",
  },
  green: {
    bg:           "bg-emerald-50",
    border:       "border-emerald-200",
    badge:        "bg-emerald-100 text-emerald-800",
    icon:         "bg-emerald-100 text-emerald-700",
    title:        "text-emerald-900",
    stat:         "bg-emerald-600",
    heading:      "text-emerald-700",
    dot:          "bg-emerald-500",
    videoBanner:  "bg-emerald-700",
    videoSection: "bg-emerald-50 border-emerald-200",
    videoCard:    "border-emerald-200 bg-white",
    videoTitle:   "text-emerald-800",
  },
  purple: {
    bg:           "bg-purple-50",
    border:       "border-purple-200",
    badge:        "bg-purple-100 text-purple-800",
    icon:         "bg-purple-100 text-purple-700",
    title:        "text-purple-900",
    stat:         "bg-purple-600",
    heading:      "text-purple-700",
    dot:          "bg-purple-500",
    videoBanner:  "bg-purple-700",
    videoSection: "bg-purple-50 border-purple-200",
    videoCard:    "border-purple-200 bg-white",
    videoTitle:   "text-purple-800",
  },
};

export default function TopicSection({ tema, index }) {
  const c      = colorMap[tema.color] || colorMap.blue;
  const isEven = index % 2 === 0;

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
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

        {/* Videos incrustados */}
        {tema.videos && tema.videos.length > 0 && (
          <div className="rounded-3xl overflow-hidden bg-gray-950 shadow-2xl">
            {/* Cabecera */}
            <div className={`${c.videoBanner} px-8 py-5 flex items-center gap-4`}>
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
                🎬
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-none">Videos relacionados</h3>
                <p className="text-white/60 text-xs mt-0.5">Reproducción directa · sin salir de la página</p>
              </div>
              <span className="ml-auto hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-white/70 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                {tema.videos.length} videos
              </span>
            </div>

            {/* Grid de videos */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
              {tema.videos.map((v, idx) => (
                <div
                  key={v.id}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Número del video */}
                  <div className="relative">
                    <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0&modestbranding=1`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                    <span className={`absolute top-2 left-2 w-6 h-6 rounded-full ${c.stat} text-white text-xs font-bold flex items-center justify-center shadow-md z-10`}>
                      {idx + 1}
                    </span>
                  </div>

                  {/* Info del video */}
                  <div className="p-4 flex flex-col gap-2 flex-1">
                    <p className="text-white font-semibold text-sm leading-snug">
                      {v.title}
                    </p>
                    {v.descripcion && (
                      <p className="text-gray-400 text-xs leading-relaxed flex-1">
                        {v.descripcion}
                      </p>
                    )}
                    <a
                      href={`https://www.youtube.com/watch?v=${v.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-400 transition-colors self-start"
                    >
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.73A12 12 0 003 12a12 12 0 009.15 11.67l.32.08A4.83 4.83 0 0016.25 21a4.84 4.84 0 004.84-4.84V9.84A4.84 4.84 0 0019.59 6.69zM10 15V9l5 3z"/>
                      </svg>
                      Ver en YouTube
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

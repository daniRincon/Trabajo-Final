export default function ResumenSection() {
  const conceptos = [
    {
      icon: "🔄",
      titulo: "Ciclo del Conocimiento",
      descripcion:
        "El conocimiento fluye desde la mente individual hasta convertirse en activo organizacional mediante procesos de socialización, externalización, combinación e internalización (Nonaka & Takeuchi, 1995).",
    },
    {
      icon: "🏗️",
      titulo: "Infraestructura del Conocimiento",
      descripcion:
        "Comprende tecnología, estructura organizacional, cultura y capital humano. Probst et al. (1999) identificaron ocho bloques: identificar, adquirir, desarrollar, distribuir, utilizar, retener, medir y preservar.",
    },
    {
      icon: "⚖️",
      titulo: "Capital Intelectual",
      descripcion:
        "El capital intelectual se divide en capital humano (conocimiento de las personas), capital estructural (procesos y sistemas) y capital relacional (redes y relaciones). Es el principal generador de valor en la economía del conocimiento.",
    },
    {
      icon: "🌐",
      titulo: "Gestión del Conocimiento Digital",
      descripcion:
        "Las plataformas digitales actuales (intranets, wikis, IA generativa, PLM) amplifican la capacidad de capturar, compartir y reutilizar conocimiento a escala global, transformando los modelos tradicionales.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Conceptos Transversales
          </h2>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Más allá de los subtemas, existen conceptos que articulan toda la disciplina
            de la Gestión del Conocimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conceptos.map((c, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-colors"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{c.titulo}</h3>
              <p className="text-primary-200 text-sm leading-relaxed">{c.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Línea de tiempo */}
        <div className="mt-16">
          <h3 className="text-center text-white font-bold text-2xl mb-8">
            Hitos Históricos de la Gestión del Conocimiento
          </h3>
          <div className="relative">
            {/* Línea */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/20 hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
              {[
                { año: "1966", hito: "Polanyi: Conocimiento tácito",  icon: "🧠" },
                { año: "1990", hito: "Senge: La Quinta Disciplina",    icon: "📗" },
                { año: "1995", hito: "Nonaka & Takeuchi: Modelo SECI", icon: "🔄" },
                { año: "1998", hito: "Wenger: Comunidades de Práctica",icon: "🤝" },
                { año: "2003", hito: "Chesbrough: Open Innovation",    icon: "🚀" },
              ].map((item) => (
                <div key={item.año} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center text-xl mb-3 shadow-lg">
                    {item.icon}
                  </div>
                  <span className="text-amber-300 font-bold text-sm">{item.año}</span>
                  <span className="text-white/80 text-xs mt-1 leading-snug">{item.hito}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

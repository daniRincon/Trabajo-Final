import { siteConfig } from "../data/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-secondary-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white/90 text-sm font-medium tracking-wide">
          📘 Proyecto Educativo · 2026
        </span>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Gestión del{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            Conocimiento
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Explora los pilares que transforman la información en ventaja competitiva:
          del conocimiento tácito a la memoria organizacional.
        </p>

        {/* Integrantes */}
        <div className="mb-8 inline-flex flex-wrap justify-center gap-x-4 gap-y-1">
          {siteConfig.team.map((nombre) => (
            <span
              key={nombre}
              className="text-white/60 text-sm font-medium"
            >
              {nombre}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#subtema-1"
            className="px-8 py-4 bg-white text-primary-800 font-bold rounded-xl shadow-lg hover:bg-amber-50 transition-all duration-200 hover:-translate-y-0.5"
          >
            Explorar contenido
          </a>
          <a
            href="#fuentes"
            className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
          >
            Ver fuentes
          </a>
        </div>

        {/* Temas destacados */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            { icon: "🧠", label: "Conocimiento Explícito vs Tácito" },
            { icon: "💡", label: "Innovación y Cultura" },
            { icon: "🤝", label: "Trabajo Colaborativo" },
            { icon: "📚", label: "Aprendizaje Organizacional" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-white/90 text-xs font-medium leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#subtema-1" aria-label="Ir al contenido">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

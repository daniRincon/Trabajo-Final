import { useState } from "react";

const tipoColor = {
  Libro:   "bg-blue-100 text-blue-800",
  Artículo:"bg-green-100 text-green-800",
  Informe: "bg-amber-100 text-amber-800",
};

const temaLabel = {
  1: "Explícito vs Tácito",
  2: "Innovación y Cultura",
  3: "Trabajo Colaborativo",
  4: "Aprendizaje",
};

export default function FuentesSection({ fuentes }) {
  const [filtro, setFiltro] = useState(0); // 0 = todos

  const filtradas = filtro === 0
    ? fuentes
    : fuentes.filter((f) => f.temas.includes(filtro));

  return (
    <section
      id="fuentes"
      className="py-20 bg-gray-900"
      aria-labelledby="heading-fuentes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1.5 bg-white/10 text-white/80 text-xs font-semibold rounded-full uppercase tracking-wider">
            Documentación académica
          </span>
          <h2
            id="heading-fuentes"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            📖 Fuentes Bibliográficas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Toda la información presentada en este sitio está respaldada por
            fuentes académicas y científicas verificables. A continuación se
            listan las {fuentes.length} referencias utilizadas.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 0, label: `Todas (${fuentes.length})` },
            { id: 1, label: "Explícito vs Tácito" },
            { id: 2, label: "Innovación y Cultura" },
            { id: 3, label: "Trabajo Colaborativo" },
            { id: 4, label: "Aprendizaje" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFiltro(btn.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filtro === btn.id
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Lista de fuentes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtradas.map((f) => (
            <article
              key={f.id}
              className="bg-gray-800 rounded-2xl p-5 border border-gray-700 hover:border-primary-500/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <span className="text-gray-400 font-mono text-xs">#{f.id}</span>
                <div className="flex flex-wrap gap-1">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tipoColor[f.tipo] || "bg-gray-600 text-gray-200"}`}>
                    {f.tipo}
                  </span>
                  {f.temas.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                      Tema {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-white font-semibold mb-1 text-sm leading-snug">
                {f.titulo}
              </p>
              <p className="text-gray-400 text-xs mb-2">
                {f.autores} ({f.año})
                {f.editorial ? ` · ${f.editorial}` : ""}
                {f.revista ? ` · ${f.revista}, ${f.volumen}, pp. ${f.paginas}` : ""}
              </p>

              {/* DOI o URL */}
              {f.doi && (
                <a
                  href={`https://doi.org/${f.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 text-xs hover:underline break-all"
                >
                  DOI: {f.doi}
                </a>
              )}
              {f.url && !f.doi && (
                <a
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 text-xs hover:underline break-all"
                >
                  {f.url}
                </a>
              )}
              {f.isbn && (
                <p className="text-gray-500 text-xs mt-1">ISBN: {f.isbn}</p>
              )}
            </article>
          ))}
        </div>

        {/* Nota metodológica */}
        <div className="mt-10 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Nota metodológica:</strong> Las referencias
            siguen el formato <strong className="text-white">APA 7.ª edición</strong>.
            Los DOI permiten acceder a las versiones digitales de los artículos.
            Los libros están disponibles en bibliotecas universitarias y plataformas
            como Google Books, SpringerLink y EBSCO.
          </p>
        </div>
      </div>
    </section>
  );
}

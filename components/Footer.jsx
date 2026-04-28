export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🧩</span>
              <span className="text-white font-bold text-lg">Gestión del Conocimiento</span>
            </div>
            <p className="text-sm leading-relaxed">
              Proyecto educativo que explora los fundamentos teóricos y prácticos de la
              gestión del conocimiento en las organizaciones modernas.
            </p>
          </div>

          {/* Subtemas */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Subtemas</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#subtema-1" className="hover:text-white transition-colors">🧠 Conocimiento Explícito vs Tácito</a></li>
              <li><a href="#subtema-2" className="hover:text-white transition-colors">💡 Innovación y Cultura</a></li>
              <li><a href="#subtema-3" className="hover:text-white transition-colors">🤝 Trabajo Colaborativo</a></li>
              <li><a href="#subtema-4" className="hover:text-white transition-colors">📚 Aprendizaje Organizacional</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#fuentes" className="hover:text-white transition-colors">📖 Bibliografía (15 fuentes)</a></li>
              <li>
                <a
                  href="https://doi.org/10.1287/orsc.5.1.14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  🔗 Modelo SECI – Nonaka (1994)
                </a>
              </li>
              <li>
                <a
                  href="https://hbr.org/1993/07/building-a-learning-organization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  🔗 Learning Organization – Garvin (1993)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {year} Gestión del Conocimiento · Proyecto Educativo</p>
          <p>
            Construido con{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Next.js</a>
            {" "}·{" "}
            Desplegado en{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">Vercel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

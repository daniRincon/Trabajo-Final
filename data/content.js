// ============================================================
// DATOS CENTRALIZADOS — Gestión del Conocimiento
// Fuentes académicas y bibliográficas documentadas al final
// ============================================================

export const siteConfig = {
  title: "Gestión del Conocimiento | Proyecto Educativo",
  description:
    "Explora los fundamentos de la Gestión del Conocimiento: conocimiento explícito vs tácito, innovación organizacional, entornos colaborativos y memoria organizacional.",
  url: "https://gestion-conocimiento.vercel.app",
  author: "Proyecto Educativo — Gestión del Conocimiento",
  keywords: [
    "gestión del conocimiento",
    "conocimiento explícito",
    "conocimiento tácito",
    "innovación organizacional",
    "cultura organizacional",
    "aprendizaje organizacional",
    "memoria organizacional",
    "trabajo colaborativo",
    "comunicación del conocimiento",
    "Nonaka Takeuchi",
    "capital intelectual",
  ],
};

// ----------------------------------------------------------
// SUBTEMA 1 — Conocimiento Explícito vs Tácito
// ----------------------------------------------------------
export const tema1 = {
  id: "conocimiento-explicito-tacito",
  titulo: "Conocimiento Explícito vs Tácito en las Organizaciones",
  icon: "🧠",
  color: "blue",
  resumen:
    "Las organizaciones gestionan dos tipos fundamentales de conocimiento: el explícito, codificable y transferible; y el tácito, personal e intuitivo. Comprenderlos es la base de cualquier estrategia de gestión del conocimiento.",
  contenido: [
    {
      subtitulo: "¿Qué es el conocimiento explícito?",
      texto:
        "El conocimiento explícito es aquel que puede ser articulado, codificado y almacenado en documentos, manuales, bases de datos o procedimientos. Es fácilmente transferible entre personas y sistemas. Ejemplos típicos incluyen manuales de procesos, informes técnicos, políticas empresariales y documentación de software.",
    },
    {
      subtitulo: "¿Qué es el conocimiento tácito?",
      texto:
        "El conocimiento tácito (término introducido por Michael Polanyi en 1966) es personal, contextual y difícil de formalizar. Incluye habilidades prácticas, intuiciones, valores y experiencia acumulada. Nonaka y Takeuchi (1995) identificaron el conocimiento tácito como el activo más valioso de las organizaciones, ya que es difícil de imitar por la competencia.",
    },
    {
      subtitulo: "El Modelo SECI de Nonaka y Takeuchi",
      texto:
        "El modelo SECI describe cuatro modos de conversión del conocimiento: (1) Socialización: de tácito a tácito mediante la observación y la práctica compartida; (2) Externalización: de tácito a explícito a través de metáforas y modelos; (3) Combinación: de explícito a explícito mediante documentos y bases de datos; (4) Internalización: de explícito a tácito mediante el aprendizaje-haciendo (learning by doing).",
    },
    {
      subtitulo: "Implicaciones para las organizaciones",
      texto:
        "Una gestión efectiva debe equilibrar ambos tipos de conocimiento. Las organizaciones que solo documentan conocimiento explícito pierden el 70–80 % de su saber organizacional, que reside en las personas. Programas de mentoría, comunidades de práctica y storytelling organizacional son estrategias clave para capturar el conocimiento tácito.",
    },
  ],
  estadisticas: [
    { valor: "70-80%", descripcion: "del conocimiento organizacional es tácito" },
    { valor: "4 modos", descripcion: "de conversión en el modelo SECI" },
    { valor: "1966", descripcion: "año en que Polanyi acuñó 'conocimiento tácito'" },
  ],
};

// ----------------------------------------------------------
// SUBTEMA 2 — Innovación, Cultura y Gestión del Trabajo
// ----------------------------------------------------------
export const tema2 = {
  id: "innovacion-cultura-gestion",
  titulo: "Innovación, Cultura y Gestión del Trabajo",
  icon: "💡",
  color: "amber",
  resumen:
    "La cultura organizacional es el caldo de cultivo de la innovación. Una gestión del trabajo orientada al aprendizaje continuo y la experimentación potencia la creación de nuevo conocimiento.",
  contenido: [
    {
      subtitulo: "Cultura organizacional y gestión del conocimiento",
      texto:
        "Según Davenport y Prusak (1998), la cultura es el mayor obstáculo —y al mismo tiempo el mayor facilitador— de la gestión del conocimiento. Una cultura que penaliza el error inhibe el flujo de conocimiento, mientras que una cultura psicológicamente segura (Edmondson, 1999) fomenta el intercambio abierto de ideas y experiencias.",
    },
    {
      subtitulo: "Innovación como proceso de conocimiento",
      texto:
        "Drucker (1993) postuló que el conocimiento es el único recurso económico significativo en la sociedad postcapitalista. La innovación —incremental o disruptiva— surge cuando los miembros de la organización combinan conocimiento existente de formas novedosas. El modelo de innovación abierta (Chesbrough, 2003) amplía esto al incorporar conocimiento externo.",
    },
    {
      subtitulo: "Gestión del trabajo basada en el conocimiento",
      texto:
        "El trabajador del conocimiento (knowledge worker) descrito por Drucker requiere autonomía, objetivos claros y retroalimentación constante. Metodologías ágiles como Scrum o Kanban facilitan la gestión del trabajo creativo al hacer visible el flujo de conocimiento y los cuellos de botella en los procesos.",
    },
    {
      subtitulo: "Liderazgo y clima de innovación",
      texto:
        "Amabile (1998) demostró que la motivación intrínseca es el motor principal de la creatividad organizacional. Los líderes que otorgan autonomía, reconocen el esfuerzo y toleran el fracaso productivo generan climas donde el conocimiento fluye libremente y la innovación es sostenible.",
    },
  ],
  estadisticas: [
    { valor: "3x", descripcion: "mayor innovación en culturas psicológicamente seguras" },
    { valor: "60%", descripcion: "de empresas Fortune 500 usan metodologías ágiles" },
    { valor: "1993", descripcion: "Drucker define al 'trabajador del conocimiento'" },
  ],
};

// ----------------------------------------------------------
// SUBTEMA 3 — Entorno Colaborativo y Comunicación del Conocimiento
// ----------------------------------------------------------
export const tema3 = {
  id: "entorno-colaborativo-comunicacion",
  titulo: "Entorno de Trabajo Colaborativo y Comunicación del Conocimiento",
  icon: "🤝",
  color: "green",
  resumen:
    "Los entornos colaborativos son los espacios —físicos y digitales— donde el conocimiento se comparte, transforma y amplifica. La comunicación efectiva es el vehículo que hace posible esta transferencia.",
  contenido: [
    {
      subtitulo: "¿Qué es un entorno colaborativo de conocimiento?",
      texto:
        "Un entorno de trabajo colaborativo (ETC) es un sistema sociotécnico que combina herramientas digitales, procesos de trabajo y normas culturales para facilitar la creación y el intercambio de conocimiento. Plataformas como Microsoft Teams, Confluence, Slack o Notion son ejemplos contemporáneos de estos entornos.",
    },
    {
      subtitulo: "Comunidades de práctica (CoP)",
      texto:
        "Wenger (1998) definió las comunidades de práctica como grupos de personas que comparten una preocupación, un conjunto de problemas o una pasión por un tema, y que profundizan su conocimiento interactuando regularmente. Las CoP son mecanismos poderosos para la transferencia del conocimiento tácito dentro y entre organizaciones.",
    },
    {
      subtitulo: "Comunicación del conocimiento",
      texto:
        "La comunicación del conocimiento va más allá de la transmisión de información: implica contextualizar, interpretar y generar significado compartido. Shannon y Weaver (1949) modelaron la comunicación como transmisión de señales, pero Nonaka (1994) argumentó que en organizaciones del conocimiento lo crítico es la creación de contexto (ba) que permite la resonancia entre emisor y receptor.",
    },
    {
      subtitulo: "Tecnologías de colaboración y KM",
      texto:
        "Los Sistemas de Gestión del Conocimiento (KMS) integran repositorios documentales, wikis corporativas, sistemas expertos y redes sociales internas. Estudios del McKinsey Global Institute (2012) estimaron que las herramientas de colaboración social pueden incrementar la productividad de los trabajadores del conocimiento entre un 20 y un 25 %.",
    },
  ],
  estadisticas: [
    { valor: "20-25%", descripcion: "incremento de productividad con herramientas colaborativas" },
    { valor: "1998", descripcion: "Wenger formaliza las Comunidades de Práctica" },
    { valor: "85%", descripcion: "de empleados más comprometidos en entornos colaborativos" },
  ],
};

// ----------------------------------------------------------
// SUBTEMA 4 — Aprendizaje y Memoria Organizacional
// ----------------------------------------------------------
export const tema4 = {
  id: "aprendizaje-memoria-organizacional",
  titulo: "Fomento del Aprendizaje y la Memoria Organizacional",
  icon: "📚",
  color: "purple",
  resumen:
    "La organización que aprende convierte la experiencia individual en conocimiento colectivo duradero. La memoria organizacional preserva ese conocimiento para que sobreviva a la rotación de personal y al paso del tiempo.",
  contenido: [
    {
      subtitulo: "La organización que aprende (Learning Organization)",
      texto:
        "Peter Senge (1990) introdujo el concepto de 'organización que aprende' con su obra La Quinta Disciplina. Identificó cinco disciplinas: dominio personal, modelos mentales, visión compartida, aprendizaje en equipo y pensamiento sistémico. Una organización que aprende no solo resuelve problemas presentes, sino que desarrolla capacidad para adaptarse continuamente.",
    },
    {
      subtitulo: "Bucles de aprendizaje organizacional",
      texto:
        "Argyris y Schön (1978) distinguieron entre aprendizaje de bucle simple (single-loop: corregir errores sin cuestionar supuestos) y de bucle doble (double-loop: cuestionar y modificar los supuestos subyacentes). Las organizaciones de alto desempeño practican el aprendizaje de bucle doble, lo que les permite innovar y adaptarse estratégicamente.",
    },
    {
      subtitulo: "Memoria organizacional",
      texto:
        "La memoria organizacional (Walsh y Ungson, 1991) es el almacén de información del pasado que puede ser recuperado para tomar decisiones presentes. Se almacena en cinco repositorios: individuos, cultura, transformaciones (procesos), estructuras (roles y reglas) y ecología (entorno físico). La gestión deliberada de esta memoria evita que la organización 'olvide' lo que aprendió.",
    },
    {
      subtitulo: "Estrategias para fomentar el aprendizaje",
      texto:
        "Entre las estrategias más efectivas se encuentran: after-action reviews (revisiones post-acción), lecciones aprendidas documentadas, rotación de puestos, programas de mentoría inversa, universidades corporativas y plataformas de e-learning. Garvin (1993) propuso que una organización que aprende debe ser hábil en cinco actividades: resolución sistemática de problemas, experimentación, aprender de la propia experiencia, aprender de otros y transferir conocimiento.",
    },
  ],
  estadisticas: [
    { valor: "5 disciplinas", descripcion: "de Senge para la organización que aprende" },
    { valor: "1990", descripcion: "Senge publica 'La Quinta Disciplina'" },
    { valor: "46%", descripcion: "de empresas con alta madurez en aprendizaje superan a la competencia" },
  ],
};

// ----------------------------------------------------------
// FUENTES BIBLIOGRÁFICAS
// ----------------------------------------------------------
export const fuentes = [
  {
    id: 1,
    tipo: "Libro",
    autores: "Nonaka, I. & Takeuchi, H.",
    año: 1995,
    titulo: "The Knowledge-Creating Company: How Japanese Companies Create the Dynamics of Innovation",
    editorial: "Oxford University Press",
    lugar: "Nueva York, EE. UU.",
    isbn: "978-0195092691",
    temas: [1],
  },
  {
    id: 2,
    tipo: "Libro",
    autores: "Polanyi, M.",
    año: 1966,
    titulo: "The Tacit Dimension",
    editorial: "Doubleday",
    lugar: "Nueva York, EE. UU.",
    isbn: "978-0226672984",
    temas: [1],
  },
  {
    id: 3,
    tipo: "Libro",
    autores: "Davenport, T. H. & Prusak, L.",
    año: 1998,
    titulo: "Working Knowledge: How Organizations Manage What They Know",
    editorial: "Harvard Business School Press",
    lugar: "Boston, EE. UU.",
    isbn: "978-1578513017",
    temas: [1, 2],
  },
  {
    id: 4,
    tipo: "Libro",
    autores: "Senge, P. M.",
    año: 1990,
    titulo: "La Quinta Disciplina: El arte y la práctica de la organización abierta al aprendizaje",
    editorial: "Granica",
    lugar: "Barcelona, España",
    isbn: "978-9506414306",
    temas: [4],
  },
  {
    id: 5,
    tipo: "Libro",
    autores: "Drucker, P. F.",
    año: 1993,
    titulo: "Post-Capitalist Society",
    editorial: "HarperCollins",
    lugar: "Nueva York, EE. UU.",
    isbn: "978-0887306617",
    temas: [2],
  },
  {
    id: 6,
    tipo: "Libro",
    autores: "Wenger, E.",
    año: 1998,
    titulo: "Communities of Practice: Learning, Meaning, and Identity",
    editorial: "Cambridge University Press",
    lugar: "Cambridge, Reino Unido",
    isbn: "978-0521663632",
    temas: [3],
  },
  {
    id: 7,
    tipo: "Artículo",
    autores: "Argyris, C. & Schön, D.",
    año: 1978,
    titulo: "Organizational Learning: A Theory of Action Perspective",
    editorial: "Addison-Wesley",
    lugar: "Reading, EE. UU.",
    isbn: "978-0201001747",
    temas: [4],
  },
  {
    id: 8,
    tipo: "Artículo",
    autores: "Edmondson, A.",
    año: 1999,
    titulo: "Psychological Safety and Learning Behavior in Work Teams",
    revista: "Administrative Science Quarterly",
    volumen: "44(2)",
    paginas: "350–383",
    doi: "10.2307/2666999",
    temas: [2],
  },
  {
    id: 9,
    tipo: "Artículo",
    autores: "Nonaka, I.",
    año: 1994,
    titulo: "A Dynamic Theory of Organizational Knowledge Creation",
    revista: "Organization Science",
    volumen: "5(1)",
    paginas: "14–37",
    doi: "10.1287/orsc.5.1.14",
    temas: [1, 3],
  },
  {
    id: 10,
    tipo: "Artículo",
    autores: "Walsh, J. P. & Ungson, G. R.",
    año: 1991,
    titulo: "Organizational Memory",
    revista: "Academy of Management Review",
    volumen: "16(1)",
    paginas: "57–91",
    doi: "10.5465/amr.1991.4279490",
    temas: [4],
  },
  {
    id: 11,
    tipo: "Artículo",
    autores: "Garvin, D. A.",
    año: 1993,
    titulo: "Building a Learning Organization",
    revista: "Harvard Business Review",
    volumen: "71(4)",
    paginas: "78–91",
    url: "https://hbr.org/1993/07/building-a-learning-organization",
    temas: [4],
  },
  {
    id: 12,
    tipo: "Artículo",
    autores: "Amabile, T. M.",
    año: 1998,
    titulo: "How to Kill Creativity",
    revista: "Harvard Business Review",
    volumen: "76(5)",
    paginas: "76–87",
    url: "https://hbr.org/1998/09/how-to-kill-creativity",
    temas: [2],
  },
  {
    id: 13,
    tipo: "Informe",
    autores: "McKinsey Global Institute",
    año: 2012,
    titulo: "The Social Economy: Unlocking Value and Productivity Through Social Technologies",
    editorial: "McKinsey & Company",
    url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy",
    temas: [3],
  },
  {
    id: 14,
    tipo: "Libro",
    autores: "Chesbrough, H.",
    año: 2003,
    titulo: "Open Innovation: The New Imperative for Creating and Profiting from Technology",
    editorial: "Harvard Business School Press",
    lugar: "Boston, EE. UU.",
    isbn: "978-1578518371",
    temas: [2],
  },
  {
    id: 15,
    tipo: "Libro",
    autores: "Probst, G., Raub, S. & Romhardt, K.",
    año: 1999,
    titulo: "Managing Knowledge: Building Blocks for Success",
    editorial: "John Wiley & Sons",
    lugar: "Chichester, Reino Unido",
    isbn: "978-0471997399",
    temas: [1, 2, 3, 4],
  },
];

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
  team: [
    "Luis Daniel Martinez Rincon",
    "Horacio Palacios Palacios",
    "Dangelly Angelica Blandon Negrete",
    "Karime Salazar Hinestroza",
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
        "El conocimiento explícito es aquel que puede ser articulado, codificado y almacenado en documentos, manuales, bases de datos o procedimientos. Es fácilmente transferible entre personas y sistemas a través del lenguaje formal, ecuaciones matemáticas o especificaciones técnicas. Ejemplos típicos incluyen manuales de procesos, informes técnicos, políticas empresariales, diagramas de flujo y documentación de software. Su gestión se apoya en repositorios digitales, intranets corporativas y sistemas de gestión documental (DMS).",
    },
    {
      subtitulo: "¿Qué es el conocimiento tácito?",
      texto:
        "El conocimiento tácito (término introducido por el filósofo Michael Polanyi en 1966 con su célebre frase 'sabemos más de lo que podemos decir') es personal, contextual y difícil de formalizar. Incluye habilidades prácticas, intuiciones, valores, percepciones sensoriales y experiencia acumulada. Nonaka y Takeuchi (1995) identificaron el conocimiento tácito como el activo más valioso de las organizaciones, ya que es difícil de imitar por la competencia. Se subdivide en dimensión técnica (know-how, habilidades artesanales) y dimensión cognitiva (creencias, percepciones, modelos mentales).",
    },
    {
      subtitulo: "El Modelo SECI de Nonaka y Takeuchi",
      texto:
        "El modelo SECI (1995) describe cuatro modos de conversión del conocimiento que conforman una espiral continua: (1) Socialización (tácito → tácito): transferencia mediante observación, imitación y práctica compartida, como en el aprendizaje entre maestro y aprendiz; (2) Externalización (tácito → explícito): articulación del conocimiento tácito mediante metáforas, analogías, conceptos y modelos; (3) Combinación (explícito → explícito): sistematización del conocimiento a través de documentos, reuniones y bases de datos; (4) Internalización (explícito → tácito): incorporación del conocimiento documentado a través del aprendizaje-haciendo (learning by doing).",
    },
    {
      subtitulo: "Capital intelectual: el conocimiento como activo estratégico",
      texto:
        "Stewart (1997) y Sveiby (1997) definieron el capital intelectual como la suma de activos intangibles que generan valor: capital humano (competencias, experiencias y motivación de las personas), capital estructural (procesos, sistemas de información, cultura y propiedad intelectual) y capital relacional (relaciones con clientes, alianzas y reputación de marca). Edvinsson y Malone (1997) desarrollaron el Navegador Skandia, el primer modelo para medir estos activos. La norma ISO 30401:2018 establece actualmente los requisitos para los sistemas de gestión del conocimiento en las organizaciones.",
    },
    {
      subtitulo: "Tecnología e IA en la gestión del conocimiento",
      texto:
        "Las herramientas de inteligencia artificial —procesamiento del lenguaje natural (NLP), minería de textos y aprendizaje automático— permiten hoy extraer, clasificar y recuperar conocimiento de grandes volúmenes de documentos no estructurados. Los sistemas de recomendación inteligente pueden sugerir automáticamente expertos internos o documentos relevantes según el perfil del usuario, reduciendo el tiempo de búsqueda hasta en un 40 %. Chatbots corporativos y asistentes IA actúan como interfaces conversacionales para repositorios de conocimiento, democratizando el acceso al conocimiento explícito.",
    },
    {
      subtitulo: "Implicaciones prácticas y herramientas",
      texto:
        "Para capturar conocimiento explícito use repositorios estructurados (wikis, bases de datos, manuales) con metadatos y controles de calidad editorial. Para capturar conocimiento tácito, implemente mentorías, acompañamiento en el puesto (job shadowing), rotación de tareas, entrevistas de elicitación de conocimiento con expertos y sesiones de storytelling donde se documenten decisiones clave. Los mapas de conocimiento (knowledge maps) permiten visualizar qué sabe quién en la organización y facilitan la identificación de expertos internos.",
    },
  ],
  videos: [
    {
      title: "Modelo SECI de Nonaka y Takeuchi",
      id: "Pjk2HpEhlqk",
      descripcion: "Explicación del modelo SECI y su importancia en la gestión del conocimiento empresarial.",
    },
    {
      title: "Tipos de Conocimiento: Tácito y Explícito",
      id: "s09WIh8lOHs",
      descripcion: "UPB Académico — diferencias entre conocimiento tácito y explícito y su relación con las organizaciones.",
    },
    {
      title: "El Capital Intelectual y la Gestión del Conocimiento",
      id: "3IBhKWq7qoM",
      descripcion: "Cómo el capital intelectual se convierte en el activo más valioso de una organización.",
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
        "Según Davenport y Prusak (1998), la cultura es el mayor obstáculo —y al mismo tiempo el mayor facilitador— de la gestión del conocimiento. Una cultura que penaliza el error inhibe el flujo de conocimiento, mientras que una cultura psicológicamente segura (Edmondson, 1999) fomenta el intercambio abierto de ideas y experiencias. Los valores culturales como la confianza, la reciprocidad, la apertura y la orientación al aprendizaje actúan como infraestructura invisible que permite o bloquea la creación y el flujo del conocimiento entre personas y unidades organizacionales.",
    },
    {
      subtitulo: "Innovación como proceso de conocimiento",
      texto:
        "Drucker (1993) postuló que el conocimiento es el único recurso económico significativo en la sociedad postcapitalista. La innovación —incremental o disruptiva— surge cuando los miembros de la organización combinan conocimiento existente de formas novedosas. El modelo de innovación abierta (Chesbrough, 2003) amplía esto al incorporar conocimiento externo de clientes, proveedores, universidades y startups. Las organizaciones innovadoras no solo generan nuevo conocimiento internamente, sino que desarrollan capacidad absortiva (Cohen y Levinthal, 1990) para asimilar y explotar conocimiento externo.",
    },
    {
      subtitulo: "Tipos de innovación y gestión del conocimiento",
      texto:
        "Henderson y Clark (1990) clasificaron la innovación en cuatro tipos: incremental (mejoras graduales sobre componentes existentes), modular (nuevo componente en arquitectura existente), arquitectónica (nueva combinación de componentes conocidos) y radical (nuevos componentes y nueva arquitectura). Cada tipo requiere una estrategia de conocimiento distinta: la innovación incremental capitaliza el conocimiento acumulado (exploitation), mientras que la radical exige explorar conocimiento externo desconocido (exploration) y tolerar el riesgo de experimentación.",
    },
    {
      subtitulo: "Ambidestreza organizacional",
      texto:
        "Gibson y Birkinshaw (2004) introdujeron el concepto de organización ambidiestra: capaz de explotar eficientemente el conocimiento actual (exploitation) mientras explora simultáneamente nuevas posibilidades (exploration). Las organizaciones que logran este equilibrio dinámico son las que sostienen la innovación a largo plazo, evitando la 'trampa de la competencia' que condena a las empresas a perfeccionar lo que ya saben sin renovarse. Ejemplos incluyen unidades de exploración independientes, presupuestos de innovación separados y tiempo libre para proyectos personales.",
    },
    {
      subtitulo: "Gestión del trabajo basada en el conocimiento",
      texto:
        "El trabajador del conocimiento (knowledge worker) descrito por Drucker requiere autonomía, objetivos claros y retroalimentación constante. Metodologías ágiles como Scrum o Kanban facilitan la gestión del trabajo creativo al hacer visible el flujo de conocimiento y los cuellos de botella en los procesos. El marco OKR (Objectives and Key Results) alinea el conocimiento individual con los objetivos estratégicos de la organización, promoviendo la transparencia y el aprendizaje continuo en ciclos cortos de retroalimentación.",
    },
    {
      subtitulo: "Métricas e indicadores de innovación basada en conocimiento",
      texto:
        "Mida el impacto de iniciativas de conocimiento con indicadores como: número de ideas implementadas por trimestre, tiempo de transferencia de conocimiento entre equipos, tasa de reducción de retrabajos, número de patentes registradas, inversión en I+D como porcentaje de ingresos y Net Promoter Score interno de satisfacción con el aprendizaje. Fomente laboratorios de innovación (innovation labs), pilotos controlados (MVPs), hackathons internos y alianzas con universidades para incorporar conocimiento externo de frontera.",
    },
  ],
  videos: [
    {
      title: "Seguridad Psicológica en el Trabajo — Amy Edmondson (TEDxHGSE)",
      id: "LhoLuui9gX8",
      descripcion: "La profesora de Harvard explica por qué la seguridad psicológica es clave para equipos innovadores.",
    },
    {
      title: "Open Innovation — Henry Chesbrough, UC Berkeley",
      id: "oHVz61O3YYg",
      descripcion: "Chesbrough presenta el nuevo modelo de innovación abierta y cómo las empresas crean valor colaborando.",
    },
    {
      title: "Estrategias para Desarrollar y Retener el Capital Intelectual",
      id: "FpYeab5bLe4",
      descripcion: "Cómo las organizaciones diseñan estrategias para desarrollar y retener su capital humano e intelectual.",
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
        "Un entorno de trabajo colaborativo (ETC) es un sistema sociotécnico que combina herramientas digitales, procesos de trabajo y normas culturales para facilitar la creación y el intercambio de conocimiento. Plataformas como Microsoft Teams, Confluence, Slack, Notion o SharePoint son ejemplos contemporáneos de estos entornos. La clave no es la tecnología en sí, sino la forma en que las personas y los procesos la adoptan: una plataforma sin comunidad activa es solo un cementerio de documentos.",
    },
    {
      subtitulo: "Comunidades de práctica (CoP)",
      texto:
        "Wenger (1998) definió las comunidades de práctica (CoP) como grupos de personas que comparten una preocupación, un conjunto de problemas o una pasión por un tema, y que profundizan su conocimiento interactuando regularmente. Una CoP tiene tres elementos estructurantes: el dominio (área de interés compartida), la comunidad (relaciones y actividades conjuntas) y la práctica (repertorio de recursos, herramientas y experiencias). Son mecanismos poderosos para la transferencia del conocimiento tácito dentro y entre organizaciones, especialmente el know-how difícil de documentar.",
    },
    {
      subtitulo: "El concepto Ba: espacios para la creación de conocimiento",
      texto:
        "Nonaka y Konno (1998) adoptaron el concepto japonés Ba (場, 'lugar compartido') para describir los contextos donde el conocimiento emerge. Distinguieron cuatro tipos: Originating Ba (interacción cara a cara donde se comparten emociones y experiencias), Interacting Ba (espacio de diálogo donde el conocimiento tácito se hace explícito mediante metáforas), Cyber Ba (entorno virtual para combinar conocimiento explícito) y Exercising Ba (práctica individual guiada por modelos y procedimientos). Las organizaciones deben diseñar deliberadamente estos espacios para facilitar cada modo de conversión del modelo SECI.",
    },
    {
      subtitulo: "Comunicación del conocimiento",
      texto:
        "La comunicación del conocimiento va más allá de la transmisión de información: implica contextualizar, interpretar y generar significado compartido. Shannon y Weaver (1949) modelaron la comunicación como transmisión de señales, pero Nonaka (1994) argumentó que en organizaciones del conocimiento lo crítico es la creación de contexto (Ba) que permite la resonancia entre emisor y receptor. Las narrativas organizacionales (storytelling), los mapas conceptuales y las visualizaciones de datos son herramientas poderosas para comunicar conocimiento complejo de forma comprensible.",
    },
    {
      subtitulo: "Barreras y facilitadores de la transferencia de conocimiento",
      texto:
        "Szulanski (1996) identificó las principales barreras para la transferencia de conocimiento: la 'pegajosidad' del conocimiento tácito (dificultad para articularlo), la falta de capacidad absortiva del receptor, la distancia relacional entre emisor y receptor, y la falta de motivación para compartir. Los facilitadores más efectivos son: confianza interpersonal, relaciones previas, cercanía cultural, incentivos explícitos para compartir conocimiento y liderazgo que modele el comportamiento de compartir. Cohen y Levinthal (1990) demostraron que la capacidad de absorción depende del conocimiento previo.",
    },
    {
      subtitulo: "Buenas prácticas para entornos colaborativos",
      texto:
        "Defina normas claras para etiquetado y estructuración de artefactos (metadatos, taxonomías compartidas), establezca canales de conocimiento por temas y comunidades, designe facilitadores de conocimiento (knowledge managers o community managers) y programe sesiones periódicas de intercambio y lecciones aprendidas. El McKinsey Global Institute (2012) estimó que las herramientas de colaboración social pueden incrementar la productividad de los trabajadores del conocimiento entre un 20 y un 25 %, siempre que vayan acompañadas de cambio cultural.",
    },
  ],
  videos: [
    {
      title: "Etienne Wenger: Introducción a las Comunidades de Práctica (en español)",
      id: "e2mt4ClU1Zw",
      descripcion: "El propio Wenger explica en español la teoría y aplicaciones de las comunidades de práctica.",
    },
    {
      title: "¿Qué son las Comunidades de Práctica?",
      id: "zsRNauNQ-Ao",
      descripcion: "Definición clara y práctica del concepto de Comunidades de Práctica aplicado al e-learning y las organizaciones.",
    },
    {
      title: "Las Comunidades de Práctica — Netmind Masterclass",
      id: "o5fYvYfQ-mw",
      descripcion: "Masterclass práctica sobre cómo crear y gestionar comunidades de práctica en organizaciones.",
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
        "Peter Senge (1990) introdujo el concepto de 'organización que aprende' con su obra La Quinta Disciplina. Identificó cinco disciplinas interdependientes: (1) dominio personal (compromiso con el crecimiento continuo), (2) modelos mentales (cuestionamiento de supuestos profundos), (3) visión compartida (construcción colectiva de futuros deseables), (4) aprendizaje en equipo (diálogo y pensamiento colectivo) y (5) pensamiento sistémico (la disciplina integradora que une todas las demás). Una organización que aprende no solo resuelve problemas presentes, sino que desarrolla capacidad meta-cognitiva para adaptarse continuamente.",
    },
    {
      subtitulo: "Bucles de aprendizaje organizacional",
      texto:
        "Argyris y Schön (1978) distinguieron entre aprendizaje de bucle simple (single-loop: corregir errores sin cuestionar los supuestos que los generan) y de bucle doble (double-loop: cuestionar y modificar los supuestos y valores subyacentes). Un tercer nivel, el deuteraprendizaje (triple-loop), implica aprender cómo aprendemos, cuestionando el marco completo de referencia. Las organizaciones de alto desempeño practican el aprendizaje de bucle doble, lo que les permite innovar y adaptarse estratégicamente, no solo corregir eficiencias operativas.",
    },
    {
      subtitulo: "Memoria organizacional",
      texto:
        "La memoria organizacional (Walsh y Ungson, 1991) es el almacén de información del pasado que puede ser recuperado para tomar decisiones presentes. Se almacena en cinco repositorios: individuos (conocimiento en mentes de empleados), cultura (valores y supuestos compartidos), transformaciones (procesos y rutinas), estructuras (roles, reglas y procedimientos) y ecología (el entorno físico y la distribución del espacio). La gestión deliberada de esta memoria, mediante taxonomías, repositorios indexados y curación editorial, evita que la organización 'olvide' lo aprendido cuando rotan sus personas clave.",
    },
    {
      subtitulo: "El ciclo de aprendizaje experiencial de Kolb",
      texto:
        "David Kolb (1984) propuso que el aprendizaje adulto sigue un ciclo iterativo de cuatro etapas: (1) Experiencia concreta (vivir la situación), (2) Observación reflexiva (analizar qué ocurrió y por qué), (3) Conceptualización abstracta (formular principios generales transferibles) y (4) Experimentación activa (aplicar lo aprendido en nuevas situaciones). Este modelo tiene implicaciones directas para el diseño de programas de formación: los adultos aprenden mejor cuando conectan la teoría con experiencias propias. Los after-action reviews y las retrospectivas ágiles son aplicaciones directas de este ciclo.",
    },
    {
      subtitulo: "Transferencia de conocimiento intergeneracional",
      texto:
        "Con la convivencia de cuatro generaciones en el mercado laboral —Baby Boomers, Generación X, Millennials y Generación Z—, la transferencia intergeneracional de conocimiento se vuelve crítica. La mentoría inversa (reverse mentoring), en la que empleados jóvenes comparten competencias digitales con trabajadores senior mientras reciben conocimiento tácito y experiencia, crea flujos bidireccionales de valor. Programas estructurados de transferencia de conocimiento ante jubilaciones y rotación de personal evitan la pérdida irreversible de know-how crítico acumulado durante décadas.",
    },
    {
      subtitulo: "Estrategias prácticas para el aprendizaje organizacional",
      texto:
        "Garvin (1993) propuso que una organización que aprende debe ser hábil en cinco actividades: resolución sistemática de problemas (con datos, no intuición), experimentación controlada, aprender de la propia experiencia e historia, aprender de otros (benchmarking, mejores prácticas) y transferir el conocimiento de forma rápida y eficiente. Implemente after-action reviews, repositorios indexados de lecciones aprendidas, plataformas de e-learning, universidades corporativas y métricas como tasa de reutilización de lecciones aprendidas y tiempo medio de recuperación de información.",
    },
  ],
  videos: [
    {
      title: "¿Qué es una organización que aprende? — Peter Senge, MIT",
      id: "vc2ruCErTok",
      descripcion: "El propio Peter Senge (MIT Sloan) define la organización que aprende y sus disciplinas fundamentales.",
    },
    {
      title: "After Action Review — ¿Qué es y cómo se hace?",
      id: "oSktXK9OHy8",
      descripcion: "Explicación en 2 minutos sobre el After Action Review, herramienta clave para capturar lecciones aprendidas.",
    },
    {
      title: "El Ciclo de Kolb — Aprendizaje Experiencial",
      id: "z1H7sESMuvo",
      descripcion: "Explicación en español del ciclo de aprendizaje experiencial de Kolb y cómo aplicarlo en formación.",
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
    url: "https://openlibrary.org/isbn/9780195092691",
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
    url: "https://openlibrary.org/isbn/9780226672984",
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
    url: "https://openlibrary.org/isbn/9781578513017",
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
    url: "https://openlibrary.org/isbn/9789506414306",
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
    url: "https://openlibrary.org/isbn/9780887306617",
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
    url: "https://openlibrary.org/isbn/9780521663632",
  },
  {
    id: 7,
    tipo: "Libro",
    autores: "Argyris, C. & Schön, D.",
    año: 1978,
    titulo: "Organizational Learning: A Theory of Action Perspective",
    editorial: "Addison-Wesley",
    lugar: "Reading, EE. UU.",
    isbn: "978-0201001747",
    temas: [4],
    url: "https://openlibrary.org/isbn/9780201001747",
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
    url: "https://doi.org/10.2307/2666999",
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
    url: "https://doi.org/10.1287/orsc.5.1.14",
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
    url: "https://doi.org/10.5465/amr.1991.4279490",
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
    temas: [4],
    url: "https://hbr.org/1993/07/building-a-learning-organization",
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
    temas: [2],
    url: "https://hbr.org/1998/09/how-to-kill-creativity",
  },
  {
    id: 13,
    tipo: "Informe",
    autores: "McKinsey Global Institute",
    año: 2012,
    titulo: "The Social Economy: Unlocking Value and Productivity Through Social Technologies",
    editorial: "McKinsey & Company",
    temas: [3],
    url: "https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy",
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
    url: "https://openlibrary.org/isbn/9781578518371",
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
    url: "https://openlibrary.org/isbn/9780471997399",
  },
  {
    id: 16,
    tipo: "Libro",
    autores: "Kolb, D. A.",
    año: 1984,
    titulo: "Experiential Learning: Experience as the Source of Learning and Development",
    editorial: "Prentice Hall",
    lugar: "Englewood Cliffs, EE. UU.",
    isbn: "978-0132952613",
    temas: [4],
    url: "https://openlibrary.org/isbn/9780132952613",
  },
  {
    id: 17,
    tipo: "Artículo",
    autores: "Szulanski, G.",
    año: 1996,
    titulo: "Exploring Internal Stickiness: Impediments to the Transfer of Best Practice within the Firm",
    revista: "Strategic Management Journal",
    volumen: "17(S2)",
    paginas: "27–43",
    doi: "10.1002/smj.4250171105",
    temas: [3],
    url: "https://doi.org/10.1002/smj.4250171105",
  },
];

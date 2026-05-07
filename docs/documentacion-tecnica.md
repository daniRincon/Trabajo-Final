# Documentación Técnica
## Sitio Web — Gestión del Conocimiento

**Proyecto educativo universitario**
**Curso:** Gestión del Conocimiento
**Año:** 2026
**Equipo:** Luis Daniel Martinez Rincon · Horacio Palacios Palacios · Dangelly Angelica Blandon Negrete · Karime Salazar Hinestroza

---

## 1. Descripción General

Sitio web educativo de una sola página (*Single Page Application*) que presenta los fundamentos teóricos y prácticos de la Gestión del Conocimiento. Cubre cuatro subtemas principales con contenido académico, videos embebidos, estadísticas y bibliografía completa con acceso directo a las fuentes.

**URL de producción:** https://gestion-conocimiento.vercel.app

---

## 2. Stack Tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (Pages Router) | ^16.2.4 |
| UI | React | ^18.3.1 |
| Estilos | Tailwind CSS | ^3.4.3 |
| Animaciones | Framer Motion | ^11.1.9 |
| SEO | next-seo | ^6.5.0 |
| Íconos | react-icons | ^5.1.0 |
| Linting | ESLint + eslint-config-next | ^8.57.0 |
| Build | PostCSS + Autoprefixer | — |
| Despliegue | Vercel | — |

---

## 3. Estructura de Archivos

```
Trabajo Final/
│
├── pages/
│   ├── index.js          # Página principal — orquesta todos los componentes
│   ├── _app.js           # Wrapper global de la aplicación
│   ├── _document.js      # HTML base del documento
│   └── sitemap.xml.js    # Generación dinámica del sitemap
│
├── components/
│   ├── SEO.jsx           # Meta tags, Open Graph y datos estructurados
│   ├── Navbar.jsx        # Barra de navegación fija con scroll detection
│   ├── Hero.jsx          # Sección de inicio / portada
│   ├── TopicSection.jsx  # Sección reutilizable para cada subtema
│   ├── ResumenSection.jsx# Conceptos transversales y línea de tiempo
│   ├── FuentesSection.jsx# Bibliografía con filtros y botones de acceso
│   └── Footer.jsx        # Pie de página con integrantes y recursos
│
├── data/
│   └── content.js        # FUENTE ÚNICA DE DATOS — todo el contenido del sitio
│
├── styles/
│   └── globals.css       # Estilos globales + directivas Tailwind
│
├── public/
│   └── robots.txt        # Instrucciones para motores de búsqueda
│
├── docs/
│   ├── documentacion-tecnica.md  # Este archivo
│   └── manual-de-usuario.md      # Guía de uso para el visitante
│
├── next.config.js        # Configuración de Next.js
├── tailwind.config.js    # Paleta de colores y tipografía personalizada
├── postcss.config.js     # Procesamiento de CSS
├── vercel.json           # Configuración de despliegue
├── .eslintrc.json        # Reglas de linting
└── package.json          # Dependencias y scripts
```

---

## 4. Arquitectura de la Aplicación

```
pages/index.js
│
├── <SEO />               → Meta tags dinámicos
├── <Navbar />            → Navegación fija global
├── <main>
│   ├── <Hero />                    → Portada
│   ├── <TopicSection tema={tema1} index={0} />   → Subtema 1
│   ├── <TopicSection tema={tema2} index={1} />   → Subtema 2
│   ├── <TopicSection tema={tema3} index={2} />   → Subtema 3
│   ├── <TopicSection tema={tema4} index={3} />   → Subtema 4
│   ├── <ResumenSection />          → Síntesis y línea de tiempo
│   └── <FuentesSection fuentes={fuentes} />      → Bibliografía
└── <Footer />            → Pie de página
```

El flujo de datos es **unidireccional**: `data/content.js` → `pages/index.js` → Componentes. Ningún componente genera ni modifica datos propios.

---

## 5. Estructura de Datos (`data/content.js`)

### 5.1 `siteConfig`

```js
export const siteConfig = {
  title: string,       // Título del sitio (usado en <title> y Open Graph)
  description: string, // Descripción para SEO
  url: string,         // URL de producción
  author: string,      // Autor / crédito
  keywords: string[],  // Palabras clave para SEO
  team: string[],      // Nombres de los integrantes del equipo
};
```

### 5.2 Estructura de cada `tema` (tema1 – tema4)

```js
export const tema1 = {
  id: string,          // Identificador único (usado en id HTML y SEO)
  titulo: string,      // Título del subtema
  icon: string,        // Emoji decorativo
  color: "blue" | "amber" | "green" | "purple",  // Paleta de color
  resumen: string,     // Párrafo introductorio (aparece en el header)

  estadisticas: [      // Tarjetas de métricas (máx. 3 recomendado)
    {
      valor: string,       // Número o porcentaje destacado
      descripcion: string, // Texto explicativo corto
    }
  ],

  contenido: [         // Bloques de contenido (6 bloques por subtema)
    {
      subtitulo: string,   // Encabezado del bloque
      texto: string,       // Párrafo de contenido académico
    }
  ],

  videos: [            // Videos de YouTube embebidos (3 por subtema)
    {
      title: string,       // Título del video
      id: string,          // ID de YouTube (parte final de la URL)
      descripcion: string, // Descripción breve para el usuario
    }
  ],
};
```

### 5.3 Estructura de `fuentes`

```js
export const fuentes = [
  {
    id: number,          // Número de referencia correlativo
    tipo: "Libro" | "Artículo" | "Informe",
    temas: number[],     // Subtemas a los que aplica (1, 2, 3 o 4)
    titulo: string,      // Título completo de la obra
    autores: string,     // Autores en formato APA
    año: number,         // Año de publicación
    // Campos opcionales según tipo:
    editorial: string,   // Para libros
    lugar: string,       // Ciudad de publicación (libros)
    isbn: string,        // ISBN-13 (libros)
    revista: string,     // Para artículos científicos
    volumen: string,
    paginas: string,
    doi: string,         // DOI (artículos) — genera botón "Ver artículo"
    url: string,         // URL directa — genera botón "Ver fuente"
  }
];
```

---

## 6. Sistema de Colores (`TopicSection.jsx`)

Cada subtema tiene una paleta asignada a través del campo `color`. El componente `TopicSection` usa un `colorMap` interno:

| Color | Subtema | Tailwind base |
|-------|---------|---------------|
| `blue` | Explícito vs Tácito | `primary-*` |
| `amber` | Innovación y Cultura | `amber-*` |
| `green` | Trabajo Colaborativo | `emerald-*` |
| `purple` | Aprendizaje Organizacional | `purple-*` |

El `colorMap` define clases para: fondo de sección, borde, badge de subtema, ícono, título, tarjetas de estadísticas, encabezados de bloque, puntos decorativos, banner de videos y tarjetas de video.

---

## 7. Componentes — Referencia

### `Navbar.jsx`
- Barra de navegación fija (`position: fixed`, `z-50`)
- Cambia de transparente a `bg-white/95` con `backdrop-blur` al superar 60px de scroll
- Detecta la sección activa con click (no con Intersection Observer)
- Menú hamburger en móvil; se cierra al hacer clic fuera
- Links: Inicio, 4 subtemas, Fuentes

### `Hero.jsx`
- Portada con gradiente `from-primary-900 via-primary-800 to-primary-600`
- Muestra los nombres del equipo desde `siteConfig.team`
- Dos CTAs: "Explorar contenido" (`#subtema-1`) y "Ver fuentes" (`#fuentes`)
- Cuatro tarjetas de temas destacados con íconos
- Flecha de scroll animada al fondo

### `TopicSection.jsx`
- Componente reutilizable parametrizado con `tema` e `index`
- Secciones alternas: índice par = fondo blanco, índice impar = fondo de color suave
- Subsecciones: header, estadísticas (grid 3 col), contenido (grid 2 col), videos
- Sección de videos con fondo oscuro (`bg-gray-950`), tarjetas en `bg-gray-900`
- Iframes embebidos con dominio `youtube-nocookie.com` (modo de privacidad reforzada)
- Aspecto 16:9 logrado con `paddingTop: 56.25%` + hijo `position: absolute`

### `ResumenSection.jsx`
- Conceptos transversales a los cuatro subtemas
- Línea de tiempo de hitos históricos en Gestión del Conocimiento

### `FuentesSection.jsx`
- Filtros interactivos por subtema (estado local con `useState`)
- Grid de tarjetas de referencias bibliográficas
- Botón verde "Ver artículo (DOI)" cuando existe `f.doi`
- Botón azul "Ver fuente" cuando existe `f.url`
- Nota metodológica sobre formato APA 7.ª edición

### `Footer.jsx`
- Grid de 4 columnas: Marca, Subtemas, Recursos, Integrantes
- Equipo generado dinámicamente desde `siteConfig.team`
- Links rápidos a subtemas y fuentes bibliográficas clave

---

## 8. SEO y Metadatos

El componente `SEO.jsx` configura:
- `<title>` con el título del sitio
- `<meta name="description">` para buscadores
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`)
- Twitter Card tags
- Datos estructurados JSON-LD (schema.org `WebSite`)
- Sitemap dinámico generado en `pages/sitemap.xml.js`
- `robots.txt` en `public/`

---

## 9. Scripts de Desarrollo

```bash
# Iniciar servidor de desarrollo (puerto 3000 por defecto)
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción (requiere build previo)
npm start

# Análisis de código con ESLint
npm run lint
```

---

## 10. Despliegue en Vercel

El proyecto se despliega automáticamente en Vercel al hacer push a la rama `main` del repositorio Git.

**Variables de entorno requeridas:** Ninguna (el sitio es completamente estático en datos).

**Configuración relevante (`vercel.json`):** Ajustes de headers y rutas para el sitemap.

**Proceso:**
1. Push a `main` → Vercel detecta cambios
2. Vercel ejecuta `npm run build`
3. Next.js genera las páginas estáticas
4. Vercel despliega en CDN global automáticamente

---

## 11. Cómo Modificar el Contenido

**Todo el contenido del sitio vive en `data/content.js`.** Para actualizar el sitio:

### Cambiar texto de un subtema
Editar los campos `titulo`, `resumen` o los objetos dentro de `contenido[]` en el objeto `tema1`, `tema2`, `tema3` o `tema4`.

### Agregar un bloque de contenido
Añadir un objeto `{ subtitulo: "...", texto: "..." }` al array `contenido` del tema correspondiente.

### Cambiar un video
1. Obtener el ID del video de YouTube (la parte `?v=XXXXXXX` de la URL)
2. Reemplazar el campo `id` del objeto dentro de `videos[]`
3. Actualizar `title` y `descripcion` según corresponda

### Agregar una fuente bibliográfica
Añadir un objeto al array `fuentes` con todos los campos correspondientes al tipo (Libro, Artículo o Informe). Asignar un `id` correlativo y los números de `temas` a los que aplica.

### Cambiar los integrantes
Editar el array `siteConfig.team` en `data/content.js`. Los cambios se reflejan automáticamente en Hero y Footer.

---

## 12. Decisiones de Diseño

| Decisión | Justificación |
|----------|--------------|
| Single Page Application | Favorece la lectura continua y el scroll narrativo |
| Datos centralizados en `content.js` | Un solo punto de modificación para todo el contenido |
| `youtube-nocookie.com` para iframes | Reduce cookies de seguimiento para los visitantes |
| Open Library para URLs de libros | URLs canónicas y permanentes basadas en ISBN |
| DOI para artículos científicos | Identificador permanente internacional |
| Tailwind CSS utility-first | Estilos colocalizados con los componentes, sin archivos CSS externos |
| Paleta de colores por subtema | Diferenciación visual inmediata entre secciones |

---

*Documentación generada: mayo 2026*

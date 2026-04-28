# 🧩 Gestión del Conocimiento — Proyecto Educativo

Web informativa y responsiva sobre **Gestión del Conocimiento**, construida con **Next.js 14** y **Tailwind CSS**, optimizada para SEO y desplegada en **Vercel**.

## 🌐 Demo en vivo

> `https://gestion-conocimiento.vercel.app`

---

## 📚 Subtemas

| # | Subtema | Color |
|---|---------|-------|
| 1 | Conocimiento Explícito vs Tácito en las Organizaciones | 🔵 Azul |
| 2 | Innovación, Cultura y Gestión del Trabajo | 🟡 Ámbar |
| 3 | Entorno de Trabajo Colaborativo y Comunicación del Conocimiento | 🟢 Verde |
| 4 | Fomento del Aprendizaje y la Memoria Organizacional | 🟣 Púrpura |

---

## 🚀 Tecnologías

- **Framework:** Next.js 14 (Pages Router)
- **Estilos:** Tailwind CSS 3
- **SEO:** Meta tags, Open Graph, JSON-LD Schema.org, Sitemap dinámico
- **Despliegue:** Vercel

---

## 📖 Fuentes bibliográficas

Las **15 referencias** académicas están centralizadas en `data/content.js`. Incluyen:

- Nonaka & Takeuchi (1995) — Modelo SECI
- Polanyi (1966) — Conocimiento tácito
- Senge (1990) — La Quinta Disciplina
- Davenport & Prusak (1998) — Working Knowledge
- Wenger (1998) — Comunidades de Práctica
- Argyris & Schön (1978) — Aprendizaje organizacional
- Drucker (1993) — Trabajador del conocimiento
- Edmondson (1999) — Seguridad psicológica
- Garvin (1993) — Learning Organization
- Amabile (1998) — Creatividad e innovación
- Chesbrough (2003) — Open Innovation
- McKinsey Global Institute (2012) — Herramientas colaborativas
- Probst, Raub & Romhardt (1999) — Bloques de gestión del conocimiento
- Walsh & Ungson (1991) — Memoria organizacional
- Nonaka (1994) — Teoría dinámica del conocimiento

> Formato: **APA 7.ª edición**

---

## 🛠️ Instalación y desarrollo local

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Abrir en el navegador
# http://localhost:3000
```

---

## 🚢 Despliegue en Vercel

1. Sube el proyecto a un repositorio de **GitHub**
2. Ve a [vercel.com](https://vercel.com) → **New Project**
3. Importa el repositorio
4. Vercel detecta automáticamente Next.js
5. Haz clic en **Deploy** ✅

---

## 📁 Estructura del proyecto

```
├── components/
│   ├── SEO.jsx              # Meta tags y JSON-LD
│   ├── Navbar.jsx           # Navegación responsiva
│   ├── Hero.jsx             # Sección de bienvenida
│   ├── TopicSection.jsx     # Componente reutilizable por subtema
│   ├── ResumenSection.jsx   # Conceptos transversales + línea de tiempo
│   ├── FuentesSection.jsx   # Bibliografía filtrable
│   └── Footer.jsx           # Pie de página
├── data/
│   └── content.js           # ← TODA la información y fuentes
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js             # Página principal
│   └── sitemap.xml.js       # Sitemap dinámico para SEO
├── public/
│   └── robots.txt
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.js
└── vercel.json
```

---

## ✅ Características SEO

- ✅ Título y descripción únicos
- ✅ Open Graph para redes sociales
- ✅ JSON-LD Schema.org (EducationalOrganization)
- ✅ Sitemap XML dinámico
- ✅ robots.txt
- ✅ Cabeceras de seguridad HTTP
- ✅ Fuente Inter (Google Fonts) optimizada con `display=swap`
- ✅ `lang="es"` en el documento HTML
- ✅ `aria-label` y semántica HTML5

---

*Proyecto académico — Gestión del Conocimiento — 2026*

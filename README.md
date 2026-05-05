# Sitio Web de Empresa Contratista

Sitio profesional construido con **Astro + Tailwind CSS + MDX**. Optimizado para velocidad, SEO y facilidad de mantenimiento.

## Características

- Páginas: Inicio, Nosotros, Servicios, Proyectos, Contacto
- Sistema de proyectos basado en archivos `.mdx` (escribes Markdown, sale página completa)
- Filtrado de proyectos por tipo
- Optimización automática de imágenes (WebP/AVIF, responsive)
- Animaciones suaves al hacer scroll
- Transiciones entre páginas
- Botón flotante de WhatsApp
- Formulario de contacto integrado
- Diseño responsive (móvil, tablet, desktop)
- 100% accesible (WCAG)
- SEO optimizado (Open Graph, sitemap, meta tags)

---

## Requisitos

- **Node.js** 18 o superior — descarga: https://nodejs.org
- Editor de código (recomendado: VS Code)

---

## Instalación

1. **Clona o descarga** este proyecto en tu máquina

2. **Abre la carpeta** en una terminal:
   ```bash
   cd sitio-contratistas
   ```

3. **Instala las dependencias**:
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

5. **Abre tu navegador** en: http://localhost:4321

---

## Estructura del proyecto

```
sitio-contratistas/
├── public/                    # Archivos estaticos (favicon, robots.txt)
├── src/
│   ├── assets/                # Imagenes generales del sitio
│   ├── components/            # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── ProyectoCard.astro
│   │   ├── GaleriaProyecto.astro
│   │   └── WhatsAppFloat.astro
│   ├── content/
│   │   ├── config.ts          # Schema de las colecciones
│   │   └── proyectos/         # Proyectos en .mdx (uno por archivo)
│   │       ├── images/        # Imagenes de los proyectos
│   │       └── nave-industrial-ejemplo.mdx
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Layout base (header, footer, etc)
│   │   └── ProyectoLayout.astro  # Layout para paginas de proyectos
│   ├── pages/                 # Cada archivo aqui es una ruta
│   │   ├── index.astro        # /
│   │   ├── nosotros.astro     # /nosotros
│   │   ├── servicios.astro    # /servicios
│   │   ├── contacto.astro     # /contacto
│   │   └── proyectos/
│   │       ├── index.astro    # /proyectos
│   │       └── [slug].astro   # /proyectos/[slug] (dinamico)
│   └── styles/
│       └── global.css         # Estilos globales y Tailwind
├── astro.config.mjs           # Configuracion de Astro
├── tailwind.config.mjs        # Configuracion de Tailwind
├── tsconfig.json              # Configuracion de TypeScript
└── package.json
```

---

## Cómo agregar un proyecto nuevo

### Paso 1: Coloca las imágenes

Pon las imágenes del proyecto en:
```
src/content/proyectos/images/
```

Recomendado:
- 1 foto de portada en alta resolución (mínimo 1920px de ancho)
- 5 a 15 fotos para la galería

### Paso 2: Crea el archivo .mdx

Crea un archivo nuevo en `src/content/proyectos/`. Ejemplo: `oficinas-corporativas-acme.mdx`

```mdx
---
titulo: "Remodelación de Oficinas ACME"
cliente: "ACME Corp"
ubicacion: "CDMX, México"
ano: 2024
duracion: "3 meses"
metros: 800
tipo: "oficinas"
descripcionCorta: "Remodelación completa de 800 m² de oficinas corporativas..."
fotoPortada: "./images/acme-portada.jpg"
galeria:
  - "./images/acme-1.jpg"
  - "./images/acme-2.jpg"
destacado: true
tags:
  - "oficinas"
  - "cdmx"
fechaPublicacion: 2024-11-20
---

## El reto

Aquí describes el reto del proyecto...

## Nuestra solución

Aquí describes cómo lo resolvieron...

## Resultado

Aquí los resultados finales...
```

### Paso 3: Listo

Guarda el archivo. Si tienes el servidor corriendo (`npm run dev`), el proyecto aparecerá automáticamente en:
- La página principal (si está marcado como `destacado: true`)
- La página de proyectos (`/proyectos`)
- Su propia URL: `/proyectos/oficinas-corporativas-acme`

**No necesitas tocar código.** Solo creas el archivo `.mdx`.

---

## Personalización

### Colores de la marca

Edita `tailwind.config.mjs` y cambia los valores en `theme.extend.colors`:

```javascript
colors: {
  primary: { /* tus colores */ },
  accent: { DEFAULT: '#tu-color', dark: '#tu-color-oscuro' },
}
```

### Datos de contacto

Cambia los datos en estos archivos:
- `src/components/Footer.astro` — email, teléfono, redes sociales
- `src/components/WhatsAppFloat.astro` — número de WhatsApp
- `src/pages/contacto.astro` — toda la información de contacto

### Logo

Reemplaza el placeholder en:
- `src/components/Header.astro` (logo del header)
- `src/components/Footer.astro` (logo del footer)

Sugerencia: pon tu logo como SVG en `src/assets/logo.svg` y reemplaza con `<img src="/logo.svg" alt="Logo" />`.

### Textos

Todos los textos están en los archivos `.astro` de `src/pages/`. Edita directamente en cada archivo. Los textos son fáciles de identificar entre las etiquetas HTML.

---

## Formulario de contacto

Para que el formulario funcione, configura un servicio:

### Opción 1: Web3Forms (gratis, recomendado)

1. Ve a https://web3forms.com
2. Regístrate y obtén tu `access_key`
3. En `src/pages/contacto.astro`, busca `TU_ACCESS_KEY` y reemplázalo con tu clave

### Opción 2: Formspree

1. Ve a https://formspree.io
2. Crea una cuenta y un formulario
3. Cambia el `action` del formulario por la URL que te dan

---

## Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo en http://localhost:4321 |
| `npm run build` | Genera el sitio para producción en `dist/` |
| `npm run preview` | Previsualiza el sitio compilado localmente |

---

## Despliegue (publicar el sitio)

### Opción 1: Vercel (gratis, recomendado)

1. Crea cuenta en https://vercel.com
2. Conecta tu repositorio de GitHub
3. Vercel detecta automáticamente que es Astro
4. Cada push a la rama principal redespliega automáticamente

### Opción 2: Netlify

1. Crea cuenta en https://netlify.com
2. Conecta tu repositorio
3. Build command: `npm run build`
4. Publish directory: `dist`

### Opción 3: Cloudflare Pages

1. Crea cuenta en https://pages.cloudflare.com
2. Conecta tu repositorio
3. Framework preset: Astro

Las tres opciones son gratis para sitios personales/pequeños.

---

## Próximos pasos sugeridos

- [ ] Reemplazar contenido de ejemplo con datos reales
- [ ] Agregar logo de la empresa (SVG recomendado)
- [ ] Configurar `access_key` de Web3Forms
- [ ] Cambiar número de WhatsApp en `WhatsAppFloat.astro`
- [ ] Subir las primeras imágenes y crear los primeros 3-5 proyectos
- [ ] Actualizar `astro.config.mjs` con el dominio real (campo `site:`)
- [ ] Crear página `/aviso-de-privacidad` (importante legalmente)
- [ ] Configurar Google Analytics o Plausible (opcional)
- [ ] Configurar Open Graph image (`/og-image.jpg`)

---

## Soporte

Documentación oficial:
- Astro: https://docs.astro.build
- Tailwind: https://tailwindcss.com/docs
- MDX: https://mdxjs.com

¡Feliz construcción! 🏗️

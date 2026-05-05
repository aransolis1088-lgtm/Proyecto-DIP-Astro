import { defineCollection, z } from 'astro:content';

// ============================================
// COLECCIÓN DE PROYECTOS
// ============================================
// Cada archivo .mdx en src/content/proyectos/
// debe seguir esta estructura en su frontmatter
const proyectos = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    titulo: z.string(),
    cliente: z.string(),
    ubicacion: z.string(),
    ano: z.number(),
    duracion: z.string(), // "6 meses", "1 año", etc.
    metros: z.number().optional(), // metros cuadrados
    tipo: z.enum([
      'industrial',
      'comercial',
      'oficinas',
      'remodelacion',
      'mantenimiento',
      'otro'
    ]),
    descripcionCorta: z.string(), // para listados
    fotoPortada: image(), // imagen optimizada por Astro
    galeria: z.array(image()).optional(),
    destacado: z.boolean().default(false), // si aparece en home
    tags: z.array(z.string()).default([]),
    fechaPublicacion: z.date(),
  }),
});

// ============================================
// COLECCIÓN DE SERVICIOS
// ============================================
const servicios = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    nombre: z.string(),
    descripcionCorta: z.string(),
    icono: z.string(), // nombre del icono o emoji
    imagen: image().optional(),
    orden: z.number().default(0), // para ordenar en la página de servicios
    destacado: z.boolean().default(false),
  }),
});

// ============================================
// COLECCIÓN DE TESTIMONIOS
// ============================================
const testimonios = defineCollection({
  type: 'data', // archivos JSON o YAML
  schema: ({ image }) => z.object({
    nombre: z.string(),
    cargo: z.string(),
    empresa: z.string(),
    foto: image().optional(),
    testimonio: z.string(),
    proyectoRelacionado: z.string().optional(),
  }),
});

// ============================================
// EXPORTAR TODAS LAS COLECCIONES
// ============================================
export const collections = {
  proyectos,
  servicios,
  testimonios,
};

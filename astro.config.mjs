// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://tu-dominio.com', // Cambia por el dominio real
  integrations: [
    tailwind(),
    mdx(),
    react(),
  ],
  image: {
    // Optimización automática de imágenes
    domains: [],
  },
});

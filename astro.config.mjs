// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://tu-dominio.com',
  output: 'server', // Netlify SSR mode
  adapter: netlify(),
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind({ applyBaseStyles: false }), // Reduce CSS base
    prefetch(),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // Optimización agresiva de imágenes
    domains: ['demo-001-three.vercel.app'],
    formats: ['avif', 'webp']
  },
  // Optimizaciones de build
  build: {
    inlineStylesheets: 'auto'
  },
  // Prefetch automático
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  // Compresión
  compressHTML: true,
  // Vite optimizations
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/tailwind']
    }
  }
});
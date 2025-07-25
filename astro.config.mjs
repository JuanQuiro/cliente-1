// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://tu-dominio.com',
  output: 'server',
  adapter: vercel({
    includeFiles: ['dist/**']
  }),
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind({}),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
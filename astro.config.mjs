// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';



// https://astro.build/config -  Jonathan Roofing & Landscaping
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind({})],

  
});
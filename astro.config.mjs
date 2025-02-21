import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
// import { remarkReadingTime } from './src/utils/all';
// import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://blog-grupo-c.netlify.app',
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});

// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.themanwandersglobetours.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) => ![
        '/privacy-policy/',
        '/terms/',
        '/cancellation-policy/',
        '/refund-policy/',
        '/404/',
      ].some((path) => page.endsWith(path)),
      customPages: [],
      serialize(item) {
        // Boost priority for key commercial pages
        if (item.url === 'https://www.themanwandersglobetours.com/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (item.url.includes('/packages/') || item.url.includes('/destinations/')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (item.url.endsWith('/packages/') || item.url.endsWith('/destinations/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
// Triggering Vite restart

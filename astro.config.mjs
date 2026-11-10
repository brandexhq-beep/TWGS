// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.themanwandersglobetours.com',
  trailingSlash: 'never',
  redirects: {
    '/gallery': '/destinations',
    '/packages/south-korea-seoul': '/packages/seoul-6d5n',
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const excluded = [
          '/privacy-policy',
          '/terms',
          '/cancellation-policy',
          '/refund-policy',
          '/404',
        ];
        return !excluded.some((path) => page.endsWith(path) || page.endsWith(path + '/'));
      },
      customPages: [],
      serialize(item) {
        // Boost priority for key commercial and editorial pages
        if (item.url === 'https://www.themanwandersglobetours.com/' || item.url === 'https://www.themanwandersglobetours.com') {
          item.priority = 1.0;
          item.changefreq = /** @type {any} */ ('weekly');
        } else if (item.url.includes('/packages/') || item.url.includes('/destinations/')) {
          item.priority = 0.9;
          item.changefreq = /** @type {any} */ ('weekly');
        } else if (item.url.includes('/blog/')) {
          item.priority = 0.85;
          item.changefreq = /** @type {any} */ ('weekly');
        } else if (item.url.endsWith('/packages') || item.url.endsWith('/destinations') || item.url.endsWith('/blog')) {
          item.priority = 0.85;
          item.changefreq = /** @type {any} */ ('weekly');
        } else if (item.url.includes('/visa') || item.url.includes('/bengaluru-travel-agency')) {
          item.priority = 0.8;
          item.changefreq = /** @type {any} */ ('monthly');
        } else {
          item.priority = 0.7;
          item.changefreq = /** @type {any} */ ('monthly');
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

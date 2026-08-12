import { SITE } from '../data/site';
import { PACKAGES } from '../data/packages';
import { DESTINATIONS } from '../data/destinations';

export async function GET() {
  const images = [];

  // Add destination hero images
  DESTINATIONS.forEach(dest => {
    images.push({
      url: `${SITE.url}/destinations/${dest.slug}`,
      imageLoc: dest.heroImage.startsWith('http') ? dest.heroImage : `${SITE.url}${dest.heroImage}`,
      imageTitle: `${dest.name} travel package`,
      imageCaption: dest.tagline
    });
  });

  // Add package hero and gallery images
  PACKAGES.forEach(pkg => {
    const pageUrl = `${SITE.url}/packages/${pkg.slug}`;
    images.push({
      url: pageUrl,
      imageLoc: pkg.heroImage.startsWith('http') ? pkg.heroImage : `${SITE.url}${pkg.heroImage}`,
      imageTitle: `${pkg.name}`,
      imageCaption: pkg.tagline
    });

    pkg.galleryImages?.forEach(img => {
      images.push({
        url: pageUrl,
        imageLoc: img.startsWith('http') ? img : `${SITE.url}${img}`,
        imageTitle: `${pkg.name} - Gallery`,
      });
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${images.map(img => `
  <url>
    <loc>${img.url}</loc>
    <image:image>
      <image:loc>${img.imageLoc.replace(/&/g, '&amp;')}</image:loc>
      ${img.imageTitle ? `<image:title>${img.imageTitle.replace(/&/g, '&amp;')}</image:title>` : ''}
      ${img.imageCaption ? `<image:caption>${img.imageCaption.replace(/&/g, '&amp;')}</image:caption>` : ''}
    </image:image>
  </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

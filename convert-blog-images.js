import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function processBlogImages() {
  const blogDir = path.resolve('public/images/blog');
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  const conversions = [
    {
      src: 'C:\\Users\\srush\\.gemini\\antigravity-ide\\brain\\60446b42-30cf-407e-b3d9-717421d29c83\\intl_travel_guide_1788955119416.jpg',
      dest: 'public/images/blog/international-travel-guide.webp',
      width: 1200,
      height: 675,
    },
    {
      src: 'C:\\Users\\srush\\.gemini\\antigravity-ide\\brain\\60446b42-30cf-407e-b3d9-717421d29c83\\blr_holiday_packages_1788955142187.jpg',
      dest: 'public/images/blog/best-international-packages-bengaluru.webp',
      width: 1200,
      height: 675,
    },
    {
      src: 'C:\\Users\\srush\\.gemini\\antigravity-ide\\brain\\60446b42-30cf-407e-b3d9-717421d29c83\\schengen_visa_guide_1788955160762.jpg',
      dest: 'public/images/blog/schengen-visa-guide.webp',
      width: 1200,
      height: 675,
    },
    {
      src: 'public/images/chardham-heli.webp',
      dest: 'public/images/blog/char-dham-helicopter-guide.webp',
      width: 1200,
      height: 675,
    },
    {
      src: 'public/images/switzerland-alpine.webp',
      dest: 'public/images/blog/europe-tour-packages.webp',
      width: 1200,
      height: 675,
    },
  ];

  for (const item of conversions) {
    if (fs.existsSync(item.src)) {
      await sharp(item.src)
        .resize(item.width, item.height, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile(item.dest);
      console.log(`Successfully converted ${item.src} -> ${item.dest}`);
    } else {
      console.error(`Source not found: ${item.src}`);
    }
  }

  // Generate composite or download high-res Bali vs Thailand image
  const baliUrl = 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=85&fm=jpg';
  try {
    const res = await fetch(baliUrl);
    if (res.ok) {
      const buffer = Buffer.from(await res.arrayBuffer());
      await sharp(buffer)
        .resize(1200, 675, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile('public/images/blog/bali-vs-thailand-comparison.webp');
      console.log('Successfully created public/images/blog/bali-vs-thailand-comparison.webp');
    }
  } catch (err) {
    console.error('Error fetching Bali image:', err);
  }
}

processBlogImages().catch(console.error);

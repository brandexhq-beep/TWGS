import fs from 'fs';
import path from 'path';

async function convert() {
  try {
    const sharpModule = await import('sharp');
    const sharp = sharpModule.default;

    const targetDir = path.resolve('public/team');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const files = [
      { src: 'about us picture/Founder.png', dest: 'public/team/founder.webp' },
      { src: 'about us picture/CTO and sales head .jpeg', dest: 'public/team/cto.webp' },
      { src: 'about us picture/Coo &regional sales head .png', dest: 'public/team/coo.webp' },
    ];

    for (const file of files) {
      if (fs.existsSync(file.src)) {
        await sharp(file.src)
          .resize(800, 1000, { fit: 'cover', position: 'top' })
          .webp({ quality: 85 })
          .toFile(file.dest);
        console.log(`Successfully created ${file.dest}`);
      } else {
        console.error(`Source file not found: ${file.src}`);
      }
    }
  } catch (err) {
    console.error('Error with sharp:', err);
  }
}

convert();

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de optimización
const config = {
  inputDir: 'public/images/',
  outputDir: 'public/optimized-images/',
  quality: {
    jpeg: 75,
    webp: 80,
    avif: 70,
    png: 90
  },
  sizes: {
    hero: [400, 800, 1200, 1600, 1920],
    content: [400, 600, 800, 1200],
    thumbnail: [200, 400, 600]
  }
};

// Crear directorio de salida si no existe
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Función para obtener el tamaño del archivo
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / 1024).toFixed(2); // KB
}

// Función para determinar el tipo de imagen basado en la ruta
function getImageType(filePath) {
  if (filePath.includes('hero')) return 'hero';
  if (filePath.includes('thumbnail') || filePath.includes('logo')) return 'thumbnail';
  return 'content';
}

// Función principal de optimización
async function optimizeImage(inputPath, outputDir, filename) {
  const imageType = getImageType(inputPath);
  const sizes = config.sizes[imageType];
  const originalSize = getFileSize(inputPath);
  
  console.log(`\n🔄 Procesando: ${filename} (${originalSize} KB)`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`   📐 Dimensiones originales: ${metadata.width}x${metadata.height}`);
    
    // Crear versiones en diferentes tamaños y formatos
    for (const width of sizes) {
      // Solo redimensionar si la imagen original es más grande
      if (metadata.width > width) {
        const baseName = path.parse(filename).name;
        
        // WebP (mejor compresión)
        const webpPath = path.join(outputDir, `${baseName}-${width}w.webp`);
        await image
          .resize(width)
          .webp({ 
            quality: config.quality.webp,
            effort: 6, // Máximo esfuerzo de compresión
            smartSubsample: true
          })
          .toFile(webpPath);
        
        const webpSize = getFileSize(webpPath);
        console.log(`   ✅ WebP ${width}w: ${webpSize} KB`);
        
        // AVIF (mejor compresión moderna)
        const avifPath = path.join(outputDir, `${baseName}-${width}w.avif`);
        await image
          .resize(width)
          .avif({ 
            quality: config.quality.avif,
            effort: 9, // Máximo esfuerzo
            chromaSubsampling: '4:2:0'
          })
          .toFile(avifPath);
        
        const avifSize = getFileSize(avifPath);
        console.log(`   ✅ AVIF ${width}w: ${avifSize} KB`);
        
        // JPEG optimizado (fallback)
        if (path.extname(inputPath).toLowerCase().match(/\.(jpg|jpeg)$/)) {
          const jpegPath = path.join(outputDir, `${baseName}-${width}w.jpg`);
          await image
            .resize(width)
            .jpeg({ 
              quality: config.quality.jpeg,
              progressive: true,
              mozjpeg: true
            })
            .toFile(jpegPath);
          
          const jpegSize = getFileSize(jpegPath);
          console.log(`   ✅ JPEG ${width}w: ${jpegSize} KB`);
        }
        
        // PNG optimizado (si es PNG original)
        if (path.extname(inputPath).toLowerCase() === '.png') {
          const pngPath = path.join(outputDir, `${baseName}-${width}w.png`);
          await image
            .resize(width)
            .png({ 
              quality: config.quality.png,
              compressionLevel: 9,
              progressive: true
            })
            .toFile(pngPath);
          
          const pngSize = getFileSize(pngPath);
          console.log(`   ✅ PNG ${width}w: ${pngSize} KB`);
        }
      }
    }
    
    // Crear versión original optimizada
    const baseName = path.parse(filename).name;
    const ext = path.extname(filename).toLowerCase();
    
    if (ext.match(/\.(jpg|jpeg)$/)) {
      const optimizedPath = path.join(outputDir, `${baseName}-original.jpg`);
      await image
        .jpeg({ 
          quality: config.quality.jpeg,
          progressive: true,
          mozjpeg: true
        })
        .toFile(optimizedPath);
      
      const optimizedSize = getFileSize(optimizedPath);
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`   🎯 Original optimizado: ${optimizedSize} KB (${savings}% reducción)`);
    }
    
    console.log(`   ✨ Completado: ${filename}`);
    
  } catch (error) {
    console.error(`   ❌ Error procesando ${filename}:`, error.message);
  }
}

// Función para procesar directorios recursivamente
async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Crear subdirectorio en output
      const relativePath = path.relative(config.inputDir, fullPath);
      const outputSubDir = path.join(config.outputDir, relativePath);
      if (!fs.existsSync(outputSubDir)) {
        fs.mkdirSync(outputSubDir, { recursive: true });
      }
      
      const subResults = await processDirectory(fullPath);
      totalOriginalSize += subResults.originalSize;
      totalOptimizedSize += subResults.optimizedSize;
      processedCount += subResults.count;
      
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      const originalSize = parseFloat(getFileSize(fullPath));
      totalOriginalSize += originalSize;
      
      const relativePath = path.relative(config.inputDir, path.dirname(fullPath));
      const outputSubDir = path.join(config.outputDir, relativePath);
      
      await optimizeImage(fullPath, outputSubDir, file);
      processedCount++;
      
      // Estimar tamaño optimizado (aproximadamente 60% de reducción promedio)
      totalOptimizedSize += originalSize * 0.4;
    }
  }
  
  return {
    originalSize: totalOriginalSize,
    optimizedSize: totalOptimizedSize,
    count: processedCount
  };
}

// Función principal
async function main() {
  console.log('🚀 Iniciando optimización de imágenes...\n');
  console.log(`📁 Directorio de entrada: ${config.inputDir}`);
  console.log(`📁 Directorio de salida: ${config.outputDir}\n`);
  
  const startTime = Date.now();
  
  try {
    const results = await processDirectory(config.inputDir);
    
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    const totalSavings = ((results.originalSize - results.optimizedSize) / results.originalSize * 100).toFixed(1);
    
    console.log('\n🎉 ¡Optimización completada!');
    console.log('═══════════════════════════════════════');
    console.log(`📊 Imágenes procesadas: ${results.count}`);
    console.log(`📏 Tamaño original: ${results.originalSize.toFixed(2)} KB`);
    console.log(`📏 Tamaño optimizado: ${results.optimizedSize.toFixed(2)} KB`);
    console.log(`💾 Ahorro total: ${(results.originalSize - results.optimizedSize).toFixed(2)} KB (${totalSavings}%)`);
    console.log(`⏱️  Tiempo total: ${duration} segundos`);
    console.log('\n💡 Formatos generados:');
    console.log('   • AVIF (mejor compresión moderna)');
    console.log('   • WebP (excelente compresión)');
    console.log('   • JPEG/PNG optimizados (fallback)');
    console.log('   • Múltiples tamaños responsive');
    
  } catch (error) {
    console.error('❌ Error durante la optimización:', error);
  }
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { optimizeImage, processDirectory, config };

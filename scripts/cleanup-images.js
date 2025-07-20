import fs from 'fs';
import path from 'path';

const optimizedDir = 'public/optimized-images/';

// Función para eliminar archivos que no sean AVIF
function cleanupNonAvifImages(directory) {
  const files = fs.readdirSync(directory);
  let deletedCount = 0;
  let deletedSize = 0;

  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const subResults = cleanupNonAvifImages(fullPath);
      deletedCount += subResults.count;
      deletedSize += subResults.size;
    } else if (!file.endsWith('.avif')) {
      // Obtener tamaño antes de eliminar
      const fileSize = stat.size / 1024; // KB
      deletedSize += fileSize;
      
      // Eliminar archivo
      fs.unlinkSync(fullPath);
      deletedCount++;
      
      console.log(`🗑️  Eliminado: ${file} (${fileSize.toFixed(2)} KB)`);
    }
  }

  return { count: deletedCount, size: deletedSize };
}

// Función principal
function main() {
  console.log('🧹 Iniciando limpieza de imágenes no AVIF...\n');
  
  if (!fs.existsSync(optimizedDir)) {
    console.log('❌ El directorio de imágenes optimizadas no existe.');
    return;
  }

  const startTime = Date.now();
  const results = cleanupNonAvifImages(optimizedDir);
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log('\n🎉 ¡Limpieza completada!');
  console.log('═══════════════════════════════════════');
  console.log(`🗑️  Archivos eliminados: ${results.count}`);
  console.log(`💾 Espacio liberado: ${results.size.toFixed(2)} KB`);
  console.log(`⏱️  Tiempo total: ${duration} segundos`);
  console.log('\n✅ Solo quedan archivos AVIF optimizados');
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { cleanupNonAvifImages };

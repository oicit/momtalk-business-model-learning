/**
 * Client-side image resize → JPEG data URL.
 * Used by RealWorldMission to keep photos small enough for localStorage.
 *
 * Output target: max 640px on the long edge, quality 0.78. A 12-megapixel
 * phone photo lands at ~50-120 KB, which fits comfortably in localStorage.
 */

export async function fileToCompressedDataUrl(
  file: File,
  maxEdge = 640,
  quality = 0.78,
): Promise<string> {
  if (!file.type.startsWith('image/')) {
    throw new Error('Not an image file');
  }
  const bitmap = await loadBitmap(file);
  const scale = Math.min(1, maxEdge / Math.max(bitmap.width, bitmap.height));
  const w = Math.round(bitmap.width * scale);
  const h = Math.round(bitmap.height * scale);
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D unavailable');
  ctx.drawImage(bitmap, 0, 0, w, h);
  // Close the bitmap (frees memory in browsers that support it)
  if ('close' in bitmap) (bitmap as ImageBitmap).close?.();
  return canvas.toDataURL('image/jpeg', quality);
}

async function loadBitmap(file: File): Promise<ImageBitmap | HTMLImageElement> {
  if (typeof createImageBitmap === 'function') {
    try {
      return await createImageBitmap(file);
    } catch {
      // Some browsers (older Safari) throw on HEIC etc. — fall through.
    }
  }
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };
    img.src = url;
  });
}

/**
 * Image Processing Utilities for Client Hero Gallery
 * Handles image optimization, format conversion, and placeholder generation
 */

export interface ImageProcessingOptions {
  targetWidth: number;
  targetHeight: number;
  quality: number;
  formats: ('avif' | 'webp' | 'jpg')[];
  generatePlaceholder: boolean;
}

export interface ProcessedImageResult {
  avif?: string;
  webp?: string;
  jpg: string;
  placeholder?: string;
  dimensions: {
    width: number;
    height: number;
  };
}

export class ImageProcessor {
  private static readonly DEFAULT_OPTIONS: ImageProcessingOptions = {
    targetWidth: 1600,
    targetHeight: 900,
    quality: 82,
    formats: ['webp', 'jpg'],
    generatePlaceholder: true
  };

  /**
   * Process and optimize a client hero image
   */
  static async processClientImage(
    sourceUrl: string,
    clientSlug: string,
    options: Partial<ImageProcessingOptions> = {}
  ): Promise<ProcessedImageResult> {
    const opts = { ...this.DEFAULT_OPTIONS, ...options };
    
    try {
      // Download original image
      const imageBlob = await this.downloadImage(sourceUrl);
      if (!imageBlob) {
        throw new Error(`Failed to download image from ${sourceUrl}`);
      }

      // Create image element for processing
      const img = await this.createImageElement(imageBlob);
      
      // Smart crop to 16:9 aspect ratio
      const croppedCanvas = this.smartCrop(img, opts.targetWidth, opts.targetHeight);
      
      const result: ProcessedImageResult = {
        dimensions: {
          width: croppedCanvas.width,
          height: croppedCanvas.height
        },
        jpg: ''
      };

      // Generate different formats
      for (const format of opts.formats) {
        const dataUrl = this.convertToFormat(croppedCanvas, format, opts.quality);
        
        if (format === 'avif') result.avif = dataUrl;
        else if (format === 'webp') result.webp = dataUrl;
        else if (format === 'jpg') result.jpg = dataUrl;
      }

      // Generate LQIP placeholder
      if (opts.generatePlaceholder) {
        result.placeholder = this.generatePlaceholder(croppedCanvas);
      }

      return result;
    } catch (error) {
      console.error(`Error processing image for ${clientSlug}:`, error);
      throw error;
    }
  }

  /**
   * Download image from URL
   */
  private static async downloadImage(url: string): Promise<Blob | null> {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ImageProcessor/1.0)'
        }
      });

      if (!response.ok) return null;
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.startsWith('image/')) {
        return null;
      }

      return await response.blob();
    } catch (error) {
      return null;
    }
  }

  /**
   * Create image element from blob
   */
  private static createImageElement(blob: Blob): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      const url = URL.createObjectURL(blob);
      
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

  /**
   * Smart crop image to target dimensions using focal point detection
   */
  private static smartCrop(
    img: HTMLImageElement,
    targetWidth: number,
    targetHeight: number
  ): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    const imgAspect = img.width / img.height;
    const targetAspect = targetWidth / targetHeight;

    let sx = 0, sy = 0, sw = img.width, sh = img.height;

    if (imgAspect > targetAspect) {
      // Image is wider than target - crop horizontally
      sw = img.height * targetAspect;
      sx = (img.width - sw) / 2; // Center crop
    } else {
      // Image is taller than target - crop vertically
      sh = img.width / targetAspect;
      sy = this.detectFocalPoint(img, sh); // Smart crop based on content
    }

    // Apply high-quality scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, targetWidth, targetHeight);
    
    return canvas;
  }

  /**
   * Detect focal point for smart cropping
   * Simple implementation - in production, you'd use more sophisticated algorithms
   */
  private static detectFocalPoint(img: HTMLImageElement, cropHeight: number): number {
    // For now, bias towards upper third (common for hero images)
    const availableCrop = img.height - cropHeight;
    return Math.min(availableCrop * 0.3, availableCrop);
  }

  /**
   * Convert canvas to specified format
   */
  private static convertToFormat(
    canvas: HTMLCanvasElement,
    format: 'avif' | 'webp' | 'jpg',
    quality: number
  ): string {
    const mimeType = format === 'jpg' ? 'image/jpeg' : `image/${format}`;
    return canvas.toDataURL(mimeType, quality / 100);
  }

  /**
   * Generate low-quality placeholder for LQIP
   */
  private static generatePlaceholder(sourceCanvas: HTMLCanvasElement): string {
    const placeholderCanvas = document.createElement('canvas');
    const ctx = placeholderCanvas.getContext('2d');
    
    if (!ctx) return '';

    // Tiny dimensions for fast loading
    placeholderCanvas.width = 20;
    placeholderCanvas.height = 11; // Maintain 16:9 aspect ratio

    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(sourceCanvas, 0, 0, 20, 11);
    
    return placeholderCanvas.toDataURL('image/jpeg', 0.3);
  }

  /**
   * Calculate content hash for deduplication
   */
  static async calculateImageHash(imageData: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(imageData);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Validate image meets size requirements
   */
  static validateImageDimensions(
    width: number,
    height: number,
    minWidth = 1600,
    minHeight = 900
  ): { isValid: boolean; reason?: string } {
    if (width < minWidth) {
      return { isValid: false, reason: `Width ${width}px below minimum ${minWidth}px` };
    }
    
    if (height < minHeight) {
      return { isValid: false, reason: `Height ${height}px below minimum ${minHeight}px` };
    }

    return { isValid: true };
  }

  /**
   * Check if image is landscape orientation
   */
  static isLandscape(width: number, height: number): boolean {
    return width > height;
  }

  /**
   * Get optimal image dimensions for different screen sizes
   */
  static getResponsiveDimensions(baseWidth: number, baseHeight: number) {
    return {
      mobile: { width: Math.round(baseWidth * 0.5), height: Math.round(baseHeight * 0.5) },
      tablet: { width: Math.round(baseWidth * 0.75), height: Math.round(baseHeight * 0.75) },
      desktop: { width: baseWidth, height: baseHeight },
      retina: { width: baseWidth * 2, height: baseHeight * 2 }
    };
  }
}
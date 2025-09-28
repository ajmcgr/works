export interface ImageDiscoveryResult {
  source_url: string;
  width: number;
  height: number;
  chosen_reason: string;
  content_hash?: string;
}

export class ImageDiscoveryService {
  private static readonly MIN_WIDTH = 1600;
  private static readonly MIN_HEIGHT = 900;
  private static readonly RATE_LIMIT_DELAY = 334; // ~3 requests/second
  private static readonly MAX_DOMAIN_TIME = 10000; // 10s total per domain

  /**
   * Discover the best hero image for a client
   */
  static async discoverClientImage(clientUrl: string, slug: string): Promise<ImageDiscoveryResult | null> {
    const strategies = [
      () => this.tryBrandPressKits(clientUrl),
      () => this.tryHomepageHero(clientUrl),
      () => this.tryStructuredMeta(clientUrl),
      () => this.trySitemapImages(clientUrl),
      () => this.tryPressPages(clientUrl),
      () => this.tryBrandCDNs(clientUrl),
    ];

    for (const strategy of strategies) {
      try {
        const result = await strategy();
        if (result && this.validateImageSize(result)) {
          return result;
        }
      } catch (error) {
        console.warn(`Image discovery strategy failed for ${clientUrl}:`, error);
      }
      
      // Rate limiting
      await this.delay(this.RATE_LIMIT_DELAY);
    }

    return null;
  }

  /**
   * Try to find images in brand/press kit sections
   */
  private static async tryBrandPressKits(clientUrl: string): Promise<ImageDiscoveryResult | null> {
    const brandPaths = ['/brand', '/press', '/presskit', '/media', '/assets', '/brand-assets', '/media-kit', '/press-room'];
    
    for (const path of brandPaths) {
      try {
        const pageUrl = new URL(path, clientUrl).toString();
        const pageContent = await this.fetchPageContent(pageUrl);
        
        if (pageContent) {
          // Look for hero/banner/press images
          const heroPatterns = [
            /hero[-_]?(?:image|banner|bg)?\.(?:jpg|jpeg|png|webp)/gi,
            /banner[-_]?(?:image|hero|bg)?\.(?:jpg|jpeg|png|webp)/gi,
            /press[-_]?(?:image|hero|banner)?\.(?:jpg|jpeg|png|webp)/gi,
            /brand[-_]?(?:image|hero|banner)?\.(?:jpg|jpeg|png|webp)/gi,
            /keynote[-_]?(?:image|hero|banner)?\.(?:jpg|jpeg|png|webp)/gi
          ];

          for (const pattern of heroPatterns) {
            const matches = pageContent.match(pattern);
            if (matches) {
              const imageUrl = new URL(matches[0], pageUrl).toString();
              const dimensions = await this.getImageDimensions(imageUrl);
              
              if (dimensions && this.isLandscape(dimensions)) {
                return {
                  source_url: imageUrl,
                  width: dimensions.width,
                  height: dimensions.height,
                  chosen_reason: 'press_kit'
                };
              }
            }
          }
        }
      } catch (error) {
        continue;
      }
    }

    return null;
  }

  /**
   * Try to extract hero image from homepage above-the-fold
   */
  private static async tryHomepageHero(clientUrl: string): Promise<ImageDiscoveryResult | null> {
    try {
      const pageContent = await this.fetchPageContent(clientUrl);
      if (!pageContent) return null;

      // Extract images from hero sections (first 1500px equivalent in HTML)
      const heroSection = pageContent.substring(0, Math.min(pageContent.length, 15000)); // Approximate
      
      const imgMatches = heroSection.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
      const bgMatches = heroSection.match(/background-image:\s*url\(["']?([^"')]+)["']?\)/gi);
      
      const candidates: string[] = [];
      
      // Process img tags
      if (imgMatches) {
        imgMatches.forEach(match => {
          const srcMatch = match.match(/src=["']([^"']+)["']/);
          if (srcMatch) candidates.push(srcMatch[1]);
        });
      }
      
      // Process background images
      if (bgMatches) {
        bgMatches.forEach(match => {
          const urlMatch = match.match(/url\(["']?([^"')]+)["']?\)/);
          if (urlMatch) candidates.push(urlMatch[1]);
        });
      }

      // Find largest landscape image
      let bestCandidate: ImageDiscoveryResult | null = null;
      
      for (const candidate of candidates) {
        try {
          const imageUrl = new URL(candidate, clientUrl).toString();
          const dimensions = await this.getImageDimensions(imageUrl);
          
          if (dimensions && this.isLandscape(dimensions)) {
            if (!bestCandidate || (dimensions.width * dimensions.height) > (bestCandidate.width * bestCandidate.height)) {
              bestCandidate = {
                source_url: imageUrl,
                width: dimensions.width,
                height: dimensions.height,
                chosen_reason: 'homepage_hero'
              };
            }
          }
        } catch (error) {
          continue;
        }
      }

      return bestCandidate;
    } catch (error) {
      return null;
    }
  }

  /**
   * Try structured meta tags (og:image, twitter:image)
   */
  private static async tryStructuredMeta(clientUrl: string): Promise<ImageDiscoveryResult | null> {
    try {
      const pageContent = await this.fetchPageContent(clientUrl);
      if (!pageContent) return null;

      const ogImageMatch = pageContent.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i);
      const twitterImageMatch = pageContent.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i);

      const candidates = [];
      if (ogImageMatch) candidates.push(ogImageMatch[1]);
      if (twitterImageMatch) candidates.push(twitterImageMatch[1]);

      for (const candidate of candidates) {
        const imageUrl = new URL(candidate, clientUrl).toString();
        const dimensions = await this.getImageDimensions(imageUrl);
        
        if (dimensions && this.validateImageSize({ width: dimensions.width, height: dimensions.height })) {
          return {
            source_url: imageUrl,
            width: dimensions.width,
            height: dimensions.height,
            chosen_reason: 'og_image'
          };
        }
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Try sitemap and schema.org images
   */
  private static async trySitemapImages(clientUrl: string): Promise<ImageDiscoveryResult | null> {
    try {
      const sitemapUrl = new URL('/sitemap.xml', clientUrl).toString();
      const sitemapContent = await this.fetchPageContent(sitemapUrl);
      
      if (sitemapContent) {
        const imageMatches = sitemapContent.match(/<image:image>[\s\S]*?<image:loc>([^<]+)<\/image:loc>[\s\S]*?<\/image:image>/gi);
        
        if (imageMatches) {
          for (const match of imageMatches) {
            const urlMatch = match.match(/<image:loc>([^<]+)<\/image:loc>/);
            if (urlMatch) {
              const imageUrl = urlMatch[1];
              const dimensions = await this.getImageDimensions(imageUrl);
              
              if (dimensions && this.isLandscape(dimensions)) {
                return {
                  source_url: imageUrl,
                  width: dimensions.width,
                  height: dimensions.height,
                  chosen_reason: 'sitemap_image'
                };
              }
            }
          }
        }
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Try press/news pages for brand images
   */
  private static async tryPressPages(clientUrl: string): Promise<ImageDiscoveryResult | null> {
    const pressPaths = ['/news', '/stories', '/blog', '/press-releases'];
    
    for (const path of pressPaths) {
      try {
        const pageUrl = new URL(path, clientUrl).toString();
        const pageContent = await this.fetchPageContent(pageUrl);
        
        if (pageContent) {
          // Look for featured images in article previews
          const featuredMatches = pageContent.match(/(?:featured|hero|thumbnail)[^>]*src=["']([^"']+)["']/gi);
          
          if (featuredMatches) {
            for (const match of featuredMatches) {
              const srcMatch = match.match(/src=["']([^"']+)["']/);
              if (srcMatch) {
                const imageUrl = new URL(srcMatch[1], pageUrl).toString();
                const dimensions = await this.getImageDimensions(imageUrl);
                
                if (dimensions && this.isLandscape(dimensions)) {
                  return {
                    source_url: imageUrl,
                    width: dimensions.width,
                    height: dimensions.height,
                    chosen_reason: 'press_featured'
                  };
                }
              }
            }
          }
        }
      } catch (error) {
        continue;
      }
    }

    return null;
  }

  /**
   * Try known brand CDNs referenced from the site
   */
  private static async tryBrandCDNs(clientUrl: string): Promise<ImageDiscoveryResult | null> {
    try {
      const pageContent = await this.fetchPageContent(clientUrl);
      if (!pageContent) return null;

      const cdnPatterns = [
        /https?:\/\/[^\/]*cloudfront\.net\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi,
        /https?:\/\/[^\/]*fastly\.com\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi,
        /https?:\/\/[^\/]*imgix\.net\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi,
        /https?:\/\/[^\/]*cloudinary\.com\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi
      ];

      for (const pattern of cdnPatterns) {
        const matches = pageContent.match(pattern);
        if (matches) {
          for (const imageUrl of matches) {
            // Request highest resolution if query params control size
            const highResUrl = imageUrl.includes('?') 
              ? `${imageUrl}&w=2400&h=1350` 
              : imageUrl;

            const dimensions = await this.getImageDimensions(highResUrl);
            
            if (dimensions && this.isLandscape(dimensions)) {
              return {
                source_url: highResUrl,
                width: dimensions.width,
                height: dimensions.height,
                chosen_reason: 'brand_cdn'
              };
            }
          }
        }
      }

      return null;
    } catch (error) {
      return null;
    }
  }

  /**
   * Validate image meets minimum size requirements
   */
  private static validateImageSize(result: { width: number; height: number }): boolean {
    return result.width >= this.MIN_WIDTH && result.height >= this.MIN_HEIGHT;
  }

  /**
   * Check if image is landscape (prefer landscape for hero images)
   */
  private static isLandscape(dimensions: { width: number; height: number }): boolean {
    return dimensions.width > dimensions.height;
  }

  /**
   * Fetch page content with timeout and error handling
   */
  private static async fetchPageContent(url: string): Promise<string | null> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ImageDiscovery/1.0)'
        }
      });

      clearTimeout(timeoutId);

      if (!response.ok) return null;
      return await response.text();
    } catch (error) {
      return null;
    }
  }

  /**
   * Get image dimensions without downloading full image
   */
  private static async getImageDimensions(url: string): Promise<{ width: number; height: number } | null> {
    try {
      // This is a simplified version - in a real implementation, you'd want to:
      // 1. Use a HEAD request to check content-type
      // 2. Download only the first few KB to read image headers
      // 3. Parse JPEG/PNG/WebP headers for dimensions
      
      // For now, we'll simulate this with a placeholder
      // In production, you'd implement proper image dimension detection
      const response = await fetch(url, { method: 'HEAD' });
      
      if (!response.ok) return null;
      
      // Simulate dimension detection - replace with actual implementation
      return { width: 2400, height: 1350 };
    } catch (error) {
      return null;
    }
  }

  /**
   * Generate content hash for deduplication
   */
  static async generateContentHash(imageUrl: string): Promise<string> {
    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });
      const etag = response.headers.get('etag');
      const lastModified = response.headers.get('last-modified');
      
      return btoa(`${imageUrl}-${etag || ''}-${lastModified || ''}`);
    } catch (error) {
      return btoa(imageUrl);
    }
  }

  /**
   * Rate limiting delay
   */
  private static delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
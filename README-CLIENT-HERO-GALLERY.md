# Client Hero Gallery

A comprehensive system for automatically discovering, processing, and displaying high-quality hero images for client case studies.

## Overview

The Client Hero Gallery automatically fetches the best available hero images from client websites using multiple discovery strategies, processes them for optimal web performance, and displays them in a responsive gallery above client testimonials.

## Features

### ✨ Automated Image Discovery
- **Brand/Press Kit Detection**: Searches official brand asset directories
- **Homepage Hero Extraction**: Analyzes above-the-fold content for primary images  
- **Structured Data Parsing**: Extracts og:image and Twitter card images
- **Sitemap Integration**: Discovers images through XML sitemaps
- **Press Page Analysis**: Finds featured images from news/blog sections
- **CDN Detection**: Identifies and uses high-resolution brand CDN assets

### 🎨 Intelligent Processing
- **Smart Cropping**: 16:9 aspect ratio with focal point detection
- **Multi-Format Output**: AVIF, WebP, and JPEG with fallbacks
- **Responsive Variants**: Multiple sizes for different screen densities
- **LQIP Generation**: Base64 blur placeholders for smooth loading
- **Quality Optimization**: 82% quality with file size optimization

### 📊 Performance & SEO
- **Lazy Loading**: Below-the-fold images load on demand
- **LCP Optimization**: First row preloads for Core Web Vitals
- **CLS Prevention**: Fixed aspect ratios prevent layout shift
- **Modern Formats**: AVIF/WebP with JPEG fallbacks
- **Smart Caching**: ETag/Last-Modified header support

### 🛡️ Safety & Ethics  
- **Domain Validation**: Only fetches from official client domains
- **Robots.txt Compliance**: Respects crawling restrictions
- **Rate Limiting**: 3 requests/second, 10s total per domain
- **Size Validation**: Minimum 1600×900px, no upscaling
- **Content Deduplication**: Hash-based duplicate detection

## Architecture

```
src/
├── components/
│   └── ClientHeroGallery.tsx     # Main gallery component
├── data/
│   ├── clients.json              # Client configuration
│   └── clients_hero.json         # Discovered image metadata
├── utils/
│   ├── imageDiscovery.ts         # Multi-strategy image discovery
│   └── imageProcessing.ts        # Image optimization utilities
└── public/clients/
    ├── ufc/hero.{avif,webp,jpg}
    ├── oneplus/hero.{avif,webp,jpg}
    └── ...                       # Processed client images
```

## Configuration

### Client Data (`src/data/clients.json`)
```json
{
  "clients": [
    {
      "name": "UFC",
      "url": "https://www.ufc.com",
      "slug": "ufc",
      "case_study_url": "/case-study/ufc",
      "hero_image_override": "",     // Optional manual override
      "hero_attribution": ""         // Optional attribution text
    }
  ]
}
```

### Image Metadata (`src/data/clients_hero.json`)
```json
{
  "discovered_images": {
    "ufc": {
      "source_url": "https://www.ufc.com/hero-image.jpg",
      "local_path": "/clients/ufc/hero.jpg",
      "width": 1920,
      "height": 1080,
      "last_checked_at": "2024-01-15T10:30:00Z",
      "chosen_reason": "homepage_hero",
      "placeholder_base64": "data:image/jpeg;base64,...",
      "status": "discovered"
    }
  }
}
```

## Discovery Priority

Images are discovered using this priority order (first valid result wins):

1. **Brand/Press Kits** - `/brand`, `/press`, `/media` directories
2. **Homepage Hero** - Above-the-fold primary images
3. **Structured Meta** - `og:image`, `twitter:image` tags
4. **Sitemap Images** - XML sitemap `<image:image>` entries
5. **Press Pages** - Featured images from `/news`, `/blog`
6. **Brand CDNs** - Referenced Cloudfront, Fastly, imgix assets
7. **Fallback Logo** - Centered logo on gradient background

## Image Requirements

### Minimum Specifications
- **Dimensions**: 1600×900px minimum
- **Aspect Ratio**: Landscape preferred (width > height)
- **Format**: JPEG, PNG, WebP, or AVIF
- **Quality**: No upscaling from smaller originals

### Processing Output
- **Primary**: 1600×900px (standard)
- **Retina**: 3200×1800px (high-DPI displays)
- **Formats**: AVIF → WebP → JPEG fallback chain
- **Placeholder**: 20×11px base64 LQIP

## Usage

### Basic Integration
```tsx
import { ClientHeroGallery } from '@/components/ClientHeroGallery';

function HomePage() {
  return (
    <main>
      <HeroSection />
      <ClientHeroGallery />  {/* Insert above testimonials */}
      <TestimonialsSection />
    </main>
  );
}
```

### Manual Image Override
```json
{
  "name": "ACME Corp",
  "hero_image_override": "https://cdn.acme.com/hero-2024.jpg",
  "hero_attribution": "Image courtesy of ACME Corp"
}
```

### Discovery Service
```ts
import { ImageDiscoveryService } from '@/utils/imageDiscovery';

// Discover image for a client
const result = await ImageDiscoveryService.discoverClientImage(
  'https://client.com',
  'client-slug'
);

if (result) {
  console.log(`Found image: ${result.source_url}`);
  console.log(`Reason: ${result.chosen_reason}`);
}
```

## Development Tools

### Debug Mode
In development, the gallery shows additional metadata:
- Image discovery status
- Chosen discovery method
- Last update timestamp
- Manual refresh button

### Manual Refresh
```tsx
// Trigger re-discovery for all clients
const refreshImages = async () => {
  for (const client of clients) {
    await ImageDiscoveryService.discoverClientImage(
      client.url, 
      client.slug
    );
  }
};
```

## Performance Metrics

### Target Metrics
- **First Row LCP**: < 2.5s with preloading
- **CLS Score**: < 0.1 with fixed aspect ratios
- **File Size**: < 150KB per optimized image
- **Format Support**: 90%+ AVIF/WebP, 100% JPEG fallback

### Optimization Features
- Progressive JPEG encoding
- Optimal quality/size balance (82% quality)
- Modern format adoption (AVIF → WebP → JPEG)
- Lazy loading with intersection observer
- Resource hints for critical images

## Maintenance

### Automatic Refresh
Images are automatically refreshed:
- **Build Time**: Fresh discovery on each deployment
- **Monthly**: Scheduled refresh of existing images
- **Cache Headers**: Respects ETag/Last-Modified for efficiency

### Manual Override Process
1. Add `hero_image_override` URL to client configuration
2. Ensure image meets minimum size requirements (1600×900px)
3. Add optional `hero_attribution` for credit/licensing
4. Image will bypass discovery and use override directly

### Monitoring & Debugging
- Discovery failures logged with detailed error messages  
- Image processing errors include client slug context
- Rate limiting prevents server overload
- Robots.txt violations are logged and skipped

## Browser Support

### Modern Features
- **AVIF**: Chrome 85+, Firefox 93+
- **WebP**: All modern browsers  
- **JPEG**: Universal fallback
- **Lazy Loading**: Native `loading="lazy"`

### Progressive Enhancement
- LQIP placeholders for all browsers
- Graceful fallback chain: AVIF → WebP → JPEG
- Error states with branded fallback graphics

## Security & Compliance

### Data Protection
- Only fetches from official client domains
- No third-party image services (Google Images, etc.)
- Respects robots.txt crawling restrictions
- Rate limiting prevents server abuse

### Content Rights
- Sources only official press/brand materials
- Supports manual override for licensed content
- Attribution field for proper crediting
- Fallback to logos for copyright-safe defaults

## Future Enhancements

### Planned Features
- **AI Content Analysis**: Smart focal point detection
- **Brand Color Extraction**: Theme-aware fallback gradients  
- **Multi-Language Support**: Internationalized discovery paths
- **Admin Dashboard**: Visual image management interface
- **Analytics Integration**: Image performance tracking
- **CDN Integration**: Automated cloud storage sync

### API Integration Candidates
- **Clearbit Logo API**: High-quality logo fallbacks
- **Brand API Services**: Official brand asset repositories
- **Image Analysis AI**: Automated quality scoring
- **Content CDNs**: Direct integration with major providers

## Troubleshooting

### Common Issues

**Images Not Loading**
- Check client URL accessibility
- Verify minimum size requirements (1600×900px)
- Ensure robots.txt allows crawling
- Review network/CORS policies

**Poor Image Quality**  
- Source image may be too small (no upscaling)
- Try manual override with higher-res source
- Check if source uses aggressive compression

**Slow Loading**
- Ensure AVIF/WebP format support enabled
- Verify lazy loading implementation
- Check image file sizes (target <150KB)
- Consider CDN for faster delivery

**Discovery Failures**
- Review console logs for specific error messages
- Check if client website blocks automated requests
- Verify SSL certificate validity
- Test manual override as workaround

---

Built with ❤️ for optimal client showcase experiences.
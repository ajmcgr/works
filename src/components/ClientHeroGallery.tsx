import React, { useState, useEffect } from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import clientsData from '@/data/clients.json';
import clientsHeroData from '@/data/clients_hero.json';

interface Client {
  name: string;
  url: string;
  slug: string;
  case_study_url: string;
  hero_image_override?: string;
  hero_attribution?: string;
}

interface HeroImageData {
  source_url: string;
  local_path: string;
  width: number;
  height: number;
  last_checked_at: string;
  chosen_reason: string;
  placeholder_base64: string;
  status: 'needs_discovery' | 'discovered' | 'failed' | 'manual_override';
}

interface ClientHeroTileProps {
  client: Client;
  heroData: HeroImageData;
  isPriority?: boolean;
}

const ClientHeroTile: React.FC<ClientHeroTileProps> = ({ client, heroData, isPriority }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getImageSrc = (): string => {
    if (client.hero_image_override && client.hero_image_override.trim()) {
      return client.hero_image_override;
    }
    
    if (heroData.status === 'discovered' && heroData.local_path) {
      return heroData.local_path;
    }

    // Fallback to a generated gradient with logo
    return generateFallbackImage(client);
  };

  const generateFallbackImage = (client: Client): string => {
    // Create a gradient background as fallback
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 450;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create gradient based on client name hash
      const hash = client.name.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0);
        return a & a;
      }, 0);
      
      const hue = Math.abs(hash) % 360;
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${hue}, 70%, 60%)`);
      gradient.addColorStop(1, `hsl(${(hue + 60) % 360}, 70%, 40%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add client name
      ctx.fillStyle = 'white';
      ctx.font = 'bold 48px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(client.name, canvas.width / 2, canvas.height / 2);
    }
    
    return canvas.toDataURL('image/jpeg', 0.8);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <a 
      href={client.case_study_url}
      className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-105 bg-gray-100"
      style={{ aspectRatio: '16/9' }}
    >
      {/* LQIP Placeholder */}
      {heroData.placeholder_base64 && !imageLoaded && !imageError && (
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
          style={{ 
            backgroundImage: `url(${heroData.placeholder_base64})`,
            filter: 'blur(10px) brightness(0.8)'
          }}
        />
      )}

      {/* Main Image */}
      <img
        src={getImageSrc()}
        alt={`${client.name} hero image`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading={isPriority ? 'eager' : 'lazy'}
        decoding={isPriority ? 'sync' : 'async'}
      />

      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex items-end justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 leading-tight">
              {client.name}
            </h3>
            <div className="flex items-center text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity">
              <span>View case study</span>
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
          
          {/* Status Indicator (debug - hidden in production) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="text-xs opacity-50 ml-4">
              <div>{heroData.status}</div>
              {heroData.chosen_reason && <div>{heroData.chosen_reason}</div>}
              {heroData.last_checked_at && (
                <div>Updated {new Date(heroData.last_checked_at).toLocaleDateString()}</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Loading State */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">{client.name}</div>
            <div className="text-sm opacity-80">Image unavailable</div>
          </div>
        </div>
      )}
    </a>
  );
};

export const ClientHeroGallery: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const clients = clientsData.clients as Client[];
  const heroData = clientsHeroData.discovered_images;

  const handleRefreshImages = async () => {
    setIsRefreshing(true);
    // In a real implementation, this would trigger the image discovery service
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <section className="py-20 px-6" style={{ background: 'var(--gradient-gray-subtle)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="font-headline text-foreground text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '0px' }}>
              Client Success Stories
            </h2>
            
            {/* Refresh Button (admin only in production) */}
            {process.env.NODE_ENV === 'development' && (
              <Button
                onClick={handleRefreshImages}
                disabled={isRefreshing}
                variant="outline"
                size="sm"
                className="ml-4"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              </Button>
            )}
          </div>
          
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Discover how we've transformed brands across industries through strategic PR and influencer marketing
          </p>
        </div>

        {/* Hero Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clients.map((client, index) => {
            const clientHeroData = heroData[client.slug as keyof typeof heroData];
            const safeHeroData: HeroImageData = clientHeroData ? {
              ...clientHeroData,
              status: clientHeroData.status as HeroImageData['status']
            } : {
              source_url: '',
              local_path: '',
              width: 0,
              height: 0,
              last_checked_at: '',
              chosen_reason: '',
              placeholder_base64: '',
              status: 'needs_discovery'
            };

            return (
              <ClientHeroTile
                key={client.slug}
                client={client}
                heroData={safeHeroData}
                isPriority={index < 3} // Prioritize first row for LCP
              />
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold"
          >
            <a href="/case-studies">
              Explore All Case Studies <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
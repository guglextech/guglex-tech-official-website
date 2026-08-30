import type { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type SiteMediaProps = {
  src: string;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  grid?: boolean;
  rounded?: boolean;
};

export function SiteMedia({
  src,
  alt,
  aspectRatio = '4/3',
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 40vw',
  className,
  grid = true,
  rounded = true,
}: SiteMediaProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden border bg-muted shadow-sm',
        rounded && 'rounded-xl',
        className,
      )}
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {grid ? (
        <div className="site-media-grid pointer-events-none absolute inset-0" aria-hidden />
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
        aria-hidden
      />
    </div>
  );
}

type SiteHeroVisualProps = {
  image: { src: string; alt: string };
  children?: ReactNode;
  className?: string;
};

export function SiteHeroVisual({ image, children, className }: SiteHeroVisualProps) {
  return (
    <div className={cn('relative', className)}>
      <div className="site-hero-grid pointer-events-none absolute -inset-4 rounded-2xl md:-inset-6" aria-hidden />
      <SiteMedia
        src={image.src}
        alt={image.alt}
        aspectRatio="4/3"
        priority
        sizes="(max-width: 1024px) 100vw, 420px"
        className="relative"
      />
      {children ? (
        <div className="relative z-10 -mt-6 mx-4 sm:mx-6">{children}</div>
      ) : null}
    </div>
  );
}

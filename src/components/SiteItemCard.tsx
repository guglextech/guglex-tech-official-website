import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { SiteMedia } from '@/components/SiteMedia';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type ItemHighlight = {
  label: string;
  icon: LucideIcon;
};

type SiteItemCardProps = {
  image: { src: string; alt: string };
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: ItemHighlight[];
  href?: string;
  linkLabel?: string;
  className?: string;
};

export function SiteItemCard({
  image,
  category,
  title,
  description,
  icon: Icon,
  highlights,
  href,
  linkLabel = 'Learn more',
  className,
}: SiteItemCardProps) {
  return (
    <Card size="sm" className={cn('h-full overflow-hidden', className)}>
      <SiteMedia
        src={image.src}
        alt={image.alt}
        aspectRatio="21/9"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        rounded={false}
        className="border-0 border-b shadow-none"
      />
      <CardHeader className="gap-1.5">
        <div className="flex items-center gap-2">
          <span className="bg-muted text-foreground flex size-8 shrink-0 items-center justify-center rounded-md">
            <Icon className="size-4" />
          </span>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-3 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Separator className="mb-3" />
        <ul className="space-y-2">
          {highlights.map((item) => {
            const ItemIcon = item.icon;
            return (
              <li key={item.label} className="flex items-center gap-2">
                <span className="bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-md">
                  <ItemIcon className="size-3" />
                </span>
                <span className="text-muted-foreground text-xs leading-relaxed">
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
        {href ? (
          <Button
            variant="link"
            className="mt-3 h-auto px-0 text-sm"
            render={<a href={href} target="_blank" rel="noopener noreferrer" />}
          >
            {linkLabel}
            <ArrowUpRight />
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}

type SiteIconCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
};

export function SiteIconCard({
  icon: Icon,
  title,
  description,
  index,
  className,
}: SiteIconCardProps) {
  return (
    <Card size="sm" className={cn('h-full', className)}>
      <CardHeader className="gap-1.5">
        <span className="bg-muted text-foreground flex size-8 items-center justify-center rounded-md">
          <Icon className="size-4" />
        </span>
        {index !== undefined ? (
          <p className="text-xs font-semibold text-brand-blue tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </p>
        ) : null}
        <CardTitle>{title}</CardTitle>
        <CardDescription className="line-clamp-4 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function siteItemGridClass(count: number) {
  if (count === 1) return 'grid grid-cols-1 gap-3 sm:max-w-sm';
  if (count === 2) return 'grid grid-cols-1 gap-3 sm:grid-cols-2';
  return 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3';
}

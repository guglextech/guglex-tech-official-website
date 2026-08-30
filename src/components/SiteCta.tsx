import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CtaLink = {
  href: string;
  label: string;
};

export default function SiteCta({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary: CtaLink;
  secondary?: CtaLink;
}) {
  return (
    <section className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{description}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href={primary.href} />}>
              {primary.label}
              <ArrowRight />
            </Button>
            {secondary ? (
              <Button size="lg" variant="outline" render={<Link href={secondary.href} />}>
                {secondary.label}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

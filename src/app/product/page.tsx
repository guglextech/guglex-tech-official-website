import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import SiteCta from '@/components/SiteCta';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'Ewale and Gyepayments — consumer and business payment products built and operated by Guglex Technologies.',
};

const products = [
  {
    name: 'Ewale',
    tag: 'Consumer payments',
    summary:
      'A consumer platform for everyday services — airtime, data, ECG prepaid, and WASSCE results — available on the web and via USSD *714*22#.',
    points: [
      'Multi-network airtime and data',
      'ECG prepaid top-ups',
      'WASSCE results purchases',
      'Web and USSD access',
    ],
    href: 'https://ewalepay.com',
    cta: 'Visit Ewale',
  },
  {
    name: 'Gyepayments',
    tag: 'Business collections',
    summary:
      'Payment collection for African businesses — mobile money, bank transfer, and cards — with flows built for real operational use.',
    points: [
      'Mobile money collection',
      'Bank transfer support',
      'Card payments',
      'Merchant-ready checkout',
    ],
    href: 'https://gyepayments.guglextechnologies.com',
    cta: 'Visit Gyepayments',
  },
];

export default function ProductPage() {
  return (
    <SiteShell>
      <PageHero
        kicker="Product"
        title="Products we build and operate."
        description="Payment platforms designed for African markets — with the same engineering standards we bring to every client engagement."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="grid grid-cols-1 gap-8 border-b py-12 md:grid-cols-12 md:gap-10 md:py-16"
              >
                <div className="md:col-span-1">
                  <span className="text-sm font-semibold text-brand-blue tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <Badge variant="secondary">{product.tag}</Badge>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    {product.name}
                  </h2>
                  <Button
                    variant="link"
                    className="mt-4 px-0"
                    render={
                      <a href={product.href} target="_blank" rel="noopener noreferrer" />
                    }
                  >
                    {product.cta}
                    <ArrowUpRight />
                  </Button>
                </div>
                <div className="md:col-span-4">
                  <p className="text-muted-foreground leading-relaxed">{product.summary}</p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-2.5">
                    {product.points.map((point) => (
                      <li key={point} className="text-muted-foreground flex items-start gap-2 text-sm">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteCta
        title="Need a custom payment product?"
        description="We also design and ship bespoke platforms, integrations, and digital services for partners across industries."
        primary={{ href: '/contact', label: 'Talk to us' }}
      />
    </SiteShell>
  );
}

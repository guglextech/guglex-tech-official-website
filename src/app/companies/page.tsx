import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import PageHero from '@/components/PageHero';
import SiteCta from '@/components/SiteCta';
import { Badge } from '@/components/ui/badge';

const partners = [
  {
    name: 'Public Sector Workers Union',
    category: 'Membership',
    description: 'Digital presence and member-facing services for union programs and updates.',
  },
  {
    name: 'DV Publication',
    category: 'Publishing',
    description: 'Publishing platform work for structured content presentation online.',
  },
  {
    name: 'Victory Entertainment Empire',
    category: 'Entertainment',
    description: 'Audience and events platform supporting promotions and engagement.',
  },
  {
    name: 'Hubtel',
    category: 'Payments',
    description: 'Payment gateway and USSD integration for production collection flows.',
  },
  {
    name: 'Jolee Bakery',
    category: 'Ecommerce',
    description: 'Ecommerce checkout with Hubtel and Stripe payment support.',
  },
  {
    name: 'Wotiriye Lottery',
    category: 'Digital services',
    description: 'Lottery participation and operator workflows built for trust and clarity.',
  },
];

export default function Companies() {
  return (
    <SiteShell>
      <PageHero
        kicker="Partners"
        title="Companies we work with."
        description="Selected partners across payments, publishing, membership, and digital services."
      />

      <section className="site-section bg-background">
        <SiteContainer>
          <div className="border-t">
            {partners.map((partner, index) => (
              <article
                key={partner.name}
                className="grid grid-cols-1 gap-3 border-b py-8 md:grid-cols-12 md:gap-8 md:py-10"
              >
                <div className="md:col-span-1">
                  <span className="text-sm font-semibold text-brand-blue tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <Badge variant="secondary">{partner.category}</Badge>
                  <h2 className="mt-2 text-lg font-semibold tracking-tight">{partner.name}</h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">{partner.description}</p>
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Looking for a delivery partner?"
        description="Tell us about your product or integration needs. We'll respond with a clear next step."
        primary={{ href: '/contact', label: 'Become a partner' }}
      />
    </SiteShell>
  );
}

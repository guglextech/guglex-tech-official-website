import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import PageHero from '@/components/PageHero';
import SiteCta from '@/components/SiteCta';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    name: 'Ewale',
    category: 'Consumer payments',
    summary:
      'A consumer platform for purchasing airtime, data bundles, ECG prepaid, and WASSCE results across major networks — built for speed, clarity, and everyday reliability.',
    outcomes: [
      'Multi-network airtime & data',
      'ECG prepaid top-ups',
      'WASSCE results purchases',
      'Simple, mobile-first checkout',
    ],
    href: 'https://ewalepay.com',
  },
  {
    name: 'Jolee Bakery',
    category: 'Ecommerce & payments',
    summary:
      'An ecommerce storefront for bakery orders with integrated checkout — Hubtel for local mobile money and Stripe for card payments, so customers can pay the way that works for them.',
    outcomes: [
      'Ecommerce storefront',
      'Hubtel payment integration',
      'Stripe card payments',
      'Order & checkout flow',
    ],
  },
  {
    name: 'Victory Entertainment Empire',
    category: 'Entertainment platform',
    summary:
      'A digital platform for Victory Entertainment Empire supporting events, promotions, and audience engagement with a clean experience built for fans and organizers.',
    outcomes: [
      'Brand & event presence',
      'Audience-facing experience',
      'Content & promotions',
      'Mobile-ready delivery',
    ],
  },
  {
    name: 'Public Sector Workers Union',
    category: 'Membership platform',
    summary:
      'A digital presence and member-facing experience for the Public Sector Workers Union — built to communicate programs, updates, and services clearly to members.',
    outcomes: [
      'Union information hub',
      'Member-focused content',
      'Clear service navigation',
      'Reliable public access',
    ],
  },
  {
    name: 'Wotiriye Lottery',
    category: 'Lottery & digital services',
    summary:
      'A lottery platform experience designed for secure participation, clear draws, and trustworthy digital workflows for players and operators.',
    outcomes: [
      'Lottery participation flow',
      'Secure transaction handling',
      'Clear draw experience',
      'Operator-ready workflows',
    ],
  },
  {
    name: 'DV Publication',
    category: 'Publishing platform',
    summary:
      'A publishing-focused digital platform for DV Publication — helping content reach readers with a structured, professional presentation online.',
    outcomes: [
      'Publication presence',
      'Content presentation',
      'Reader-friendly layout',
      'Scalable content structure',
    ],
  },
  {
    name: 'Hubtel Integration',
    category: 'Payment integration',
    summary:
      'End-to-end Hubtel payment integration for businesses that need mobile money and card collection with reliable callbacks, reconciliation, and production-ready error handling.',
    outcomes: [
      'Mobile money collection',
      'Secure checkout flows',
      'Webhook & status sync',
      'Settlement-ready reporting',
    ],
  },
  {
    name: 'Paystack Integration',
    category: 'Payment integration',
    summary:
      'Paystack integration for products that need card and local payment methods — implemented with clean APIs, verified webhooks, and a checkout experience that converts.',
    outcomes: [
      'Card & local payments',
      'Verified webhook handling',
      'Retry-safe transactions',
      'Developer-friendly setup',
    ],
  },
];

export default function UseCases() {
  return (
    <SiteShell>
      <PageHero
        kicker="Use cases"
        title="Selected work in products and payments."
        description="Real platforms and integrations we've designed, built, and shipped for African markets."
      />

        {/* Case studies */}
        <section className="site-section bg-background">
          <SiteContainer>
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                Case studies
              </p>
              <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Projects that moved money and served users.
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Selected client work across ecommerce, payments, publishing, and
                membership platforms — built to work in production.
              </p>
            </div>

            <div className="border-t border-border">
              {caseStudies.map((study, index) => (
                <article
                  key={study.name}
                  className="group grid grid-cols-1 gap-6 border-b border-border py-10 lg:grid-cols-12 lg:gap-10 md:py-12"
                >
                  <div className="lg:col-span-1">
                    <span className="text-sm font-semibold text-brand-blue tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="mb-2 text-sm text-muted-foreground">
                      {study.category}
                    </p>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-blue md:text-xl">
                      {study.name}
                    </h3>
                    {study.href && (
                      <a
                        href={study.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all"
                      >
                        Visit product
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                      </a>
                    )}
                  </div>

                  <div className="lg:col-span-4">
                    <p className="leading-relaxed text-muted-foreground">
                      {study.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-3">
                    <ul className="space-y-2.5">
                      {study.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-blue" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </SiteContainer>
        </section>

        <section className="site-section border-y bg-muted">
          <SiteContainer>
            <div className="mb-12 max-w-2xl">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                Focus
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Where we deliver the most value.
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
              {[
                {
                  title: 'Consumer payment products',
                  description:
                    'Everyday services like airtime, utilities, and digital purchases — designed for speed and trust.',
                },
                {
                  title: 'Gateway integrations',
                  description:
                    'Hubtel, Paystack, and similar providers wired cleanly into your product with reliable callbacks.',
                },
                {
                  title: 'Production readiness',
                  description:
                    'Error handling, reconciliation, and monitoring so payments stay dependable after launch.',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </SiteContainer>
        </section>

      <SiteCta
        title="Need a payment product or integration?"
        description="Tell us what you're building. We'll help you scope the right approach for Hubtel, Paystack, or a custom payments flow."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/services', label: 'View services' }}
      />
    </SiteShell>
  );
}

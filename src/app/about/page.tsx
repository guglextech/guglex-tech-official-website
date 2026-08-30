import type { Metadata } from 'next';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import PageHero from '@/components/PageHero';
import SiteCta from '@/components/SiteCta';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Guglex Technologies is a product-focused software company building payments and digital platforms across Africa.',
};

const values = [
  {
    title: 'Integrity',
    description: 'Transparent communication and ethical delivery in every engagement.',
  },
  {
    title: 'Precision',
    description: 'High standards for code quality, design clarity, and operational reliability.',
  },
  {
    title: 'Pragmatism',
    description: 'Technology chosen to solve real constraints — not novelty for its own sake.',
  },
  {
    title: 'Ownership',
    description: 'We operate products ourselves, so we stay close to production reality.',
  },
];

export default function About() {
  return (
    <SiteShell>
      <PageHero
        kicker="About us"
        title="We build technology that builds businesses."
        description="Guglex Technologies is a product-focused software company helping businesses across Africa design, build, and scale digital products that drive real results."
      />

      <section className="site-section border-b bg-background">
        <SiteContainer className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Who we are
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A focused product and payments company.
            </h2>
          </div>
          <div className="text-muted-foreground space-y-5 text-lg leading-relaxed lg:col-span-7 lg:col-start-6">
            <p>
              We design and ship digital products, payment systems, and platforms for companies that
              need reliable technology — not slide decks.
            </p>
            <p>
              Alongside client delivery, we operate our own products, including{' '}
              <a
                href="https://ewalepay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-blue hover:underline"
              >
                Ewale
              </a>
              , so we stay close to the same challenges our partners face: clarity, speed, trust,
              and systems that hold up after launch.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="site-section bg-card">
        <SiteContainer>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Foundation
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Mission and vision</h2>
          </div>

          <div className="border-t">
            <article className="grid grid-cols-1 gap-4 border-b py-10 md:grid-cols-12 md:gap-10 md:py-12">
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-sm font-semibold tracking-[0.12em] uppercase">
                  Mission
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-3 text-xl font-semibold tracking-tight md:text-2xl">
                  Empower businesses through purposeful technology.
                </h3>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                  We bridge complex technical challenges and practical, scalable solutions that
                  create measurable business value.
                </p>
              </div>
            </article>
            <article className="grid grid-cols-1 gap-4 border-b py-10 md:grid-cols-12 md:gap-10 md:py-12">
              <div className="md:col-span-3">
                <p className="text-muted-foreground text-sm font-semibold tracking-[0.12em] uppercase">
                  Vision
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="mb-3 text-xl font-semibold tracking-tight md:text-2xl">
                  Become Africa&apos;s most trusted technology partner.
                </h3>
                <p className="text-muted-foreground max-w-3xl leading-relaxed">
                  African businesses competing globally on the strength of world-class digital
                  infrastructure built with local context.
                </p>
              </div>
            </article>
          </div>
        </SiteContainer>
      </section>

      <section className="site-section border-y bg-background">
        <SiteContainer>
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Values
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How we work</h2>
          </div>

          <div className="border-t">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="grid grid-cols-1 gap-3 border-b py-8 md:grid-cols-12 md:gap-8 md:py-9"
              >
                <div className="md:col-span-1">
                  <span className="text-sm font-semibold text-brand-blue tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground max-w-2xl leading-relaxed">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Let's build what's next."
        description="Tell us about your product, payment flow, or platform challenge."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/use-cases', label: 'See our work' }}
      />
    </SiteShell>
  );
}

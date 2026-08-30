import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import SiteCta from '@/components/SiteCta';
import { SiteHeroVisual, SiteMedia } from '@/components/SiteMedia';
import { siteImages } from '@/lib/site-images';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'About us',
  description:
    'Guglex Technologies is a product-focused software company building payments and digital platforms across Africa.',
};

const facts = [
  { value: 'Accra', label: 'Based in Ghana' },
  { value: '2', label: 'Products we operate' },
  { value: 'Africa', label: 'Markets we build for' },
];

const snapshot = [
  { label: 'Location', value: 'Accra, Ghana' },
  { label: 'Focus', value: 'Payments and product engineering' },
  { label: 'Products', value: 'Ewale and Gyepayments' },
  { label: 'Work', value: 'Client platforms and integrations' },
];

const values = [
  {
    title: 'Integrity',
    description:
      'Clear scope, honest timelines, and no theatre around what is ready for production.',
  },
  {
    title: 'Precision',
    description:
      'High standards for code, interfaces, and the operational details that keep payments reliable.',
  },
  {
    title: 'Pragmatism',
    description:
      'Technology chosen for the constraint in front of us — not novelty for its own sake.',
  },
  {
    title: 'Ownership',
    description:
      'We run products ourselves, so we stay close to retries, reconciliation, and support after launch.',
  },
];

const tracks = [
  {
    title: 'Products we operate',
    description:
      'Ewale and Gyepayments keep us in the same production traffic our partners live with — mobile money, USSD, and everyday checkout.',
    href: '/product',
    label: 'View products',
    points: ['Ewale — consumer payments', 'Gyepayments — business collections', 'USSD *714*22#'],
  },
  {
    title: 'Work we deliver',
    description:
      'We design and ship platforms, storefronts, and payment integrations for companies that need systems that hold up after go-live.',
    href: '/use-cases',
    label: 'See our work',
    points: ['Payment integrations', 'Ecommerce and platforms', 'Membership and publishing'],
  },
];

export default function About() {
  return (
    <SiteShell>
      <section className="relative border-b bg-card">
        <div className="site-section-grid pointer-events-none absolute inset-0" aria-hidden />
        <SiteContainer className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Badge variant="secondary" className="mb-6">
                About Guglex
              </Badge>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                We build technology that builds businesses.
              </h1>
              <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                Guglex Technologies is a product company in Accra. We design and
                ship payment systems, digital platforms, and software for
                businesses that need reliable technology — not slide decks.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" render={<Link href="/contact" />}>
                  Talk to us
                  <ArrowRight />
                </Button>
                <Button size="lg" variant="outline" render={<Link href="/use-cases" />}>
                  See our work
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <SiteHeroVisual
                image={{
                  src: siteImages.hero.about,
                  alt: 'Guglex team collaborating on product and payments work',
                }}
              >
                <Card className="shadow-md">
                  <CardHeader className="border-b py-4">
                    <p className="text-muted-foreground text-xs font-medium tracking-[0.16em] uppercase">
                      Company
                    </p>
                    <CardTitle className="text-base">Guglex Technologies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-0 p-0">
                    {snapshot.map((item, index) => (
                      <div
                        key={item.label}
                        className={`grid grid-cols-12 gap-3 px-4 py-3.5 ${
                          index < snapshot.length - 1 ? 'border-b' : ''
                        }`}
                      >
                        <p className="text-muted-foreground col-span-4 text-sm">{item.label}</p>
                        <p className="col-span-8 text-sm font-medium leading-relaxed">{item.value}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </SiteHeroVisual>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-card px-5 py-5">
                <p className="text-xl font-semibold tracking-tight">{fact.value}</p>
                <p className="text-muted-foreground mt-1 text-sm">{fact.label}</p>
              </div>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section bg-background">
        <SiteContainer className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SiteMedia
              src={siteImages.about.story}
              alt="Modern workspace at Guglex Technologies in Accra"
              aspectRatio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Who we are
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              A focused product and payments company.
            </h2>
            <div className="text-muted-foreground mt-6 space-y-5 text-lg leading-relaxed">
            <p>
              We started Guglex to build software that earns its place in
              production — products people actually use to pay a bill, top up a
              phone, or collect money from a customer.
            </p>
            <p>
              Alongside client work, we operate our own products, including{' '}
              <a
                href="https://ewalepay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-blue hover:underline"
              >
                Ewale
              </a>{' '}
              and{' '}
              <a
                href="https://gyepayments.guglextechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand-blue hover:underline"
              >
                Gyepayments
              </a>{'. That keeps us close to the same constraints our partners face: '}
              provider timeouts, webhook retries, and support after the first
              real transaction.
            </p>
            <p>
              We work from Accra, with African payment rails and local context
              as the default — then we engineer to the same standard we would
              expect from a global product team.
            </p>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="site-section border-y bg-card">
        <SiteContainer>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Foundation
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Mission and vision
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              A simple brief for the company: useful products, and partners who
              can trust the work after launch.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <Card className="h-full">
              <CardHeader>
                <Badge variant="secondary">Mission</Badge>
                <CardTitle className="mt-1 text-2xl">
                  Empower businesses through purposeful technology.
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  We turn complex technical work into practical systems —
                  payments, platforms, and products that create measurable value
                  for the people who run them.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <Badge variant="secondary">Vision</Badge>
                <CardTitle className="mt-1 text-2xl">
                  Become Africa&apos;s most trusted technology partner.
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  African businesses competing globally on infrastructure built
                  with local context — mobile money, USSD, and the operational
                  detail that makes those rails trustworthy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </SiteContainer>
      </section>

      <section className="site-section bg-background">
        <SiteContainer>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              Values
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              How we work
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              These are the standards we hold ourselves to in client work and
              in the products we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map((value, index) => (
              <Card key={value.title} className="h-full">
                <CardHeader>
                  <p className="text-sm font-semibold text-brand-blue tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="site-section border-t bg-card">
        <SiteContainer>
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
              What we do
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Two sides of the same company
            </h2>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              We ship our own products and we deliver for clients. Both have to
              work in production.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {tracks.map((track) => (
              <Card key={track.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{track.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {track.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-4" />
                  <ul className="space-y-2.5">
                    {track.points.map((point) => (
                      <li
                        key={point}
                        className="text-muted-foreground flex items-start gap-2 text-sm"
                      >
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-brand-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    className="mt-5 px-0"
                    render={<Link href={track.href} />}
                  >
                    {track.label}
                    <ArrowRight />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </SiteContainer>
      </section>

      <SiteCta
        title="Let's build what's next."
        description="Tell us about your product, payment flow, or platform challenge. We'll respond with a clear next step."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/use-cases', label: 'See our work' }}
      />
    </SiteShell>
  );
}

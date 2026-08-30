import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import SiteCta from '@/components/SiteCta';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers about Guglex Technologies, Ewale, Gyepayments, custom software, and how we work with partners.',
};

type FaqItem = {
  question: string;
  answer: ReactNode;
};

type FaqGroup = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

const groups: FaqGroup[] = [
  {
    id: 'company',
    title: 'Company',
    description: 'Who we are and where we work.',
    items: [
      {
        question: 'What does Guglex Technologies do?',
        answer: (
          <p>
            We design and ship payment systems, digital platforms, and custom
            software for businesses across Africa. That includes products we
            operate ourselves and client work that has to hold up in production.
          </p>
        ),
      },
      {
        question: 'Where are you based?',
        answer: (
          <p>
            Accra, Ghana. We build for African payment rails and local context
            first — mobile money, USSD, and the operational detail that makes
            those systems trustworthy.
          </p>
        ),
      },
      {
        question: 'Do you only work with companies in Ghana?',
        answer: (
          <p>
            Ghana is our home market, but the work is built for African
            production traffic. If your product needs local rails, collection,
            or a platform that has to stay up after launch, we can talk.
          </p>
        ),
      },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    description: 'Ewale, Gyepayments, and the difference between them.',
    items: [
      {
        question: 'What is Ewale?',
        answer: (
          <p>
            Ewale is our consumer payments product — airtime, data, ECG prepaid,
            and WASSCE result checkers across major networks. It is available on
            the web at{' '}
            <a href="https://ewalepay.com" target="_blank" rel="noopener noreferrer">
              ewalepay.com
            </a>{' '}
            and via USSD <span className="text-foreground font-medium">*714*22#</span>.
          </p>
        ),
      },
      {
        question: 'What is Gyepayments?',
        answer: (
          <p>
            Gyepayments is our business collection product — mobile money, bank
            transfer, and cards in one checkout. See{' '}
            <a
              href="https://gyepayments.guglextechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gyepayments.guglextechnologies.com
            </a>
            .
          </p>
        ),
      },
      {
        question: 'How are Ewale and Gyepayments different?',
        answer: (
          <p>
            Ewale is for people paying for everyday services. Gyepayments is for
            businesses collecting money. We operate both, which is why client
            payment work stays close to real provider behavior — timeouts,
            retries, and reconciliation.
          </p>
        ),
      },
      {
        question: 'Can I use the USSD shortcode today?',
        answer: (
          <p>
            Yes. Dial <span className="text-foreground font-medium">*714*22#</span> in
            Ghana to buy airtime, data, and other Ewale services without opening
            the website.
          </p>
        ),
      },
    ],
  },
  {
    id: 'engagements',
    title: 'Working together',
    description: 'How we take on client work and what to expect.',
    items: [
      {
        question: 'Do you build custom software?',
        answer: (
          <p>
            Yes. We scope, design, and ship custom products — from a first
            release to production systems with integrations and support after
            go-live. See{' '}
            <Link href="/services">services</Link> for the full set of
            capabilities.
          </p>
        ),
      },
      {
        question: 'How does an engagement start?',
        answer: (
          <p>
            Send a short brief via the{' '}
            <Link href="/contact">contact form</Link> — what you are building,
            the payment or product constraint, and the outcome you need. We
            typically reply within one business day with a clear next step.
          </p>
        ),
      },
      {
        question: 'What kinds of projects do you take on?',
        answer: (
          <p>
            Payment integrations, consumer and merchant products, ecommerce
            checkout, and platforms for membership, publishing, and
            entertainment. Selected work is on the{' '}
            <Link href="/use-cases">use cases</Link> page.
          </p>
        ),
      },
      {
        question: 'Do you stay on after launch?',
        answer: (
          <p>
            Production is the point. We plan for monitoring, callbacks, and
            support after the first real transaction — the same standard we use
            on Ewale and Gyepayments.
          </p>
        ),
      },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & integrations',
    description: 'Providers, USSD, and developer access.',
    items: [
      {
        question: 'Which networks and providers do you integrate?',
        answer: (
          <p>
            We work with the rails our products already run on — including MTN,
            Telecel, ECG, Ghana Water, GoTV, StarTimes, WAEC, Hubtel, and
            Paystack. The exact stack depends on the product and the market.
          </p>
        ),
      },
      {
        question: 'Do you build USSD flows?',
        answer: (
          <p>
            Yes. Ewale runs on <span className="text-foreground font-medium">*714*22#</span>,
            and we build USSD collection and service flows for partners who need
            a channel that works without data or an app.
          </p>
        ),
      },
      {
        question: 'Is there a developer API?',
        answer: (
          <p>
            Yes. Authentication, payments, webhooks, USSD, and go-live guidance
            are documented on the{' '}
            <Link href="/developers">developers</Link> page.
          </p>
        ),
      },
    ],
  },
];

export default function FAQ() {
  return (
    <SiteShell>
      <section className="border-b bg-card">
        <SiteContainer className="py-20 md:py-28">
          <Badge variant="secondary" className="mb-6">
            FAQ
          </Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Questions we hear before a project starts.
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
            Straight answers about Guglex, Ewale, Gyepayments, and how we work
            with partners.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/contact" />}>
              Talk to us
              <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/product" />}>
              View products
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {groups.map((group) => (
              <Button
                key={group.id}
                variant="outline"
                size="sm"
                render={<a href={`#${group.id}`} />}
              >
                {group.title}
              </Button>
            ))}
          </div>
        </SiteContainer>
      </section>

      {groups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={
            groupIndex % 2 === 0
              ? 'site-section scroll-mt-24 bg-background'
              : 'site-section scroll-mt-24 border-y bg-card'
          }
        >
          <SiteContainer className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="mb-3 text-[11px] font-semibold tracking-[0.18em] text-brand-blue uppercase">
                {String(groupIndex + 1).padStart(2, '0')}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {group.title}
              </h2>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <Card>
                <CardContent className="p-0">
                  <Accordion>
                    {group.items.map((item, index) => (
                      <AccordionItem
                        key={item.question}
                        value={`${group.id}-${index}`}
                        className="px-5"
                      >
                        <AccordionTrigger className="py-5 text-base hover:no-underline">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </SiteContainer>
        </section>
      ))}

      <section className="bg-background">
        <SiteContainer className="pt-16 md:pt-20">
          <Alert className="px-4 py-4">
            <AlertTitle className="text-base">Can&apos;t find what you need?</AlertTitle>
            <AlertDescription className="mt-1 text-base">
              Email{' '}
              <a href="mailto:guglex.technologies@gmail.com">
                guglex.technologies@gmail.com
              </a>{' '}
              or send a note through the contact form. We typically respond
              within one business day.
            </AlertDescription>
          </Alert>
        </SiteContainer>
      </section>

      <SiteCta
        title="Let's get into the details."
        description="Tell us about your product, payment flow, or platform challenge. We'll respond with a clear next step."
        primary={{ href: '/contact', label: 'Start a conversation' }}
        secondary={{ href: '/use-cases', label: 'See our work' }}
      />
    </SiteShell>
  );
}

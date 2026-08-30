import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import PageHero from '@/components/PageHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What does Guglex Technologies do?',
    answer:
      'We design and build software products and digital infrastructure for businesses across Africa, including payment platforms, web applications, and automation tools.',
  },
  {
    question: 'What is Ewale?',
    answer:
      'Ewale is our consumer platform for purchasing WASSCE results, ECG prepaid, airtime, and data bundles across all major networks. Visit ewalepay.com to get started.',
  },
  {
    question: 'What is Gyepayments?',
    answer:
      'Gyepayments is our business payment platform for collecting mobile money, bank transfers, and card payments. Learn more at gyepayments.guglextechnologies.com.',
  },
  {
    question: 'Do you build custom software?',
    answer:
      'Yes. We work with startups and enterprises to scope, build, and maintain custom software — from MVPs to production systems with integrations and ongoing support.',
  },
  {
    question: 'How can I get in touch?',
    answer:
      'Use our Contact page to send a message, or email guglex.technologies@gmail.com. We typically respond within one business day.',
  },
];

export default function FAQ() {
  return (
    <SiteShell>
      <PageHero
        kicker="FAQ"
        title="Frequently asked questions"
        description="Quick answers about Guglex, our products, and how we work."
      />

      <section className="site-section bg-background">
        <SiteContainer>
          <Accordion className="border-t">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="py-6 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-10 text-sm">
            Still need help?{' '}
            <Link href="/contact" className="font-medium text-brand-blue hover:underline">
              Contact us
            </Link>
            .
          </p>
        </SiteContainer>
      </section>
    </SiteShell>
  );
}

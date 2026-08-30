import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import SiteContainer from '@/components/SiteContainer';
import { Separator } from '@/components/ui/separator';

const productLinks = [
  { label: 'Overview', href: '/product' },
  { label: 'Ewale', href: 'https://ewalepay.com', external: true },
  { label: 'Gyepayments', href: 'https://gyepayments.guglextechnologies.com', external: true },
];

const companyLinks = [
  { label: 'About us', href: '/about' },
  { label: 'Use cases', href: '/use-cases' },
  { label: 'Partners', href: '/companies' },
  { label: 'Services', href: '/services' },
];

const resourceLinks = [
  { label: 'Developers', href: '/developers' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const contactItems = [
  {
    label: 'guglex.technologies@gmail.com',
    href: 'mailto:guglex.technologies@gmail.com',
  },
  {
    label: '+233 550 982 043',
    href: 'tel:+233550982043',
  },
  {
    label: 'Accra, Ghana',
  },
];

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    'inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
        <ArrowUpRight className="size-3" />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lg:col-span-2 last:lg:col-span-3">
      <h4 className="text-[11px] font-semibold tracking-[0.18em] uppercase">{title}</h4>
      {children}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <SiteContainer className="py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 sm:col-span-4 lg:col-span-3">
            <BrandLogo />
            <p className="text-muted-foreground mt-5 max-w-xs text-sm leading-relaxed">
              Payments, products, and platforms for businesses across Africa.
            </p>
          </div>

          <FooterColumn title="Product">
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Company">
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Resources">
            <ul className="mt-4 space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <ul className="mt-4 space-y-3">
              {contactItems.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground break-words text-sm transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                  )}
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>

        <Separator className="mt-14" />

        <div className="text-muted-foreground flex flex-col gap-2 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Guglex Technologies</p>
          <p>All rights reserved</p>
        </div>
      </SiteContainer>
    </footer>
  );
}

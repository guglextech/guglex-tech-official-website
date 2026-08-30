'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu } from 'lucide-react';
import BrandLogo from '@/components/BrandLogo';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

const productItems = [
  {
    name: 'Ewale',
    description: 'Consumer payments for airtime, data, ECG prepaid, and WASSCE results.',
    href: 'https://ewalepay.com',
    external: true,
  },
  {
    name: 'Gyepayments',
    description: 'Business payment collection with mobile money, bank transfer, and cards.',
    href: 'https://gyepayments.guglextechnologies.com',
    external: true,
  },
  {
    name: 'Platform overview',
    description: 'How Guglex products and engineering services work together.',
    href: '/product',
    external: false,
  },
];

const companyItems = [
  { name: 'Use cases', description: 'Selected work and integrations', href: '/use-cases' },
  { name: 'Partners', description: 'Companies we work with', href: '/companies' },
  { name: 'FAQ', description: 'Common questions', href: '/faq' },
  { name: 'Contact', description: 'Start a conversation', href: '/contact' },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <NavigationMenu className="hidden lg:flex" align="start">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Product</NavigationMenuTrigger>
              <NavigationMenuContent className="w-[22rem] p-1">
                {productItems.map((item) =>
                  item.external ? (
                    <NavigationMenuLink
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-col items-start gap-1 p-3"
                    >
                      <span className="flex w-full items-center justify-between">
                        {item.name}
                        <ArrowUpRight className="size-3.5 text-muted-foreground" />
                      </span>
                      <span className="text-muted-foreground font-normal">{item.description}</span>
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuLink
                      key={item.name}
                      render={<Link href={item.href} />}
                      className="flex-col items-start gap-1 p-3"
                    >
                      <span>{item.name}</span>
                      <span className="text-muted-foreground font-normal">{item.description}</span>
                    </NavigationMenuLink>
                  )
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink render={<Link href="/about" />} className={navigationMenuTriggerStyle()}>
                About us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink render={<Link href="/developers" />} className={navigationMenuTriggerStyle()}>
                Developers
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink render={<Link href="/blog" />} className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent className="w-72 p-1">
                {companyItems.map((item) => (
                  <NavigationMenuLink
                    key={item.href}
                    render={<Link href={item.href} />}
                    className="flex-col items-start gap-0.5 p-3"
                  >
                    <span>{item.name}</span>
                    <span className="text-muted-foreground font-normal">{item.description}</span>
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button render={<Link href="/contact" />}>Contact us</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon" />}>
              <Menu />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-2">
                <Accordion>
                  <AccordionItem value="product">
                    <AccordionTrigger className="px-2">Product</AccordionTrigger>
                    <AccordionContent>
                      {productItems.map((item) =>
                        item.external ? (
                          <SheetClose
                            key={item.name}
                            render={
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground block px-3 py-2 text-sm"
                              />
                            }
                          >
                            {item.name}
                          </SheetClose>
                        ) : (
                          <SheetClose
                            key={item.name}
                            render={<Link href={item.href} className="text-muted-foreground block px-3 py-2 text-sm" />}
                          >
                            {item.name}
                          </SheetClose>
                        )
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <SheetClose render={<Link href="/about" className="rounded-lg px-3 py-2 text-sm font-medium" />}>
                  About us
                </SheetClose>
                <SheetClose render={<Link href="/developers" className="rounded-lg px-3 py-2 text-sm font-medium" />}>
                  Developers
                </SheetClose>
                <SheetClose render={<Link href="/blog" className="rounded-lg px-3 py-2 text-sm font-medium" />}>
                  Blog
                </SheetClose>

                <Accordion>
                  <AccordionItem value="company">
                    <AccordionTrigger className="px-2">Company</AccordionTrigger>
                    <AccordionContent>
                      {companyItems.map((item) => (
                        <SheetClose
                          key={item.href}
                          render={<Link href={item.href} className="text-muted-foreground block px-3 py-2 text-sm" />}
                        >
                          {item.name}
                        </SheetClose>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <Separator />
              <div className="px-4 pb-4">
                <Button className="w-full" render={<Link href="/contact" />}>
                  Contact us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

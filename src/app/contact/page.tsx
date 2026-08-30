'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import SiteShell from '@/components/SiteShell';
import SiteContainer from '@/components/SiteContainer';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const projectTypes = [
  { value: 'Payment Integration', label: 'Payment integration' },
  { value: 'USSD Development', label: 'USSD development' },
  { value: 'Business Website', label: 'Business website' },
  { value: 'E-commerce Website', label: 'Ecommerce' },
  { value: 'Custom Software', label: 'Custom software' },
  { value: 'Mobile App', label: 'Mobile app' },
  { value: 'Not Sure (Need Advice)', label: 'Not sure — need advice' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    websiteType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', websiteType: '', message: '' });
      toast.success("Message sent. We'll get back to you shortly.");
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send message.';
      setStatus('error');
      setErrorMsg(message);
      toast.error(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === 'error') setStatus('idle');
  };

  return (
    <SiteShell>
      <PageHero
        kicker="Contact"
        title="Tell us what you're building."
        description="Share a few details about your product, payment flow, or platform challenge. We typically respond within one business day."
      />

      <section className="site-section bg-background">
        <SiteContainer>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="mb-8 text-2xl font-semibold tracking-tight">Send a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="websiteType">Project type *</Label>
                  <Select
                    value={formData.websiteType || null}
                    onValueChange={(value) => {
                      setFormData({ ...formData, websiteType: value ?? '' });
                      if (status === 'error') setStatus('idle');
                    }}
                  >
                    <SelectTrigger id="websiteType" className="w-full">
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === 'success' && (
                  <Alert>
                    <AlertTitle>Message sent</AlertTitle>
                    <AlertDescription>We&apos;ll get back to you shortly.</AlertDescription>
                  </Alert>
                )}

                {status === 'error' && (
                  <Alert variant="destructive">
                    <AlertTitle>Could not send</AlertTitle>
                    <AlertDescription>{errorMsg}</AlertDescription>
                  </Alert>
                )}

                <Button type="submit" size="lg" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send message'}
                </Button>
              </form>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight">Details</h2>
              <div className="space-y-6 border-t pt-6 text-sm">
                <div>
                  <p className="mb-1 font-medium">Email</p>
                  <p className="text-muted-foreground">guglex.technologies@gmail.com</p>
                </div>
                <div>
                  <p className="mb-1 font-medium">Phone</p>
                  <p className="text-muted-foreground">+233 550 982 043</p>
                </div>
                <div>
                  <p className="mb-1 font-medium">Location</p>
                  <p className="text-muted-foreground">Accra, Ghana</p>
                </div>
                <div className="border-t pt-6">
                  <p className="mb-3 font-medium">Business hours</p>
                  <div className="text-muted-foreground space-y-2">
                    <div className="flex justify-between gap-4">
                      <span>Mon – Fri</span>
                      <span>8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Saturday</span>
                      <span>12:00 PM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>
    </SiteShell>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteShell from '@/components/SiteShell';
import PageHero from '@/components/PageHero';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Developer Documentation',
  description:
    'Technical documentation for integrating with Guglex Technologies — authentication, payments API, webhooks, USSD, errors, and go-live guidance.',
};

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'authentication', label: 'Authentication' },
  { id: 'first-request', label: 'Your first request' },
  { id: 'payments-api', label: 'Payments API' },
  { id: 'airtime', label: 'Airtime' },
  { id: 'data-bundles', label: 'Data bundles' },
  { id: 'ecg', label: 'ECG Prepaid & Postpaid' },
  { id: 'ghana-water', label: 'Ghana Water' },
  { id: 'tv', label: 'TV subscriptions' },
  { id: 'result-checkers', label: 'Result checkers' },
  { id: 'webhooks', label: 'Webhooks' },
  { id: 'ussd', label: 'USSD integration' },
  { id: 'errors', label: 'Errors' },
  { id: 'go-live', label: 'Testing & go-live' },
  { id: 'support', label: 'Support' },
];

const services = [
  { service: 'Airtime', endpoint: 'POST /v1/airtime', anchor: '#airtime' },
  { service: 'Data bundles', endpoint: 'POST /v1/data', anchor: '#data-bundles' },
  { service: 'ECG Prepaid', endpoint: 'POST /v1/ecg/prepaid', anchor: '#ecg' },
  { service: 'ECG Postpaid', endpoint: 'POST /v1/ecg/postpaid', anchor: '#ecg' },
  { service: 'Ghana Water', endpoint: 'POST /v1/ghana-water', anchor: '#ghana-water' },
  { service: 'GoTV', endpoint: 'POST /v1/tv', anchor: '#tv' },
  { service: 'StarTimes', endpoint: 'POST /v1/tv', anchor: '#tv' },
  { service: 'DSTV', endpoint: 'POST /v1/tv', anchor: '#tv' },
  { service: 'BECE / WASSCE checkers', endpoint: 'POST /v1/checkers', anchor: '#result-checkers' },
];

const endpoints = [
  { method: 'POST', path: '/v1/payments', description: 'Initiate a payment or collection' },
  { method: 'GET', path: '/v1/payments/:id', description: 'Retrieve a payment and its status' },
  { method: 'GET', path: '/v1/payments', description: 'List payments with filters and paging' },
  { method: 'POST', path: '/v1/payments/:id/verify', description: 'Re-verify status with the provider' },
  { method: 'GET', path: '/v1/balance', description: 'Retrieve current account balance' },
];

const errors = [
  { code: '400', name: 'invalid_request', description: 'A required field is missing or malformed.' },
  { code: '401', name: 'unauthorized', description: 'API key is missing, invalid, or revoked.' },
  { code: '402', name: 'insufficient_funds', description: 'Customer wallet or account cannot cover the amount.' },
  { code: '404', name: 'not_found', description: 'The referenced resource does not exist.' },
  { code: '409', name: 'duplicate_reference', description: 'A payment with this reference already exists.' },
  { code: '429', name: 'rate_limited', description: 'Too many requests. Back off and retry with jitter.' },
  { code: '5xx', name: 'provider_error', description: 'Upstream provider failure. Safe to retry idempotently.' },
];

const checklist = [
  'All sandbox test cases pass, including declined and timed-out payments.',
  'Webhook signature verification is enforced — unsigned events are rejected.',
  'Webhook processing is idempotent; duplicate events do not double-credit.',
  'API keys are stored server-side and never shipped to browsers or mobile apps.',
  'Failed requests are retried with exponential backoff, not tight loops.',
  'Monitoring and alerting cover payment failure rates and webhook lag.',
];

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <Card className="my-6 gap-0 py-0">
      <CardHeader className="border-b py-2">
        <span className="text-muted-foreground font-mono text-xs">{title}</span>
      </CardHeader>
      <CardContent className="p-0">
        <pre className="overflow-x-auto bg-code px-4 py-4 text-[13px] leading-relaxed text-code-fg">
          <code className="font-mono">{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
}

function MethodBadge({ method }: { method: string }) {
  return (
    <Badge variant={method === 'POST' ? 'default' : 'secondary'} className="font-mono text-[11px]">
      {method}
    </Badge>
  );
}

function DocHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 border-t border-border pt-12 text-2xl font-semibold tracking-tight text-foreground first:border-t-0 first:pt-0"
    >
      {children}
    </h2>
  );
}

export default function DevelopersPage() {
  return (
    <SiteShell>
        <PageHero
          kicker="Developers"
          title="Technical documentation"
          description="Integrate payments, webhooks, and USSD flows — from your first API call to production go-live."
        />

        {/* Docs body: sidebar + content */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">
              {/* Sidebar — horizontal scroll on mobile, sticky column on desktop */}
              <aside className="lg:col-span-3">
                <nav
                  aria-label="Documentation sections"
                  className="-mx-4 border-b border-border px-4 lg:sticky lg:top-24 lg:mx-0 lg:border-b-0 lg:px-0 lg:py-12"
                >
                  <p className="hidden pb-3 text-[11px] font-semibold tracking-[0.18em] text-muted-foreground uppercase lg:block">
                    On this page
                  </p>
                  <ul className="flex gap-1 overflow-x-auto py-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:py-0">
                    {sections.map((section) => (
                      <li key={section.id} className="shrink-0">
                        <a
                          href={`#${section.id}`}
                          className="block rounded px-3 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:rounded-none lg:border-l-2 lg:border-border lg:px-4 lg:py-2 lg:hover:border-foreground lg:hover:bg-transparent"
                        >
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>

              {/* Content */}
              <div className="min-w-0 py-12 md:py-16 lg:col-span-9">
                <div className="max-w-3xl space-y-12">
                  {/* Introduction */}
                  <div>
                    <DocHeading id="introduction">Introduction</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      The Guglex API lets you accept payments through mobile
                      money, cards, and bank transfer, receive transaction
                      events over webhooks, and build USSD experiences for
                      feature phones. The API is HTTP-based, accepts and returns
                      JSON, and is available in two environments.
                    </p>
                    <div className="mt-6 overflow-hidden rounded-md border border-border">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-border bg-muted">
                            <th className="px-4 py-3 font-semibold text-foreground">Environment</th>
                            <th className="px-4 py-3 font-semibold text-foreground">Base URL</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border">
                            <td className="px-4 py-3 text-muted-foreground">Sandbox</td>
                            <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                              https://sandbox.api.guglextechnologies.com
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-muted-foreground">Production</td>
                            <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                              https://api.guglextechnologies.com
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Build and test everything in sandbox first — every flow,
                      including failures, can be simulated before real money
                      moves.
                    </p>
                  </div>

                  {/* Authentication */}
                  <div>
                    <DocHeading id="authentication">Authentication</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Requests are authenticated with a secret API key sent in
                      the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">Authorization</code>{' '}
                      header. Sandbox and production use separate keys.
                    </p>
                    <CodeBlock
                      title="Request header"
                      code={`Authorization: Bearer sk_live_xxxxxxxxxxxxxxxx\nContent-Type: application/json`}
                    />
                    <Alert>
                      <AlertTitle>Keep keys server-side.</AlertTitle>
                      <AlertDescription>
                        Never embed secret keys in browser code or mobile apps.
                        Rotate a key immediately if it is exposed.
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* First request */}
                  <div>
                    <DocHeading id="first-request">Your first request</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Initiate a mobile money collection by creating a payment.
                      The <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">reference</code>{' '}
                      must be unique per transaction — it is your idempotency key.
                    </p>
                    <CodeBlock
                      title="cURL"
                      code={`curl -X POST https://sandbox.api.guglextechnologies.com/v1/payments \\
  -H "Authorization: Bearer sk_test_xxxxxxxxxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 500,
    "currency": "GHS",
    "channel": "mobile_money",
    "network": "mtn",
    "phone": "233241234567",
    "reference": "order-10023",
    "callback_url": "https://yourapp.com/webhooks/payments"
  }'`}
                    />
                    <CodeBlock
                      title="Response — 201 Created"
                      code={`{
  "id": "pay_9f83k2m1",
  "status": "pending",
  "amount": 500,
  "currency": "GHS",
  "channel": "mobile_money",
  "reference": "order-10023",
  "created_at": "2026-08-24T20:15:04Z"
}`}
                    />
                    <p className="leading-relaxed text-muted-foreground">
                      Payments start as <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">pending</code>{' '}
                      and resolve to <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">success</code>{' '}
                      or <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">failed</code>.
                      The final state is delivered to your webhook — do not poll
                      as your primary mechanism.
                    </p>
                  </div>

                  {/* Payments API */}
                  <div>
                    <DocHeading id="payments-api">Payments API</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Core endpoints for creating and managing payments.
                    </p>
                    <div className="mt-6 overflow-hidden rounded-md border border-border">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-border bg-muted">
                            <th className="px-4 py-3 font-semibold text-foreground">Method</th>
                            <th className="px-4 py-3 font-semibold text-foreground">Endpoint</th>
                            <th className="hidden px-4 py-3 font-semibold text-foreground md:table-cell">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {endpoints.map((endpoint) => (
                            <tr
                              key={`${endpoint.method}-${endpoint.path}`}
                              className="border-b border-border last:border-b-0"
                            >
                              <td className="px-4 py-3">
                                <MethodBadge method={endpoint.method} />
                              </td>
                              <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                                {endpoint.path}
                              </td>
                              <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                                {endpoint.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      List endpoints are paginated with{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">limit</code> and{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">cursor</code>{' '}
                      parameters. Default rate limit is 100 requests per minute
                      per key.
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Beyond core payments, the API exposes dedicated endpoints
                      for value-added services. Every service purchase creates a
                      payment object, so status handling, webhooks, and errors
                      work identically across all of them.
                    </p>
                    <div className="mt-6 overflow-hidden rounded-md border border-border">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-border bg-muted">
                            <th className="px-4 py-3 font-semibold text-foreground">Service</th>
                            <th className="px-4 py-3 font-semibold text-foreground">Endpoint</th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.map((item) => (
                            <tr
                              key={item.service}
                              className="border-b border-border last:border-b-0"
                            >
                              <td className="px-4 py-3 text-muted-foreground">
                                <a href={item.anchor} className="text-foreground hover:text-brand-blue">
                                  {item.service}
                                </a>
                              </td>
                              <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                                {item.endpoint}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Airtime */}
                  <div>
                    <DocHeading id="airtime">Airtime</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Top up airtime on MTN, Telecel, and AirtelTigo. The
                      network is detected from the phone number automatically,
                      or you can pass it explicitly with the{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">network</code>{' '}
                      field (<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">mtn</code>,{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">telecel</code>,{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">airteltigo</code>).
                    </p>
                    <CodeBlock
                      title="POST /v1/airtime"
                      code={`{
  "phone": "233241234567",
  "network": "mtn",
  "amount": 10,
  "currency": "GHS",
  "reference": "airtime-88231"
}`}
                    />
                    <CodeBlock
                      title="Response — 201 Created"
                      code={`{
  "id": "pay_a81kd02m",
  "type": "airtime",
  "status": "pending",
  "phone": "233241234567",
  "network": "mtn",
  "amount": 10,
  "reference": "airtime-88231"
}`}
                    />
                    <p className="leading-relaxed text-muted-foreground">
                      Delivery is usually instant. The{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">payment.success</code>{' '}
                      webhook confirms the top-up landed on the customer&apos;s
                      line. Minimum amount is GHS 1.
                    </p>
                  </div>

                  {/* Data bundles */}
                  <div>
                    <DocHeading id="data-bundles">Data bundles</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Data bundles vary by network and change over time, so
                      always fetch the live bundle list first rather than
                      hard-coding bundle codes.
                    </p>
                    <CodeBlock
                      title="GET /v1/data/bundles?network=mtn"
                      code={`{
  "network": "mtn",
  "bundles": [
    { "code": "mtn_1gb_30d", "name": "1GB — 30 days", "price": 6.50 },
    { "code": "mtn_5gb_30d", "name": "5GB — 30 days", "price": 28.00 },
    { "code": "mtn_15gb_30d", "name": "15GB — 30 days", "price": 75.00 }
  ]
}`}
                    />
                    <CodeBlock
                      title="POST /v1/data"
                      code={`{
  "phone": "233241234567",
  "network": "mtn",
  "bundle_code": "mtn_1gb_30d",
  "reference": "data-45102"
}`}
                    />
                    <p className="leading-relaxed text-muted-foreground">
                      The amount is derived from the bundle code — if the price
                      changed since you fetched the list, the request fails with{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">invalid_request</code>{' '}
                      and the current price, so you can re-confirm with the
                      customer before charging.
                    </p>
                  </div>

                  {/* ECG */}
                  <div>
                    <DocHeading id="ecg">ECG Prepaid &amp; Postpaid</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Always validate the meter or account before charging.
                      Validation returns the registered customer name so the
                      buyer can confirm they are paying for the right meter.
                    </p>
                    <CodeBlock
                      title="GET /v1/ecg/meters/P191234567890"
                      code={`{
  "meter_number": "P191234567890",
  "meter_type": "prepaid",
  "customer_name": "K. MENSAH",
  "address": "ADENTA, ACCRA"
}`}
                    />
                    <h3 className="mt-8 text-lg font-semibold text-foreground">Prepaid</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      Buy prepaid credit for a validated meter. The token is
                      generated by ECG after settlement and delivered in the
                      webhook — it is not available in the initial response.
                    </p>
                    <CodeBlock
                      title="POST /v1/ecg/prepaid"
                      code={`{
  "meter_number": "P191234567890",
  "amount": 50,
  "currency": "GHS",
  "phone": "233241234567",
  "reference": "ecg-70233"
}`}
                    />
                    <CodeBlock
                      title="Webhook — payment.success"
                      code={`{
  "event": "payment.success",
  "data": {
    "id": "pay_e55m1qk8",
    "type": "ecg_prepaid",
    "status": "success",
    "meter_number": "P191234567890",
    "amount": 50,
    "token": "5723-0921-8844-1290-5567",
    "units_kwh": 31.4,
    "reference": "ecg-70233"
  }
}`}
                    />
                    <h3 className="mt-8 text-lg font-semibold text-foreground">Postpaid</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      Postpaid accounts carry an outstanding bill. Look up the
                      balance first, then pay any amount up to or beyond the
                      outstanding figure.
                    </p>
                    <CodeBlock
                      title="GET /v1/ecg/accounts/0212345678"
                      code={`{
  "account_number": "0212345678",
  "meter_type": "postpaid",
  "customer_name": "K. MENSAH",
  "outstanding_balance": 132.75
}`}
                    />
                    <CodeBlock
                      title="POST /v1/ecg/postpaid"
                      code={`{
  "account_number": "0212345678",
  "amount": 132.75,
  "currency": "GHS",
  "phone": "233241234567",
  "reference": "ecg-70234"
}`}
                    />
                  </div>

                  {/* Ghana Water */}
                  <div>
                    <DocHeading id="ghana-water">Ghana Water</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Pay Ghana Water Company bills against a customer account
                      number. As with ECG, validate the account first to surface
                      the registered name and outstanding balance.
                    </p>
                    <CodeBlock
                      title="GET /v1/ghana-water/accounts/03011234567"
                      code={`{
  "account_number": "03011234567",
  "customer_name": "A. OWUSU",
  "district": "ACCRA EAST",
  "outstanding_balance": 84.20
}`}
                    />
                    <CodeBlock
                      title="POST /v1/ghana-water"
                      code={`{
  "account_number": "03011234567",
  "amount": 84.20,
  "currency": "GHS",
  "phone": "233241234567",
  "reference": "gwcl-31877"
}`}
                    />
                    <p className="leading-relaxed text-muted-foreground">
                      Ghana Water posts payments to accounts in batches, so the
                      customer&apos;s balance may take up to 24 hours to reflect
                      even after the{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">payment.success</code>{' '}
                      webhook. The webhook confirms our settlement with GWCL,
                      not the ledger update on the customer account.
                    </p>
                  </div>

                  {/* TV subscriptions */}
                  <div>
                    <DocHeading id="tv">TV subscriptions</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      GoTV, StarTimes, and DSTV share one interface — set the{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">provider</code>{' '}
                      field to <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">gotv</code>,{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">startimes</code>, or{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">dstv</code>.
                      Validate the smartcard or IUC number to get the account
                      name and current package, then renew or change packages.
                    </p>
                    <CodeBlock
                      title="GET /v1/tv/gotv/accounts/7028812345"
                      code={`{
  "provider": "gotv",
  "smartcard_number": "7028812345",
  "customer_name": "E. ASANTE",
  "current_package": "GOtv Jolli",
  "expires_at": "2026-08-30"
}`}
                    />
                    <CodeBlock
                      title="GET /v1/tv/gotv/packages"
                      code={`{
  "provider": "gotv",
  "packages": [
    { "code": "gotv_jinja", "name": "GOtv Jinja", "price": 45.00 },
    { "code": "gotv_jolli", "name": "GOtv Jolli", "price": 65.00 },
    { "code": "gotv_max", "name": "GOtv Max", "price": 95.00 }
  ]
}`}
                    />
                    <CodeBlock
                      title="POST /v1/tv"
                      code={`{
  "provider": "gotv",
  "smartcard_number": "7028812345",
  "package_code": "gotv_jolli",
  "phone": "233241234567",
  "reference": "tv-90112"
}`}
                    />
                    <p className="leading-relaxed text-muted-foreground">
                      Renewals of the current package activate within minutes.
                      Package upgrades and downgrades are applied by the
                      provider and can take up to an hour to reflect on the
                      decoder.
                    </p>
                  </div>

                  {/* Result checkers */}
                  <div>
                    <DocHeading id="result-checkers">BECE / WASSCE result checkers</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Purchase WAEC result-checker vouchers for BECE and WASSCE.
                      Set <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">exam</code>{' '}
                      to <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">bece</code> or{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">wassce</code>.
                      Up to 10 vouchers can be bought in one request.
                    </p>
                    <CodeBlock
                      title="POST /v1/checkers"
                      code={`{
  "exam": "wassce",
  "quantity": 1,
  "phone": "233241234567",
  "reference": "checker-51209"
}`}
                    />
                    <CodeBlock
                      title="Webhook — payment.success"
                      code={`{
  "event": "payment.success",
  "data": {
    "id": "pay_c19x8wm3",
    "type": "checker",
    "status": "success",
    "exam": "wassce",
    "vouchers": [
      { "serial": "WRC1234567890", "pin": "482915637401" }
    ],
    "reference": "checker-51209"
  }
}`}
                    />
                    <Alert>
                      <AlertTitle>Vouchers are non-refundable.</AlertTitle>
                      <AlertDescription>
                        Serials and PINs are single-issue WAEC credentials.
                        Deliver them to the customer over SMS or in-app and store
                        them against the order — they cannot be re-fetched after
                        30 days.
                      </AlertDescription>
                    </Alert>
                  </div>

                  {/* Webhooks */}
                  <div>
                    <DocHeading id="webhooks">Webhooks</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      We deliver transaction events to your{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">callback_url</code>{' '}
                      as signed POST requests. Verify the signature, process the
                      event, and respond with <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">200</code>{' '}
                      within 10 seconds. Failed deliveries are retried with
                      backoff for up to 24 hours.
                    </p>
                    <CodeBlock
                      title="Webhook payload — payment.success"
                      code={`{
  "event": "payment.success",
  "data": {
    "id": "pay_9f83k2m1",
    "status": "success",
    "amount": 500,
    "currency": "GHS",
    "reference": "order-10023",
    "settled_at": "2026-08-24T20:15:41Z"
  }
}`}
                    />
                    <CodeBlock
                      title="Signature verification — Node.js"
                      code={`const crypto = require("crypto");

function verifyWebhook(req) {
  const signature = req.headers["x-guglex-signature"];
  const expected = crypto
    .createHmac("sha256", process.env.WEBHOOK_SECRET)
    .update(JSON.stringify(req.body))
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}`}
                    />
                    <p className="leading-relaxed text-muted-foreground">
                      Events may be delivered more than once. Use the payment{' '}
                      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">reference</code>{' '}
                      to make processing idempotent so duplicates never
                      double-credit an order.
                    </p>
                  </div>

                  {/* USSD */}
                  <div>
                    <DocHeading id="ussd">USSD integration</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      USSD sessions are request-response: the network forwards
                      each user input to your endpoint, and your response
                      renders the next menu. Sessions are short-lived — keep
                      menus shallow and every response under 160 characters.
                    </p>
                    <CodeBlock
                      title="USSD session exchange"
                      code={`--> { "sessionId": "s_71m2", "phone": "233241234567", "input": "" }
<-- { "response": "Welcome to Ewale\\n1. Buy airtime\\n2. Buy data\\n3. Pay ECG", "continue": true }

--> { "sessionId": "s_71m2", "phone": "233241234567", "input": "1" }
<-- { "response": "Enter amount (GHS):", "continue": true }

--> { "sessionId": "s_71m2", "phone": "233241234567", "input": "5" }
<-- { "response": "Dial approved. You will receive a payment prompt.", "continue": false }`}
                    />
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                        Persist session state server-side keyed by{' '}
                        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">sessionId</code>
                        — networks do not carry state for you.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                        Respond within 3 seconds; slow responses terminate the
                        session on most networks.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                        Treat dropped sessions as abandoned, not failed — the
                        payment prompt may still complete.
                      </li>
                    </ul>
                  </div>

                  {/* Errors */}
                  <div>
                    <DocHeading id="errors">Errors</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Errors use conventional HTTP status codes with a
                      machine-readable code and human-readable message in the
                      body.
                    </p>
                    <CodeBlock
                      title="Error response"
                      code={`{
  "error": {
    "code": "duplicate_reference",
    "message": "A payment with reference order-10023 already exists."
  }
}`}
                    />
                    <div className="overflow-hidden rounded-md border border-border">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="border-b border-border bg-muted">
                            <th className="px-4 py-3 font-semibold text-foreground">Status</th>
                            <th className="px-4 py-3 font-semibold text-foreground">Code</th>
                            <th className="hidden px-4 py-3 font-semibold text-foreground md:table-cell">
                              Meaning
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {errors.map((error) => (
                            <tr key={error.name} className="border-b border-border last:border-b-0">
                              <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                                {error.code}
                              </td>
                              <td className="px-4 py-3 font-mono text-[13px] text-foreground">
                                {error.name}
                              </td>
                              <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                                {error.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Go-live */}
                  <div>
                    <DocHeading id="go-live">Testing &amp; go-live</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      In sandbox, specific phone numbers and amounts simulate
                      each payment outcome so you can test success, decline, and
                      timeout paths deterministically. Before switching to
                      production keys, confirm the checklist below.
                    </p>
                    <ul className="mt-6 space-y-3">
                      {checklist.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                          <span className="mt-0.5 font-mono text-[13px] font-semibold text-brand-blue">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Support */}
                  <div>
                    <DocHeading id="support">Support</DocHeading>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      If the documentation doesn&apos;t cover your use case —
                      custom USSD flows, reconciliation pipelines, or
                      high-volume collection — our engineering team works
                      directly with integrating teams.
                    </p>
                    <Button variant="link" className="mt-6 px-0" render={<Link href="/contact" />}>
                      Talk to engineering
                      <ArrowRight />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </SiteShell>
  );
}

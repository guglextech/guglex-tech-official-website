---
title: "Webhooks, idempotency, and reconciliation"
excerpt: "The three practices that keep payment state trustworthy after go-live — and the mistakes that make it drift."
date: "2026-08-20"
author: "Guglex Technologies"
category: "Developers"
tags: ["Webhooks", "APIs", "Payments", "Engineering"]
---

Most payment bugs in production are not “the API is down.” They are state bugs. Your database says paid. The provider says pending. The customer has a token. Or none of those agree.

Three habits prevent most of that.

## 1. Verify every webhook

If you accept a callback because it arrived on the right URL, anyone who finds that URL can fake a payment.

Verify the signature with the provider secret. Reject unsigned or mismatched payloads. Do it with a constant-time compare. Log the failure.

This is not optional in production.

## 2. Process events once

Providers retry. Timeouts cause them to retry. Your own verify endpoint causes them to look like retries.

Use the payment `reference` (or the provider event id) as an idempotency key. If you have already credited that reference, return 200 and do nothing.

Returning a 500 because you already processed the event is how you get infinite retries *and* duplicate credits.

## 3. Reconcile on a schedule

Webhooks are the fast path. They are not the source of truth by themselves.

At least daily — and more often if volume is high — compare:

- payments you think are pending
- payments the provider marked success or failed
- credits you issued (tokens, airtime, checkers, ledger entries)

Anything that does not match is an incident, not a curiosity.

## A simple rule for product teams

The customer-facing status should follow the reconciled state, not the last HTTP response you got from checkout.

Pending is an honest status. Fake success is how you lose money and trust.

Our [developer documentation](/developers) covers signature verification, retry behaviour, and the payment object Ewale and Gyepayments are built on.

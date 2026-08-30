---
title: "What good looks like in an African payment integration"
excerpt: "A checklist we use when connecting Hubtel, Paystack, mobile money, and cards — before anyone talks about UI."
date: "2026-05-28"
author: "Guglex Technologies"
category: "Developers"
tags: ["Hubtel", "Paystack", "Mobile Money", "Integration"]
---

A payment integration is not “we called the API.” It is a system that stays correct when the provider is slow, the customer retries, and the network drops the prompt.

This is the bar we use on Gyepayments, Ewale, and client builds.

## Sandbox is not optional

If you cannot simulate success, decline, and timeout without real money, you will discover those paths in production. That is expensive.

Use separate keys. Never ship live secrets to a browser or a mobile binary.

## Status is a state machine

At minimum you need:

- `pending` — prompt sent or request accepted
- `success` — provider confirmed
- `failed` — declined, expired, or rejected

Do not invent a fourth status called “maybe.” If you need to re-check, that is a verify call, not a new state.

## References are unique

Your `reference` is the idempotency key. Reusing it is how you get `duplicate_reference` errors — or worse, silent collisions.

Generate it server-side. Persist it before you call the provider.

## Webhooks over polling

Polling is a backup. The primary path is a signed callback. If you poll in a tight loop you will rate-limit yourself and still be wrong.

## Local methods are the product

In Ghana, mobile money is not an alternative to cards. It is the default. Bank transfer and cards are additional, not the centre.

An integration that only does cards is a partial product.

## After go-live

Watch:

- payment failure rate
- time from request to webhook
- duplicate events
- volume by channel (MTN, Telecel, AT, cards)

If you cannot see those, you cannot operate the integration.

We publish the same model in [technical documentation](/developers). If you need a partner to implement it, [contact us](/contact).

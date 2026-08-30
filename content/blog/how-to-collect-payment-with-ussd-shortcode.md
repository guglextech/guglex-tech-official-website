---
title: "How to collect payment with a USSD shortcode"
excerpt: "A practical guide to USSD collection in Ghana: sessions, menus, mobile money prompts, and the failure modes that show up in production."
date: "2026-06-12"
author: "Guglex Technologies"
category: "Developers"
tags: ["USSD", "Mobile Money", "Payments", "Integration"]
---

USSD is still one of the most reliable ways to collect money in Ghana. It runs on every GSM phone, does not need data, and customers already know how to dial a shortcode.

It is also easy to build badly. This is the shape of a collection flow that holds up.

## What a USSD payment actually is

The customer dials a code. The network opens a session and sends you each input. You return the next menu. When they confirm an amount, you trigger a mobile money prompt on their phone. They enter their PIN. You wait for the provider callback. Then you tell the session what happened — or you have already closed it, and you follow up with SMS.

The session and the payment are not the same object. The session can die while the payment is still pending. Design for that.

## Keep the menu shallow

A good collection menu looks like this:

1. Choose a service or amount
2. Enter the destination (phone, meter, account)
3. Confirm
4. Wait for the prompt

If you need more than that, move the complexity to the web. USSD timeouts are unforgiving. Most networks expect a response in a few seconds. Slow endpoints kill the session.

## Persist state yourself

The network does not keep your cart. Key everything on `sessionId`. If the user sends “2”, you need to know which menu they were on.

Treat a dropped session as abandoned, not failed. The customer may still approve the prompt after the USSD screen is gone.

## Collect, then reconcile

Do not mark an order paid because the USSD session ended on “success.” Mark it paid when the signed webhook says so.

Use a unique `reference` per attempt so retries and duplicate callbacks cannot credit twice.

## What to test before go-live

- Declined PIN
- Prompt timeout
- Duplicate session input
- Network delay on your response
- A callback that arrives twice

If those paths are untested, you do not have a payments product yet. You have a happy-path demo.

We design and operate USSD collection for Ewale (`*714*22#`) and for client platforms. If you are scoping a shortcode, [read the developer docs](/developers) or [contact engineering](/contact).

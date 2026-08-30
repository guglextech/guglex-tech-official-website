---
title: "Why we ship web and USSD together"
excerpt: "A smartphone checkout is not enough in Ghana. Feature phones, dead data, and real usage still run on USSD."
date: "2026-08-06"
author: "Guglex Technologies"
category: "Product"
tags: ["USSD", "Ewale", "Product Design", "Payments"]
featured: false
---

If you only ship a website, you are shipping for a subset of the country. That subset is real — and growing — but it is not the whole market.

Ewale is on the web and on **\*714\*22#** for the same reason: the customer should not have to own the right device, the right app, or a working data connection to finish a payment.

## What USSD is actually good at

USSD is a session. The network opens a channel, the user sees a menu, they reply, you respond. It works on feature phones. It works when data is down. It does not need an app store.

That makes it the right channel for:

- airtime and data for someone else’s line
- ECG tokens bought from a stall or a family phone
- anything that has to work *now*, not after a download

It is a poor channel for long forms, rich receipts, and anything that needs more than a few screens. That is why the web exists.

## What the web is actually good at

The web is better for confirmation. You can show a meter name, a package list, a token in a font people can read, a history of past purchases.

You can also recover a session that USSD would have dropped. If someone has a smartphone and data, they should get the better surface — not a worse copy of the USSD menu.

## Design rules that keep both honest

- **Same reference, same payment object.** A USSD purchase and a web purchase are not different products. They create the same record.
- **Same success criteria.** If the webhook has not confirmed, neither channel should pretend it has.
- **Shallow USSD.** Three to five steps. No nested essays.
- **Web does the explaining.** Errors, retries, and “what happened” belong on a screen with room.

## The operational cost is real

Two channels means two session models, two timeout profiles, and twice the ways a user can abandon a flow. That is the price of coverage.

We pay it because the alternative is a product that only works for people who already have everything. That is not the market we build for.

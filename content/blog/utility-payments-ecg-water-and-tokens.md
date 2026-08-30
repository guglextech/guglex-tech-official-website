---
title: "Utility payments: ECG tokens, postpaid, and Ghana Water"
excerpt: "What it takes to collect utility bills in production — validation, tokens that arrive after settlement, and ledgers that update late."
date: "2026-08-13"
author: "Guglex Technologies"
category: "Payments"
tags: ["ECG", "Ghana Water", "Utilities", "Ewale"]
featured: false
---

Utility payments look like a form and a button. They are not.

A wrong meter number, a token that never arrives, or a bill that stays outstanding after you took the customer’s money will destroy trust faster than a slow website.

This is how we treat ECG and Ghana Water on Ewale, and how we build the same flows for other products.

## Always validate first

Before you charge, look up the meter or account. Show the registered name. Let the customer confirm.

People mistype. People pay a neighbour’s meter by accident. Validation is cheaper than a refund conversation with a utility.

## Prepaid is not postpaid

**ECG prepaid** generates a token after settlement. That token is the product. It will not be in the first API response. It arrives on the webhook. Your UI has to wait, then display the token clearly — and send it by SMS if the customer paid on USSD.

**ECG postpaid** and **Ghana Water** are account payments against an outstanding balance. Lookup the balance, then collect. Overpaying is usually allowed; underpaying is a product decision you should make explicit.

## Settlement and the customer ledger are different clocks

Ghana Water posts to customer accounts in batches. You can have a successful collection webhook and a bill that still looks unpaid for hours.

Say that out loud in the product. “Payment received. It may take up to 24 hours to show on your bill.” Silence here looks like theft.

## Tokens are sensitive

Treat prepaid tokens like cash. Store them against the order. Do not log them in plaintext forever. Make them retrievable for a defined window, then stop.

If you cannot re-show a token, you will be the call centre.

## What we expose for integrators

The same rules are in our [developer documentation](/developers): meter lookup, prepaid vs postpaid endpoints, and the webhook payload that carries the token and units.

If you are adding utilities to an existing product, start with validation and delivery — not with a prettier checkout.

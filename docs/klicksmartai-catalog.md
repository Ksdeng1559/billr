# KlickSmartAI quick wins — local catalog setup

After local setup and onboarding, create exactly one active business named KlickSmartAI and set its default currency to CAD. From app/ run:

```sh
node scripts/seed-klicksmartai.mjs
node scripts/seed-klicksmartai.mjs --apply
```

The first command previews changes; the second inserts missing saved items. Run only one installer at a time. Existing names (including inactive items) are skipped without changes. Review any differences manually. The installer refuses non-loopback database URLs, ambiguous businesses, and non-CAD businesses. No invoices, estimates, subscriptions or payment requests are created. Rates are before applicable taxes; configure taxes on documents before sending. Monthly units are price labels, not automatic subscriptions. SKU is catalog metadata, not a native Billr item field. After import, check Saved Items (/items) and draft a test estimate. Re-run dry run to verify all 69 items are present. Do not reset the database to import this catalog.

## Lead generation and AI services

All prices are proposed CAD launch rates, before taxes. Quote setup as a separate project line, optional monthly management as a month line, and accepted leads or attended appointments as item lines with quantity equal to the accepted count. Use the existing item unit rather than a custom lead unit for MCP compatibility. Do not bill multiple funnel stages for the same prospect unless explicitly agreed. Prospect records are not enquiries. For pay-per-lead, agree target geography, service, ICP, exclusivity, qualification, attribution and dispute window before launch; exclude duplicates, invalid contacts and out-of-scope leads. For appointment pricing, charge only attended qualified meetings. Agree volume caps and obtain approval before billing; track accepted events and credits in CRM with unique lead IDs and reconcile manually before issuing invoices. Ad spend, telephony, email infrastructure and other usage are separate unless expressly included. Use compliant outreach and permissioned contact handling. Prices are starting points subject to unit economics and client agreement. No automatic metering, subscription charging or lead delivery is implemented by this catalog.

## Outcome pricing and bundles (CAD)

Use standalone rates as reference prices, not promises of savings. Measure net recovered hours after human oversight, multiply by fully loaded labour cost, and add attributable incremental contribution (not gross revenue) only where it does not overlap. Target customer retention of 60% of validated economic value: all-in customer cost ceiling = 40% of that value, including usage, performance fees and amortized setup over the agreed evaluation period. Distinguish cash savings from redeployed capacity. If the ceiling is below delivery cost plus required margin, reduce scope or decline; do not promise 60% savings. Validate baseline and review monthly. Do not value theoretical 24/7 staffing as actual savings unless that expense would genuinely be incurred.

Bundle items replace corresponding standalone charges, never stack both. Bundle rates are proposed launch guidelines and may be adjusted in draft estimates after human approval. Compare like-for-like scope, remove duplicate task value, and disclose usage, taxes and exclusions. Front desk bundle standalone setup reference ARR-003 + CHAT-001 + AI-004 = 1993; monthly ARR-102 + CHAT-101 + BOOK-101 = 1379. Bundle rates 1495 setup and 1195/month. Existing legacy items remain unchanged; select one tier per workflow. No automatic discounts, metering or subscription charging added. Use approved qualification and regulatory review for performance fees.

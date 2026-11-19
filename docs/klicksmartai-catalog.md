# KlickSmartAI quick wins — local catalog setup

After local setup and onboarding, create exactly one active business named KlickSmartAI and set its default currency to CAD. From app/ run:

```sh
node scripts/seed-klicksmartai.mjs
node scripts/seed-klicksmartai.mjs --apply
```

The first command previews changes; the second inserts missing saved items. Run only one installer at a time. Existing names (including inactive items) are skipped without changes. Review any differences manually. The installer refuses non-loopback database URLs, ambiguous businesses, and non-CAD businesses. No invoices, estimates, subscriptions or payment requests are created. Rates are before applicable taxes; configure taxes on documents before sending. Monthly units are price labels, not automatic subscriptions. SKU is catalog metadata, not a native Billr item field. After import, check Saved Items (/items) and draft a test estimate. Re-run dry run to verify all 28 items are present. Do not reset the database to import this catalog.

## Lead generation and AI services

All prices are proposed CAD launch rates, before taxes. Quote setup as a separate project line, optional monthly management as a month line, and accepted leads or attended appointments as item lines with quantity equal to the accepted count. Use the existing item unit rather than a custom lead unit for MCP compatibility. Do not bill multiple funnel stages for the same prospect unless explicitly agreed. Prospect records are not enquiries. For pay-per-lead, agree target geography, service, ICP, exclusivity, qualification, attribution and dispute window before launch; exclude duplicates, invalid contacts and out-of-scope leads. For appointment pricing, charge only attended qualified meetings. Agree volume caps and obtain approval before billing; track accepted events and credits in CRM with unique lead IDs and reconcile manually before issuing invoices. Ad spend, telephony, email infrastructure and other usage are separate unless expressly included. Use compliant outreach and permissioned contact handling. Prices are starting points subject to unit economics and client agreement. No automatic metering, subscription charging or lead delivery is implemented by this catalog.

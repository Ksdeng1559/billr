# KlickSmartAI quick wins — local catalog setup

After local setup and onboarding, create exactly one active business named KlickSmartAI and set its default currency to CAD. From app/ run:

```sh
node scripts/seed-klicksmartai.mjs
node scripts/seed-klicksmartai.mjs --apply
```

The first command previews changes; the second inserts missing saved items. Run only one installer at a time. Existing names (including inactive items) are skipped without changes. Review any differences manually. The installer refuses non-loopback database URLs, ambiguous businesses, and non-CAD businesses. No invoices, estimates, subscriptions or payment requests are created. Rates are before applicable taxes; configure taxes on documents before sending. Monthly units are price labels, not automatic subscriptions. SKU is catalog metadata, not a native Billr item field. After import, check Saved Items (/items) and draft a test estimate. Re-run dry run to verify all 12 items are present. Do not reset the database to import this catalog.

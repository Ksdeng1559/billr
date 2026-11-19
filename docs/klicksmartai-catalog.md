# KlickSmartAI quick wins — local catalog setup

After local setup and onboarding, create exactly one active business named KlickSmartAI and set its default currency to CAD. From app/ run:

```sh
node scripts/seed-klicksmartai.mjs
node scripts/seed-klicksmartai.mjs --apply
```

The first command previews changes; the second inserts missing saved items. Run only one installer at a time. Existing names (including inactive items) are skipped without changes. Review any differences manually. The installer refuses non-loopback database URLs, ambiguous businesses, and non-CAD businesses. No invoices, estimates, subscriptions or payment requests are created. Rates are before applicable taxes; configure taxes on documents before sending. Monthly units are price labels, not automatic subscriptions. SKU is catalog metadata, not a native Billr item field. After import, check Saved Items (/items) and draft a test estimate. Re-run dry run to verify all 167 items are present. Do not reset the database to import this catalog.

## Lead generation and AI services

All prices are proposed CAD launch rates, before taxes. Quote setup as a separate project line, optional monthly management as a month line, and accepted leads or attended appointments as item lines with quantity equal to the accepted count. Use the existing item unit rather than a custom lead unit for MCP compatibility. Do not bill multiple funnel stages for the same prospect unless explicitly agreed. Prospect records are not enquiries. For pay-per-lead, agree target geography, service, ICP, exclusivity, qualification, attribution and dispute window before launch; exclude duplicates, invalid contacts and out-of-scope leads. For appointment pricing, charge only attended qualified meetings. Agree volume caps and obtain approval before billing; track accepted events and credits in CRM with unique lead IDs and reconcile manually before issuing invoices. Ad spend, telephony, email infrastructure and other usage are separate unless expressly included. Use compliant outreach and permissioned contact handling. Prices are starting points subject to unit economics and client agreement. No automatic metering, subscription charging or lead delivery is implemented by this catalog.

## Outcome pricing and bundles (CAD)

Use standalone rates as reference prices, not promises of savings. Measure net recovered hours after human oversight, multiply by fully loaded labour cost, and add attributable incremental contribution (not gross revenue) only where it does not overlap. Target customer retention of 60% of validated economic value: all-in customer cost ceiling = 40% of that value, including usage, performance fees and amortized setup over the agreed evaluation period. Distinguish cash savings from redeployed capacity. If the ceiling is below delivery cost plus required margin, reduce scope or decline; do not promise 60% savings. Validate baseline and review monthly. Do not value theoretical 24/7 staffing as actual savings unless that expense would genuinely be incurred.

Bundle items replace corresponding standalone charges, never stack both. Bundle rates are proposed launch guidelines and may be adjusted in draft estimates after human approval. Compare like-for-like scope, remove duplicate task value, and disclose usage, taxes and exclusions. Front desk bundle standalone setup reference ARR-003 + CHAT-001 + AI-004 = 1993; monthly ARR-102 + CHAT-101 + BOOK-101 = 1379. Bundle rates 1495 setup and 1195/month. Existing legacy items remain unchanged; select one tier per workflow. No automatic discounts, metering or subscription charging added. Use approved qualification and regulatory review for performance fees.

## Master offer library v4.1

All 167 items are CAD reference rates; legacy items and rates are preserved. Use one applicable tier or bundle, not overlapping charges. The standard business knowledge chatbot plan CHAT-103 ($149/month) is distinct from outcome-managed CHAT-101 ($480/month). Starting-price custom work requires approved scope. ICP research LG-006 and database reactivation AI-003 are shared across categories, not separate duplicate billable items. WEB-001 includes foundational lead capture; INT or WEB-010 add-ons only for incremental scope. The complete customer acquisition bundle and Local Growth Accelerator are scoped offers, not additive to overlapping department subscriptions. Suggested discounts for distinct integrated standalone services: two 5–10%, three 10–15%, four 15–20%, complete department 20–30%, subject to margin and human approval; no extra automatic discount on a bundle. Credit selected diagnostic fees only when agreed. Do not guarantee savings or rankings.

### Vertical lead pricing guide (CAD, not separate automatic saved items)

| Industry | Standard | High-intent |
|---|---:|---:|
| Automotive repair | 25 | 45 |
| Residential or carpet cleaning | 25 | 45 |
| Landscaping | 35 | 65 |
| Plumbing | 50 | 75 |
| HVAC | 50 | 100 |
| Water damage restoration | 100 | 150 |
| Roofing | 100 | 150 |
| Basement waterproofing | 75 | 125 |
| Commercial services | 125 | 250 |
| Cybersecurity services | 150 | 400 per attended appointment |

Use the appropriate saved lead item with a human-approved estimate rate for the specific vertical. These are guidelines, not market evidence; regulated referral arrangements require compliance review.

### Quick wins sales priority

SEO-001, SEO-002, SEO-004, SEO-003, SEO-005, WEB-012, WEB-001, GBP-001, GBP-003, VID-001, CHAT-002, AI-004, ARR-001, ARR-002, ARR-003, AI-003, LG-004, OUT-001, BND-001, BND-006. Sell fixed scope, collect agreed upfront fees, and propose relevant managed-service upsells. Delivery-time targets are provisional and should be validated.

### Full saved-item price index

| SKU | Service | CAD rate | Unit |
|---|---|---:|---|
| SEO-001 | Google Business Profile Audit | 199 | project |
| SEO-002 | Quick SEO Audit | 299 | project |
| SEO-003 | Schema Audit | 349 | project |
| SEO-004 | Landing Page Audit | 299 | project |
| SEO-005 | Local Competitor Analysis | 349 | project |
| SEO-006 | SEO Content Plan | 499 | project |
| GBP-001 | GBP Optimization | 500 | project |
| WEB-001 | Three-Page Website | 750 | project |
| WEB-002 | Local SEO Microsite | 995 | project |
| REP-001 | Reputation Management | 299 | month |
| SEO-101 | Local Growth Management | 599 | month |
| SEO-102 | Local Market Domination | 1499 | month |
| LG-001 | AI Local Lead Generation Setup | 750 | project |
| LG-002 | AI B2B Outbound Campaign Setup | 1500 | project |
| LG-003 | AI Lead Generation Managed Service | 499 | month |
| LG-101 | Qualified Local Service Lead | 50 | item |
| LG-102 | Emergency or High-Value Service Lead | 100 | item |
| LG-103 | Verified B2B Prospect | 15 | item |
| LG-104 | Qualified B2B Sales Enquiry | 125 | item |
| LG-105 | Qualified Attended Sales Appointment | 250 | item |
| LG-106 | Premium Qualified Attended Appointment | 400 | item |
| AI-001 | AI Receptionist Setup | 750 | project |
| AI-002 | AI Receptionist Management | 299 | month |
| AI-003 | Database Reactivation Campaign Setup | 499 | project |
| AI-004 | AI Booking Agent Setup | 499 | project |
| ADS-001 | Google Ads Campaign Setup | 750 | project |
| ADS-002 | Google Ads Management | 599 | month |
| VID-001 | AI Promotional Video | 299 | project |
| OUT-001 | Workforce Productivity Assessment | 499 | project |
| ARR-001 | Receptionist Productivity Assessment | 199 | project |
| ARR-002 | Essential Vapi Receptionist Deployment | 499 | project |
| ARR-003 | Professional Vapi Receptionist Deployment | 995 | project |
| ARR-004 | AI Revenue Receptionist Deployment | 1995 | project |
| ARR-101 | Essential AI Receptionist | 299 | month |
| ARR-102 | Professional AI Receptionist | 750 | month |
| ARR-103 | AI Revenue Receptionist | 1495 | month |
| ARR-104 | Qualified Receptionist Appointment | 50 | item |
| ARR-105 | High-Value Qualified Receptionist Appointment | 100 | item |
| CHAT-001 | AI Business Knowledge Chatbot Setup | 499 | project |
| CHAT-101 | AI Business Knowledge Chatbot Management | 480 | month |
| BOOK-101 | AI Booking Agent Management | 149 | month |
| EMP-002 | AI Administrative Assistant Setup | 995 | project |
| EMP-102 | AI Administrative Assistant Managed Service | 800 | month |
| EMP-003 | AI Customer Service Agent Setup | 995 | project |
| EMP-103 | AI Customer Service Agent Managed Service | 960 | month |
| EMP-004 | AI Appointment Setter Setup | 750 | project |
| EMP-104 | AI Appointment Setter Managed Service | 1080 | month |
| EMP-005 | AI Sales Development Agent Setup | 1500 | project |
| EMP-105 | AI Sales Development Agent Managed Service | 1440 | month |
| EMP-006 | AI Marketing Coordinator Setup | 995 | project |
| EMP-106 | AI Marketing Coordinator Managed Service | 1200 | month |
| EMP-007 | AI Local SEO Specialist Setup | 750 | project |
| EMP-107 | AI Local SEO Specialist Managed Service | 1400 | month |
| EMP-008 | AI Business Development Agent Setup | 1995 | project |
| EMP-108 | AI Business Development Agent Managed Service | 1800 | month |
| EMP-009 | AI CRM Administrator Setup | 995 | project |
| EMP-109 | AI CRM Administrator Managed Service | 1300 | month |
| BND-001 | Get Found Bundle Setup | 995 | project |
| BND-002 | AI Digital Front Desk Bundle Setup | 1495 | project |
| BND-102 | AI Digital Front Desk Bundle Management | 1195 | month |
| BND-003 | AI Local Marketing Department Bundle Setup | 1995 | project |
| BND-103 | AI Local Marketing Department Bundle Management | 1800 | month |
| BND-004 | AI Customer Acquisition Department Bundle Setup | 2995 | project |
| BND-104 | AI Customer Acquisition Department Bundle Management | 2400 | month |
| BND-005 | AI Business Operations Department Bundle Setup | 4995 | project |
| BND-105 | AI Business Operations Department Bundle Management | 3495 | month |
| BND-006 | Local Lead Generation Engine Bundle Setup | 995 | project |
| BND-106 | Local Lead Generation Engine Bundle Management | 399 | month |
| WEB-003 | High-Conversion Landing Page | 499 | project |
| SEO-007 | Comprehensive Local SEO Audit | 599 | project |
| SEO-008 | AI Search Visibility Audit | 299 | project |
| AUD-001 | Business Marketing Systems Audit | 499 | project |
| AUD-002 | AI Automation Opportunity Assessment | 499 | project |
| AUD-003 | Lead Generation Systems Audit | 399 | project |
| AUD-004 | Marketing Strategy Consulting | 150 | hour |
| WEB-004 | Five-Page Professional Website | 1250 | project |
| WEB-005 | Premium Business Website | 1995 | project |
| WEB-006 | Additional Website Page | 199 | item |
| WEB-007 | Local Service Area Page | 149 | item |
| WEB-008 | Schema Markup Implementation | 249 | project |
| WEB-009 | Website Conversion Optimization | 499 | project |
| WEB-010 | Lead Capture Integration | 199 | project |
| WEB-011 | Website Hosting and Maintenance | 49 | month |
| WEB-012 | One-Page Business Website | 499 | project |
| GBP-002 | Local Citation Building | 399 | project |
| GBP-003 | Review Generation System Setup | 249 | project |
| GBP-004 | Google Business Profile Post | 49 | item |
| GBP-005 | Basic GBP Optimization | 299 | project |
| GBP-101 | GBP Posting and Monitoring | 149 | month |
| GBP-103 | Review Generation System Management | 99 | month |
| REP-002 | Reputation Management Setup | 149 | project |
| SEO-009 | Local SEO Starter Setup | 299 | project |
| SEO-010 | Local Growth Management Setup | 499 | project |
| SEO-011 | Local Market Domination Setup | 995 | project |
| SEO-012 | Additional Location Management Setup | 199 | project |
| SEO-103 | Additional Location Management | 249 | month |
| SEO-104 | Local SEO Article Production | 199 | item |
| SEO-105 | Semantic Content Cluster Development | 995 | project |
| SEO-106 | AI Search Visibility Optimization | 750 | project |
| CHAT-002 | Basic Website Chatbot Setup | 299 | project |
| CHAT-102 | Basic Website Chatbot Management | 79 | month |
| CHAT-103 | Standard Business Knowledge Chatbot Management | 149 | month |
| AI-005 | AI Review Response Agent Setup | 299 | project |
| AI-105 | AI Review Response Agent Management | 99 | month |
| AI-006 | AI WhatsApp Agent Setup | 750 | project |
| AI-106 | AI WhatsApp Agent Management | 249 | month |
| AI-103 | Database Reactivation Agent Management | 199 | month |
| AI-007 | Multi-Channel Chat Agent Setup | 1250 | project |
| AI-107 | Multi-Channel Chat Agent Management | 399 | month |
| AI-008 | AI Outbound Voice Agent Setup | 1250 | project |
| AI-108 | AI Outbound Voice Agent Management | 399 | month |
| AI-009 | AI Content Production Agent Setup | 750 | project |
| AI-109 | AI Content Production Agent Management | 299 | month |
| AI-010 | AI CRM Follow-up Agent Setup | 750 | project |
| AI-110 | AI CRM Follow-up Agent Management | 199 | month |
| AI-011 | Custom Client Brain Knowledge Base Setup | 750 | project |
| AI-111 | Custom Client Brain Knowledge Base Management | 149 | month |
| AI-012 | Custom Multi-Agent Business Workflow Setup | 2500 | project |
| AI-112 | Custom Multi-Agent Business Workflow Management | 499 | month |
| LG-004 | Cold Email Infrastructure Setup | 499 | project |
| LG-005 | LinkedIn Outreach Campaign Setup | 750 | project |
| LG-006 | ICP and Buyer Persona Research | 299 | project |
| LG-008 | Custom Prospect Discovery Workflow | 995 | project |
| LG-009 | Lead Qualification Automation | 750 | project |
| LG-010 | Multi-Channel GTM Campaign Setup | 2500 | project |
| LG-011 | Lead Attribution System | 499 | project |
| LG-107 | Application-Ready Qualified Opportunity | 500 | item |
| LG-108 | Verified B2B Contact | 5 | item |
| LG-109 | Standard Qualified Local Lead | 35 | item |
| LG-110 | Emergency Service Lead | 75 | item |
| LG-111 | High-Value Home Improvement Lead | 125 | item |
| ADS-003 | Meta Ads Campaign Setup | 399 | project |
| ADS-004 | Meta Ads Management | 499 | month |
| ADS-005 | YouTube Ads Campaign Setup | 750 | project |
| ADS-006 | YouTube Ads Management | 599 | month |
| ADS-007 | Retargeting Campaign Setup | 399 | project |
| ADS-008 | Retargeting Campaign Management | 299 | month |
| ADS-009 | Conversion Tracking Setup | 299 | project |
| CNT-001 | Social Media Content Package | 499 | month |
| CNT-002 | Email Marketing Campaign or Sequence | 399 | project |
| CNT-003 | Advertorial Landing Page | 499 | project |
| CNT-004 | Lead Magnet Development | 399 | project |
| CNT-005 | Social Media Content Management Setup | 299 | project |
| VID-002 | Five AI Promotional Videos | 995 | project |
| VID-003 | Video Sales Letter | 750 | project |
| VID-004 | AI UGC-Style Video | 299 | item |
| INT-001 | CRM Integration | 299 | project |
| INT-002 | Calendar and Booking Integration | 199 | project |
| INT-003 | SMS Automation Integration | 199 | project |
| INT-004 | WhatsApp Integration | 299 | project |
| INT-005 | Custom API Integration | 499 | project |
| INT-006 | Knowledge Base Development | 349 | project |
| INT-007 | Advanced Call Routing | 249 | project |
| INT-008 | Additional Language Configuration | 149 | item |
| INT-009 | Call Tracking Configuration | 249 | project |
| INT-010 | Custom Agent Workflow Development | 499 | project |
| BND-007 | Klick2Client Co-Op Marketing Activation | 499 | project |
| BND-107 | Klick2Client Co-Op Marketing Participation | 299 | month |
| BND-008 | Local Growth Accelerator Bundle Setup | 1495 | project |
| BND-108 | Local Growth Accelerator Bundle Management | 799 | month |
| BND-009 | Complete AI Customer Acquisition System Setup | 2995 | project |
| BND-109 | Complete AI Customer Acquisition System Management | 1499 | month |
| ARR-005 | Vapi Receptionist Starter Promotion Setup | 299 | project |
| ARR-107 | Vapi Receptionist Starter Promotion Management | 199 | month |
| ARR-006 | Vapi Receptionist Standard Managed Setup | 750 | project |
| ARR-108 | Vapi Receptionist Standard Managed Service | 499 | month |
| BND-110 | AI Digital Front Desk Competitive Bundle Management | 995 | month |

## Priority implementations

See [Priority AI implementations and sales playbook](klicksmartai-priority-implementations.md) for the six P1 offers, featured packages and outcome KPIs. Competitive rates are alternate saved items, not automatic discounts; existing prices remain unchanged.

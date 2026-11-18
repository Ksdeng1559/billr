import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: fileURLToPath(new URL('../.env.local', import.meta.url)), quiet: true })
const catalog = JSON.parse(readFileSync(new URL('./klicksmartai-catalog.json', import.meta.url), 'utf8'))
const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key || !['localhost', '127.0.0.1', '[::1]'].includes(new URL(url).hostname)) {
  throw Error('A local Supabase URL and service role key are required. Remote imports are disabled.')
}
const args = process.argv.slice(2)
if (args.some(a => a !== '--apply')) throw Error('Usage: node scripts/seed-klicksmartai.mjs [--apply]')
const apply = args.includes('--apply')
const db = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
const { data: businesses, error } = await db.from('businesses').select('id,name,default_currency,is_active').eq('name', catalog.business)
if (error) throw Error(error.message)
if (businesses.length !== 1 || !businesses[0].is_active || businesses[0].default_currency !== catalog.currency) {
  throw Error('Create exactly one active KlickSmartAI business and set its default currency to CAD before importing.')
}
const business = businesses[0]
for (const item of catalog.items) {
  const { data: existing, error: lookupError } = await db.from('items').select('id,name,rate,unit,is_active').eq('business_id', business.id).ilike('name', item.name)
  if (lookupError) throw Error(lookupError.message)
  if (existing.length) {
    console.log('SKIP existing (review rate/unit/active status):', item.sku, item.name, JSON.stringify(existing))
    continue
  }
  console.log(apply ? 'INSERT' : 'WOULD INSERT', item.sku, item.name, item.rate, item.unit)
  if (!apply) continue
  const { sku, ...payload } = item
  const { error: insertError } = await db.from('items').insert({ ...payload, business_id: business.id, is_active: true })
  if (insertError) throw Error(insertError.message)
}
console.log(apply ? 'Catalog import complete.' : 'Dry run complete; use --apply to insert missing items.')

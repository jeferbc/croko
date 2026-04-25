import { createHash } from 'crypto';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(request) {
  const secret = process.env.WOMPI_INTEGRITY_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'integrity_secret_missing' }, { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const { reference, amountInCents, currency } = body || {};
  if (!reference || !amountInCents || !currency) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
  }

  const signature = createHash('sha256')
    .update(`${reference}${amountInCents}${currency}${secret}`)
    .digest('hex');

  return NextResponse.json({ signature });
}

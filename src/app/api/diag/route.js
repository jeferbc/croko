import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Receives checkout-funnel diagnostics from the client and logs them as a
// single structured line to the server console (visible in the host/deploy
// logs). Intentionally minimal: no storage, no auth, no PII beyond what the
// client already controls. Always 204 so sendBeacon never retries.
export async function POST(request) {
  try {
    const body = await request.json();
    const safe = {
      stage: String(body?.stage || 'unknown').slice(0, 64),
      sid: String(body?.sid || '').slice(0, 64),
      app: body?.app ? String(body.app).slice(0, 32) : undefined,
      ms: typeof body?.ms === 'number' ? body.ms : undefined,
      error: body?.error ? String(body.error).slice(0, 300) : undefined,
      orderId: body?.orderId ? String(body.orderId).slice(0, 64) : undefined,
      ua: String(body?.ua || '').slice(0, 400),
      url: String(body?.url || '').slice(0, 300),
      ts: body?.ts,
    };
    console.log('[checkout-diag]', JSON.stringify(safe));
  } catch {
    console.log('[checkout-diag] unparseable beacon');
  }
  return new NextResponse(null, { status: 204 });
}

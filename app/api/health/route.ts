import { NextResponse } from 'next/server'

export async function GET() {
  const envStatus = {
    supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    appUrl: !!process.env.NEXT_PUBLIC_APP_URL,
    multiSuppliers: process.env.MULTI_SUPPLIERS_ENABLED === 'true',
  }

  const allConfigured = Object.values(envStatus).filter(v => v !== false).length >= 3

  return NextResponse.json({
    status: allConfigured ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    environment: envStatus,
  })
}

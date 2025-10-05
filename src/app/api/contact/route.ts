import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()
  // Aquí podrías enviar un email (Resend, Sendgrid) o un webhook (Zapier/Make).
  console.log("Contacto:", data)
  return NextResponse.json({ ok: true })
}
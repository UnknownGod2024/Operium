import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // Mock backend: log payload for now.
  console.log("New Operium lead", body);

  return NextResponse.json({ ok: true });
}

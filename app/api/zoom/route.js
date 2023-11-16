import { NextResponse } from "next/server";
import crypto from "crypto";
import { KJUR } from "jsrsasign";

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function POST(request) {
  const { meetingNumber, role } = await request.json();

  const timestamp = new Date().getTime() - 30000;
  const iat = Math.round(timestamp / 1000) - 30;
  const exp = iat + 60 * 60 * 2;

  const onHeader = { alg: "HS256", typ: "JWT" };
  const onPayload = {
    sdkKey: process.env.ZOOM_API_KEY,
    mn: meetingNumber,
    role: role,
    iat: iat,
    exp: exp,
    appKey: process.env.ZOOM_API_KEY,
    tokenExp: iat + 60 * 60 * 2,
  };

  const sHeader = JSON.stringify(onHeader);
  const sPayload = JSON.stringify(onPayload);
  const signature = KJUR.jws.JWS.sign(
    "HS256",
    sHeader,
    sPayload,
    process.env.ZOOM_API_SECRET
  );

  return NextResponse.json({ signature });
}

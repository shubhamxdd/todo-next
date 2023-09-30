import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET(req: NextRequest) {
  const cookie = serialize("token", "", {
    path: "/",
    httpOnly: true,
    maxAge: 5 * 24 * 60 * 60 * 1000,
  });

  return NextResponse.json(
    { message: `Logged out sucessfully` },
    { headers: { "Set-Cookie": cookie } }
  );
}

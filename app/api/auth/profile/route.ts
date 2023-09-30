import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/utils/isAuthenticated";

export async function GET(req: NextRequest) {
  const user = await isAuthenticated(req);

  if (!user)
    return NextResponse.json({ message: "Login first" }, { status: 401 });

  return NextResponse.json({ user });
}

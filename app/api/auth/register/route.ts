import { User } from "@/models/user";
import { ConnectToDB } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { generateToken } from "@/utils/generateToken";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  // req.json() or req.body
  let response = NextResponse.next();
  const { name, email, password } = await req.json();

  if (!name || !email || !password)
    return NextResponse.json(
      { message: "Please fill all fields" },
      { status: 400 }
    );

  await ConnectToDB();

  const user = await User.findOne({ email });

  if (user)
    return NextResponse.json(
      { message: "User already exists" },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ name, email, password: hashedPassword });

  const token = generateToken(newUser._id);

  console.log(token);

  const cookie = serialize("token", token, {
    path: "/",
    httpOnly: true,
    maxAge: 5 * 24 * 60 * 60 * 1000,
  });

  return NextResponse.json(
    { message: `User created with name: "${name}" and email: "${email}"` },
    // { status: 201 },
    { headers: { "Set-Cookie": cookie } }
  );
}

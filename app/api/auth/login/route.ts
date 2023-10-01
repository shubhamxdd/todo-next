import { User } from "@/models/user";
import { ConnectToDB } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { generateToken } from "@/utils/generateToken";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  // req.json() or req.body
  let response = NextResponse.next();
  const { email, password } = await req.json();

  console.log(`${email} and pass: ${password} from login route`);

  if (!email || !password)
    return NextResponse.json(
      { message: "Please fill all fields" },
      { status: 400 }
    );

  await ConnectToDB();

  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 400 }
    );

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword)
    //TODO: change message
    return NextResponse.json({ message: "Invalid password" }, { status: 400 });

  const token = generateToken(user._id);

  const cookie = serialize("token", token, {
    path: "/",
    httpOnly: true,
    maxAge: 5 * 24 * 60 * 60 * 1000,
  });

  return NextResponse.json(
    { message: `Welcome User: ${user.name}`, user },
    { headers: { "Set-Cookie": cookie } }
  );
}

import { User } from "@/models/user";
import { ConnectToDB } from "@/utils/connect";
import { generateToken } from "@/utils/generateToken";
import { serialize } from "cookie";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  const { email, newPassword } = await req.json();

  if (!email || !newPassword)
    return NextResponse.json(
      { message: "Please fill all fields" },
      { status: 400 }
    );

  console.log(
    `email is: ${email} and new password is: ${newPassword} from forgetpass route`
  );

  await ConnectToDB();

  const user = await User.findOne({ email });

  if (!user)
    return NextResponse.json({ message: "Invalid email" }, { status: 400 });

  const newHashedPassword = await bcrypt.hash(newPassword, 10);

  user.password = newHashedPassword;

  await user.save();

  const token = generateToken(user._id);

  const cookie = serialize("token", token, {
    path: "/",
    httpOnly: true,
    maxAge: 5 * 24 * 60 * 60 * 1000,
  });

  return NextResponse.json(
    {
      message: `Password changed for user: ${user.name} newPass: ${newPassword} and hashedPassword: ${newHashedPassword}`,
      user,
    },
    { headers: { "Set-Cookie": cookie } }
  );
}

import { Task } from "@/models/todo";
import { ConnectToDB } from "@/utils/connect";
import { isAuthenticated } from "@/utils/isAuthenticated";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await ConnectToDB();

    const { title, description } = await req.json();
    console.log(title, description);

    if (!title || !description)
      return NextResponse.json(
        { message: "Please provide title and description" },
        { status: 400 }
      );
    if (!title)
      return NextResponse.json(
        { message: "Please provide title" },
        { status: 400 }
      );
    if (!description)
      return NextResponse.json(
        { message: "Please provide description" },
        { status: 400 }
      );

    const user = await isAuthenticated(req);

    if (!user)
      return NextResponse.json({ message: "Login first" }, { status: 401 });

    await Task.create({
      title,
      description,
      user: user._id,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json(
    { message: "task added successfully to DB" },
    { status: 200 }
  );
}

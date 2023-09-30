import { Task } from "@/models/todo";
import { ConnectToDB } from "@/utils/connect";
import { isAuthenticated } from "@/utils/isAuthenticated";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await ConnectToDB();

    const user = await isAuthenticated(req);

    if (!user)
      return NextResponse.json({ message: "Login first" }, { status: 401 });

    const allTasks = await Task.find({ user: user._id });

    return NextResponse.json(
      { message: "all tasks", allTasks },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

import { Task } from "@/models/todo";
import { ConnectToDB } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await ConnectToDB();

    const { title, description } = await req.json();
    console.log(title, description);

    await Task.create({
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ message: "Success" }, { status: 200 });
}

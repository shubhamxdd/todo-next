import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/utils/isAuthenticated";
import { ConnectToDB } from "@/utils/connect";
import { Task } from "@/models/todo";

export async function DELETE(req: NextRequest) {
  await ConnectToDB();
  const user = await isAuthenticated(req);

  if (!user)
    return NextResponse.json({ message: "Login first" }, { status: 401 });

  const taskId = req.url?.split("/").slice(-1)[0];
  console.log(taskId);

  //   find task by id

  const task = await Task.findById(taskId);

  if (!task)
    return NextResponse.json(
      { message: `No tasks found with id: ${taskId}` },
      { status: 404 }
    );

  await task.deleteOne();

  return NextResponse.json(
    { message: "Deleted task sucessfully" },
    { status: 200 }
  );
}

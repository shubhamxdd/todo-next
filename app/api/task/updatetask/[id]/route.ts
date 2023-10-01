import { Task } from "@/models/todo";
import { ConnectToDB } from "@/utils/connect";
import { isAuthenticated } from "@/utils/isAuthenticated";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function PUT(req: NextApiRequest, res: NextApiResponse) {
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

  // update task

  //   TODO update title and desc
  //   const { title, description, completed } = req.body;
  //   const { completed } = req.body;

  //   task.title = title;
  //   task.description = description;
  task.isCompleted = !task.isCompleted;

  await task.save();

  return NextResponse.json(
    { message: "Updated task sucessfully" },
    { status: 200 }
  );
}

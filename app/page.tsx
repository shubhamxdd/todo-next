import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface task {
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const fetchTasks = async (token: string | undefined) => {
  try {
    const res = await fetch(`${process.env.URL}/api/task/gettask`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });

    // console.log(res);
    const data = await res.json();

    // console.log(data);

    if (!res.ok) return [];

    return data.allTasks;
  } catch (error) {
    // console.log(error)
    return "ERR";
  }
};

export default async function Home() {
  const token = cookies().get("token")?.value;

  if (!token) redirect("/login");

  console.log(token);

  const tasks = await fetchTasks(token);

  // console.log(tasks);

  return (
    <div>
      <TodoForm />
      <div className="bg-zinc-300 mx-4 px-6 py-4 rounded-md mt-5">
        {tasks?.map((task: task) => {
          return (
            <TodoItem
              key={task._id}
              title={task.title}
              description={task.description}
              id={task._id}
              completed={task.isCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

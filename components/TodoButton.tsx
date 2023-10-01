"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface Props {
  id: string;
  completed: boolean;
}

const TodoButton = ({ id, completed }: Props) => {
  const router = useRouter();
  const deleteTodo = async (id: string) => {
    try {
      const res = await fetch(`/api/task/deletetask/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.status === 404) return toast.error(data.message);

      // console.log(`Deleting task with id: ${id}`);
      toast.success(data.message);
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
      return toast.error(error);
    }
  };
  const updateTodo = async (id: string) => {
    try {
      const res = await fetch(`/api/task/updatetask/${id}`, {
        method: "PUT",
      });

      const data = await res.json();

      if (res.status === 404) return toast.error(data.message);

      // console.log(`Deleting task with id: ${id}`);
      toast.success(data.message);
      router.refresh();
    } catch (error: any) {
      console.log(error.message);
      return toast.error(error);
    }
  };
  return (
    <>
      <div>
        <input
          type="checkbox"
          className="mx-10"
          checked={completed}
          onChange={() => updateTodo(id)}
        />
        <button
          onClick={() => deleteTodo(id)}
          className="bg-cyan-600 px-3 py-1 rounded-lg text-white"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default TodoButton;

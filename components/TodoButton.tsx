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

      toast.success(data.message);

      router.refresh();
    } catch (error: any) {
      console.log(error.message);
      return toast.error(error)
    }

    // console.log(`Deleting task with id: ${id}`);
  };
  return (
    <>
      <div>
        <input type="checkbox" className="mx-10" checked={completed} />
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

"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/task/newtask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          description,
        }),
      });

      const data = await res.json();

      if (!res.ok) return toast.error(data.message);

      setTitle("");
      setDescription("");

      router.refresh();

      toast.success(data.message);
    } catch (error: any) {
      return toast.error(error.message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <section>
          <form onSubmit={onSubmit}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              value={title}
              minLength={3}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <br />
            <label htmlFor="description">Description:</label>
            <br />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              minLength={3}
              type="text"
              name="description"
              id="description"
              placeholder="..."
              className="border rounded py-2 px-4 outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <br />
            <Button
              text="Add Todo"
              type="submit"
              className="mt-4 px-4 bg-blue-400 hover:bg-blue-600 py-2 rounded-lg text-white"
            />
          </form>
        </section>
      </div>
    </>
  );
};

export default TodoForm;

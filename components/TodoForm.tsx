"use client";

import Button from "@/components/Button";
import { FormEvent } from "react";

const TodoForm = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <section>
          <form onSubmit={onSubmit}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
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

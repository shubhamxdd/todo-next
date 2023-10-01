import FetchTodos from "@/components/FetchTodos";
import TodoForm from "@/components/TodoForm";

import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Home() {
  // if (!token) redirect("/login");

  return (
    <div>
      <TodoForm />
      {/* TODO: Add loading component */}
      <Suspense
        fallback={
          <h1 className="text-center mt-5 font-semibold">LOADING...</h1>
        }
      >
        <FetchTodos />
      </Suspense>
    </div>
  );
}

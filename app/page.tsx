import TodoForm from "@/components/TodoForm";
import TodoItem from "@/components/TodoItem";

export default function Home() {
  return (
    <div>
      <TodoForm />
      <div className="bg-zinc-300 mx-4 px-6 py-4 rounded-md mt-5">
        <TodoItem
          title="A new Task"
          description="My description"
          id="11"
          completed={true}
        />
      </div>
    </div>
  );
}

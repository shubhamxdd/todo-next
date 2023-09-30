"use client";

interface Props {
  id: string;
  completed: boolean;
}

const TodoButton = ({ id, completed }: Props) => {
  const deleteTodo = (id: string) => {
    console.log(`Deleting task with id: ${id}`);
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

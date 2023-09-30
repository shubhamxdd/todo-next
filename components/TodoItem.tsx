import React from "react";
import TodoButton from "./TodoButton";

interface Props {
  title: string;
  description: string;
  id: string;
  completed: boolean;
}

const TodoList = ({ title, description, id, completed }: Props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibolds">{title}</h1>
          <p>{description}</p>
        </div>

        <div>
          <TodoButton id={id} completed={completed} />
        </div>
      </div>
    </>
  );
};

export default TodoList;

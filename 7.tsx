import { useState } from "react";

type todoType = {
  id: number;
  title: string;
  completed: boolean;
};

function TypeScript() {
  const [todos, settodos] = useState<todoType[]>([]);

  return (
    <div>
      {todos.map(({ id, title }) => (
        <h1 key={id}>{title}</h1>
      ))}
    </div>
  );
}

export default TypeScript;

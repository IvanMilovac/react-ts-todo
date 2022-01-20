import React, { useState } from "react";
import TodoItem from "./componets/TodoItem";

const initialTodos: Todo[] = [
  { text: "text1", complete: false },
  { text: "text2", complete: true },
];

const App = () => {
  const handleToggle = (todo: Todo) => {
    const newTodos = todos.map((t) => {
      if (t === todo) {
        return { ...t, complete: !t.complete };
      }
      return t;
    });
    setTodos(newTodos);
  };
  const [todos, setTodos] = useState(initialTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} toggle={handleToggle} />
      ))}
    </ul>
  );
};

export default App;

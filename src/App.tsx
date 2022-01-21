import React, { useState } from "react";
import AddNewTodo from "./componets/AddNewTodo";
import TodoList from "./componets/TodoList";
import { v4 as uuidv4 } from "uuid";

import { GlobalStyle, AppWrapper } from "./App.styles";

const App = () => {
  const [todos, setTodos] = useState([] as Todo[]);
  const [formData, setFormData] = useState({
    id: "",
    text: "",
    complete: false,
  } as Todo);

  const handleToggle = (todo: Todo) => {
    const newTodos = todos?.map((t) => {
      if (t === todo) {
        return { ...t, complete: !t.complete };
      }
      return t;
    });
    setTodos(newTodos || null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ id: uuidv4(), text: e.target.value, complete: false });
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData) setTodos([...todos, formData]);
    setFormData({ id: "", text: "", complete: false });
  };

  return (
    <>
      <GlobalStyle />
      <AppWrapper className="App">
        <h1>Todo app</h1>
        <AddNewTodo
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
        <h3>Things to do:</h3>
        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          handleDelete={deleteTodo}
        />
      </AppWrapper>
    </>
  );
};

export default App;

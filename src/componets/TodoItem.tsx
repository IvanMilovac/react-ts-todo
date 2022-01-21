import React, { FC } from "react";

interface Props {
  todo: Todo;
  toggle: ToggleTodo;
  handleDelete: DeleteTodo;
}

const TodoItem: FC<Props> = ({ todo, toggle, handleDelete }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggle(todo)}
        />
        {todo.text}
        <p></p>
      </label>
      <span onClick={() => handleDelete(todo.id)}>&times;</span>
    </li>
  );
};

export default TodoItem;

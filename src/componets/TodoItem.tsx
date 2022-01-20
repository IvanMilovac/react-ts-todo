import React, { FC } from "react";

interface Props {
  todo: Todo;
  toggle: ToggleTodo;
}

const TodoItem: FC<Props> = ({ todo, toggle }) => {
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
      </label>
    </li>
  );
};

export default TodoItem;

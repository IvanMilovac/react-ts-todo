import Rect, { FC } from "react";
import TodoItem from "./TodoItem";
import { TodoListStyle } from "./TodoList.styles";

interface ITodoListProps {
  todos: Todo[] | null;
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
}

const TodoList: FC<ITodoListProps> = ({
  todos,
  handleToggle,
  handleDelete,
}) => {
  return (
    <TodoListStyle>
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;

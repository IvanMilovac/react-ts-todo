interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type SubmitTodo = (e: React.FormEvent<HTMLFormElement>) => void;

type OnChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => void;

type DeleteTodo = (
  id: string
) => MouseEventHandler<HTMLSpanElement> | undefined;

import React, { FC } from "react";
import { FormStyle } from "./AddNewTodo.styles";

interface IAddNewTodoProps {
  handleSubmit: SubmitTodo;
  handleChange: OnChangeTodo;
  formData: Todo;
}

const AddNewTodo: FC<IAddNewTodoProps> = ({
  handleSubmit,
  handleChange,
  formData,
}) => {
  return (
    <FormStyle onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Add todo..."
        value={formData?.text}
        onChange={handleChange}
      />
      <button type="submit" disabled={!formData.text}>
        Save todo
      </button>
    </FormStyle>
  );
};

export default AddNewTodo;

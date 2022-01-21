import styled from "styled-components";

export const TodoListStyle = styled.ul`
  list-style: none;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  li {
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid #555;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1 1 auto;
    }
  }
`;

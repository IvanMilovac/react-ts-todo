import styled from "styled-components";

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  input {
    padding: 0.5rem;
    font-size: 1.125rem;
  }
  button {
    padding-block: 0.5rem;
    font-size: 1.125rem;
    border: 1px solid #222;
    border-radius: 0.25rem;
    background: transparent;
    color: #222;
    :hover {
      background: #222;
      color: #fff;
      box-shadow: 0.25rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

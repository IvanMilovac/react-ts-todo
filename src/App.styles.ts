import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{ 
        height: 100%;
    }
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        height: 100vh;
        display: flex; 
        justify-content: center;
        align-items: center; 
        background: #dadada;
    }
`;

export const AppWrapper = styled.section`
  width: 100%;
  min-height: 20rem;
  padding: 1.5rem 2rem;
  background: white;
  border: 1px solid black;
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem 0 rgba(0, 0, 0, 0.2);
  h1 {
    text-align: center;
    margin-block: 0 1.5rem;
    padding-block: 0;
  }
  h3 {
    text-align: center;
    margin-block: 0 1.5rem;
    padding-block: 0;
  }
`;

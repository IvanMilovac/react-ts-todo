import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{ 
        height: 100%;
    }
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

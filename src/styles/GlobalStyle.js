import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
:root {
    --color-brand: #2ec4b6;
    --color-blue: #007bff;
    --color-red: #ff4d4d;
    --color-gray: #6c757d;
    --color-white: #ffffff;
    --color-btn-bg: #F6F7FA;
    --color-expense-list-bg: #f9f9f9;
    
}
 body {
    display: flex;
    background-color: var(--color-brand);
    justify-content: center;
    
 }
 #root {
   display: flex;
   max-width: 800px;
   padding: 32px;
   height: 100vh;

    
 }
 *{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
 }
`;

export default GlobalStyle;

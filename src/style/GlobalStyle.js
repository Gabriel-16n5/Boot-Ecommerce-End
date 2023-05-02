import { createGlobalStyle } from "styled-components";
import { red, gray, blue, black } from "../constants/colors";

const GlobalStyle = createGlobalStyle`
    body{
        box-sizing:border-box;
        padding-left:0px;
    }
    
    @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
    * {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        background-color: ${black};
        box-sizing:border-box;
        
    }
    button {
        outline: none;
        border: none;
        border-radius: 3px;
        background-color: ${red};
        font-size: 16px;
        font-weight: 900;
        color: ${gray};
        cursor: pointer;
        width: 100%;
        padding: 8px;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: ${blue};
    }
    /*input {
        font-size: 20px;
        width: calc(100% - 30px);
        border-radius: 5px;
        outline: none;
        border: 1px solid #ccc;
        padding: 15px;
        margin: 1px;
        :focus {
            border: 2px solid #ffb6b6;
            margin: 0px;
        }
    }*/
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
        width: 100%;
        border-radius: 5px;
    }
    a {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        text-decoration: none;
        padding-top: 30px;
    }
`

export default GlobalStyle
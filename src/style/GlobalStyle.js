import { createGlobalStyle } from "styled-components";
import { red, gray } from "../constants/colors";

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
        // we need define a default settings
    }
    button {

    }
    h1 {

    }
    input {

    }
    form {

    }
    a {

    }
`

export default GlobalStyle
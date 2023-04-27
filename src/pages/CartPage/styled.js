import styled from "styled-components"
import {blue, gray, green} from "../../constants/colors"
export const CartContainer = styled.section`


`

export const FinalizeOrder = styled.section`
    button {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${green};
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    padding: 12px;
    }
`
export const FinalizeOrderData = styled.section`
    display:flex;
    border:box-sizing;
    gap: 15px;
    div{
    align-items:center;
    justify-content: center;
    display:flex;
    border:box-sizing;
    background-color: ${gray};
    width: 90vw;
    height: 20vw;
    }
    input {
    width: 45vw;
    height: 3vw;
    }
    button {
    width: 45vw;
    height: 11vw;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${blue};
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    padding: 12px;
    }
`
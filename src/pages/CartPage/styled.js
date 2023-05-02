import styled from "styled-components"
import {gray, green} from "../../constants/colors"
import { FaSearch } from "react-icons/fa";

export const CartContainer = styled.main`
h1 {
    width:90vw;
    overflow:hidden;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
`
export const StyledInput= styled.input`

        width:374px;
        height:53px;
        background: #ededed;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom:15px;

`
export const SearchIcon = styled(FaSearch)`
  position: relative;
  top: 20px;
  left: -30px;
  //transform: translateY(-50%);
`

export const ProductsContainer = styled.div`
    width:100vw;
    display:flex;
    justify-content: center;
    overflow:hidden;
    margin-bottom:15px;
    input{
        width:374px;
        height:53px;
        background: #ededed;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom:15px;
    } 
`

export const ContainerPage = styled.div`
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
overflow:hidden;
`
export const Prices = styled.div`
display:flex;
flex-direction: column;
flex-wrap: wrap;
`

export const ResumeContainer = styled.section`
    display: flex;
    width:100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 10px;
    div {
        background-color: #424242;
    }
    h1 {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 20px;
        color: red;
        background-color: #424242;
    }
    p {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: ${green};
        background-color: #424242;
    }
    h3 {
        display:flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    h5 {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 20px;
        color: ${green};
        background-color: #424242;
    }
    h4 {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    span {
    display:flex;
    justify-content: space-around;
    background-color: #424242;
    align-items: center;
    width: 90vw;
    height: 30vw;
    }
    h2 {
        margin-top: 10px;
        width: 90vw;
        height: 10vw;
        background-color: #424242;
        display:flex;
        justify-content: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 44px;
        line-height: 32px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
button {
    display:flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 10vw;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${gray};
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    }
`

export const CartProducts = styled.section`
    display: flex;
    flex-direction: column;
    width:100vw;
    align-items: center;
    justify-content: center;
    div {
        background-color: #424242;
    }
    p {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    h3 {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    h4 {
        display: flex;
        justify-content: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
        background-color: #424242;
    }
    img {
        margin-left: 10px;
        margin-right: 20px;
        width: 120px;
        height: 120px;
    }
    span {
    display:flex;
    background-color: #424242;
    width: 90vw;
    height: 50vw;
    }
    h2 {
        margin-left: 10px;
        width: 90vw;
        height: 10vw;
        background-color: #424242;
        display:flex;
        justify-content: start;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 32px;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
    }
button {
    margin-bottom:10px;
    margin-left: 65vw;
    justify-content: center;
    width: 30vw;
    height: 10vw;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${gray};
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    margin-top: 20px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    }
`

export const FinalizeOrder = styled.section`
    margin-top: 10px;
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
    width: 90vw;
    }
`
export const FinalizeOrderData = styled.section`
    display:flex;
    h5 {
    width: 90vw;
    background-color: #424242;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    }
    span {
    align-items:center;
    justify-content: space-between;
    display:flex;
    border:box-sizing;
    background-color: #424242;
    width: 90vw;
    height: 35vw;
    padding-left: 10px;
    padding-right: 10px;
    }
    div{
    display:flex;
    flex-direction: column;
    border:box-sizing;
    background-color: #424242;
    width: 90vw;
    height: 35vw;
    }
    input {
    margin-top: 40px;
    width: 46vw;
    height: 3vw;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: start;
    color: #FFFFFF;
    margin-bottom:10px;
    }
    button {
    margin-bottom:10px;
    display:flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 10vw;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: ${gray};
    font-size: 20px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    padding: 12px;
    margin-top: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    }
`
import styled from "styled-components"
import cadeira_gamer from '../../Utils/images/cadeira_gamer_azul.jpg'
import { FiSearch } from "react-icons/fi";
import { FaBeer } from 'react-icons/fa';
import React from "react";

export default function ProductsPage() {

    return (
        <ProductsPageContainer>
            <ProductsContainer>
                <StyledInput  placeholder="Digite oque você procura..."></StyledInput>
                
            </ProductsContainer>
            <RecommendedContainer>
                <RecommProduct>
                <img src={cadeira_gamer} alt="cadeira gamer azul"></img>
                    <p>Cadeira Gamer Pichau Valhalla, Preto e Azul</p>
                    <h1>à vista</h1>
                    <h1 >R$1.899,00</h1>
                   
                    
                </RecommProduct>
                <RecommProduct>
                <img src={cadeira_gamer} alt="cadeira gamer azul"></img>
                    <p>Cadeira Gamer Pichau Valhalla, Preto e Azul</p>
                    <h1>à vista</h1>
                    <h1 >R$1.899,00</h1>
                   
                    
                </RecommProduct>
                <RecommProduct>
                <img src={cadeira_gamer} alt="cadeira gamer azul"></img>
                    <p>Cadeira Gamer Pichau Valhalla, Preto e Azul</p>
                    <h1>à vista</h1>
                    <h1 >R$1.899,00</h1>
                   
                    
                </RecommProduct>
            </RecommendedContainer>
            
        </ProductsPageContainer>

    )

}
const StyledInput= styled.input`

width:374px;
        height:53px;
        background: #ededed;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom:15px;

`
const ProductsPageContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;  
    background-color:green;
    box-sizing:border-box;
     background-color:#424242;
    min-width:100%;
    margin-top:10px; // ta com essa margem por causa da navBar que vai entrar ai 


`
const ProductsContainer = styled.div`
    
    display:flex;
    flex-direction: column;
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

const RecommendedContainer = styled.div`
    margin-left:30px;
    margin-top:30px;
    margin-bottom:15px;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;

    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 29px;
        /* or 133% */

        display: flex;
        align-items: center;

        color: #FFFFFF;
    }
    h3{
       

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
        /* identical to box height, or 143% */

        display: flex;
        align-items: center;

        color: #00A202;
            }


`

const RecommProduct = styled.div`
 display:flex;
 flex-direction:column;
 margin-top:40px;
 p{
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 34px;
        /* or 133% */
        max-width:374px;
        display: flex;
        align-items: center;
        color: #ffffff;
 }
 h1{
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height, or 143% */

    display: flex;
    align-items: center;
    color:#00A202;
 }

 img{
    width:374px;
    height:374px;
 }

`
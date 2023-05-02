import styled from "styled-components"
import cadeira_gamer from '../../Utils/images/cadeira_gamer_azul.jpg'
import outdoor1 from '../../Utils/images/outdoor1.png'
import { FaSearch } from "react-icons/fa";
import React from "react";
import Footer from "../Footer/index"
import Navbar from "../Navbar/index"

export default function ProductsPage() {

    return (
        <ProductsPageContainer>
            <Navbar/>
            <PromoOutDoor>
                            <img scr={outdoor1} alt="promoção das cadeiras-gamers"></img>
            </PromoOutDoor>
            <ProductsContainer>
                <StyledInput  type='text' placeholder="Digite oque você procura..." />
                <SearchIcon/>
            </ProductsContainer>
          
            <RecommendedContainer>
                
                <RecommProduct>
                <img src={cadeira_gamer} alt="cadeira gamer azul"></img>
                    <p>Cadeira Gamer Pichau Valhalla, Preto e Azul</p>
                    
                    <DivPrices>
                    <div>
                        <h1>à vista</h1>
                        <h1 >R$1.899,00</h1>
                    </div>
                    <div>
                        <h2>Preço</h2>
                        <h2>R$2.249,00</h2>
                    </div>
                    </DivPrices>
                   
                   
                    
                </RecommProduct>
                <RecommProduct>
                <img src={cadeira_gamer} alt="cadeira gamer azul"></img>
                    <p>Cadeira Gamer Pichau Valhalla, Preto e Azul</p>
                    <DivPrices>
                    <div>
                        <h1>à vista</h1>
                        <h1 >R$1.899,00</h1>
                    </div>
                    <div>
                        <h2>Preço</h2>
                        <h2>R$2.249,00</h2>
                    </div>
                    </DivPrices>
                    
                </RecommProduct>
                <RecommProduct>
                <img src={cadeira_gamer} alt="cadeira gamer azul"></img>
                    <p>Cadeira Gamer Pichau Valhalla, Preto e Azul</p>
                    <DivPrices>
                    <div>
                        <h1>à vista</h1>
                        <h1 >R$1.899,00</h1>
                    </div>
                    <div>
                        <h2>Preço</h2>
                        <h2>R$2.249,00</h2>
                    </div>
                    </DivPrices>  
                </RecommProduct>
            </RecommendedContainer>
            <Footer/>
        </ProductsPageContainer>

    )

}


const ProductsPageContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;  
    background-color:green;
    box-sizing:border-box;
    background-color:#424242;
    min-width:100%;
    margin-top:1px; // ta com essa margem por causa da navBar que vai entrar ai 
    position: relative;
    top:10px;


`
const StyledInput= styled.input`

        width:374px;
        height:53px;
        background: #ededed;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom:15px;

`
const SearchIcon = styled(FaSearch)`
  position: relative;
  top: 20px;
  left: -30px;
  //transform: translateY(-50%);
`

const ProductsContainer = styled.div`
    
    display:flex;
    flex-direction: row;
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
    margin-left:1px;
    margin-top:30px;
    margin-bottom:15px;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;

    h2{
        font-family: 'Roboto', sans-serif;
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
       

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        line-height: 14px;
      

        display: flex;
        align-items: center;

        color: #00A202;
            }


`

const RecommProduct = styled.div`
        display:flex;
        flex-direction:column;
        margin-top:40px;
        background: linear-gradient(to bottom, rgb(51, 51, 51), rgb(102, 102, 102));
        border: #666666 2px  solid;
        border-radius:5px;
        &:hover {
            transform: scale(1.05);
            cursor: pointer;
        }
        transition: transform 0.2s ease-in-out;
        
        p{   font-family: 'Roboto', sans-serif;
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
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
            display: flex;
            align-items: center;
            color:#00A202;
        }

        img{
            width:374px;
            height:374px;
            box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.2);
            border-radius:3px;
        }

`

const DivPrices = styled.div `
        
        justify-content:space-between;
        display:flex;
        flex-direction:row;
        h2{
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
            display: flex;
            align-items: center;
            color:#FFF;
        }

`
const CommonPrice= styled.h1`
           font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 34px;
            display: flex;
            align-items: center;
            color:#FFF;
`
const PromoOutDoor =  styled.div`
    img {
        width:374px;
    }

`
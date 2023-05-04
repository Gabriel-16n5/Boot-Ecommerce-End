import React from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
`;

const CartTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const CartItemInfo = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const CartItemImg = styled.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-right: 1rem;
  border-radius: 50%;
`;

const CartItemName = styled.p`
  font-weight: bold;
  margin-right: 1rem;
`;

const CartItemQuantity = styled.p`
  margin-right: 1rem;
`;

const CartItemPrice = styled.p`
  font-weight: bold;
`;

const CartTotal = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const CartButton = styled.button`
  background-color: #f2c94c;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  
  &:hover {
    background-color: #f2b32c;
    cursor: pointer;
  }
`;

const Cart = ({ cartItems, total, onCheckout }) => {
  total = 42;
  cartItems = [{
    id	:	"645326a6e1da6fc24aa7a886",
    name	:	"cadeira",
    image	:	"https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg",
    price	:	1387.34,
    quantity : 2.00,
    discount	:	1,
    type	:	"cadeira"
  },
  {
    id	:	"645326a6e1da6fc24aa7a886",
    name	:	"sapato",
    image	:	"https://img.freepik.com/fotos-gratis/amor-romance-perfurado-coracao-de-papel_53876-87.jpg",
    price	:	187.34,
    quantity : 1.00,
    discount	:	1,
    type	:	"sapato"
  }]
  return (
    <CartContainer>
      <CartTitle>Carrinho de Compras</CartTitle>
      {cartItems.map(item => (
        <CartItem key={item.id}>
          <CartItemInfo>
            <CartItemImg src={item.image} alt={item.name} />
            <CartItemName>{item.name}</CartItemName>
            <CartItemQuantity>x {item.quantity}</CartItemQuantity>
          </CartItemInfo>
          <CartItemPrice>R$ {item.quantity * item.price}</CartItemPrice>
        </CartItem>
      ))}
      <CartTotal>Total: R$ {total.toFixed(2)}</CartTotal>
      <CartButton onClick={onCheckout}>Finalizar Pedido</CartButton>
    </CartContainer>
  );
};

export default Cart;

// import {ProductsContainer, StyledInput, SearchIcon, CartContainer, CartProducts, FinalizeOrder, FinalizeOrderData, ResumeContainer, Prices } from "./styled";
// import Forms from "../../hooks/Forms"
// import styled from "styled-components"
// import Footer from "../Footer/index"
// import Navbar from "../Navbar/index"
// export default function CartPage() {
//     const { form, formHandler } = Forms({ cupon: "", shipping: "" })
  
//     function submitForm(e) {
//       e.preventDefault()
//       console.log(form)
//     }
  
//     return (
//     <PageContainer>
//         <Navbar/>
//         <ProductsContainer>
//             <StyledInput  type='text' placeholder="Digite o que você procura..." />
//             <SearchIcon/>
//         </ProductsContainer>
//       <CartContainer>
//         <h1>Meu Carrinho</h1>
//         <ResumeContainer>
//             <div>
//                 <><h2>Resumo</h2></>
//                 <span>
//                         <div>
//                             <h3>Subtotal</h3>
//                             <h4>Total</h4>
//                         </div>
//                         <div>
//                             <h3>R$82,24</h3>
//                             <h4>R$82,24</h4>
//                         </div>
//                 </span> 
//                 <div>
//                     <p>á vista</p>
//                     <h5>R$69,90</h5>
//                     <h3>no PIX com 15% desconto</h3>
//                     <h2>-</h2>
//                     <h1>R$82,24</h1>
//                     <Prices><h3>em até 6x de</h3><h1>13,71</h1><h3>sem juros no cartão</h3></Prices>
//                 </div>
//             </div>
//         </ResumeContainer>
//         <CartProducts>
//                 <div>
//                    <><h2>Products</h2></> 
//                     <span>
//                         <div>
//                             <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg-rds-bk011.jpg" alt="placeHolder"/>
//                             <p>- 1 +</p>
//                         </div>
//                         <div>
//                         <p>Rodizios de Cadeiras 75MM Pichau Soft, PG-RDS-BK01</p>
//                         <h3>SKU: PG-RDS-BK01</h3>
//                         <h4>1 x R$ 82,24</h4>
//                         </div>
//                     </span>
//                 </div>
//             <button>Wipe Cart</button>
//         </CartProducts>
//         <FinalizeOrder>
//             <form onSubmit={submitForm}>
//             <FinalizeOrderData>
//                 <div>
//                     <div><h5>Discount coupons</h5></div>
//                     <span>
//                         <input
//                             required
//                             type="cupon"
//                             placeholder="Cupon"
//                             name="cupon"
//                             value={form.cupon}
//                             onChange={formHandler}
//                         />
//                         <button>Apply</button>
//                     </span>
//                  </div>
//             </FinalizeOrderData>
//             <FinalizeOrderData>
//                 <div>
//                     <div><h5>Shipping and dates</h5></div>
//                     <span>
//                         <input
//                             required
//                             minLength={3}
//                             type="shipping"
//                             placeholder="Postal Code"
//                             name="shipping"
//                             value={form.shipping}
//                             onChange={formHandler}
//                         />
//                         <button>Calculate</button>
//                     </span>
//                 </div>
//             </FinalizeOrderData>
//             <button type="submit">Finalize Order</button>
//             </form>
//         </FinalizeOrder>
//       </CartContainer>
//       <Footer/>
//     </PageContainer>
//     )
//   }

//   const PageContainer = styled.main`
// width:100vw;
// /* display:flex; */
// /* align-items:center; */
// overflow:hidden;
// `
// const ProductsPageContainer = styled.div`
//     display:flex;
//     flex-direction: column;
//     align-items:center;  
//     background-color:green;
//     box-sizing:border-box;
//     background-color:#424242;
//     min-width:100%;
//     top:10px;
// `
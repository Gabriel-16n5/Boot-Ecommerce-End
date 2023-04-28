import { CartContainer, CartProducts, FinalizeOrder, FinalizeOrderData, ResumeContainer } from "./styled";
import Forms from "../../hooks/Forms"
import styled from "styled-components"
export default function CartPage() {
    const { form, formHandler } = Forms({ cupon: "", shipping: "" })
  
    function submitForm(e) {
      e.preventDefault()
      console.log(form)
    }
  
    return (
    <PageContainer>
      <CartContainer>
        <h1>MEU CARRINHO</h1>
        <ResumeContainer>
            <div>
                <><h2>Resumo</h2></>
                <span>
                        <div>
                            <h3>Subtotal</h3>
                            <h4>Total</h4>
                        </div>
                        <div>
                            <h3>R$82,24</h3>
                            <h4>R$82,24</h4>
                        </div>
                </span> 
                <div>
                    <p>á vista</p>
                    <h5>R$69,90</h5>
                    <h3>no PIX com 15% desconto</h3>
                    <h2>-</h2>
                    <h1>R$82,24</h1>
                    <h3>em até 6x de<h1>13,71</h1> sem juros no cartão</h3>
                </div>
            </div>
        </ResumeContainer>
        <CartProducts>
                <div>
                   <><h2>Products</h2></> 
                    <span>
                        <div>
                            <img src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg-rds-bk011.jpg" alt="placeHolder"/>
                            <p>- 1 +</p>
                        </div>
                        <div>
                        <p>Rodizios de Cadeiras 75MM Pichau Soft, PG-RDS-BK01</p>
                        <h3>SKU: PG-RDS-BK01</h3>
                        <h4>1 x R$ 82,24</h4>
                        </div>
                    </span>
                </div>
            <button>Wipe Cart</button>
        </CartProducts>
        <FinalizeOrder>
            <form onSubmit={submitForm}>
            <FinalizeOrderData>
                <div>
                    <div><h5>Discount coupons</h5></div>
                    <span>
                        <input
                            required
                            type="cupon"
                            placeholder="Cupon"
                            name="cupon"
                            value={form.cupon}
                            onChange={formHandler}
                        />
                        <button>Apply</button>
                    </span>
                 </div>
            </FinalizeOrderData>
            <FinalizeOrderData>
                <div>
                    <div><h5>Shipping and dates</h5></div>
                    <span>
                        <input
                            required
                            minLength={3}
                            type="shipping"
                            placeholder="Postal Code"
                            name="shipping"
                            value={form.shipping}
                            onChange={formHandler}
                        />
                        <button>Calculate</button>
                    </span>
                </div>
            </FinalizeOrderData>
            <button type="submit">Finalize Order</button>
            </form>
        </FinalizeOrder>
      </CartContainer>
    </PageContainer>
    )
  }

  const PageContainer = styled.main`
  /* background-color:  "gray"; */
  width: calc(100vw - 50px);
  max-height: 100vh;
`
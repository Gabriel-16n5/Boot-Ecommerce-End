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
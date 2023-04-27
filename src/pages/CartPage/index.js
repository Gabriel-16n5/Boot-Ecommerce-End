import { CartContainer, FinalizeOrder, FinalizeOrderData } from "./styled";
import Forms from "../../hooks/Forms"
export default function CartPage() {
    const { form, formHandler } = Forms({ cupon: "", shipping: "" })
  
    function submitForm(e) {
      e.preventDefault()
      console.log(form)
    }
  
    return (
      <CartContainer>
        <FinalizeOrder>
            
            <form onSubmit={submitForm}>
            <FinalizeOrderData>
                <div>
                    <input
                        required
                        type="cupon"
                        placeholder="Cupon"
                        name="cupon"
                        value={form.cupon}
                        onChange={formHandler}
                    />
                    <button>apply</button>
                 </div>
            </FinalizeOrderData>
            <FinalizeOrderData>
                <div>
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
                </div>
            </FinalizeOrderData>
            <button type="submit">Finalize Order</button>
            </form>
        </FinalizeOrder>
      </CartContainer>
    )
  }
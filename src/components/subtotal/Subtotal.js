import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../services/contextAPI/StateProvider'
import { getBasketTotal } from '../../services/contextAPI/StateReducer'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()

    const totalPrice = () => {
        let total = 0;

        basket.forEach((value) => {
            console.log(value)
            total += value.price
        })

        return total;
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value = 0) => (
                    <>
                        <p>
                            Subtotal ({basket ? basket.length : 0} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" name="" id="" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

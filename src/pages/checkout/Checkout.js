import React from 'react'
import Header from '../../components/header/Header'
import './Checkout.css'

function Checkout() {
    return (
        <>
            <Header />
            <div className='checkout'>
                <div className="checkout_left">
                    <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>

                            {/* BasketItem */}
                            {/* BasketItem */}
                            {/* BasketItem */}
                            {/* BasketItem */}
                    </div>
                </div>
                <div className="checkout_right">
                    <h2>The Subtotal</h2>
                </div>
            </div>
        </>
    )
}

export default Checkout

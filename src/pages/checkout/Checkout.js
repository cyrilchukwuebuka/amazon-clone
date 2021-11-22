import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import Subtotal from '../../components/subtotal/Subtotal'
import './Checkout.css'

function Checkout() {
    return (
        <>
            <Header />
            <div className='checkout'>
                <div className="checkout_left">
                    <Link to='/'>
                        <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="advert" />
                    </Link>
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
                    <Subtotal />
                </div>
            </div>
        </>
    )
}

export default Checkout

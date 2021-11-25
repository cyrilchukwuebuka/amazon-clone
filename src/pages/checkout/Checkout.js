import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct'
import Header from '../../components/header/Header'
import Subtotal from '../../components/subtotal/Subtotal'
import { useStateValue } from '../../services/contextAPI/StateProvider'
import './Checkout.css'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue()

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

                        {basket.map((item) =>(
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
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

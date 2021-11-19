import React from 'react'
import Product from '../../components/product/Product';
import './Home.css';

function Home() {
    return (
        <>
            <div className='home'>
                <div className="home_container">
                    <img className='home_image' src='https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg' alt='' />

                    <div className="home_row">
                        <Product
                            id='1235'
                            title='Journey to Becoming'
                            price={29.99}
                            image='https://m.media-amazon.com/images/I/61MHEtagvXL._AC_SY200_.jpg'
                            rating={5}
                        />
                        <Product
                            id='1234'
                            title='Journey to Becoming'
                            price={129.99}
                            image='https://m.media-amazon.com/images/I/51a1R8hDH4L._AC_UL320_.jpg'
                            rating={5}
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id='12345'
                            title='Journey to Becoming'
                            price={59.99}
                            image='https://m.media-amazon.com/images/I/91xtEQe+JAL._AC_UL320_.jpg'
                            rating={5}
                        />
                        <Product
                            id='123456'
                            title='Journey to Becoming'
                            price={40.99}
                            image='https://m.media-amazon.com/images/I/91xtEQe+JAL._AC_UL320_.jpg'
                            rating={5}
                        />
                        <Product
                            id='1234567'
                            title='Journey to Becoming'
                            price={29.99}
                            image='https://m.media-amazon.com/images/I/61MHEtagvXL._AC_SY200_.jpg'
                            rating={5}
                        />
                    </div>
                    <div className="home_row">
                        <Product
                            id='12345678'
                            title='Journey to Becoming'
                            price={29.99}
                            image='https://m.media-amazon.com/images/I/81UqtzKhU1L._AC_UL320_.jpg'
                            rating={5}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

// http://pngimg.com/uploads/amazon/amazon_PNG11.png
// https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg
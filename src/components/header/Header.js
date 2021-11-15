import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy5q2y7__e3XPUGBf4YlfmOWLint_OO1kR1E2mDSHtf2yb6dTwuaRcE_k1yedTytajaPM&usqp=CAU' alt=''/>

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                {/* Logo */}
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLine1">Hello Guest</span>
                    <span className="header_optionLine2">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">Returns</span>
                    <span className="header_optionLine2">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLine1">Your</span>
                    <span className="header_optionLine2">Prime</span>
                </div>
            </div>
        </div>
    )
}

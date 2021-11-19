import { ShoppingBasket } from '@mui/icons-material'
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'

export default function Header() {
    return (
        <div className='header'>
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />

            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
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

            <div className="header_optionBasket">
                <ShoppingBasket />
                <span className="header_optionLine2 header_basketCount">0</span>
            </div>
        </div>
    )
}

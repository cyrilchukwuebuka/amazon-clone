import { ShoppingBasket } from '@mui/icons-material'
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../services/contextAPI/StateProvider'

export default function Header() {
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className='header'>
            <Link className='link' to='/'>
                <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo' />
            </Link>

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

            <Link to='/checkout'>
                <div className="header_optionBasket">
                    <ShoppingBasket />
                        <span className="header_optionLine2 header_basketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

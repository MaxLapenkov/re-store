import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import './shop-header.css'
const ShopHeader = ({numItems, total}) => {
    useEffect(() => {
        console.log('effect');
        

    }, [numItems, total]);
    
    return(
        <header className="shop-header row">
            <Link className="logo text-dark" to="/">ReStore</Link>
            <Link to="/cart" className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart"/>
                {numItems} Предметов ({total} Р.)
            </Link>
        </header>
    )
}
export default ShopHeader
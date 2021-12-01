import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import './CartWidget.scss'
import { useSelector } from 'react-redux'

export const CartWidget = () => {

    const {cart} = useSelector(state => state)


    return (
        <div className="cart-widget">
            <FaShoppingCart />
            <span>{cart.reduce((acc, el) => acc + el.cantidad, 0)}</span>
        </div>
    )
}

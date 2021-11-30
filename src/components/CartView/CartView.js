import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillTrashFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeItem } from '../../actions/cartActions'

export const CartView = () => {

    const { cart } = useSelector(state => state)
    const dispatch = useDispatch()

    // return si no hay elementos
    if (cart.length === 0) {
        return (
                <div className="container my-5">
                    <h2>Tu carrito está vacío</h2>
                    <Link to="/">Volver</Link>
                </div>
        )
    }

    // return de la vista normal
    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr/>

            {
                cart.map( (el) => (
                    <div key={el.id}>
                        <h3>{el.nombre}</h3>
                        <p>Precio: ${el.precio}</p>
                        <p>Cantidad: {el.cantidad}</p>
                        <button 
                            className="btn btn-danger"
                            onClick={() => dispatch( removeItem(el.id) )}
                        >
                            <BsFillTrashFill/>
                        </button>
                    </div>
                ))
            }

            <hr/>

            <h4>Total: ${cart.reduce((acc, el) => acc + el.precio * el.cantidad, 0)}</h4>

            <button onClick={() => dispatch( emptyCart() )} className="btn btn-danger">Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-success mx-3">Terminar mi compra</Link>
        </div>
    )
}

import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { addItem } from '../../actions/cartActions'
import { CartContext } from '../../context/CartContext'
import { useCounter } from '../../hooks/useCounter'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {

    const dispatch = useDispatch()
    const cart = useSelector(state => state)
    console.log(cart)

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const {counter, increment, decrement} = useCounter(0, item.stock, 0)

    const navigate = useNavigate()
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        
        if (counter > 0) {
            const newItem = {
                id: item.id,
                precio: item.precio,
                nombre: item.nombre,
                cantidad: counter
            }

            dispatch( addItem(newItem) )
        }


        // counter > 0 && agregarAlCarrito({
        //                     id: item.id,
        //                     precio: item.precio,
        //                     nombre: item.nombre,
        //                     cantidad: counter
        //                 })
    }

    return (
        <div className="container m-5">
            <img src={item.img} alt={item.nombre}/>
            <h3>{item.nombre}</h3>
            <p>Precio: ${item.precio}</p>
            <p>{item.desc}</p>

            {
                !isInCart(item.id)
                    ?   <ItemCount 
                            increment={increment}
                            decrement={decrement} 
                            onAdd={handleAgregar} 
                            counter={counter}
                            min={0}
                            max={item.stock}
                        />
                    :   <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
            }


            <br/>
            
            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}

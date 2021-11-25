import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const ItemCount = ( {stock = 10, initial = 0} ) => {

    const {counter, increment, decrement} = useCounter(initial, stock, 0)

    return (
        <div className="m-4">
            <button onClick={decrement} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={increment} className="btn btn-primary">+</button>

            <div>
                <button className="btn btn-success my-2">Agregar</button>
            </div>
        </div>
    )
}

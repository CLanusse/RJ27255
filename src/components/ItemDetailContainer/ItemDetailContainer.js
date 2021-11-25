import React, { useEffect, useState } from 'react'
import { pedirItem } from '../../helpers/pedirDatos'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    console.log(item)

    useEffect(()=>{
        pedirItem(1)
            .then(resp => setItem(resp))
    }, [])

    return (
        <div>
            {/* {item && <ItemDetail item={item}/>} */}
        </div>
    )
}

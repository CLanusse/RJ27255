import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'
import { finishLoading, startLoading } from './uiActions'

export const getProductsFromFirebase = (categoryId) => {

    return (dispatch) => {
        dispatch( startLoading() )

        const productosRef = collection(db, 'productos')
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
        
        getDocs(q)
            .then( resp => {
                const productos = resp.docs.map( (doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })

                dispatch( listProducts(productos) )
                dispatch( finishLoading() )
            })
    }
}


export const listProducts = (items) => {
    return {
        type: 'LIST_PRODUCTS',
        payload: items
    }
}
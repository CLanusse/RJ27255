import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { getProductsFromFirebase } from '../../actions/productsActions'

export const ItemListContainer = () => {

    const dispatch = useDispatch()

    const {productos} = useSelector(state => state)
    const {loading} = useSelector(state => state.ui)

    const {categoryId} = useParams()
    
    useEffect(()=>{
        dispatch( getProductsFromFirebase(categoryId) )
    }, [categoryId])

    return (
        <>
            {
                loading 
                    ? <Loader/>
                    : <ItemList items={productos}/>
            }
        </>
    )
}

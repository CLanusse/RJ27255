

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const removeItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}


export const productsReducer = (state = [], action) => {

    switch(action.type) {
        case "LIST_PRODUCTS":
            return [...action.payload]
        
        default:
            return state
    }   
}

// {
//     type: 'LIST_PRODUCTS',
//     payload: [item1, item2]
// }
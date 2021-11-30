import { createStore, combineReducers, applyMiddleware } from "redux"; 
import { cartReducer } from "../reducers/cartReducer";
import { productsReducer } from "../reducers/productsReducer";
import { uiReducer } from "../reducers/uiReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
    productos: productsReducer,
    cart: cartReducer,
    ui: uiReducer
})

export const store = createStore(
    reducers,
    applyMiddleware(thunk)
)
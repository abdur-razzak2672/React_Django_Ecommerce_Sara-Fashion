import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer} from './reducers/productReducers'
import { cartReducers } from './reducers/cartReducers'

const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducers,

})
const cartItemFromStorage = localStorage.getItem('cartItems')?
    JSON.parse(localStorage.getItem('cartItems')) :[]


const initialState = {
    cart:{cartItem : cartItemFromStorage}
}
const middleWare =[thunk]

const store = createStore(reducer, initialState ,composeWithDevTools(applyMiddleware(...middleWare)) )

export default store
import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'


export const addToCart =(id,qty) => async(dispatch, getState)=> { 

    const response = await axios.get(`/api/products/${id}`)

    dispatch({type:CART_ADD_ITEM, 
        payload:{

            product : response.data._id,
            name : response.data.name,
            image : response.data.image,
            price: response.data.price,
            countInStock : response.data.countInStock,
            qty
            
        



        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))





}

export const removeFromCart =(id) => async(dispatch, getState)=> {
    
        dispatch({
            type:CART_REMOVE_ITEM,
             payload:id
            })
    
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
        
}

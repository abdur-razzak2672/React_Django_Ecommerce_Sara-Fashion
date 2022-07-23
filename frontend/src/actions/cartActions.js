import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'


export const addToCart =(id,qty) => async(dispatch, getstate)=> { 

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

    localStorage.setItem('cartItems', JSON.stringify(getstate().cart.cartItems))





}

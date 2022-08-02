
import axios from 'axios'
import { 
    PRODUCT_lIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_lIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
 } from '../constants/productConstants'

export const listProducts =() => async(dispatch)=> { 

    try{
        dispatch({type:PRODUCT_lIST_REQUEST})
        const response = await axios.get('/api/products/')

        dispatch({type:PRODUCT_LIST_SUCCESS, payload:response.data})


    }catch(error){
        dispatch({ 
            type:PRODUCT_lIST_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        
        })
    }


}
export const listProductDetails =(id) => async(dispatch)=> { 
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const response = await axios.get(`/api/products/${id}`)

        dispatch({type:PRODUCT_DETAILS_SUCCESS, payload:response.data})


    }catch(error){
        dispatch({ 
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response && error.response.data.message
            ?error.response.data.message
            :error.message
        
        })
    }
}




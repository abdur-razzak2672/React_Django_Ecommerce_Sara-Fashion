
import { 
    PRODUCT_lIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_lIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
 } from '../constants/productConstants'
export const productListReducer = (state ={products:[]}, action) =>{
    switch(action.type){
        case PRODUCT_lIST_REQUEST:
            return {loading :true, products:[]}
        
        case PRODUCT_LIST_SUCCESS:
            return {loading :false, products:action.payload}

        case PRODUCT_lIST_FAIL:
            return {loading :false, error:action.payload}

        default: 
            return state
    }

}

export const productDetailsReducer = (state ={product:{reviews:[]}}, action) =>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading :true, ...state}
        
        case PRODUCT_DETAILS_SUCCESS:
            return {loading :false, products:action.payload}

        case PRODUCT_DETAILS_FAIL:
            return {loading :false, error:action.payload}

        default: 
            return state
    }

}
 
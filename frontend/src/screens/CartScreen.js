import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card ,Form} from 'react-bootstrap'
import  {addToCart}  from '../actions/cartActions'
import Loader from '../components/Loader'
import Message from '../components/Message'




function CartScreen({match,location,history}){
    const productId = match.params.id
    const qty = location.search? Number(location.search.split('=')[1]):1
    console.log('quantity :',qty,productId)

    const dispatch = useDispatch()

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[dispatch,productId,qty])

    const cart = useSelector(state=>state.cart)
    const {cartItems} = cart

    return(
        <div>
            this is cart
        </div>
    )



}

export default CartScreen;
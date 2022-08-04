import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card ,Form} from 'react-bootstrap'
import  {addToCart}  from '../actions/cartActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product';





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
    const {cartItems, loading ,error} = cart

    const removeFromCart=(id)=>{
        console.log("remove from cart",id)
    }

    return(
        <div>
            {loading? <Loader />
            :error? <Message variant ='danger'>{error}</Message>
            :<Row>
            <Col md ={8}>
                    <h1 className ="mb-5">My Cart</h1>
                    {
                        cartItems.length === 0 ? (
                            <Message variant ='info'>
                                Your Cart is Empty <Link to = '/'>Go Back</Link>
                            </Message>
                        ):(
                            <ListGroup variant = 'flush'>
                                {
                                    cartItems.map(item=>(
                                        <ListGroup.Item key = {item.product}>
                                            <Row>
                                                <Col md = {2}>
                                                    <Image src = {item.image} alt ={item.name} fluid rounded/>
                                                </Col>
                                                <Col md = {3}>
                                                    <Link to ={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md = {2}>
                                                    ${item.price}
                                                </Col>

                                                <Col md ={3}>
                                                    <select
                                                    className = "w-100 rounded"
                                                    value ={item.qty}
                                                    onChange = {(e) => dispatch(addToCart(item.product, e.target.value))}
                                                    >
                                                        {
                                                            [...Array(item.countInStock).keys()].map((x) => (
                                                                <option key = {x+1} value ={x+1}>
                                                                    {x+1}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>                
                                                </Col>
                                                <Col md = {1}>
                                                    <Button 
                                                    variant = "light"
                                                    onClick = {() => removeFromCart(item.product)}
                                                    >
                                                        <i className = "fa fa-trash"></i>
                                                    </Button>

                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))
                                }
                                
                            </ListGroup>
                    )}
                </Col>

                <Col md ={8}>

                </Col>
            </Row>  
            }

        </div>
    )



}

export default CartScreen;
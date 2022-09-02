import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button} from 'react-bootstrap'
import  {addToCart,removeFromCart}  from '../actions/cartActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import Stepper from '../components/Stepper'



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

    const removeFromCartHandelar=(id)=>{
        dispatch(removeFromCart(id))
        
    }

    const checkoutHandeler=()=>{
        history.push('/login?redirect=shipping')
    }

    return(
        <div>
            <MultiStepProgressBar step1/>
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
                                                <Link to ={`/product/${item.product}`}><Image src = {item.image} alt ={item.name} fluid rounded/></Link>
                                                    
                                                </Col>
                                                <Col md = {3}>
                                                    <Link className = "productName" to ={`/product/${item.product}`}>{item.name}</Link>
                                                </Col>
                                                <Col md = {2}>
                                                    ${item.price}
                                                </Col>

                                                <Col md ={3}>
                                                    <select
                                                    className = "w-100 rounded"
                                                    value ={item.qty}
                                                    onChange = {(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
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
                                                    onClick = {() => removeFromCartHandelar(item.product)}
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

                <Col md ={4}>
                <h1 className = "mb-5 text-center">Order</h1>
                <ListGroup variant = "flush">
                    <ListGroup.Item>
                        <p>Subtotal {cartItems.reduce((acc, item) =>  acc+item.qty ,0)} items added </p>
                        <p>Total ${cartItems.reduce((acc, item) =>  acc+item.price * item.qty ,0).toFixed(2)}</p>

                    </ListGroup.Item>
                </ListGroup>
                <ListGroup.Item>
                    <Button
                    type = "button"
                    className = "btn btn-block w-100"
                    disabled = {cartItems.length === 0}
                    onClick = {checkoutHandeler}
                    //onClick = {() => history.push('/signin?redirect=shipping')}

                    >
                    Process To Checkout
                    </Button>
                </ListGroup.Item>

                </Col>
            </Row>  
            }

        </div>
    )



}

export default CartScreen;
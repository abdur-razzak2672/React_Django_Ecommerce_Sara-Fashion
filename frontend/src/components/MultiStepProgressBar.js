import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

function MultiStProgressBar({ step1, step2, step3, step4 }) {

    const cart = useSelector(state=>state.cart)
    const {cartItems,shippingAddress } = cart


    const dispatch = useDispatch()


    return (
        <div className='d-flex justify-content-center mb-4'>
            <Nav.Item className=''>
                {cart ? (
                    <LinkContainer to='/cart'>
                        <Nav.Link className= "rounded-5 p-1 bg-success text-light" >CartItems</Nav.Link>
                    </LinkContainer>
                    
                ) : (
                        <Nav.Link disabled>CartItems</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <LinkContainer className= "rounded-5 p-1 bg-success text-light"  to='/shipping'>
                        <Nav.Link>Shipping</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Shipping</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <LinkContainer className= "rounded-5 p-1 bg-success text-light"  to='/payment'>
                        <Nav.Link>Payment</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Payment</Nav.Link>
                    )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <LinkContainer className= "rounded-5 p-1 bg-success text-light"  to='/placeorder'>
                        <Nav.Link>Place Order</Nav.Link>
                    </LinkContainer>
                ) : (
                        <Nav.Link disabled>Place Order</Nav.Link>
                    )}
            </Nav.Item>
        </div>
    )
}

export default MultiStProgressBar
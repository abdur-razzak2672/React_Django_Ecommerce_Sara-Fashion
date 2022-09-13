import React, { useState, useEffect } from 'react'
import { Form, Button,Image, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import { savePaymentMethod } from '../actions/cartActions'

import bkash from '../statics/bkash.webp'
import cash from '../statics/cash.png'
import nagad from '../statics/nagad.png'
import rocket from '../statics/rocket.png'


function PaymentMethodScreen({history}) {
    
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('cash')

    console.log("method : ",paymentMethod)

    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <MultiStepProgressBar step1 step2 step3 />

            <Form onSubmit={submitHandler}>
                <Form.Group className=''>
                    <Form.Label as='legend'>Payment Method</Form.Label>
                    <Col className='mt-5'>
                    <div className='d-flex mt-3 justify-content-between'>
                            <div className = "d-flex ">
                                <Image src = {cash} fluid rounded width="50" height="50" />     
                                <label className='ms-4'>Cash</label>
                            </div>
                            <Form.Check
                            type='radio'
                            id='cash'
                            value='cash'
                            name='paymentMethod'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                            </Form.Check>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div className = "d-flex ">
                                <Image src = {bkash} fluid rounded width="50" height="50" />     
                                <label className='ms-4'>bkash</label>
                            </div>
                            <Form.Check
                            type='radio'
                            id='bkash'
                            value='bkash'
                            name='paymentMethod'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                            </Form.Check>
                        </div>
                        <div className='coloum d-flex mt-3 justify-content-between'>
                            <div className = "d-flex ">
                                <Image src = {nagad} fluid rounded width="50" height="50" />     
                                <label className='ms-4'>Nagad</label>
                            </div>
                            <Form.Check
                            type='radio'
                            value='nagad'
                            id='nagad'
                            name='paymentMethod'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div className = "d-flex ">
                                <Image src = {rocket} fluid rounded width="50" height="50" />     
                                <label className='ms-4'>Rocket</label>
                            </div>
                            <Form.Check
                            type='radio'
                            id='rocket'
                            value='rocket'
                            name='paymentMethod'
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                        </div>
                        
                    </Col>
                </Form.Group>

                <Button className='mt-5' type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )

}

export default PaymentMethodScreen

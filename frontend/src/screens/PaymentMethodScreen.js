import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import MultiStepProgressBar from '../components/MultiStepProgressBar'

function PaymentMethodScreen() {

    return (
        <div>
           <MultiStepProgressBar step1 step2 step3/>
        <h1>Payment</h1>  
        </div>
       
    )
}

export default PaymentMethodScreen

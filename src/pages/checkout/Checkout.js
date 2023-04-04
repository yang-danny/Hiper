import React from 'react'
import PaymentForm from '../../components/payment/PaymentForm'
import CheckoutSummary from '../../components/checkoutSummary/CheckoutSummary'

const Checkout = () => {
  return (
    <div className="container --flex-between">
      <CheckoutSummary />
      <div>
        <h3>Payment:</h3>
         <PaymentForm/>
      </div>
     
      </div>
  )
}

export default Checkout
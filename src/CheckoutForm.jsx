import React from 'react';

export default function CheckoutForm(props) {
  return (
    <div className='checkout'>
      <h3>Membership Checkout</h3>
      <p className='membership-name'>{props.title}</p>
      <p className='price'>{props.price}</p>
      <button>Complete Payment</button>
    </div>
  )
}

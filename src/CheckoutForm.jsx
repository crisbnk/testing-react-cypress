import React from 'react';
import './CheckoutForm.css';

export default function CheckoutForm(props) {
  return (
    <div className='checkout'>
      <h3>Checkout</h3>
      <div className='row'>
        <p className='label'>Membership Plan:</p>
        <p className='membership-data'>Wellness <span className='membership-name'>{props.title}</span></p>
      </div>
      <div className='row'>
        <p className='label'>Membership Price:</p>
        <p className='membership-data'><span className='membership-price'>{props.price}</span> /month</p>
      </div>
      <div className='row action'>
        <button
          className='button'
          style={{backgroundColor: props.buttonColor}}>
          Complete Payment
        </button>
      </div>
    </div>
  )
}

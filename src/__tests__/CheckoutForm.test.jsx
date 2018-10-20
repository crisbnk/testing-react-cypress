import React from 'react';
import { create } from 'react-test-renderer';
import CheckoutForm from '../CheckoutForm';

describe('Checkout component', () => {
  test('As a user I can fill the checkout form and see the updated text', () => {
    const membershipCheckout = {
      title: 'Basic',
      price: '4,99',
      color: '#FF6F74'
    };
    const component = create(
      <CheckoutForm
        title={membershipCheckout.title}
        price={membershipCheckout.price}
        color={membershipCheckout.color}
      />
    );
    const rootInstance =  component.root;
    const h3 = rootInstance.findByType('h3');
    const title = rootInstance.findByProps({className: 'membership-name'});
    const button = rootInstance.findByType('button');
    expect(h3.props.children).toBe('Membership Checkout');
    expect(title.props.children).toBe('Basic');
    expect(button.props.children).toBe('Complete Payment');
  });
});

// title={membershipCheckout.title} price={membershipCheckout.price} color={membershipCheckout.color}

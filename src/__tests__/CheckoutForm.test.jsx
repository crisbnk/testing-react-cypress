import React from 'react';
import { create } from 'react-test-renderer';
import CheckoutForm from '../CheckoutForm';

describe('Checkout component', () => {
  test('As a user I can see the checkout form with Basic Membership info', () => {
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
    const title = rootInstance.findByProps(
      {className: 'membership-name'}
    );
    const price = rootInstance.findByProps(
      {className: 'membership-price'}
    );
    const button = rootInstance.findByType('button');
    expect(h3.props.children).toBe('Checkout');
    expect(title.props.children).toBe('Basic');
    expect(price.props.children).toBe('4,99');
    expect(button.props.children).toBe('Complete Payment');
  });

  test('As a user I can see the checkout form with Basic Membership info', () => {
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
    const title = rootInstance.findByProps(
      {className: 'membership-name'}
    );
    const price = rootInstance.findByProps(
      {className: 'membership-price'}
    );
    const button = rootInstance.findByType('button');
    expect(h3.props.children).toBe('Checkout');
    expect(title.props.children).toBe('Basic');
    expect(price.props.children).toBe('4,99');
    expect(button.props.children).toBe('Complete Payment');
  });

  test('As a user I can see the checkout form with Basic Membership info', () => {
    const membershipCheckout = {
      title: 'Basic',
      price: '4,99',
      color: 'rgb(255, 111, 116)'
    };
    const component = create(
      <CheckoutForm
        title={membershipCheckout.title}
        price={membershipCheckout.price}
        buttonColor={membershipCheckout.color}
      />
    );
    const rootInstance =  component.root;
    const h3 = rootInstance.findByType('h3');
    const title = rootInstance.findByProps(
      {className: 'membership-name'}
    );
    const price = rootInstance.findByProps(
      {className: 'membership-price'}
    );
    const button = rootInstance.findByType('button');
    expect(h3.props.children).toBe('Checkout');
    expect(title.props.children).toBe('Basic');
    expect(price.props.children).toBe('4,99');
    expect(button.props.children).toBe('Complete Payment');
    expect(button.props.style.backgroundColor).toBe(membershipCheckout.color);
  });
});

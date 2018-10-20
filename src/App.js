import React, { Component } from 'react';
import './App.css';
import PricingTable from './PricingTable';
import CheckoutForm from './CheckoutForm';
import { membership } from './helpers/membership';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutInfo: {
        title: '',
        price: '',
        color: ''
      }
    };
    this.handleCheckout =  this.handleCheckout.bind(this);
  }

  handleCheckout(checkoutInfo) {
    this.setState({
      checkoutInfo: checkoutInfo
    });
  }

  render() {
    return (
      <div className='container'>
        {
          !this.state.checkoutInfo.title ?
          membership.plans.map((plan, index) => {
            return (
              <PricingTable
                key={index}
                title={plan.title}
                price={plan.price}
                options={plan.options}
                buttonColor={plan.buttonColor}
                handleCheckout={this.handleCheckout}
              />
            );
          }) : <CheckoutForm
                title={this.state.checkoutInfo.title}
                price={`€ ${this.state.checkoutInfo.price}`}
                color={this.state.checkoutInfo.color}
              />
        }
      </div>
    )
  }
}

export default App;

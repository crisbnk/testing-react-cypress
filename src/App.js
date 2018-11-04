import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PricingTable from './PricingTable';
import CheckoutForm from './CheckoutForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutInfo: {
        title: '',
        price: '',
        color: ''
      },
      membershipPlans: []
    };
    this.handleCheckout =  this.handleCheckout.bind(this);
  }

  // Move async logic out of React Component?
  async componentDidMount() {
    try {
      const response = await axios.get('http://localhost:3001/plans');
      this.loadMembership(response.data);
    } catch(e) {
      throw new Error(e);
    }
  }

  loadMembership(membershipPlans) {
    this.setState(this.membershipUpdater(membershipPlans));
  }

  membershipUpdater(membershipPlans) {
    return { membershipPlans };
  }

  handleCheckout(checkoutInfo) {
    this.setState(this.checkoutInfoUpdater(checkoutInfo));
  }

  checkoutInfoUpdater(checkoutInfo) {
    return { checkoutInfo };
  }

  render() {
    return (
      <div className='container'>
        {
          !this.state.checkoutInfo.title ?
          this.state.membershipPlans.map((plan, index) => {
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
                buttonColor={this.state.checkoutInfo.color}
              />
        }
      </div>
    )
  }
}

export default App;

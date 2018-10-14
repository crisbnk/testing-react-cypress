import React, { Component } from 'react';
import './App.css';
import PricingTable from './PricingTable';
import { membership } from './helpers/membership';

class App extends Component {
  render() {
    return (
      <div className='container'>
        {
          membership.plans.map((plan, index) => {
            return (
              <PricingTable
                key={index}
                title={plan.title}
                price={plan.price}
                options={plan.options}
                buttonColor={plan.buttonColor}
              />
            );
          })
        }
      </div>
    )
  }
}

export default App;

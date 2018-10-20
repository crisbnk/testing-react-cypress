import React, { Component } from 'react';
import './PricingTable.css';

export default class PricingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkout: false
    }
    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick(e) {
    const checkoutInfo = {
      title: this.props.title,
      price: this.props.price,
      color: this.props.buttonColor
    };
    this.props.handleCheckout(checkoutInfo);
  }

  render() {
    return (
      <div className={`card package-${this.props.title.toLowerCase()}`}>
        <h3 className='title'>Wellness {this.props.title}</h3>
        <p className='price-container'>
          <span className='price'>
            € {this.props.price}
          </span>
          <span className='plan-period'>
            /month
          </span>
        </p>
        <ul className='options-list'>
          {this.props.options.map((opt, index) => {
            return (
              <li
                key={index}
                className={`option-item ${opt.active?'active':''}`}
                >
                  {opt.name}
                </li>
              )
            })}
        </ul>
        <button
          className='button'
          style={{backgroundColor: this.props.buttonColor}}
          onClick={this.handleClick}>
          Subscribe to {this.props.title}
        </button>
      </div>
    )
  }
}

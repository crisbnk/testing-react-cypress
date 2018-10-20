import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleClick =  this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(this.stateUpdater);
  }

  stateUpdater() {
    return { text: 'Proceed to checkout' };
  }

  render() {
    const buttonText = !this.state.text ? this.props.title : this.state.text;
    return (
      <button className='button'
        style={this.props.buttonStyle}
        onClick={this.handleClick}
      >
        {buttonText}
      </button>
    );
  }
}

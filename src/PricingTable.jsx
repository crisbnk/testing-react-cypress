import React from 'react';
import './PricingTable.css';

export default function PricingTable(props) {
  const buttonStyle = {
    backgroundColor: props.buttonColor,
  };

  return (
    <div className='card'>
      <h3 className='title'>Wellness {props.title}</h3>
      <p className='price-container'>
        <span className='price'>
          € {props.price}
        </span>
        <span className='plan-period'>
           /month
        </span>
      </p>
      <ul className='options-list'>
        {props.options.map((opt, index) => {
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
      <button className='button' style={buttonStyle}>
        Subscribe to {props.title}
      </button>
    </div>
  );
}

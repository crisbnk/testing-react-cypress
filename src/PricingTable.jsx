import React, { Component } from "react";
import "./PricingTable.css";

const PricingTable = props => {
  return (
    <div className={`card package-${props.title.toLowerCase()}`}>
      <h3 className="title">Wellness {props.title}</h3>
      <p className="price-container">
        <span className="price">€ {props.price}</span>
        <span className="plan-period">/month</span>
      </p>
      <ul className="options-list">
        {props.options.map((opt, index) => {
          return (
            <li
              key={index}
              className={`option-item ${opt.active ? "active" : ""}`}
            >
              {opt.name}
            </li>
          );
        })}
      </ul>
      {props.children}
    </div>
  );
};

export default PricingTable;

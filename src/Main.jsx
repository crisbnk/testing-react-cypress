import React, { Component } from "react";
import axios from "axios";
import PricingTable from "./PricingTable";
import CheckoutForm from "./CheckoutForm";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutInfo: {
        title: "",
        price: "",
        color: ""
      },
      showCheckout: "no",
      membershipPlans: []
    };
    this.showCheckoutForm = this.showCheckoutForm.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(plan) {
    this.setCheckoutInfo(plan);
    this.showCheckoutForm();
  }

  // Move async logic out of React Component?
  async componentDidMount() {
    await this.getData();
  }

  async getData() {
    try {
      const response = await axios.get("http://localhost:3001/plans");
      return this.loadMembership(response.data);
    } catch (e) {
      throw new Error(e);
    }
  }

  loadMembership(membershipPlans) {
    this.setState(() => {
      return { membershipPlans };
    });
  }

  showCheckoutForm() {
    this.setState(() => {
      return { showCheckout: "yes" };
    });
  }

  setCheckoutInfo(plan) {
    this.setState(() => {
      return {
        checkoutInfo: {
          title: plan.title,
          price: plan.price,
          color: plan.buttonColor
        }
      };
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.showCheckout === "no" ? (
          this.state.membershipPlans.map((plan, index) => {
            return (
              <PricingTable
                key={index}
                title={plan.title}
                price={plan.price}
                options={plan.options}
                buttonColor={plan.buttonColor}
              >
                <button
                  className="button"
                  style={{ backgroundColor: plan.buttonColor }}
                  onClick={this.handleClick.bind(this, plan)}
                >
                  Subscribe to {plan.title}
                </button>
              </PricingTable>
            );
          })
        ) : (
          <CheckoutForm
            title={this.state.checkoutInfo.title}
            price={`€ ${this.state.checkoutInfo.price}`}
            buttonColor={this.state.checkoutInfo.color}
          />
        )}
      </div>
    );
  }
}

export default Main;

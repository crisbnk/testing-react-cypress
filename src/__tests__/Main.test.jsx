import React from "react";
import { create } from "react-test-renderer";
import Main from "../Main";
import axios from "axios";

jest.mock("axios");

describe("Application", () => {
  test("As a user I can see the pricing table", async () => {
    const response = {
      data: [
        {
          id: 1,
          title: "Basic",
          price: "4,99",
          buttonColor: "rgb(255, 111, 116)",
          options: [
            {
              name: "Unlimited Access to Wellness Club",
              active: true
            },
            {
              name: "Free Fitness Training",
              active: false
            },
            {
              name: "Free Wifi",
              active: false
            },
            {
              name: "Unlimited Use of Hydromassage",
              active: false
            },
            {
              name: "Book classes 8 days in advance",
              active: false
            },
            {
              name: "Free friend access",
              active: false
            }
          ]
        },
        {
          id: 2,
          title: "Silver",
          price: "6,99",
          buttonColor: "rgb(0, 210, 236)",
          options: [
            {
              name: "Unlimited Access to Wellness Club",
              active: true
            },
            {
              name: "Free Fitness Training",
              active: true
            },
            {
              name: "Free Wifi",
              active: true
            },
            {
              name: "Unlimited Use of Hydromassage",
              active: false
            },
            {
              name: "Book classes 8 days in advance",
              active: false
            },
            {
              name: "Free friend access",
              active: false
            }
          ]
        },
        {
          id: 3,
          title: "Gold",
          price: "8,99",
          buttonColor: "rgb(65, 114, 254)",
          options: [
            {
              name: "Unlimited Access to Wellness Club",
              active: true
            },
            {
              name: "Free Fitness Training",
              active: true
            },
            {
              name: "Free Wifi",
              active: true
            },
            {
              name: "Unlimited Use of Hydromassage",
              active: true
            },
            {
              name: "Book classes 8 days in advance",
              active: false
            },
            {
              name: "Free friend access",
              active: false
            }
          ]
        },
        {
          id: 4,
          title: "Platinum",
          price: "10,99",
          buttonColor: "rgb(0, 255, 59)",
          options: [
            {
              name: "Unlimited Access to Wellness Club",
              active: true
            },
            {
              name: "Free Fitness Training",
              active: true
            },
            {
              name: "Free Wifi",
              active: true
            },
            {
              name: "Unlimited Use of Hydromassage",
              active: true
            },
            {
              name: "Book classes 8 days in advance",
              active: true
            },
            {
              name: "Free friend access",
              active: true
            }
          ]
        }
      ]
    };

    axios.get.mockResolvedValue(response);
    const component = create(<Main />);
    const instance = component.getInstance();
    await instance.componentDidMount();
    const rootInstance = component.root;
    const buttons = rootInstance.findAllByType("button");
    expect(buttons[0].props.children.join("")).toBe("Subscribe to Basic");
    buttons[0].props.onClick();
    const buttonAfterCheckout = rootInstance.findByType("button");
    expect(buttonAfterCheckout.props.children).toBe("Complete Payment");
  });
});

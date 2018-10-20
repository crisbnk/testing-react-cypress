import React from 'react';
import { create } from 'react-test-renderer';
import PricingTable from '../PricingTable';

describe('Pricing table component', () => {
  test('it matches the snapshot of PricingTable #1', () => {
    const pricingTable1 = {
      "id": 1,
      "title": "Basic",
      "price": "4,99",
      "buttonColor": "#FF6F74",
      "options": [
        {
          "name": "Unlimited Access to Wellness Club",
          "active": true
        },
        {
          "name": "Free Fitness Training",
          "active": false
        },
        {
          "name": "Free Wifi",
          "active": false
        },
        {
          "name": "Unlimited Use of Hydromassage",
          "active": false
        },
        {
          "name": "Book classes 8 days in advance",
          "active": false
        },
        {
          "name": "Free friend access",
          "active": false
        }
      ]
    };

    const component = create(
      <PricingTable
        title={pricingTable1.title}
        price={pricingTable1.price}
        options={pricingTable1.options}
        buttonColor={pricingTable1.buttonColor}
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('it matches the snapshot of PricingTable #2', () => {
    const pricingTable2 = {
      "id": 2,
      "title": "Silver",
      "price": "6,99",
      "buttonColor": "#00D2EC",
      "options": [
        {
          "name": "Unlimited Access to Wellness Club",
          "active": true
        },
        {
          "name": "Free Fitness Training",
          "active": true
        },
        {
          "name": "Free Wifi",
          "active": true
        },
        {
          "name": "Unlimited Use of Hydromassage",
          "active": false
        },
        {
          "name": "Book classes 8 days in advance",
          "active": false
        },
        {
          "name": "Free friend access",
          "active": false
        }
      ]
    };

    const component = create(
      <PricingTable
        title={pricingTable2.title}
        price={pricingTable2.price}
        options={pricingTable2.options}
        buttonColor={pricingTable2.buttonColor}
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('it matches the snapshot of PricingTable #3', () => {
    const pricingTable3 = {
      "id": 3,
      "title": "Gold",
      "price": "8,99",
      "buttonColor": "#4172FE",
      "options": [
        {
          "name": "Unlimited Access to Wellness Club",
          "active": true
        },
        {
          "name": "Free Fitness Training",
          "active": true
        },
        {
          "name": "Free Wifi",
          "active": true
        },
        {
          "name": "Unlimited Use of Hydromassage",
          "active": true
        },
        {
          "name": "Book classes 8 days in advance",
          "active": false
        },
        {
          "name": "Free friend access",
          "active": false
        }
      ]
    };

    const component = create(
      <PricingTable
        title={pricingTable3.title}
        price={pricingTable3.price}
        options={pricingTable3.options}
        buttonColor={pricingTable3.buttonColor}
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  test('it matches the snapshot of PricingTable #4', () => {
    const pricingTable4 = {
      "id": 4,
      "title": "Platinum",
      "price": "10,99",
      "buttonColor": "#00FF3B",
      "options": [
        {
          "name": "Unlimited Access to Wellness Club",
          "active": true
        },
        {
          "name": "Free Fitness Training",
          "active": true
        },
        {
          "name": "Free Wifi",
          "active": true
        },
        {
          "name": "Unlimited Use of Hydromassage",
          "active": true
        },
        {
          "name": "Book classes 8 days in advance",
          "active": true
        },
        {
          "name": "Free friend access",
          "active": true
        }
      ]
    };

    const component = create(
      <PricingTable
        title={pricingTable4.title}
        price={pricingTable4.price}
        options={pricingTable4.options}
        buttonColor={pricingTable4.buttonColor}
      />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

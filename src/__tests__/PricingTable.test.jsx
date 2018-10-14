import React from 'react';
import { create } from 'react-test-renderer';
import PricingTable from '../PricingTable';
import { membership } from '../helpers/membership';

describe('Pricing table component', () => {
  test('it matches the snapshot of PricingTable #1', () => {
    const pricingTable1 = membership.plans[0];
    const component = create(
      <PricingTable
        title={pricingTable1.title}
        price={pricingTable1.price}
        options={pricingTable1.options}
        buttonColor={pricingTable1.buttonColor}
      />
    );
    const json = component.toJSON();
    console.log(json);
    expect(json).toMatchSnapshot();
  });
  test('it matches the snapshot of PricingTable #2', () => {
    const pricingTable2 = membership.plans[1];
    const component = create(
      <PricingTable
        title={pricingTable2.title}
        price={pricingTable2.price}
        options={pricingTable2.options}
        buttonColor={pricingTable2.buttonColor}
      />
    );
    const json = component.toJSON();
    console.log(json);
    expect(json).toMatchSnapshot();
  });
  test('it matches the snapshot of PricingTable #3', () => {
    const pricingTable3 = membership.plans[2];
    const component = create(
      <PricingTable
        title={pricingTable3.title}
        price={pricingTable3.price}
        options={pricingTable3.options}
        buttonColor={pricingTable3.buttonColor}
      />
    );
    const json = component.toJSON();
    console.log(json);
    expect(json).toMatchSnapshot();
  });
  test('it matches the snapshot of PricingTable #4', () => {
    const pricingTable4 = membership.plans[3];
    const component = create(
      <PricingTable
        title={pricingTable4.title}
        price={pricingTable4.price}
        options={pricingTable4.options}
        buttonColor={pricingTable4.buttonColor}
      />
    );
    const json = component.toJSON();
    console.log(json);
    expect(json).toMatchSnapshot();
  });
});

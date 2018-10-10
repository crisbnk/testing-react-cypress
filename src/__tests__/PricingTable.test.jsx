import React from 'react';
import { create } from 'react-test-renderer';
import PricingTable from '../PricingTable';

describe('Pricing table component', () => {
  test('it matches the snapshot', () => {
    const component = create(<PricingTable />);
    const json = component.toJSON();
    console.log(json);
    expect(json).toMatchSnapshot();
  });
});

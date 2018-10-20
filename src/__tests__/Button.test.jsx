import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../Button';

describe('Button component', () => {
  test('As a user I can click the button and see the updated text', () => {
    const component = create(<Button />);
    const rootInstance =  component.root;
    const button = rootInstance.findByType('button');
    button.props.onClick();
    expect(button.props.children).toBe('Proceed to checkout');
  });
});

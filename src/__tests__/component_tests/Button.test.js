import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button', () => {
  let props = { label: 'Withdraw' };
  let button = shallow(<Button {...props} />);

  it('renders correctly', () => {
    expect(button).toMatchSnapshot();
  });

  it('displays its label prop as its text', () => {
    expect(button.text()).toBe('Withdraw');
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button', () => {
  const mockTransaction = jest.fn();
  let props = { label: 'Withdraw', transaction: mockTransaction };
  let button = shallow(<Button {...props} />);

  it('renders correctly', () => {
    expect(button).toMatchSnapshot();
  });

  it('displays its label prop as its text', () => {
    expect(button.text()).toBe('Withdraw');
  });

  it('fires the transaction() function when clicked', () => {
    button.simulate('click');
    expect(mockTransaction).toHaveBeenCalled();
  })
});

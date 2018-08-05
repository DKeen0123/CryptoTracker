import React from 'react';
import { shallow } from 'enzyme';
import Balance from '../../components/Balance';

describe('Balance', () => {
  let props = { userBalance: 10 };
  let balance = shallow(<Balance {...props} />);

  it('renders correctly', () => {
    expect(balance).toMatchSnapshot();
  });

  it('renders the user balance', () => {
    expect(balance.text()).toEqual('Balance: 10');
  });
});

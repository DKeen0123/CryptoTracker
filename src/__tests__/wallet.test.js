import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from '../components/wallet';

describe('Wallet', () => {
  const props = { balance: 10 };
  const wallet = shallow(<Wallet {...props} />);

  it('renders correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('gets the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Balance: 10');
  });
});

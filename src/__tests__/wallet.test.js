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

  it('displays a form that the user can type into to update balance', () => {
    expect(wallet.find('.input-balance').exists()).toBe(true);
  });

  describe('when a user types into .input-balance', () => {
    const userBalance = 25;
    beforeEach(() => {
      wallet
        .find('.input-balance')
        .simulate('change', { target: { value: userBalance } });
    });

    it('updates the local `state` balance and converts to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });
  });
});

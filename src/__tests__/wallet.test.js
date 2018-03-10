import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from '../components/wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const props = { balance: 10, deposit: mockDeposit };
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

    describe('and the user wants to deposit into the balance', () => {
      beforeEach(() => {
        wallet.find('.deposit-btn').simulate('click');
      });

      it('dispatches the `deposit()` it receives from props with the local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});

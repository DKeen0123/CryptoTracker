import React from 'react';
import { shallow, mount } from 'enzyme';
import { Wallet } from '../../components/Wallet';
describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdrawal = jest.fn();
  let props = { balance: 10, deposit: mockDeposit, withdraw: mockWithdrawal };
  let wallet = shallow(<Wallet {...props} />);

  it('renders correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('gets the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Balance: 10');
  });

  it('renders a Balance component', () => {
    expect(wallet.find('Balance').exists()).toBe(true);
  });

  describe('passing Props', () => {
    it('passes props.balance down to Balance component', () => {
      expect(wallet.find('Balance').prop('userBalance')).toEqual(10);
    });
  });

  describe('when mounted', () => {
    it('dispatches the `fetchCryptoNames()` method received from props', () => {
      const mockFetchCryptoNames = jest.fn();
      props.fetchCryptoNames = mockFetchCryptoNames;
      wallet = mount(<Wallet {...props} />);
      expect(mockFetchCryptoNames).toHaveBeenCalled();
    });
  });

  it('displays a form that the user can type into to update balance', () => {
    expect(wallet.find('.input-balance').exists()).toBe(true);
  });

  it('renders a CryptoPicker component', () => {
    expect(wallet.find('CryptoPicker').exists()).toBe(true);
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

    describe('and the user wants to withdraw from the balance', () => {
      beforeEach(() => {
        wallet.find('.withdrawal-btn').simulate('click');
      });

      it('dispatches the `withdraw()` it receives from props with the local balance', () => {
        expect(mockWithdrawal).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});

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

  it('renders a Balance component', () => {
    expect(wallet.find('Balance').exists()).toBe(true);
  });

  it('renders a ChangeBalance component', () => {
    expect(wallet.find('ChangeBalance').exists()).toBe(true);
  });

  it('renders a CryptoPicker component', () => {
    expect(wallet.find('CryptoPicker').exists()).toBe(true);
  });

  describe('Buttons', () => {
    it('renders a Button component', () => {
      expect(wallet.find('Button').exists()).toBe(true);
    });

    it('passes deposit name down to deposit btn', () => {
      expect(wallet.find('.btn-deposit').prop('label')).toEqual('Deposit');
    });

    it('passes withdraw name down to withdraw', () => {
      expect(wallet.find('.btn-withdraw').prop('label')).toEqual('Withdraw');
    });

    it('passes the transaction function down to the deposit button', () => {
      expect(wallet.find('.btn-deposit').prop('transaction')).toEqual(
        wallet.instance().transaction
      );
    });

    it('passes the transaction function down to the withdraw button', () => {
      expect(wallet.find('.btn-withdraw').prop('transaction')).toEqual(
        wallet.instance().transaction
      );
    });
  });

  describe('deposit()', () => {
    it('fires the deposit action recieved from props and gives it the balance state', () => {
      wallet.setState({ balance: 10 });
      wallet.instance().deposit();
      expect(mockDeposit).toHaveBeenCalled();
    });
  });

  describe('withdraw()', () => {
    it('fires the withdraw action recieved from props and gives it the balance state', () => {
      wallet.setState({ balance: 10 });
      wallet.instance().withdraw();
      expect(mockWithdrawal).toHaveBeenCalled();
    });
  });

  describe('passing Props', () => {
    it('passes props.balance down to Balance component', () => {
      expect(wallet.find('Balance').prop('userBalance')).toEqual(10);
    });
    it('passes handleUpdateBalance() down to ChangeBalance component', () => {
      expect(wallet.find('ChangeBalance').prop('changeBalance')).toEqual(
        wallet.instance().handleUpdateBalance
      );
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

  describe('handleUpdateBalance()', () => {
    it('sets the `currentInput` state to the amount entered into the input', () => {
      const event = { target: { value: 10 } };
      wallet.instance().handleUpdateBalance(event);
      expect(wallet.state('balance')).toEqual(10);
    });
  });
});

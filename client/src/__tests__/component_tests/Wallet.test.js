import React from 'react';
import { shallow, mount } from 'enzyme';
import { Wallet } from '../../components/Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdrawal = jest.fn();
  const mockSelectedCrypto = jest.fn();
  const mockFetchCryptoNames = jest.fn()
  let props = { balance: 10, deposit: mockDeposit, withdraw: mockWithdrawal, fetchCryptoNames: mockFetchCryptoNames, selectedCrypto: mockSelectedCrypto };
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

    // it('passes the transaction function down to the deposit button', () => {
    //   expect(wallet.find('.btn-deposit').prop('transaction')).toEqual(
    //     wallet.instance().transaction
    //   );
    // });

    // it('passes the transaction function down to the withdraw button', () => {
    //   expect(wallet.find('.btn-withdraw').prop('transaction')).toEqual(
    //     wallet.instance().transaction
    //   );
    // });
  });

  describe('selectCrypto()', () => {
    it('updates the `chosenCrypto` state with the currently selected cryptocurrency', () => {
      wallet.instance().selectCrypto({ target: { value: 'ethereum' } });
      expect(wallet.state('chosenCrypto')).toEqual('ethereum');
    })
  });

  // describe('addCrypto()', () => {
  //   it('fires the selectedCrypto action and gives it the chosenCrypto state', () => {
  //     wallet.setState({ chosenCrypto: 'ethereum'});
  //     wallet.instance().addCrypto();
  //     expect(mockSelectedCrypto).toHaveBeenCalled();
  //   })
  // });

  // describe('transaction()', () => {
  //   let wallet = mount(<Wallet {...props} />);
  //   it('fires the deposit function when passed the string deposit', () => {
  //     jest.spyOn(wallet.instance(), 'deposit')
  //     wallet.instance().transaction('Deposit');
  //     expect(wallet.instance().deposit).toHaveBeenCalled()
  //   })

    // it('fires the withdraw function when passed the string deposit', () => {
    //   jest.spyOn(wallet.instance(), 'withdraw')
    //   wallet.instance().transaction('Withdraw');
    //   expect(wallet.instance().withdraw).toHaveBeenCalled()
    // })
  // });

  describe('passing Props', () => {
    let wallet = shallow(<Wallet {...props} />);
    it('passes props.balance down to Balance component', () => {
      expect(wallet.find('Balance').prop('userBalance')).toEqual(10);
    });

    it('passes handleUpdateBalance() down to ChangeBalance component', () => {
      expect(wallet.find('ChangeBalance').prop('changeBalance')).toEqual(
        wallet.instance().handleUpdateBalance
      );
    });

    it('passes selectCrypto() down to cryptoPicker component', () => {
      expect(wallet.find('CryptoPicker').prop('selectCrypto')).toEqual(
        wallet.instance().selectCrypto
      )
    });

    it('passes addCrypto() down to cryptoPicker component', () => {
      expect(wallet.find('CryptoPicker').prop('addCrypto')).toEqual(
        wallet.instance().addCrypto
      )
    });

    it('passes `chosenCrypto` down to cryptoPicker component', () => {
      wallet.setState({ chosenCrypto: 'ethereum' })
      expect(wallet.find('CryptoPicker').prop('chosenCrypto')).toEqual(
        wallet.state('chosenCrypto')
      )
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

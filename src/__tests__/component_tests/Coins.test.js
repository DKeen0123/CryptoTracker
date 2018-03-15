import React from 'react';
import { shallow, mount } from 'enzyme';
import { Coins } from '../../components/Coins';

describe('Coins', () => {
  let props = { balance: 10, bitcoin: {} };
  let coins = shallow(<Coins {...props} />);

  it('renders correctly', () => {
    expect(coins).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchBitcoin = jest.fn();
    const mockFetchEthereum = jest.fn();
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      props.fetchEthereum = mockFetchEthereum;
      coins = mount(<Coins {...props} />);
    });

    it('dispatches the `fetchBitcoin()` method received from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });

    it('dispatches the `fetchEthereum()` method received from props', () => {
      expect(mockFetchEthereum).toHaveBeenCalled();
    });

    describe('when there are valid bitcoin props', () => {
      beforeEach(() => {
        props = { balance: 10, bitcoin: [{ price_usd: '1000' }] };
        coins = shallow(<Coins {...props} />);
      });

      it('renders the correct bitcoin value to the screen', () => {
        expect(coins.find('.bitcoin-balance').text()).toEqual('Bitcoin: 0.01');
      });
    });

    describe('when there are valid ethereum props', () => {
      beforeEach(() => {
        props = {
          balance: 5,
          bitcoin: [{ price_usd: '1000' }],
          ethereum: [{ price_usd: '500' }]
        };
        coins = shallow(<Coins {...props} />);
      });

      it('renders the correct ethereum value to the screen', () => {
        expect(coins.find('.ethereum-balance').text()).toEqual(
          'Ethereum: 0.01'
        );
      });
    });
  });
});

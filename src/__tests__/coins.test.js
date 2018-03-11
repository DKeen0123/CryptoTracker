import React from 'react';
import { shallow, mount } from 'enzyme';
import { Coins } from '../components/Coins';

describe('Coins', () => {
  let props = { balance: 10, bitcoin: {} };
  let coins = shallow(<Coins {...props} />);

  it('renders correctly', () => {
    expect(coins).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchBitcoin = jest.fn();
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      coins = mount(<Coins {...props} />);
    });

    it('dispatches the `fetchBitcoin()` method received from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled();
    });
  });
});

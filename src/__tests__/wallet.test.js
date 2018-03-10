import React from 'react';
import { shallow } from 'enzyme';
import Wallet from '../components/wallet';

describe('Wallet', () => {
  const wallet = shallow(<Wallet />);

  it('renders correctly', () => {
    expect(wallet).toMatchSnapshot();
  });
});

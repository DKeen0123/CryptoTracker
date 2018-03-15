import React from 'react';
import { shallow } from 'enzyme';
import CryptoPicker from '../../components/CryptoPicker';

describe('CryptoPicker', () => {
  const cryptoPicker = shallow(<CryptoPicker />);
  it('renders correctly', () => {
    expect(cryptoPicker).toMatchSnapshot();
  });
});

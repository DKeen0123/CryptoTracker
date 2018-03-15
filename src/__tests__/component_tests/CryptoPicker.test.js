import React from 'react';
import { shallow, mount } from 'enzyme';
import { CryptoPicker } from '../../components/CryptoPicker';

describe('CryptoPicker', () => {
  let props = {};
  let cryptoPicker = shallow(<CryptoPicker />);

  it('renders correctly', () => {
    expect(cryptoPicker).toMatchSnapshot();
  });

  describe('when mounted', () => {
    const mockFetchCryptoNames = jest.fn();
    beforeEach(() => {
      props.fetchCryptoNames = mockFetchCryptoNames;
      cryptoPicker = mount(<CryptoPicker {...props} />);
    });

    it('dispatches the `fetchCryptoNames()` method received from props', () => {
      expect(mockFetchCryptoNames).toHaveBeenCalled();
    });
  });
});

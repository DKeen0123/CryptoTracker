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

  describe('when there are valid crypto props', () => {
    const mockFetchCryptoNames = jest.fn();
    beforeEach(() => {
      props = {
        crypto: [{ id: 'bitcoin' }, { id: 'ethereum' }],
        fetchCryptoNames: mockFetchCryptoNames
      };
      cryptoPicker = mount(<CryptoPicker {...props} />);
    });

    it('populates a drop down menu with the crypto names', () => {
      const spy = jest.spyOn(CryptoPicker.prototype, 'populateCryptos');
      cryptoPicker.instance().populateCryptos();
      expect(spy).toHaveBeenCalled();
    });
  });
});

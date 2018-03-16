import React from 'react';
import { shallow, mount } from 'enzyme';
import CryptoPicker from '../../components/CryptoPicker';

describe('CryptoPicker', () => {
  let props = {};
  let cryptoPicker = shallow(<CryptoPicker />);

  it('renders correctly', () => {
    expect(cryptoPicker).toMatchSnapshot();
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
      cryptoPicker = mount(<CryptoPicker {...props} />);
      expect(spy).toHaveBeenCalled();
    });
  });
});

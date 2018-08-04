import React from 'react';
import { shallow, mount } from 'enzyme';
import CryptoPicker from '../../components/CryptoPicker';

describe('CryptoPicker', () => {
  let props = {};
  let cryptoPicker = shallow(<CryptoPicker {...props} />);

  it('renders correctly', () => {
    expect(cryptoPicker).toMatchSnapshot();
  });

  describe('when there are valid crypto props', () => {
    const mockFetchCryptoNames = jest.fn();
    const mockAddCrypto = jest.fn();
    beforeEach(() => {
      props = {
        crypto: [{ id: 'bitcoin' }, { id: 'ethereum' }],
        fetchCryptoNames: mockFetchCryptoNames,
        addCrypto: mockAddCrypto
      };
      cryptoPicker = mount(<CryptoPicker {...props} />);
    });

    it('populates a drop down menu with the crypto names', () => {
      const spy = jest.spyOn(CryptoPicker.prototype, 'populateCryptos');
      cryptoPicker = mount(<CryptoPicker {...props} />);
      expect(spy).toHaveBeenCalled();
    });

    describe('onChange of the dropdown selected crypto', () => {
      it('fires the selectCrypto function prop', () => {
        const mockSelectCrypto = jest.fn();
        props = {selectCrypto: mockSelectCrypto};
        cryptoPicker = shallow(<CryptoPicker {...props} />);
        cryptoPicker.find('select').simulate('change');
        expect(mockSelectCrypto).toHaveBeenCalled();
      });
    });

    describe('passing props', () => {
      it('passes the addCrypto method down from props', () => {
        expect(cryptoPicker.find('AddButton').prop('addCrypto')).toEqual(
          cryptoPicker.prop('addCrypto')
        )
      })
    })
  });


});

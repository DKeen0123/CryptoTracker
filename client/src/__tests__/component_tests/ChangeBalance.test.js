import React from 'react';
import { shallow } from 'enzyme';
import ChangeBalance from '../../components/ChangeBalance';

describe('ChangeBalance', () => {
  const mockHandleUpdateBalance = jest.fn();
  const props = { changeBalance: mockHandleUpdateBalance };
  const changeBalance = shallow(<ChangeBalance {...props} />);

  it('renders correctly', () => {
    expect(changeBalance).toMatchSnapshot();
  });

  describe('when a user inputs something into .input-balance', () => {
    it('calls handleUpdateBalance()', () => {
      changeBalance.find('.input-balance').simulate('change');
      expect(mockHandleUpdateBalance).toHaveBeenCalled();
    });
  });
});

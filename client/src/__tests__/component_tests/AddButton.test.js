import React from 'react';
import { shallow } from 'enzyme';
import AddButton from '../../components/AddButton';

describe('AddButton', () => {
  let mockAddCryto = jest.fn();
  let props = { addCrypto: mockAddCryto };
  let addButton = shallow(<AddButton {...props} />);

  it('renders correctly', () => {
    expect(addButton).toMatchSnapshot();
  });

  describe('onClick', () => {
    it('fires the addCrypto() function', () => {
      addButton.find('button').simulate('click');
      expect(mockAddCryto).toHaveBeenCalled();
    })
  })
});
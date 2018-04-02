import React from 'react';
import { shallow } from 'enzyme';
import ChangeBalance from '../../components/ChangeBalance';

describe('ChangeBalance', () => {
  const changeBalance = shallow(<ChangeBalance />);

  it('renders correctly', () => {
    expect(changeBalance).toMatchSnapshot();
  });
});

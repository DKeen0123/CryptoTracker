import React from 'react';
import { shallow } from 'enzyme';
import Balance from '../../components/Balance';

describe('Balance', () => {
  let balance = shallow(<Balance />);

  it('renders correctly', () => {
    expect(balance).toMatchSnapshot();
  });
});

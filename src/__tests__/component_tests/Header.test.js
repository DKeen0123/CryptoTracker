import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Wrapper', () => {
  let header = shallow(<Header />);

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });
});

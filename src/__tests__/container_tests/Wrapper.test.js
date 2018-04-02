import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../containers/Wrapper';

describe('Wrapper', () => {
  let wrapper = shallow(<Wrapper />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('contains a Header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('renders a connected Wallet Component', () => {
    expect(wrapper.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('renders a connected Coins component', () => {
    expect(wrapper.find('Connect(Coins)').exists()).toBe(true);
  });
});

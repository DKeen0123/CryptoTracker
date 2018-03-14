import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('renders a connected Wallet Component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });

  it('renders a connected Coins component', () => {
    expect(app.find('Connect(Coins)').exists()).toBe(true);
  });
});

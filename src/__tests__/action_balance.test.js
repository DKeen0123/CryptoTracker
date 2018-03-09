import * as constants from '../actions/constants';
import * as actions from '../actions/action_balance';

it('creates an action to set the balance', () => {
  const balance = 0;

  const expectedAction = { type: constants.SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

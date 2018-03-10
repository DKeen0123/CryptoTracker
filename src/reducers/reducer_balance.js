import * as constants from '../actions/constants';

const balance = (state = 0, action) => {
  let balance;
  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      balance = state + action.deposit;
      break;
    default:
      balance = state;
  }
  return balance;
};

export default balance;

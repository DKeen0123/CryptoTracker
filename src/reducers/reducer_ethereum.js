import { FETCH_ETHEREUM } from '../actions/constants';

const ethereum = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ETHEREUM:
      return action.ethereum;
    default:
      return state;
  }
};

export default ethereum;

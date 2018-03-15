import { FETCH_CRYPTO_NAMES } from '../actions/constants';

const crypto = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_NAMES:
      return action.crypto;
    default:
      return state;
  }
};

export default crypto;

import { FETCH_CRYPTO_NAMES } from '../actions/constants';

const crypto = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CRYPTO_NAMES:
      return action.cryptos;
    default:
      return state;
  }
};

export default crypto;

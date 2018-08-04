import { FETCH_SELECTED_CRYPTO } from '../actions/constants';

const selectedCryptos = (state = [], action) => {
  switch (action.type) {
    case FETCH_SELECTED_CRYPTO:
      return [...state, action.selectedCrypto]
    default:
      return state;
  }
}

export default selectedCryptos;
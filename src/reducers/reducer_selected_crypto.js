import { FETCH_SELECTED_CRYPTO } from '../actions/constants';

const selectedCrypto = (state = null, action) => {
  switch (action.type) {
    case FETCH_SELECTED_CRYPTO:
      return action.selectedCrypto;
    default:
      return state
  }
}

export default selectedCrypto;
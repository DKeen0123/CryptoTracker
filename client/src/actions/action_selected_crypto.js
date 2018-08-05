import { FETCH_SELECTED_CRYPTO } from './constants';

const selectedCrypto = crypto => {
  return {
    type: FETCH_SELECTED_CRYPTO,
    selectedCrypto: crypto
  };
};

export default selectedCrypto;
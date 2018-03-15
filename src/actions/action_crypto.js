import { FETCH_CRYPTO_NAMES } from './constants';

export const fetchCryptoNames = () => {
  return dispatch => {
    return fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_CRYPTO_NAMES, cryptos: json }));
  };
};

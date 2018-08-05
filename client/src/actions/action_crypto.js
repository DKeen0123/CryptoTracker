import { FETCH_CRYPTO_NAMES } from './constants';

export const fetchCryptoNames = () => {
  return dispatch => {
    return fetch('https://api.coinmarketcap.com/v1/ticker/')
      .then(response => {
        return response.json();
      })
      .then(json => {
        return dispatch({ type: FETCH_CRYPTO_NAMES, cryptos: json });
      });
  };
};

import { FETCH_BITCOIN } from './constants';

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }));
  };
};

import { FETCH_ETHEREUM } from './constants';

export const fetchEthereum = () => {
  return dispatch => {
    return fetch('https://api.coinmarketcap.com/v1/ticker/ethereum/')
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_ETHEREUM, ethereum: json }));
  };
};

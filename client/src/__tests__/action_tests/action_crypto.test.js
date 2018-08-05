import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_CRYPTO_NAMES } from '../../actions/constants';
import { fetchCryptoNames } from '../../actions/action_crypto';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ cryptos: {} });
const mockResponse = { body: { id: 'bitcoin' } };

fetchMock.get('https://api.coinmarketcap.com/v1/ticker/', mockResponse);

it('creates an async action to fetch info on all cryptocurrencies', () => {
  const expectedActions = [
    { cryptos: mockResponse.body, type: FETCH_CRYPTO_NAMES }
  ];
  return store.dispatch(fetchCryptoNames()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

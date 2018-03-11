// https://api.coinmarketcap.com/v1/ticker/bitcoin/
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from '../actions/constants';
import { fetchBitcoin } from '../actions/action_bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { id: 'bitcoin' } };

fetchMock.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/', mockResponse);

it('creates an async action to fetch the bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];
  return store.dispatch(fetchBitcoin()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

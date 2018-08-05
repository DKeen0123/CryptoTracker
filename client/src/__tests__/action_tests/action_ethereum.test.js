import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_ETHEREUM } from '../../actions/constants';
import { fetchEthereum } from '../../actions/action_ethereum';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ ethereum: {} });

const mockResponse = { body: { id: 'ethereum' } };

fetchMock.get(
  'https://api.coinmarketcap.com/v1/ticker/ethereum/',
  mockResponse
);

it('creates an async action to fetch the ethereum data', () => {
  const expectedActions = [
    { ethereum: mockResponse.body, type: FETCH_ETHEREUM }
  ];

  return store.dispatch(fetchEthereum()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

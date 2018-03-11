import bitcoinReducer from '../reducers/reducer_bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('bitcoinReducer', () => {
  const bitcoinData = { id: 'bitcoin' };

  it('fetches and sets bitcoin data', () => {
    expect(
      bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })
    ).toEqual(bitcoinData);
  });
});

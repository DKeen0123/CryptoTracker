import cryptoReducer from '../../reducers/reducer_crypto';
import { FETCH_CRYPTO_NAMES } from '../../actions/constants';

describe('cryptoReducer', () => {
  const cryptoData = { id: 'bitcoin' };

  it('fetches and sets crypto data', () => {
    expect(
      cryptoReducer({}, { type: FETCH_CRYPTO_NAMES, crypto: cryptoData })
    ).toEqual(cryptoData);
  });
});

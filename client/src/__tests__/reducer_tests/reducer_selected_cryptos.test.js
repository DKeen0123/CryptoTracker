import selectedCryptosReducer from '../../reducers/reducer_selected_cryptos';
import { FETCH_SELECTED_CRYPTO } from '../../actions/constants';

describe('selectedCryptosReducer', () => {
  const selectedCrypto = 'Bitcoin';

  it('fetches and sets the selected crypto', () => {
    expect(
      selectedCryptosReducer([], { type: FETCH_SELECTED_CRYPTO, selectedCrypto })
    ).toEqual([selectedCrypto]);
  });
});

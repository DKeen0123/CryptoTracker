import selectedCryptoReducer from '../../reducers/reducer_selected_crypto';
import { FETCH_SELECTED_CRYPTO } from '../../actions/constants';

describe('selectedCryptoReducer', () => {
  const selectedCrypto = 'Bitcoin';

  it('fetches and sets the selected crypto', () => {
    expect(
      selectedCryptoReducer(null, { type: FETCH_SELECTED_CRYPTO, selectedCrypto })
    ).toEqual(selectedCrypto);
  });
});

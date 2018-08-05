import { FETCH_SELECTED_CRYPTO } from '../../actions/constants';
import selectedCrypto from '../../actions/action_selected_crypto';

it('creates an action that sends the selected crypto to the store', () => {
  const crypto = 'bitcoin'
  const expectedAction = { type: FETCH_SELECTED_CRYPTO, selectedCrypto: crypto};

  expect(selectedCrypto(crypto)).toEqual(expectedAction);
})
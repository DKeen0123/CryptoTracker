import ethereumReducer from '../../reducers/reducer_ethereum';
import { FETCH_ETHEREUM } from '../../actions/constants';

describe('ethereumReducer', () => {
  const ethereumData = { id: 'ethereum ' };

  it('fetches and sets ethereum data', () => {
    expect(
      ethereumReducer({}, { type: FETCH_ETHEREUM, ethereum: ethereumData })
    ).toEqual(ethereumData);
  });
});

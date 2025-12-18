import {NameSpace, SortingOptionVariants} from '../../const.ts';
import {getError, getSortingOption} from './selectors.ts';


describe('SettingProcess selectors', () => {
  const state = {
    [NameSpace.Settings]: {
      sortingOption: SortingOptionVariants.PRICE_HIGH_TO_LOW,
      error: null,
    },
  };

  it('should return sorting option from state', () => {
    const {sortingOption} = state[NameSpace.Settings];
    const result = getSortingOption(state);

    expect(result).toBe(sortingOption);
  });

  it('should return error from state', () => {
    const {error} = state[NameSpace.Settings];
    const result = getError(state);

    expect(result).toBe(error);
  });
});

import {State} from '../../types/state.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {NameSpace} from '../../const.ts';


export const getSortingOption = (state: Pick<State, NameSpace.Settings>): SortingOption => state[NameSpace.Settings].sortingOption;


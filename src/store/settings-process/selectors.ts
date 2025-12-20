import {State} from '../../types/state.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {NameSpace} from '../../const.ts';
import {ErrorT} from '../../types/error-t.ts';


export const getSortingOption = (state: Pick<State, NameSpace.Settings>): SortingOption => state[NameSpace.Settings].sortingOption;

export const getError = (state: Pick<State, NameSpace.Settings>): ErrorT => state[NameSpace.Settings].error;


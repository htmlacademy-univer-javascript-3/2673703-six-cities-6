import {State} from '../../types/state.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {NameSpace} from '../../const.ts';
import {ErrorT} from '../../types/errorT.ts';


export const getSortingOption = (state: State): SortingOption => state[NameSpace.Settings].sortingOption;

export const getError = (state: State): ErrorT => state[NameSpace.Settings].error;

export const getLoadingStatus = (state: State) => state[NameSpace.Settings].loadingStatus;

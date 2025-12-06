import {NameSpace} from '../../const.ts';
import {State} from '../../types/state.ts';


export const getLoadingStatus = (state: State) => state[NameSpace.Loading].loadingStatus;

import {SortingOption} from '../../types/sorting-option.ts';
import {ErrorT} from '../../types/errorT.ts';


export type SettingsProcessInitial = {
  sortingOption: SortingOption;
  error: ErrorT;
  loadingStatus: {
    offers: boolean;
    current: boolean;
    comments: boolean;
    nearby: boolean;
  };
};

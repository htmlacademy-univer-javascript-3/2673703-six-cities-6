import {SortingOption} from '../../types/sorting-option.ts';


export type SettingsProcessInitial = {
  sortingOption: SortingOption;
  error: string | null;
  loadingStatus: {
    offers: boolean;
    current: boolean;
    comments: boolean;
    nearby: boolean;
  };
};

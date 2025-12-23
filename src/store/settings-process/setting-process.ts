import {SettingsProcessInitial} from './settings-process.t.ts';
import {NameSpace, SortingOptionVariants} from '../../const.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortingOption} from '../../types/sorting-option.ts';


const initialState: SettingsProcessInitial = {
  sortingOption: SortingOptionVariants.POPULAR,
};

export const settingProcess = createSlice({
  name: NameSpace.Settings,
  initialState,
  reducers: {
    changeSorting(state, action: PayloadAction<SortingOption>) {
      state.sortingOption = action.payload;
    },
  },
});

export const {changeSorting} = settingProcess.actions;

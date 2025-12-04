import {SettingsProcessInitial} from './settings-process.t.ts';
import {NameSpace, SortingOptionVariants} from '../../const.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SortingOption} from '../../types/sorting-option.ts';
import {fetchComments, fetchNearby, fetchOffer, fetchOffers} from '../api-actions.ts';


const initialState: SettingsProcessInitial = {
  sortingOption: SortingOptionVariants.POPULAR,
  error: null,
  loadingStatus: {
    offers: false,
    current: false,
    comments: false,
    nearby: false,
  },
};

export const settingProcess = createSlice({
  name: NameSpace.Settings,
  initialState,
  reducers: {
    changeSorting(state, action: PayloadAction<SortingOption>) {
      state.sortingOption = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.loadingStatus.offers = true;
      })
      .addCase(fetchOffers.fulfilled, (state) => {
        state.loadingStatus.offers = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.loadingStatus.offers = false;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.loadingStatus.current = true;
      })
      .addCase(fetchOffer.fulfilled, (state) => {
        state.loadingStatus.current = false;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.loadingStatus.current = false;
      })
      .addCase(fetchComments.pending, (state) => {
        state.loadingStatus.comments = true;
      })
      .addCase(fetchComments.fulfilled, (state) => {
        state.loadingStatus.comments = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.loadingStatus.comments = false;
      })
      .addCase(fetchNearby.pending, (state) => {
        state.loadingStatus.nearby = true;
      })
      .addCase(fetchNearby.fulfilled, (state) => {
        state.loadingStatus.nearby = false;
      })
      .addCase(fetchNearby.rejected, (state) => {
        state.loadingStatus.nearby = false;
      });
  }
});

export const {setError, changeSorting} = settingProcess.actions;

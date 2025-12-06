import {LoadingProcessInitial} from './loading-process.t.ts';
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {fetchComments, fetchNearby, fetchOffer, fetchOffers} from '../api-actions.ts';


const initialState: LoadingProcessInitial = {
  loadingStatus: {
    offers: false,
    current: false,
    comments: false,
    nearby: false,
  },
};

export const loadingProcess = createSlice({
  name: NameSpace.Loading,
  initialState,
  reducers: {},
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

import {InitialStateProps} from './store-types/initial-state.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity, changeCommentLoadingStatus, changeCurrentOfferLoadingStatus,
  changeOffersLoadingStatus,
  changeSorting, fillComments,
  fillOffer, loadCurrentOffer,
  loadOffers,
  requireAuthorization,
  setError, setUserEmail
} from './action.ts';
import {getCities} from '../mocks/cities.ts';
import {AuthorizationStatus, SortingOptionVariants} from '../const.ts';

const initialState: InitialStateProps = {
  city: getCities().find((city) => city.name === 'Paris')!,
  offers: [],
  currentOffer: null,
  currentComments: [],
  sortingOption: SortingOptionVariants.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknow,
  error: null,
  isOffersLoading: false,
  isCurrentLoading: false,
  isCommentsLoading: false,
  userEmail: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city.name = action.payload.name;
      state.city.location = action.payload.location;
    })
    .addCase(fillOffer, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.sortingOption = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(changeOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(changeCurrentOfferLoadingStatus, (state, action) => {
      state.isCurrentLoading = action.payload;
    })
    .addCase(fillComments, (state, action) => {
      state.currentComments = action.payload;
    })
    .addCase(changeCommentLoadingStatus, (state, action) => {
      state.isCommentsLoading = action.payload;
    });
});



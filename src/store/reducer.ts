import {InitialStateProps} from './store-types/initial-state.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeLoadingStatus,
  changeSorting,
  fillOffer,
  loadOffers,
  requireAuthorization,
  setError, setUserEmail
} from './action.ts';
import {getCities} from '../mocks/cities.ts';
import {AuthorizationStatus, SortingOptionVariants} from '../const.ts';

const initialState: InitialStateProps = {
  city: getCities().find((city) => city.name === 'Paris')!,
  offers: [],
  sortingOption: SortingOptionVariants.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknow,
  error: null,
  isOffersLoading: false,
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
    .addCase(changeLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});



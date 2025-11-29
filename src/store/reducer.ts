import {InitialStateProps} from './store-types/initial-state.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity, changeCommentLoadingStatus, changeCurrentOfferLoadingStatus, changeNearbyLoadingStatus,
  changeOffersLoadingStatus,
  changeSorting, fillComments, fillFavorites, fillNearby,
  fillOffer, loadCurrentOffer,
  loadOffers,
  requireAuthorization, resetUser,
  setError, setUserAvatar, setUserEmail
} from './action.ts';
import {getCities} from '../mocks/cities.ts';
import {AuthorizationStatus, SortingOptionVariants} from '../const.ts';

const initialState: InitialStateProps = {
  city: getCities().find((city) => city.name === 'Paris')!,
  offers: [],
  current: {
    offer: null,
    comments: [],
    nearby: [],
  },
  sortingOption: SortingOptionVariants.POPULAR,
  authorizationStatus: AuthorizationStatus.Unknow,
  error: null,
  loadingStatus: {
    offers: false,
    current: false,
    comments: false,
    nearby: false,
  },
  user: {
    email: null,
    avatar: null,
    favorites: [],
  },
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
      state.loadingStatus.offers = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.user.email = action.payload;
    })
    .addCase(setUserAvatar, (state, action) => {
      state.user.avatar = action.payload;
    })
    .addCase(loadCurrentOffer, (state, action) => {
      state.current.offer = action.payload;
    })
    .addCase(changeCurrentOfferLoadingStatus, (state, action) => {
      state.loadingStatus.current = action.payload;
    })
    .addCase(fillComments, (state, action) => {
      state.current.comments = action.payload;
    })
    .addCase(changeCommentLoadingStatus, (state, action) => {
      state.loadingStatus.comments = action.payload;
    })
    .addCase(fillNearby, (state, action) => {
      state.current.nearby = action.payload;
    })
    .addCase(changeNearbyLoadingStatus, (state, action) => {
      state.loadingStatus.nearby = action.payload;
    })
    .addCase(fillFavorites, (state, action) => {
      state.user.favorites = action.payload;
    })
    .addCase(resetUser, (state) => {
      state.user = {
        email: null,
        avatar: null,
        favorites: [],
      };
    });
});



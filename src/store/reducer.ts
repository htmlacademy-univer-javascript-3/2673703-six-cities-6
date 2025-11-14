import {InitialStateProps} from './store-types/initial-state.ts';
import {getOffers} from '../mocks/offers.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSorting, fillOffer} from './action.ts';
import {getCities} from '../mocks/cities.ts';
import {SortingOptionVariants} from '../const.ts';

const initialState: InitialStateProps = {
  city: getCities().filter((city) => city.name === 'Paris')[0],
  offers: getOffers().filter((offer) => offer.city.name === 'Paris'),
  sortingOption: SortingOptionVariants.POPULAR,
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
    });
});



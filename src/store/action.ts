import {createAction} from '@reduxjs/toolkit';
import {Action} from '../const.ts';
import {CityProps} from '../types/city.ts';
import {OfferProps} from '../types/offer.ts';
import {SortingOption} from '../types/sorting-option.ts';


export const changeCity = createAction(Action.CHANGE_CITY, (city: CityProps) => (
  {
    payload: city,
  }
));
export const fillOffer = createAction(Action.FILL_OFFER, (offers: OfferProps[]) => (
  {
    payload: offers
  }
));
export const changeSorting = createAction(Action.CHANGE_SORTING, (sortingOption: SortingOption) => (
  {
    payload: sortingOption
  }
));

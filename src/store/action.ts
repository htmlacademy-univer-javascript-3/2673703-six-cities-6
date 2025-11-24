import {createAction} from '@reduxjs/toolkit';
import {Action, AppRoute, AuthorizationStatus} from '../const.ts';
import {CityProps} from '../types/city.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {CitiesCardProps} from '../types/cities-card.ts';
import {OfferProps} from '../types/offer.ts';
import {CommentProps} from '../types/comment.ts';


export const changeCity = createAction(Action.CHANGE_CITY, (city: CityProps) => (
  {
    payload: city,
  }
));

export const fillOffer = createAction(Action.FILL_OFFER, (offers: CitiesCardProps[]) => (
  {
    payload: offers
  }
));

export const changeSorting = createAction(Action.CHANGE_SORTING, (sortingOption: SortingOption) => (
  {
    payload: sortingOption
  }
));

export const loadOffers = createAction<CitiesCardProps[]>(Action.LOAD_OFFERS);

export const requireAuthorization = createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION);

export const setError = createAction<string | null>(Action.SET_ERROR);

export const changeOffersLoadingStatus = createAction<boolean>(Action.CHANGE_LOADING_STATUS);

export const setUserEmail = createAction<string | null>(Action.SET_USER_EMAIL);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT);

export const loadCurrentOffer = createAction<OfferProps | null >(Action.LOAD_CURRENT_OFFER);

export const changeCurrentOfferLoadingStatus = createAction<boolean>(Action.CHANGE_CURRENT_LOADING_STATUS);

export const fillComments = createAction<CommentProps[]>(Action.FILL_COMMENTS);

export const changeCommentLoadingStatus = createAction<boolean>(Action.CHANGE_COMMENT_LOADING_STATUS);

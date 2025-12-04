import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {CitiesCardProps} from '../types/cities-card.ts';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const.ts';
import {OfferProps} from '../types/offer.ts';
import {AppDispatch, State} from '../types/state.ts';
import {
  redirectToRoute,
} from './action.ts';
import {AuthData} from '../types/auth-data.ts';
import {dropToken, setToken} from '../services/token.ts';
import {UserProps} from '../types/user.ts';
import {store} from './index.ts';
import {CommentProps} from '../types/comment.ts';
import {CommentData} from '../types/comment-data.ts';
import {getFavoriteStatus} from '../utils/get-favorite-status.ts';
import {fillFavorites} from './user-process/user-process.ts';
import {setError} from './settings-process/setting-process.ts';
import {fillNearby, fillOffers, loadCurrentOffer} from './offers-process/offers-process.ts';

type Extra = {
  extra: AxiosInstance;
  dispatch: AppDispatch;
};

export const fetchOffers = createAsyncThunk<CitiesCardProps[], undefined, Extra>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CitiesCardProps[]>(APIRoute.Offers);

    return data;
  }
);


export const fetchOffer = createAsyncThunk<OfferProps | null, OfferProps['id'], Extra>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<OfferProps>(`${APIRoute.Offers}/${offerId}`);

      return data;
    } catch (err) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      throw err;
    }
  }
);

export const fetchComments = createAsyncThunk<CommentProps[], OfferProps['id'], Extra>(
  'data/fetchComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CommentProps[]>(`${APIRoute.Comments}/${offerId}`);

    return data;

  }
);

export const fetchNearby = createAsyncThunk<CitiesCardProps[], OfferProps['id'], Extra>(
  'data/fetchNearby',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<CitiesCardProps[]>(`${APIRoute.Offers}/${offerId}/nearby`);

    return data;
  }

);

export const sendComment = createAsyncThunk<CommentProps, CommentData, Extra>(
  'data/sendComment',
  async ({ id: offerId, comment, rating }, {extra: api}) => {
    const {data} = await api.post<CommentProps>(`${APIRoute.Comments}/${offerId}`, {comment, rating: +rating});

    return data;

  }
);

export const checkAuthAction = createAsyncThunk<UserProps, undefined, Extra>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserProps>(APIRoute.Login);

    return data;
  }
);

export const loginAction = createAsyncThunk<UserProps, AuthData, Extra>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserProps>(APIRoute.Login, {email, password});
    setToken(data.token);

    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, Extra>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete<UserProps>(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Main));
  }
);


export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

export const fetchFavorites = createAsyncThunk<CitiesCardProps[], undefined, Extra>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<CitiesCardProps[]>(APIRoute.Favorite);

    return data;
  }
);


export const changeFavorites = createAsyncThunk<void, OfferProps['id'], Extra>(
  'data/changeFavorites',
  async (id, {dispatch, extra: api, getState}) => {
    const state = getState() as State;

    const authorizationStatus = state.USER.authorizationStatus;

    if (authorizationStatus !== AuthorizationStatus.Auth) {
      dispatch(redirectToRoute(AppRoute.Login));
      dispatch(setError('Not authorized'));
      return;
    }

    const status = getFavoriteStatus(id, state.USER.user.favorites);

    const {data} = await api.post<OfferProps>(`${APIRoute.Favorite}/${id}/${status}`);


    const currentFavorites = state.USER.user.favorites;

    const updatedFavorites =
      status === 1
        ? [...currentFavorites, data]
        : currentFavorites.filter((offer) => offer.id !== id);

    dispatch(fillFavorites(updatedFavorites));

    const updatedOffers = state.OFFERS.offers.map((offer) =>
      offer.id === data.id
        ? { ...offer, isFavorite: data.isFavorite }
        : offer
    );

    dispatch(fillOffers(updatedOffers));

    const updatedNearby = state.OFFERS.current.nearby.map((offer) =>
      offer.id === data.id
        ? { ...offer, isFavorite: data.isFavorite }
        : offer
    );

    dispatch(fillNearby(updatedNearby));

    const currentOffer = state.OFFERS.current.offer;

    if (currentOffer && currentOffer.id === data.id) {
      const updatedCurrentOffer = { ...currentOffer, isFavorite: data.isFavorite };
      dispatch(loadCurrentOffer(updatedCurrentOffer));
    }
  }
);


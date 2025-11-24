import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {CitiesCardProps} from '../types/cities-card.ts';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const.ts';
import {OfferProps} from '../types/offer.ts';
import {AppDispatch} from '../types/state.ts';
import {
  changeLoadingStatus,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setError,
  setUserEmail
} from './action.ts';
import {AuthData} from '../types/auth-data.ts';
import {dropToken, setToken} from '../services/token.ts';
import {UserProps} from '../types/user.ts';
import {store} from './index.ts';


type Extra = {
  extra: AxiosInstance;
  dispatch: AppDispatch;
};

export const fetchOffers = createAsyncThunk<void, undefined, Extra>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeLoadingStatus(true));
    const {data} = await api.get<CitiesCardProps[]>(APIRoute.Offers);
    dispatch(changeLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);


export const fetchOffer = createAsyncThunk<OfferProps, OfferProps['id'], Extra>(
  'data/fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferProps>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, Extra>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, Extra>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserProps>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserEmail(email));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, Extra>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete<UserProps>(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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

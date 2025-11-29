import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {CitiesCardProps} from '../types/cities-card.ts';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const.ts';
import {OfferProps} from '../types/offer.ts';
import {AppDispatch, State} from '../types/state.ts';
import {
  changeCommentLoadingStatus,
  changeCurrentOfferLoadingStatus, changeNearbyLoadingStatus,
  changeOffersLoadingStatus, fillComments, fillNearby,
  loadCurrentOffer,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setError, setUserAvatar,
  setUserEmail
} from './action.ts';
import {AuthData} from '../types/auth-data.ts';
import {dropToken, setToken} from '../services/token.ts';
import {UserProps} from '../types/user.ts';
import {store} from './index.ts';
import {CommentProps} from '../types/comment.ts';
import {CommentData} from '../types/comment-data.ts';

type Extra = {
  extra: AxiosInstance;
  dispatch: AppDispatch;
};

export const fetchOffers = createAsyncThunk<void, undefined, Extra>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(changeOffersLoadingStatus(true));
    const {data} = await api.get<CitiesCardProps[]>(APIRoute.Offers);
    dispatch(changeOffersLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);


export const fetchOffer = createAsyncThunk<void, OfferProps['id'], Extra>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(changeCurrentOfferLoadingStatus(true));
    try{
      const {data} = await api.get<OfferProps>(`${APIRoute.Offers}/${offerId}`);
      dispatch(loadCurrentOffer(data));
    } catch (err) {
      dispatch(redirectToRoute(AppRoute.NotFound));
      dispatch(loadCurrentOffer(null));
    }
    dispatch(changeCurrentOfferLoadingStatus(false));
  }
);

export const fetchComments = createAsyncThunk<void, OfferProps['id'], Extra>(
  'data/fetchComments',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(changeCommentLoadingStatus(true));
    const {data} = await api.get<CommentProps[]>(`${APIRoute.Comments}/${offerId}`);

    dispatch(fillComments(data));
    dispatch(changeCommentLoadingStatus(false));

  }
);

export const fetchNearby = createAsyncThunk<void, OfferProps['id'], Extra>(
  'data/fetchNearby',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(changeNearbyLoadingStatus(true));
    const {data} = await api.get<CitiesCardProps[]>(`${APIRoute.Offers}/${offerId}/nearby`);

    dispatch(fillNearby(data));
    dispatch(changeNearbyLoadingStatus(false));
  }

);

export const sendComment = createAsyncThunk<void, CommentData, Extra>(
  'data/sendComment',
  async ({ id: offerId, comment, rating }, {dispatch, extra: api, getState}) => {
    const {data} = await api.post<CommentProps>(`${APIRoute.Comments}/${offerId}`, {comment, rating: +rating});

    const state = getState() as State;
    const currentComments = state.current.comments;


    dispatch(fillComments([...currentComments, data]));

  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, Extra>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserProps>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserEmail(data.email));
      dispatch(setUserAvatar(data.avatarUrl));
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



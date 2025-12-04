import {UserProcessInitial} from './user-process.t.ts';
import {AuthorizationStatus, NameSpace} from '../../const.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {checkAuthAction, fetchFavorites, loginAction, logoutAction} from '../api-actions.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';


const initialState: UserProcessInitial = {
  authorizationStatus: AuthorizationStatus.Unknow,
  user: {
    email: null,
    avatar: null,
    favorites: [],
  },
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    resetUser(state) {
      state.user = {
        email: null,
        avatar: null,
        favorites: [],
      };
    },
    fillFavorites(state, action: PayloadAction<CitiesCardProps[]>) {
      state.user.favorites = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user.email = action.payload.email;
        state.user.avatar = action.payload.avatarUrl;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user.email = action.payload.email;
        state.user.avatar = action.payload.avatarUrl;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.user = {
          email: null,
          avatar: null,
          favorites: [],
        };
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.user.favorites = action.payload;
      });
  }
});

export const {fillFavorites} = userProcess.actions;

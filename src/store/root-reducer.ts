import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const.ts';
import {userProcess} from './user-process/user-process.ts';
import {offerProcess} from './offers-process/offers-process.ts';
import {settingProcess} from './settings-process/setting-process.ts';
import {loadingProcess} from './loading-process/loading-process.ts';


export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offerProcess.reducer,
  [NameSpace.Loading]: loadingProcess.reducer,
  [NameSpace.Settings]: settingProcess.reducer,
});

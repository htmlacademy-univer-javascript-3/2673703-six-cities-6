import {createAction} from '@reduxjs/toolkit';
import {Action, AppRoute} from '../const.ts';


export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT);

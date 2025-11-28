import {reducer} from '../reducer.ts';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {Action} from '../../const.ts';
import browserHistory from '../../browser-history.ts';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === Action.REDIRECT) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

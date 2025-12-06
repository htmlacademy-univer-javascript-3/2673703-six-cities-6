import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {Action} from '../../const.ts';
import browserHistory from '../../browser-history.ts';
import {rootReducer} from '../root-reducer.ts';

type Reducer = ReturnType<typeof rootReducer>;

export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === Action.REDIRECT) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };

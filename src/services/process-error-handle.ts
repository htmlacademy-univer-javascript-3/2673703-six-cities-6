import {store} from '../store';
import {clearErrorAction} from '../store/api-actions.ts';
import {setError} from '../store/settings-process/setting-process.ts';


export const processErrorHandle = (message: string) => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};

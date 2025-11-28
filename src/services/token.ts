import {AUTH_TOKEN_KEY_NAME} from '../const.ts';
import {Token} from '../types/token.ts';


export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const setToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};

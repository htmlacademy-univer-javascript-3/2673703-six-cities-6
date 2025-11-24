
export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/notFound',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOW'
}

export const [MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH] = [50, 1945];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';


export const Action = {
  CHANGE_CITY: 'CHANGE_CITY',
  FILL_OFFER: 'FILL_OFFER',
  CHANGE_SORTING: 'CHANGE_SORTING',
  LOAD_OFFERS: 'LOAD_OFFERS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
  SET_ERROR: 'SET_ERROR',
  CHANGE_LOADING_STATUS: 'CHANGE_LOADING_STATUS',
  CHANGE_CURRENT_LOADING_STATUS: 'CHANGE_CURRENT_LOADING_STATUS',
  SET_USER_EMAIL: 'SET_USER_EMAIL',
  REDIRECT: 'REDIRECT',
  LOAD_CURRENT_OFFER: 'LOAD_CURRENT_OFFER',
  FILL_COMMENTS: 'FILL_COMMENTS',
  CHANGE_COMMENT_LOADING_STATUS: 'CHANGE_COMMENT_LOADING_STATUS',
  LOAD_COMMENTS: 'LOAD_COMMENTS',
} as const;

export const SortingOptionVariants = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;


export const BACKEND_URL = String(import.meta.env.VITE_BACKEND_URL);
export const REQUEST_TIMEOUT = Number(import.meta.env.VITE_REQUEST_TIMEOUT);

export const TIMEOUT_SHOW_ERROR = Number(import.meta.env.VITE_TIMEOUT_SHOW_ERROR);

export const AUTH_TOKEN_KEY_NAME = String(import.meta.env.VITE_AUTH_TOKEN_KEY_NAME);

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}



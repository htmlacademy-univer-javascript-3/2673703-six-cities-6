export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer'
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
} as const;

export const SortingOptionVariants = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED_FIRST: 'Top rated first',
} as const;

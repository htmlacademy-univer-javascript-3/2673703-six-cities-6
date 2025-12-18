import {createAPI} from '../services/api.ts';
import {ThunkDispatch} from '@reduxjs/toolkit';
import {State} from '../types/state.ts';
import {Action} from 'redux';
import {CardType, CitiesCardProps} from '../types/cities-card.ts';
import {faker} from '@faker-js/faker';
import {LocationProps} from '../types/location.ts';
import {CityProps} from '../types/city.ts';
import {AuthorizationStatus, NameSpace, SortingOptionVariants} from '../const.ts';
import {getCities} from '../mocks/cities.ts';


export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

const CARD_TYPES: CardType[] = [CardType.Apartment, CardType.House, CardType.Room];

const makeFakeLocation = (): LocationProps => ({
  latitude: faker.location.latitude(),
  longitude: faker.location.longitude(),
  zoom: faker.number.int({ min: 8, max: 16 }),
});

const makeFakeCity = (): CityProps => ({
  name: 'Paris',
  location: makeFakeLocation(),
});

export const makeFakeOffer = (): CitiesCardProps => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  type: faker.helpers.arrayElement(CARD_TYPES),
  price: faker.number.int({ min: 50, max: 500 }),
  city: makeFakeCity(),
  previewImage: faker.image.url(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.number.float({min: 1, max: 5,}),
});

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    user: {
      email: null,
      avatar: null,
    },
  },
  [NameSpace.Offers]: {
    city: getCities().find((city) => city.name === 'Paris')!,
    offers: [],
    favorites: [],
    current: {
      offer: null,
      comments: [],
      nearby: [],
    },
  },
  [NameSpace.Loading]: {
    loadingStatus: {
      offers: false,
      current: false,
      comments: false,
      nearby: false,
    },
  },
  [NameSpace.Settings]: {
    sortingOption: SortingOptionVariants.POPULAR,
    error: null,
  },
  ...initialState ?? {},
});

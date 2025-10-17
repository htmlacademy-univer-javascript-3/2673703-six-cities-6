import {LocationProps} from './location.ts';
import {CityProps} from './city.ts';

export enum CardType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
}

export type CitiesCardProps = {
  id: string;
  title: string;
  type: CardType;
  price: number;
  city: CityProps;
  previewImage: string;
  location: LocationProps;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

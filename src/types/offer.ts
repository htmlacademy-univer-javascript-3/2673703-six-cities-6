import {CitiesCardProps} from './cities-card.ts';
import {UserProps} from './user.ts';


export type OfferProps = CitiesCardProps & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserProps;
  images: string[];
  maxAdults: number;
}

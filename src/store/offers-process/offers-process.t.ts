import {CityProps} from '../../types/city.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {OfferProps} from '../../types/offer.ts';
import {CommentProps} from '../../types/comment.ts';


export type OffersProcessInitial = {
  city: CityProps;
  offers: CitiesCardProps[];
  current: {
    offer: OfferProps | null;
    comments: CommentProps[];
    nearby: CitiesCardProps[];
  };
}

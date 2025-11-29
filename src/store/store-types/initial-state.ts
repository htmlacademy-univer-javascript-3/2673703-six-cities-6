import {CityProps} from '../../types/city.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {AuthorizationStatus} from '../../const.ts';
import {OfferProps} from '../../types/offer.ts';
import {CommentProps} from '../../types/comment.ts';

export type InitialStateProps = {
  city: CityProps;
  offers: CitiesCardProps[];
  current: {
    offer: OfferProps | null;
    comments: CommentProps[];
    nearby: CitiesCardProps[];
  };
  sortingOption: SortingOption;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  loadingStatus: {
    offers: boolean;
    current: boolean;
    comments: boolean;
    nearby: boolean;
  };
  user: {
    email: string | null;
    avatar: string | null;
    favorites: CitiesCardProps[];
  };
}

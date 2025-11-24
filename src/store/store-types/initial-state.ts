import {CityProps} from '../../types/city.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {AuthorizationStatus} from '../../const.ts';
import {OfferProps} from '../../types/offer.ts';
import {CommentProps} from '../../types/comment.ts';

export type InitialStateProps = {
  city: CityProps;
  offers: CitiesCardProps[];
  currentOffer: OfferProps | null;
  currentComments: CommentProps[];
  sortingOption: SortingOption;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersLoading: boolean;
  isCurrentLoading: boolean;
  isCommentsLoading: boolean;
  userEmail: string | null;
}

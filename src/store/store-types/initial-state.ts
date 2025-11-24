import {CityProps} from '../../types/city.ts';
import {SortingOption} from '../../types/sorting-option.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {AuthorizationStatus} from '../../const.ts';

export type InitialStateProps = {
  city: CityProps;
  offers: CitiesCardProps[];
  sortingOption: SortingOption;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersLoading: boolean;
  userEmail: string | null;
}

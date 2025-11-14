import {CityProps} from '../../types/city.ts';
import {OfferProps} from '../../types/offer.ts';
import {SortingOption} from '../../types/sorting-option.ts';

export type InitialStateProps = {
  city: CityProps;
  offers: OfferProps[];
  sortingOption: SortingOption;
}

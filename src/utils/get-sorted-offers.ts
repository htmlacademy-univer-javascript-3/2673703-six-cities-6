import {OfferProps} from '../types/offer.ts';
import {SortingOption} from '../types/sorting-option.ts';
import {SortingOptionVariants} from '../const.ts';


export const getSortedOffers = (offers: OfferProps[], sortingOption: SortingOption) => {
  switch (sortingOption) {
    case (SortingOptionVariants.POPULAR): {
      return offers;
    }
    case (SortingOptionVariants.PRICE_LOW_TO_HIGH): {
      return [...offers].sort((a, b) => a.price - b.price);
    }
    case (SortingOptionVariants.PRICE_HIGH_TO_LOW): {
      return [...offers].sort((a, b) => b.price - a.price);
    }
    case (SortingOptionVariants.TOP_RATED_FIRST): {
      return [...offers].sort((a, b) => b.rating - a.rating);
    }
    default: {
      return offers;
    }


  }
};

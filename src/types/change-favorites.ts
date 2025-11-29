import {OfferProps} from './offer.ts';


export type ChangeFavorites = {
  offerId: OfferProps['id'];
  status: 1 | 0;
}

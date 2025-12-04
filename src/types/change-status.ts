import {OfferProps} from './offer.ts';

export type ChangeStatus = {
  offer: OfferProps;
  status: 1 | 0;
}

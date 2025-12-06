import {OfferProps} from '../types/offer.ts';
import {CitiesCardProps} from '../types/cities-card.ts';
import {ChangeFavorites} from '../types/change-favorites.ts';


export function getFavoriteStatus(offerId: OfferProps['id'], currentFavorites: CitiesCardProps[]) {
  const status: ChangeFavorites['status'] = currentFavorites.find((offer) => offer.id === offerId) !== undefined
    ? 0
    : 1;

  return status;
}

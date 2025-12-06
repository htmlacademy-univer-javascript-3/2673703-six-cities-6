import {changeFavorites} from '../store/api-actions.ts';
import {useAppDispatch} from './index.ts';
import {OfferProps} from '../types/offer.ts';

export function useChangeFavorite() {
  const dispatch = useAppDispatch();

  return (offerId: OfferProps['id']) => {
    dispatch(changeFavorites(offerId));
  };
}

import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {useChangeFavorite} from '../../hooks/use-change-favorite.ts';
import React, {memo, useCallback} from 'react';

type FavoriteCardProps = {
  offer: CitiesCardProps;
}

function FavoriteCard({offer}: FavoriteCardProps) {
  const {id} = offer;

  const changeFavorite = useChangeFavorite();

  const handleFavoriteClick = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    evt.preventDefault();
    changeFavorite(id);
  }, [changeFavorite, id]);
  return(
    <article className="favorites__card place-card">
      {
        offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button place-card__bookmark-button--active button"
              type="button"
              onClick={handleFavoriteClick}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: '100%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {offer.title}
          </h2>
          <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
        </Link>
      </div>
    </article>
  );
}

const MemoFavoriteCard = memo(FavoriteCard);

export default MemoFavoriteCard;

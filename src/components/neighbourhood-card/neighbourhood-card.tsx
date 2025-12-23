import {CitiesCardProps} from '../../types/cities-card.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {useChangeFavorite} from '../../hooks/use-change-favorite.ts';
import React, {memo, useCallback} from 'react';


type NeighbourhoodCardProps = {
  offer: CitiesCardProps;
}

function NeighbourhoodCard({offer}: NeighbourhoodCardProps) {
  const {id} = offer;

  const changeFavorite = useChangeFavorite();


  const handleFavoriteClick = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    evt.preventDefault();
    changeFavorite(id);
  }, [changeFavorite, id]);

  return (
    <Link to={`${AppRoute.Offer}/${offer.id}`}>
      <article className="near-places__card place-card">
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
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
              <span style={{width: `${offer.rating * 100 / 5}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {offer.title}
          </h2>
          <p className="place-card__type">{offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}</p>
        </div>
      </article>
    </Link>
  );
}

const MemoNeighbourhoodCard = memo(NeighbourhoodCard);

export default MemoNeighbourhoodCard;

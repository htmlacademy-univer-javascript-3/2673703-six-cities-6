import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {useChangeFavorite} from '../../hooks/use-change-favorite.ts';
import React, {memo, useCallback} from 'react';

type CitesCardComponentProps = {
  offer: CitiesCardProps;
  setChosenId: (id: CitiesCardProps['id'] | null) => void;
}

function CitesCard({offer, setChosenId}: CitesCardComponentProps) {
  const {isPremium, isFavorite, previewImage, price, title, type, id} = offer;

  const handleMouseEnter = useCallback(() => setChosenId(id), [setChosenId, id]);
  const handleMouseLeave = useCallback(() => setChosenId(null), [setChosenId]);


  const changeFavorite = useChangeFavorite();

  const handleFavoriteClick = useCallback((evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    evt.preventDefault();
    changeFavorite(id);
  }, [changeFavorite, id]);

  return (
    <Link to={`${AppRoute.Offer}/${id}`}>
      <article className="cities__card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {
          isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <img loading='lazy' className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`}
              type="button"
              onClick={handleFavoriteClick}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">{isFavorite}</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${offer.rating * 100 / 5}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {title}
          </h2>
          <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
        </div>
      </article>
    </Link>
  );
}

const MemoCitesCard = memo(CitesCard);

export default MemoCitesCard;


import {OfferProps} from '../../types/offer.ts';
import {useParams} from 'react-router-dom';
import CommentsList from '../../components/comments-list/comments-list.tsx';
import {useEffect, useState} from 'react';
import Map from '../../components/map/map.tsx';
import NeighbourhoodList from '../../components/neighbourhood-list/neighbourhood-list.tsx';
import Header from '../../components/header/header.tsx';
import {fetchComments, fetchNearby, fetchOffer} from '../../store/api-actions.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fillComments, fillNearby, loadCurrentOffer} from '../../store/action.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import {useChangeFavorite} from '../../hooks/use-change-favorite.ts';


function Offer() {

  const dispatch = useAppDispatch();
  const [chosenId, setChosenId] = useState<OfferProps['id'] | null>(null);

  const {id} = useParams<{ id: string }>();

  const offerLoading = useAppSelector((state) => state.loadingStatus.current);
  const offer = useAppSelector((state) => state.current.offer);

  const commentsLoading = useAppSelector((state) => state.loadingStatus.comments);

  const nearbyLoading = useAppSelector((state) => state.loadingStatus.nearby);

  const changeFavorite = useChangeFavorite();

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchComments(id));
      dispatch(fetchNearby(id));
    }

    return () => {
      dispatch(loadCurrentOffer(null));
      dispatch(fillComments([]));
      dispatch(fillNearby([]));
    };
  }, [dispatch, id]);

  if (offerLoading || commentsLoading || nearbyLoading) {
    return (
      <Spinner size={60} />
    );
  }

  if (!offer) {
    return (
      <h1>Такого объявления нет</h1>
    );
  }

  const isFavorite = offer.isFavorite;
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offer.images.map((picture) => (
                  <div className="offer__image-wrapper" key={picture}>
                    <img className="offer__image" src={picture} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>

              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button
                  className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={() => changeFavorite(offer?.id)}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${offer.rating * 100 / 5}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${offer.bedrooms} Bedroom${offer.bedrooms > 1 ? 's' : ''}`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offer.goods.map((elem) => (
                      <li className="offer__inside-item" key={elem}>
                        {elem}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${offer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}
                  >
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro &&
                    <span className="offer__user-status">
                    Pro
                    </span>
                  }

                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <CommentsList />
            </div>
          </div>
          <Map
            chosenId={chosenId}
            className={'offer__map map'}
          />
        </section>
        <NeighbourhoodList
          setChosenId={setChosenId}
        />
      </main>
    </div>
  );
}

export default Offer;

import FavoriteCard from '../../components/favorite-card/favorite-card.tsx';
import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import FavoritesEmpty from './favorites-empty.tsx';
import {getFavorites} from '../../store/offers-process/selectors.ts';
import {changeCity} from '../../store/offers-process/offers-process.ts';
import {CityProps} from '../../types/city.ts';
import {getCities} from '../../mocks/cities.ts';
import {useCallback} from 'react';

function groupCards(offers: CitiesCardProps[]) {
  const map = new Map<CityProps['name'], CitiesCardProps[]>();
  offers.forEach((card) => {
    const cityName = card.city.name;
    if (!map.has(cityName)) {
      map.set(card.city.name, [card]);
    } else {
      map.get(cityName)!.push(card);
    }
  });
  return map;
}

function Favorites() {
  const favoritesOffers = useAppSelector(getFavorites);
  const dispatch = useAppDispatch();

  const handleCityClick = useCallback(
    (cityName: CityProps['name']) => {
      const city = getCities().find((c) => c.name === cityName);

      if (city) {
        dispatch(changeCity(city));
      }
    },
    [dispatch]
  );

  if (favoritesOffers.length === 0) {
    return <FavoritesEmpty />;
  }


  const groupedCards = groupCards(favoritesOffers);
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {Array.from(groupedCards.entries()).map(([city, cityOffers]) => (
                <li className="favorites__locations-items" key={city}>

                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link to={AppRoute.Main} className="locations__item-link" onClick={() => handleCityClick(city)}>
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>

                  <div className="favorites__places">
                    {cityOffers.map((card) => (
                      <FavoriteCard key={card.id}
                        offer={card}
                      />
                    ))}
                  </div>


                </li>
              ))}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Main} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;

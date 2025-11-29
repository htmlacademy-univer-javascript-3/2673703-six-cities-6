import FavoriteCard from '../../components/favorite-card/favorite-card.tsx';
import Header from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {useAppSelector} from '../../hooks';
import FavoritesEmpty from './favorites-empty.tsx';

function groupCards(offers: CitiesCardProps[]) {
  const map = new Map<string, CitiesCardProps[]>();
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
  const favoritesOffers = useAppSelector((state) => state.user.favorites);

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
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
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

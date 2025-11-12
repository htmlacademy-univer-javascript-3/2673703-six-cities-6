import {OfferProps} from '../../types/offer.ts';
import OfferList from '../../components/offer-list/offer-list.tsx';
import {useState} from 'react';
import Map from '../../components/map/map.tsx';
import CityList from '../../components/city-list/city-list.tsx';
import {getCities} from '../../mocks/cities.ts';
import Header from '../../components/header/header.tsx';


function Main() {
  const [chosenId, setChosenId] = useState<OfferProps['id'] | null>(null);
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList cities={getCities()} />
        <div className="cities">
          <div className="cities__places-container container">
            <OfferList
              setChosenId={setChosenId}
            />
            <div className="cities__right-section">
              <Map
                chosenId={chosenId}
                className={'cities__right-section'}
              />
            </div>

          </div>
        </div>
      </main>
    </div>

  );
}


export default Main;


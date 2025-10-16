import {OfferProps} from '../../types/offer.ts';
import CitesCard from '../cities-card/cites-card.tsx';
import {useState} from 'react';
import Map from '../map/map.tsx';


type OfferListProps = {
  offers: OfferProps[];
}

function OfferList({offers}: OfferListProps) {
  const [chosenId, setChosenId] = useState<OfferProps['id'] | null>(null);
  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                  Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className="cities__places-list places__list tabs__content">
          {offers.map((card) => (
            <CitesCard key={card.id}
              offer={card}
              onMouseEnter={() => setChosenId(card.id)}
              onMouseLeave={() => setChosenId(null)}
            />
          ))}
        </div>
      </section>
      <Map chosenId={chosenId} />
    </>


  );
}

export default OfferList;

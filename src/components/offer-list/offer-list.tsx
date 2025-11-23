import CitesCard from '../cities-card/cites-card.tsx';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../../pages/main/main-empty.tsx';
import SortingOptions from '../sorting-options/sorting-options.tsx';
import {getSortedOffers} from '../../utils/get-sorted-offers.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';


type OfferListProps = {
  setChosenId: (id: CitiesCardProps['id'] | null) => void;
}

function OfferList({setChosenId}: OfferListProps) {

  const currentCity = useAppSelector((state) => state.city);
  const currenSorting = useAppSelector((state) => state.sortingOption);

  const offersFromServer = useAppSelector((state) => state.offers);
  if (offersFromServer.length === 0) {
    return <MainEmpty />;
  }

  const offers = getSortedOffers(offersFromServer, currenSorting)
    .filter((offer) => offer.city.name === currentCity.name);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
      <SortingOptions />
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


  );
}

export default OfferList;

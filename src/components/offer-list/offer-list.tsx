import CitesCard from '../cities-card/cites-card.tsx';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../../pages/main/main-empty.tsx';
import SortingOptions from '../sorting-options/sorting-options.tsx';
import {getSortedOffers} from '../../utils/get-sorted-offers.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {memo, useMemo} from 'react';

type OfferListProps = {
  setChosenId: (id: CitiesCardProps['id'] | null) => void;
}

function OfferList({setChosenId}: OfferListProps) {

  const currentCity = useAppSelector((state) => state.OFFERS.city);
  const currenSorting = useAppSelector((state) => state.SETTINGS.sortingOption);

  const offersFromServer = useAppSelector((state) => state.OFFERS.offers);

  const offers = useMemo(() => getSortedOffers(offersFromServer, currenSorting)
    .filter((offer) => offer.city.name === currentCity.name), [offersFromServer, currenSorting, currentCity]);
  if (offersFromServer.length === 0) {
    return <MainEmpty />;
  }

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentCity.name}</b>
      <SortingOptions />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((card) => (
          <CitesCard key={card.id}
            offer={card}
            setChosenId={setChosenId}
          />
        ))}
      </div>
    </section>
  );
}

const MemoOfferList = memo(OfferList);

export default MemoOfferList;

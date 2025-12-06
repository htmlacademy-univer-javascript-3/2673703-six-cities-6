import NeighbourhoodCard from '../neighbourhood-card/neighbourhood-card.tsx';
import {useAppSelector} from '../../hooks';
import {memo} from 'react';
import {getCurrenOffer} from '../../store/offers-process/selectors.ts';
import {MAX_NEARBY_OFFERS} from '../../const.ts';


function NeighbourhoodList() {
  const offers = useAppSelector(getCurrenOffer).nearby.slice(0, MAX_NEARBY_OFFERS);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">

          {
            offers.map((card) => (
              <NeighbourhoodCard key={card.id}
                offer={card}
              />
            ))
          }

        </div>
      </section>
    </div>
  );
}

const MemoNeighbourhoodList = memo(NeighbourhoodList);

export default MemoNeighbourhoodList;

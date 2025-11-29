import {OfferProps} from '../../types/offer.ts';
import NeighbourhoodCard from '../neighbourhood-card/neighbourhood-card.tsx';
import {useAppSelector} from '../../hooks';


type NeighbourhoodListProps = {
  setChosenId: (id: OfferProps['id'] | null) => void;
}

function NeighbourhoodList({setChosenId}: NeighbourhoodListProps) {
  const offers = useAppSelector((state) => state.current.nearby);

  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">

          {
            offers.map((card) => (
              <NeighbourhoodCard key={card.id}
                offer={card}
                onMouseEnter={() => setChosenId(card.id)}
                onMouseLeave={() => setChosenId(null)}
              />
            ))
          }

        </div>
      </section>
    </div>
  );
}

export default NeighbourhoodList;

import {OfferProps} from '../../types/offer.ts';
import NeighbourhoodCard from '../neighbourhood-card/neighbourhood-card.tsx';


type NeighbourhoodListProps = {
  offers: OfferProps[];
  setChosenId: (id: OfferProps['id'] | null) => void;
}

function NeighbourhoodList({offers, setChosenId}: NeighbourhoodListProps) {
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

import {OfferProps} from '../../types/offer.ts';
import CitesCard from '../cities-card/cites-card.tsx';
import {useState} from 'react';


type OfferListProps = {
  offers: OfferProps[];
}

function OfferList({offers}: OfferListProps) {
  const [chosenId, setChosenId] = useState<OfferProps['id'] | null>(null);
  return (
    <>
      {offers.map((card) => (
        <CitesCard key={card.id}
          offer={card}
          onMouseEnter={() => setChosenId(card.id)}
          onMouseLeave={() => setChosenId(null)}
        />
      ))}
    </>
  );
}

export default OfferList;

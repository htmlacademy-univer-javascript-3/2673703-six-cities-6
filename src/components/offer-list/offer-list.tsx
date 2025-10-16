import {OfferProps} from '../../types/offer.ts';
import CitesCard from '../cities-card/cites-card.tsx';
import {useState} from 'react';


type OfferListProps = {
  offers: OfferProps[];
}

function OfferList({offers}: OfferListProps) {
  const [enterFlag, setEnterFlag] = useState<string | null>(null);
  return (
    <>
      {offers.map((card) => (
        <CitesCard key={card.id}
          offer={card}
          onMouseEnter={() => setEnterFlag(card.id)}
          onMouseLeave={() => setEnterFlag(null)}
        />
      ))}
    </>
  );
}

export default OfferList;

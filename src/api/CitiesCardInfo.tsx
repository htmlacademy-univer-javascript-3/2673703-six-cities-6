import {CitiesCardProps} from '../components/cities-card/cities-card.props.tsx';
import {CardType} from '../components/cities-card/cities-card.props.tsx';


const allCards : CitiesCardProps[] = [
  {
    id: 1,
    mark : true,
    imgPath : 'img/apartment-01.jpg',
    priceValue : 120,
    bookmark : false,
    cardName : 'Beautiful & luxurious apartment at great location',
    cardType :CardType.Apartment
  },
  {
    id: 2,
    mark : false,
    imgPath : 'img/room.jpg',
    priceValue : 80,
    bookmark : true,
    cardName : 'Wood and stone place',
    cardType : CardType.Room
  },
  {
    id: 3,
    mark : false,
    imgPath : 'img/apartment-02.jpg',
    priceValue : 132,
    bookmark : false,
    cardName : 'Canal View Prinsengracht',
    cardType : CardType.Apartment
  },
  {
    id: 4,
    mark : true,
    imgPath : 'img/apartment-03.jpg',
    priceValue : 180,
    bookmark : false,
    cardName : 'Nice, cozy, warm big bed apartmen',
    cardType : CardType.Apartment
  },
  {
    id: 5,
    mark : false,
    imgPath : 'img/room.jpg',
    priceValue : 80,
    bookmark : true,
    cardName : 'Wood and stone place',
    cardType : CardType.Room
  },
];

export const getAllCards = () => allCards;

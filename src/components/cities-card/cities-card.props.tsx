
export enum CardType {
  Apartment = 'Apartment',
  Room = 'Room',
}


export type CitiesCardProps = {
  id: number;
  mark : boolean;
  imgPath : string;
  priceValue : number;
  bookmark : boolean;
  cardName : string;
  cardType : CardType;
}

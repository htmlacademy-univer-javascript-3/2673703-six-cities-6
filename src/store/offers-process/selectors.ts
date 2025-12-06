import {State} from '../../types/state.ts';
import {CityProps} from '../../types/city.ts';
import {NameSpace} from '../../const.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';


export const getCity = (state: State): CityProps => state[NameSpace.Offers].city;

export const getOffers = (state: State): CitiesCardProps[] => state[NameSpace.Offers].offers;

export const getFavorites = (state: State): CitiesCardProps[] => state[NameSpace.Offers].favorites;

export const getCurrenOffer = (state: State) => state[NameSpace.Offers].current;


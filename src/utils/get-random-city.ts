import {CityProps} from '../types/city.ts';


export const getRandomCity = (allCities: CityProps[]) =>
  allCities[Math.floor(Math.random() * allCities.length)];

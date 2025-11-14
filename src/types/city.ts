import {LocationProps} from './location.ts';

type availableCity = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';

export type CityProps = {
  name: availableCity;
  location: LocationProps;
}

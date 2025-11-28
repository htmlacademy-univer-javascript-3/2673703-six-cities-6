import {CityProps} from '../../types/city.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, changeSorting} from '../../store/action.ts';
import {SortingOptionVariants} from '../../const.ts';

type CityListProps = {
  cities: CityProps[];
}

function CityList({cities}: CityListProps) {
  const namesOfCities = cities.map((city) => city.name);
  const currentCity = useAppSelector((state) => state.city);

  const cityMap = Object.fromEntries(
    cities.map((city) => [city.name, city])
  );

  const dispatch = useAppDispatch();

  const cityClickHandle = (cityName: CityProps['name']) => {
    dispatch(changeCity(cityMap[cityName]));
    dispatch(changeSorting(SortingOptionVariants.POPULAR));
  };


  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {namesOfCities.map((name) => (
            <li key={name} className="locations__item">
              <a className={`locations__item-link tabs__item ${currentCity.name === name ? 'tabs__item--active' : ''}`}
                onClick={() => cityClickHandle(name)}
              >
                <span>{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}


export default CityList;



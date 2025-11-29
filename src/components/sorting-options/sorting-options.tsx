import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortingOptionVariants} from '../../const.ts';
import {changeSorting} from '../../store/action.ts';
import {useState} from 'react';


function SortingOptions() {
  const [openFlag, setOpenFlag] = useState<boolean>(false);
  const currentOption = useAppSelector((state) => state.sortingOption);
  const sortingOptions = Object.values(SortingOptionVariants);

  const dispatch = useAppDispatch();

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setOpenFlag((prevState) => !prevState)}>
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${openFlag ? 'places__options--opened' : ''}`}>
        {
          sortingOptions.map((option) => (
            <li
              key={option}
              className={`places__option ${option === currentOption ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => dispatch(changeSorting(option))}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>

  );
}

export default SortingOptions;

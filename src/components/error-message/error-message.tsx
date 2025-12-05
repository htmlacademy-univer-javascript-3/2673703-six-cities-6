import {useAppSelector} from '../../hooks';
import './error-message.css';
import {getError} from '../../store/settings-process/selectors.ts';

function ErrorMessage() {
  const error = useAppSelector(getError);

  return (error) ? <div className='error-message'>{error}</div> : null;
}

export default ErrorMessage;

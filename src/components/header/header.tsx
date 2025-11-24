import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions.ts';


function HeaderWithAuthorization() {
  const userEmail = useAppSelector((state) => state.userEmail);
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">3</span>
        </a>
      </li>
      <li className="header__nav-item" onClick={handleSignOut}>
        <a className="header__nav-link" >
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </ul>
  );
}

function HeaderWithoutAuthorization() {
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </ul>
  );
}

function Header() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Main} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {
              authorizationStatus === AuthorizationStatus.NoAuth
                ? <HeaderWithoutAuthorization />
                : <HeaderWithAuthorization />
            }
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

import Main from '../../pages/main/main.tsx';
import {Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import {OfferProps} from '../../types/offer.ts';
import {useAppSelector} from '../../hooks';
import Spinner from '../spinner/spinner.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';

type AppProps = {
  offers: OfferProps[];
}

function App({offers}: AppProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);

  if (authorizationStatus === AuthorizationStatus.Unknow || isOffersLoading) {
    return (
      <Spinner size={60} />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />

        <Route
          path={AppRoute.Login}
          element={<Login />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />


        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<Offer />}
        />


        <Route
          path={'*'}
          element={<NotFound/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

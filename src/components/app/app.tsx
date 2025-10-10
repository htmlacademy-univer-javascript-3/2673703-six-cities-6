import Main from '../../pages/main/main.tsx';
import {BookingInfo} from '../../index.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFound from '../../pages/not-found/not-found.tsx';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import {AppRoute, AuthorizationStatus} from '../../cosnt.ts';
import PrivateRoute from '../private-route/private-route.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';


function App({bookingOffers}: BookingInfo) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main bookingOffers={bookingOffers}/>}
        />

        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites/>
            </PrivateRoute>
          }
        />


        <Route path={`${AppRoute.Offer}/:id`} element={<Offer/>}/>


        <Route
          path={'*'}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

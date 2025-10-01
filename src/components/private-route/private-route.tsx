import {AppRoute, AuthorizationStatus} from '../../cosnt.ts';
import {Navigate} from 'react-router-dom';


type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}


function PrivateRoute({authorizationStatus, children} : PrivateRouteProps) {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;

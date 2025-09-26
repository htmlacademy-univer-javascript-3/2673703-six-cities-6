import Main from '../../pages/main/main.tsx';
import {BookingInfo} from '../../index.tsx';


function App({bookingOffers} : BookingInfo) {
  return(
    <Main bookingOffers={bookingOffers} />
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export type BookingInfo = {
  bookingOffers : number;
}

root.render(
  <React.StrictMode>
    <App bookingOffers={67} />
  </React.StrictMode>
);

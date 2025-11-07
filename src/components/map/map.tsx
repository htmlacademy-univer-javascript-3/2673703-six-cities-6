import {MutableRefObject, useEffect, useRef} from 'react';
import useMap from './use-map.ts';
import {CityProps} from '../../types/city.ts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {OfferProps} from '../../types/offer.ts';


type MapProps = {
  chosenId: string | null;
  city: CityProps;
  offers: OfferProps[];
  className: string;
};

function Map({chosenId, city, offers, className}: MapProps) {
  const mapRef: MutableRefObject<null | HTMLDivElement> = useRef(null);
  const map = useMap(mapRef, city);


  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: (offer.id === chosenId)
            ? currentCustomIcon
            : defaultCustomIcon
        }).addTo(map);
      });
    }
  }, [map, offers, chosenId]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}

export default Map;

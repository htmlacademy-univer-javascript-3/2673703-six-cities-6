import {MutableRefObject, useEffect, useRef} from 'react';
import useMap from './use-map.ts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MAX_NEARBY_OFFERS, URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import {getCity, getCurrenOffer, getOffers} from '../../store/offers-process/selectors.ts';


type MapProps = {
  chosenId: string | null;
  className: string;
  nearby?: boolean;
};

function Map({chosenId, className, nearby}: MapProps) {
  const city = useAppSelector(getCity);

  const currentOffer = useAppSelector(getCurrenOffer);
  const allOffers = useAppSelector(getOffers);

  const chosenOffer = allOffers.filter((offers) => offers.id === currentOffer.offer?.id);

  const offers = nearby
    ? currentOffer.nearby.slice(0, MAX_NEARBY_OFFERS).concat(chosenOffer)
    : allOffers.filter((offer) => offer.city.name === city.name);

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

  const markersRef = useRef<leaflet.Marker[]>([]);

  useEffect(() => {
    if (map) {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      offers.forEach((offer) => {
        const icon = offer.id === chosenId ? currentCustomIcon : defaultCustomIcon;

        const marker = leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            { icon }
          )
          .addTo(map);

        markersRef.current.push(marker);
      });
    }
  }, [map, offers, chosenId, city, currentCustomIcon, defaultCustomIcon]);

  return (
    <section className={`${className} map`} ref={mapRef}></section>
  );
}


export default Map;

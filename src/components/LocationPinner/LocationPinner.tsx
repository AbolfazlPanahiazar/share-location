import { FC } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import MapMarker from "components/MapMarker/MapMarker";
import { LocationPinnerContainer } from "./locationPinner.styles";
import { ILocation } from "types";

interface ILocationPinnerProps {
  locations: ILocation[];
}

const LocationPinner: FC<ILocationPinnerProps> = ({ locations }) => {
  return (
    <LocationPinnerContainer>
      <MapContainer
        center={[locations[0].lat, locations[0].long]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 700 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <MapMarker key={location.id} location={location} />
        ))}
      </MapContainer>
    </LocationPinnerContainer>
  );
};

export default LocationPinner;

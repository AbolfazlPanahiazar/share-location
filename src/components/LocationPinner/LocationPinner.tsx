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
        center={[35.74935089529708, 51.421337127685554]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 400 }}>
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

import { FC } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import fairPin from "components/pins/FairPin";
import homePin from "components/pins/HomePin";
import bussinesPin from "components/pins/BusinessPin";
import { LocationPinnerContainer } from "./locationPinner.styles";

const position: LatLngExpression = [51.505, -0.09];

const LocationPinner: FC = () => {
  return (
    <LocationPinnerContainer>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: 700 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={bussinesPin}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </LocationPinnerContainer>
  );
};

export default LocationPinner;

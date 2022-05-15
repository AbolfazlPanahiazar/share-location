import { LatLngExpression } from "leaflet";
import { FC, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

import { getLocationPin } from "helpers";
import { LocationType } from "types";
import { InputContainer, InputLabel } from "./mapInput.styles";

interface IMapInputProps {
  placeholder: string;
  locationType: LocationType;
}

export const MapInput: FC<IMapInputProps> = ({ placeholder, locationType }) => {
  return (
    <InputContainer>
      <InputLabel>{placeholder}</InputLabel>
      <MapContainer
        center={{ lat: 51.505, lng: -0.09 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 500 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker locationType={locationType} />
      </MapContainer>
    </InputContainer>
  );
};

interface ILocationMarkerProps {
  locationType: LocationType;
}

const LocationMarker: FC<ILocationMarkerProps> = ({ locationType }) => {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    }
  });

  useEffect(() => {
    map.locate();
  }, []);

  return position === null ? null : (
    <Marker position={position} icon={getLocationPin(locationType)}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

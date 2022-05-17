import { LatLng } from "leaflet";
import { FC, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";

import { getLocationPin } from "helpers";
import { LocationType } from "types";
import { InputContainer, InputLabel } from "./mapInput.styles";

interface IMapInputProps {
  placeholder: string;
  locationType: LocationType;
  handleSelectLocation: (sl: LatLng) => void;
  position: LatLng;
}

export const MapInput: FC<IMapInputProps> = ({
  placeholder,
  locationType,
  handleSelectLocation,
  position
}) => {
  return (
    <InputContainer>
      <InputLabel>{placeholder}</InputLabel>
      <MapContainer
        center={{ lat: 35.7355059, lng: 51.4259572 }}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 350 }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          locationType={locationType}
          handleSelectLocation={handleSelectLocation}
          position={position}
        />
      </MapContainer>
    </InputContainer>
  );
};

interface ILocationMarkerProps {
  locationType: LocationType;
  handleSelectLocation: (sl: LatLng) => void;
  position: LatLng;
}

const LocationMarker: FC<ILocationMarkerProps> = ({
  locationType,
  handleSelectLocation,
  position
}) => {
  const map = useMapEvents({
    click(e) {
      handleSelectLocation(e.latlng);
    },
    locationfound(e) {
      handleSelectLocation(e.latlng);
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

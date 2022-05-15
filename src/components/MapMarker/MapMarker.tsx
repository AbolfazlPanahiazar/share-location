import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";

import { ILocation } from "types";
import { getLocationPin } from "helpers";
import {
  PopupContainer,
  PopupHeader,
  PopupTitle,
  DataContainer,
  DataLabel,
  DataValue,
  LocationLogo,
  ButtonsContainer,
  EditButton
} from "./mapMarker.styles";

interface IMapMarkerProps {
  location: ILocation;
}

const MapMarker: FC<IMapMarkerProps> = ({ location }) => {
  const navigate = useNavigate();

  const editHandler = () => {
    navigate(`/locations/${location.id}`);
  };

  return (
    <Marker position={[location.lat, location.long]} icon={getLocationPin(location.type)}>
      <Popup>
        <PopupContainer>
          <PopupHeader>
            <LocationLogo src={location.logo} alt={location.title} />
            <PopupTitle>{location.title}</PopupTitle>
          </PopupHeader>
          <DataContainer>
            <DataLabel>Latitude:</DataLabel>
            <DataValue>{location.lat}</DataValue>
          </DataContainer>
          <DataContainer>
            <DataLabel>Longitude:</DataLabel>
            <DataValue>{location.long}</DataValue>
          </DataContainer>
          <DataContainer>
            <DataLabel>Location Type:</DataLabel>
            <DataValue>{location.type.toLocaleLowerCase()}</DataValue>
          </DataContainer>
          <ButtonsContainer>
            <EditButton onClick={editHandler}>Edit</EditButton>
          </ButtonsContainer>
        </PopupContainer>
      </Popup>
    </Marker>
  );
};

export default MapMarker;

import fairPin from "components/pins/FairPin";
import bussinesPin from "components/pins/BusinessPin";
import homePin from "components/pins/HomePin";
import { LocationType } from "types";

export const getLocationPin = (locationType: LocationType) => {
  switch (locationType) {
    case LocationType.HOME:
      return homePin;
    case LocationType.FAIR:
      return fairPin;
    case LocationType.BUSINESS:
      return bussinesPin;
    default:
      return homePin;
  }
};

import { AxiosResponse } from "axios";

import { axiosClient } from "api";
import { ILocation } from "types";

export const Update_Location = (locationId: number, location: ILocation) => {
  return axiosClient.put<ILocation, AxiosResponse<ILocation>>(`/locations/${locationId}`, location);
};

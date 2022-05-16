import { AxiosResponse } from "axios";

import { axiosClient } from "api";
import { ILocation } from "types";

export const Update_Location = (location: ILocation) => {
  return axiosClient.put<ILocation, AxiosResponse<ILocation>>(
    `/locations/${location.id}`,
    location
  );
};

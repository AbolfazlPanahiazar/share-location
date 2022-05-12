import { AxiosResponse } from "axios";

import { axiosClient } from "api";
import { ILocation } from "types";

export const Create_Location = (location: ILocation) => {
  return axiosClient.post<ILocation, AxiosResponse<ILocation>>("/locations", location);
};

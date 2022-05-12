import { AxiosResponse } from "axios";

import { axiosClient } from "api";
import { ILocation } from "types";

export const Get_Locations = () => {
  return axiosClient.get<never, AxiosResponse<ILocation[]>>("/locations");
};

import { AxiosResponse } from "axios";

import { axiosClient } from "api";
import { ILocation } from "types";

export const Get_Location = (locationId: number) => {
  return axiosClient.get<never, AxiosResponse<ILocation>>(`/locations/${locationId}`);
};

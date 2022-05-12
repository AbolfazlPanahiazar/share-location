import { axiosClient } from "api";

export const Delete_Location = (locationId: number) => {
  return axiosClient.delete<never>(`/locations/${locationId}`);
};

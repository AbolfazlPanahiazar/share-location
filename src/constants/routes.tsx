import { IRoute } from "types";
import Home from "pages/Home/Home";
import Location from "pages/Location/Location";

export const routes: IRoute[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/locations/add",
    element: <Location />
  },
  {
    path: "/locations/:locationId",
    element: <Location isUpdating />
  }
];

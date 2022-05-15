import L from "leaflet";

const bussinesPin = new L.Icon({
  iconUrl: require("assets/business-pin.png"),
  iconRetinaUrl: require("assets/business-pin.png"),
  iconSize: new L.Point(30, 50),
  iconAnchor: new L.Point(15, 50)
});

export default bussinesPin;

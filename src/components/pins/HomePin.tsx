import L from "leaflet";

const homePin = new L.Icon({
  iconUrl: require("assets/home-pin.png"),
  iconRetinaUrl: require("assets/home-pin.png"),
  iconSize: new L.Point(50, 50),
  iconAnchor: new L.Point(25, 50)
});

export default homePin;

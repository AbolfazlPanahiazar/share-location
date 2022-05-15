import L from "leaflet";

const fairPin = new L.Icon({
  iconUrl: require("assets/fair-pin.png"),
  iconRetinaUrl: require("assets/fair-pin.png"),
  iconSize: new L.Point(30, 50),
  iconAnchor: new L.Point(15, 50)
});

export default fairPin;

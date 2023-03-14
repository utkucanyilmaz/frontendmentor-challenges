import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map({ country }) {
  return (
    <MapContainer
      className="my-10"
      center={country.latlng}
      zoom={1}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={country.latlng} />
    </MapContainer>
  );
}

export default Map;

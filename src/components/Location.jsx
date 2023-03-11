import React from "react";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Location({ info }) {
  const position = info?.location && [info.location.lat, info.location.lng];

  const marker = new Icon({
    iconUrl: "/images/icon-location.svg",
    iconSize: [46, 56],
  });

  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={marker} />
    </MapContainer>
  );
}

export default Location;

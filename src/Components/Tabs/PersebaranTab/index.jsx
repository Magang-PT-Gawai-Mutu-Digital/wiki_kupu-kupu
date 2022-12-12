import React from "react";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

export default function PersebaranTab(props) {
  const markerIcon = new L.Icon({
    iconUrl: require("../../../assets/marker.png"),
    iconSize: [20, 30],
  });

  const { datakupu } = props;
  return (
    <div>
      <MapContainer
        style={{ height: "350px", width: "100%" }}
        center={[-2.4833826, 117.8902853]}
        zoom={5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {datakupu?.map((item, index) => (
          <>
            {item.persebarans?.map((map, index) => (
              <Marker
                position={[map.latitude, map.longtitude]}
                icon={markerIcon}
              >
                <Popup className="font-semibold">{map.alamat}</Popup>
              </Marker>
            ))}
          </>
        ))}
      </MapContainer>
    </div>
  );
}

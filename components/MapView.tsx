"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "../utils/leafletFix";

interface MapViewProps {
  selectedBus: number;
}

const busRoutes: Record<number, [number, number][]> = {
  1: [
    [3.139, 101.6869],
    [3.142, 101.693],
    [3.145, 101.7],
  ],
  2: [
    [3.14, 101.68],
    [3.145, 101.685],
    [3.15, 101.69],
  ],
};

const MapView: React.FC<MapViewProps> = ({ selectedBus }) => {
  const positions = busRoutes[selectedBus] || busRoutes[1];

  return (
    <div className="h-64 rounded overflow-hidden border border-gray-300">
      <MapContainer
        center={positions[0]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <Polyline positions={positions} color="red" />

        {positions.map((pos, idx) => (
          <Marker key={idx} position={pos}>
            <Popup>
              Stop {idx + 1} <br />
              Bus {selectedBus}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;

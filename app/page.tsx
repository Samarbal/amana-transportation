"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import BusSelector from "../components/BusSelector";
import BusSchedule from "../components/BusSchedule";
import BusStatus, { BusId, BusData } from "../components/BusStatus";

// Leaflet styles
import "leaflet/dist/leaflet.css";

// Dynamic Leaflet Map (required)
const MapView = dynamic(() => import("../components/MapView"), { ssr: false });

export default function Home() {
  const [selectedBus, setSelectedBus] = useState<BusId>(1);

  const [buses, setBuses] = useState<Record<BusId, BusData>>({
    1: { capacity: 40, currentPassengers: 28, status: "In Transit" },
    2: { capacity: 30, currentPassengers: 30, status: "Arrived" },
  });

  const updateBusStatus = (id: BusId, newStatus: string) => {
    setBuses((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        status: newStatus,
      },
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Header />

      {/* Section 1: Bus Status + Map */}
      <section className="bg-amber-100 dark:bg-gray-800 p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Active Bus Map</h2>

        <BusSelector selectedBus={selectedBus} onSelect={setSelectedBus} />

        {/* 🆕*/}
        <div className="my-3">
          <BusStatus
            busId={selectedBus}
            busData={buses[selectedBus]}
            onStatusChange={updateBusStatus}
          />
        </div>

        <div className="mt-3">
          <MapView selectedBus={selectedBus} />
        </div>
      </section>

      {/* Section 2: Bus Schedule */}
      <section className="bg-amber-200 dark:bg-gray-700 p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Bus Schedule</h2>

        <BusSelector selectedBus={selectedBus} onSelect={setSelectedBus} />

        <div className="mt-3">
          <BusSchedule selectedBus={selectedBus} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

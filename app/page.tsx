"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import BusSelector from "../components/BusSelector";
import BusSchedule from "../components/BusSchedule";
import Footer from "../components/Footer";

const MapView = dynamic(() => import("../components/MapView"), { ssr: false });

export default function Home() {
  const [selectedBus, setSelectedBus] = useState<number>(1);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />

      <section className="bg-amber-100 p-4 text-center">
        <h2 className="text-xl font-semibold mb-2">Active Bus Map</h2>
        <BusSelector selectedBus={selectedBus} onSelect={setSelectedBus} />
        <div className="mt-3">
          <MapView selectedBus={selectedBus} />
        </div>
      </section>

      <section className="bg-amber-200 p-4 text-center">
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

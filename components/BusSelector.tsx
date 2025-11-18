"use client";
import React from "react";

import type { BusId } from "./BusStatus";

interface BusSelectorProps {
  selectedBus: BusId;
  onSelect: (bus: BusId) => void;
}

const buses: BusId[] = [1, 2];

const BusSelector: React.FC<BusSelectorProps> = ({ selectedBus, onSelect }) => {
  return (
    <div className="flex justify-center space-x-2 mb-2 flex-wrap">
      {buses.map((bus) => (
        <button
          key={bus}
          onClick={() => onSelect(bus)}
          className={`px-3 py-1 rounded border ${
            selectedBus === bus
              ? "bg-green-600 text-white border-green-600"
              : "bg-gray-100 hover:bg-gray-200 border-gray-300"
          }`}
        >
          Bus {bus}
        </button>
      ))}
    </div>
  );
};

export default BusSelector;

"use client";
import React from "react";

interface BusSelectorProps {
  selectedBus: number;
  onSelect: (bus: number) => void;
}

const buses = [1, 2, 3, 4, 5, 6];

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

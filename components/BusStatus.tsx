"use client";

export type BusId = 1 | 2;

export interface BusData {
  capacity: number;
  currentPassengers: number;
  status: string;
}

interface BusStatusProps {
  busId: BusId;
  busData: BusData;
  onStatusChange: (id: BusId, newStatus: string) => void;
}

export default function BusStatus({ busId, busData, onStatusChange }: BusStatusProps) {
  const statusColor =
    busData.status === "Arrived"
      ? "bg-green-500"
      : busData.status === "Delayed"
      ? "bg-red-500"
      : "bg-yellow-500";

  return (
    <div className="p-4 mb-3 rounded-lg border bg-gray-100 dark:bg-gray-800 dark:text-white">
      <h2 className="font-semibold text-lg mb-2">Bus {busId} Status</h2>

      <div className="flex items-center gap-3 mb-3">
        <div className={`px-3 py-1 text-white rounded ${statusColor}`}>
          {busData.status}
        </div>

        <div className="text-sm">
          <p>Capacity: {busData.capacity}</p>
          <p>Current Passengers: {busData.currentPassengers}</p>
        </div>
      </div>

      {/* أزرار تغيير الحالة */}
      <div className="flex gap-2">
        <button
          className="px-3 py-1 bg-green-600 text-white rounded"
          onClick={() => onStatusChange(busId, "Arrived")}
        >
          Arrived
        </button>
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded"
          onClick={() => onStatusChange(busId, "In Transit")}
        >
          In Transit
        </button>
        <button
          className="px-3 py-1 bg-red-600 text-white rounded"
          onClick={() => onStatusChange(busId, "Delayed")}
        >
          Delayed
        </button>
      </div>
    </div>
  );
}

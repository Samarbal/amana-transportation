"use client";
import React from "react";

interface BusScheduleProps {
  selectedBus: number;
}

interface ScheduleItem {
  stop: string;
  time: string;
}

const schedules: Record<number, ScheduleItem[]> = {
  1: [
    { stop: "Ampang Stop", time: "14:42" },
    { stop: "Patna Stop", time: "15:10" },
    { stop: "Tunku Stop", time: "15:29" },
    { stop: "Acril Stop", time: "15:50" },
  ],
  2: [
    { stop: "Melaka Stop", time: "13:20" },
    { stop: "Selangor Stop", time: "13:45" },
    { stop: "Putra Stop", time: "14:00" },
  ],
};

const BusSchedule: React.FC<BusScheduleProps> = ({ selectedBus }) => {
  const data = schedules[selectedBus] || [];

  return (
    <div className="flex justify-center">
      <table className="min-w-[80%] border border-gray-300 rounded bg-white">
        <thead className="bg-yellow-200">
          <tr>
            <th className="border px-4 py-2 text-left">Bus Stop</th>
            <th className="border px-4 py-2 text-left">Next Time of Arrival</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} className={`${i === 0 ? "bg-yellow-100 font-semibold" : ""}`}>
              <td className="border px-4 py-2">{item.stop}</td>
              <td className="border px-4 py-2">{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusSchedule;

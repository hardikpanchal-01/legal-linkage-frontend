"use client";

import { useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";

const territories = [
  { name: "Puerto Rico", tax: "15%", date: "12 Jun, 2025" },
  { name: "Guam", tax: "15%", date: "12 Jun, 2025" },
  { name: "The Northern Mariana Islands", tax: "15%", date: "12 Jun, 2025" },
  { name: "American Samoa", tax: "15%", date: "12 Jun, 2025" },
  { name: "Minor Outlying Islands", tax: "15%", date: "12 Jun, 2025" },
];

export default function TerritoryTaxes() {
  const [entries, setEntries] = useState("13");

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      {/* Top bar */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          Show
          <select
            value={entries}
            onChange={(e) => setEntries(e.target.value)}
            className="rounded-lg border border-[#D1D5DB] px-2 py-1 text-sm text-[#1B2A4A]"
          >
            <option>13</option>
            <option>25</option>
            <option>50</option>
          </select>
          Entries
        </div>
        <div className="relative">
          <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-lg border border-[#D1D5DB] py-2 pl-9 pr-4 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
            <th className="pb-3">Territory</th>
            <th className="pb-3">Tax percentage</th>
            <th className="pb-3">Date Updated</th>
            <th className="pb-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {territories.map((row, i) => (
            <tr key={i} className="border-b border-[#F3F4F6] last:border-0">
              <td className="py-4 text-sm text-[#1B2A4A]">{row.name}</td>
              <td className="py-4 text-sm text-[#1B2A4A]">{row.tax}</td>
              <td className="py-4 text-sm text-[#6B7280]">{row.date}</td>
              <td className="py-4 text-right">
                <button className="text-[#9CA3AF] hover:text-[#6B7280]">
                  <MoreHorizontal className="size-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

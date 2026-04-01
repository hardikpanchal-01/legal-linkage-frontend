"use client";

import { useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";

type Tab = "mandatory" | "optional";

const mandatoryFees = [
  { process: "ID Government issued ID verify", fee: "$50", date: "12 Jun, 2025" },
  { process: "License /certificate Verify", fee: "$50", date: "12 Jun, 2025" },
  { process: "Good standing verify", fee: "$50", date: "12 Jun, 2025" },
  { process: "Credit check", fee: "$50", date: "12 Jun, 2025" },
  { process: "Crime background check", fee: "$50", date: "12 Jun, 2025" },
  { process: "Liability insurance", fee: "$50", date: "12 Jun, 2025" },
];

const optionalFees = [
  { process: "VSC (Vulnerable Sector Check)", fee: "$10", date: "12 Jun, 2025" },
  { process: "Education", fee: "$29.99", date: "12 Jun, 2025" },
  { process: "Liability insurance", fee: "$9.99", date: "12 Jun, 2025" },
];

export default function RegistrationFees() {
  const [tab, setTab] = useState<Tab>("mandatory");
  const [entries, setEntries] = useState("13");

  const data = tab === "mandatory" ? mandatoryFees : optionalFees;

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

      {/* Tabs */}
      <div className="mb-5 flex gap-2">
        <button
          onClick={() => setTab("mandatory")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            tab === "mandatory"
              ? "bg-[#1B2A4A] text-white"
              : "border border-[#D1D5DB] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
          }`}
        >
          Mandatory
        </button>
        <button
          onClick={() => setTab("optional")}
          className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
            tab === "optional"
              ? "bg-[#1B2A4A] text-white"
              : "border border-[#D1D5DB] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
          }`}
        >
          Optional
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
            <th className="pb-3">Process</th>
            <th className="pb-3">Fee Amount</th>
            <th className="pb-3">Date Updated</th>
            <th className="pb-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-[#F3F4F6] last:border-0">
              <td className="py-4 text-sm text-[#1B2A4A]">{row.process}</td>
              <td className="py-4 text-sm text-[#1B2A4A]">{row.fee}</td>
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

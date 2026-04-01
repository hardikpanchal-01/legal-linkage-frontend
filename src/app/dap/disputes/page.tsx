"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MoreHorizontal, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

type Tab = "all" | "ongoing" | "resolved";

const disputes = [
  { id: "1", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Client", rating: "Simple", date: "12 Jun, 2025", status: "On Going" },
  { id: "2", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Lawyer", rating: "Simple", date: "12 Jun, 2025", status: "On Going" },
  { id: "3", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Client", rating: "Simple", date: "12 Jun, 2025", status: "On Going" },
  { id: "4", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Lawyer", rating: "Complex", date: "12 Jun, 2025", status: "On Going" },
  { id: "5", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Lawyer", rating: "Simple", date: "12 Jun, 2025", status: "On Going" },
  { id: "6", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Client", rating: "Moderate", date: "12 Jun, 2025", status: "On Going" },
  { id: "7", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Lawyer", rating: "Moderate", date: "12 Jun, 2025", status: "On Going" },
  { id: "8", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Lawyer", rating: "Moderate", date: "12 Jun, 2025", status: "On Going" },
  { id: "9", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Client", rating: "Moderate", date: "12 Jun, 2025", status: "On Going" },
  { id: "10", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Client", rating: "Complex", date: "12 Jun, 2025", status: "On Going" },
  { id: "11", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Lawyer", rating: "Complex", date: "12 Jun, 2025", status: "On Going" },
  { id: "12", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Lawyer", rating: "Moderate", date: "12 Jun, 2025", status: "On Going" },
  { id: "13", disputeId: "1495", caseTitle: "Figma ipsum compone...", initiator: "Client", rating: "Complex", date: "12 Jun, 2025", status: "On Going" },
];

export default function DisputeManagement() {
  const [tab, setTab] = useState<Tab>("all");
  const [entries, setEntries] = useState("13");
  const [openAction, setOpenAction] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h1 className="mb-4 text-xl font-bold text-[#1B2A4A]">Dispute Management</h1>

      {/* Tabs */}
      <div className="mb-5 flex gap-2">
        {(["all", "ongoing", "resolved"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-colors ${
              tab === t
                ? "bg-[#1B2A4A] text-white"
                : "border border-[#D1D5DB] bg-white text-[#6B7280] hover:bg-[#F9FAFB]"
            }`}
          >
            {t === "ongoing" ? "On Going" : t === "all" ? "All" : "Resolved"}
          </button>
        ))}
      </div>

      {/* Top bar */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          Show
          <select value={entries} onChange={(e) => setEntries(e.target.value)} className="rounded-lg border border-[#D1D5DB] px-2 py-1 text-sm text-[#1B2A4A]">
            <option>13</option><option>25</option><option>50</option>
          </select>
          Entries
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search here..." className="rounded-lg border border-[#D1D5DB] py-2 pl-9 pr-4 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:outline-none" />
          </div>
          <Button className="h-10 gap-2 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]">
            <SlidersHorizontal className="size-4" />
            Filter
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
              <th className="pb-3">Dispute ID</th>
              <th className="pb-3">Case Title</th>
              <th className="pb-3">Initiator</th>
              <th className="pb-3">Rating</th>
              <th className="pb-3">Date Raised</th>
              <th className="pb-3">Status</th>
              <th className="pb-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {disputes.map((row) => (
              <tr key={row.id} className="border-b border-[#F3F4F6] last:border-0">
                <td className="py-3 text-sm text-[#1B2A4A]">{row.disputeId}</td>
                <td className="py-3 text-sm">
                  <Link href={`/dap/disputes/${row.id}`} className="font-medium text-[#3B82F6] underline">{row.caseTitle}</Link>
                </td>
                <td className="py-3 text-sm text-[#1B2A4A]">{row.initiator}</td>
                <td className="py-3 text-sm text-[#1B2A4A]">{row.rating}</td>
                <td className="py-3 text-sm text-[#6B7280]">{row.date}</td>
                <td className="py-3 text-sm">
                  <span className="rounded-full bg-[#E9A319]/10 px-3 py-1 text-xs font-medium text-[#E9A319]">
                    {row.status}
                  </span>
                </td>
                <td className="relative py-3 text-right">
                  <button
                    onClick={() => setOpenAction(openAction === row.id ? null : row.id)}
                    className="text-[#9CA3AF] hover:text-[#6B7280]"
                  >
                    <MoreHorizontal className="size-5" />
                  </button>
                  {openAction === row.id && (
                    <div className="absolute right-0 top-10 z-10 w-36 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                      <Link
                        href={`/dap/disputes/${row.id}`}
                        className="block px-4 py-2 text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]"
                      >
                        View
                      </Link>
                      <button className="block w-full px-4 py-2 text-left text-sm text-[#E9A319] hover:bg-[#F3F4F6]">
                        Mark Resolved
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-[#1B2A4A]">Showing Results: {(currentPage - 1) * 10 + 1}-{currentPage * 10}</p>
        <div className="flex items-center gap-1">
          <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]">&lt;</button>
          {[1, 2, 3, 4].map((page) => (
            <button key={page} onClick={() => setCurrentPage(page)} className={`flex size-8 items-center justify-center rounded text-sm ${currentPage === page ? "bg-[#1B2A4A] text-white" : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"}`}>{page}</button>
          ))}
          <span className="px-1 text-[#6B7280]">...</span>
          <button onClick={() => setCurrentPage(totalPages)} className={`flex size-8 items-center justify-center rounded text-sm ${currentPage === totalPages ? "bg-[#1B2A4A] text-white" : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"}`}>{totalPages}</button>
          <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]">&gt;</button>
        </div>
      </div>
    </div>
  );
}

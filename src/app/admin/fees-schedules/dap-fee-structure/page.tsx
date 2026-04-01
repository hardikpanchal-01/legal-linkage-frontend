"use client";

import { useState } from "react";
import { Search, MoreHorizontal, DollarSign, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const feeSlabs = [
  { jobFee: "$0-$400", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$401-$500", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$501-$600", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$601-$700", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$701-$800", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$801-$900", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$901-$1000", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$1001-$1100", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$1101-$1200", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$1201-$1300", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$1301-$1400", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$1501-$1600", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$1601-$1700", dapFee: "$50", date: "12 Jun, 2025" },
  { jobFee: "$1701-$1800", dapFee: "$50", date: "12 Jun, 2025" },
];

export default function DAPFeeStructure() {
  const [entries, setEntries] = useState("13");
  const [showCreate, setShowCreate] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

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
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            <input
              type="text"
              placeholder="Search here..."
              className="rounded-lg border border-[#D1D5DB] py-2 pl-9 pr-4 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:outline-none"
            />
          </div>
          <Button
            onClick={() => setShowCreate(true)}
            className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"
          >
            Add New Slab
          </Button>
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
            <th className="pb-3">Job Fee</th>
            <th className="pb-3">DAP Fee</th>
            <th className="pb-3">Date Created</th>
            <th className="pb-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {feeSlabs.map((row, i) => (
            <tr key={i} className="border-b border-[#F3F4F6] last:border-0">
              <td className="py-3.5 text-sm text-[#1B2A4A]">{row.jobFee}</td>
              <td className="py-3.5 text-sm text-[#1B2A4A]">{row.dapFee}</td>
              <td className="py-3.5 text-sm text-[#6B7280]">{row.date}</td>
              <td className="py-3.5 text-right">
                <button className="text-[#9CA3AF] hover:text-[#6B7280]">
                  <MoreHorizontal className="size-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-[#1B2A4A]">
          Showing Results: {(currentPage - 1) * 10 + 1}-{currentPage * 10}
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"
          >
            &lt;
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`flex size-8 items-center justify-center rounded text-sm ${
                currentPage === page
                  ? "bg-[#1B2A4A] text-white"
                  : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"
              }`}
            >
              {page}
            </button>
          ))}
          <span className="px-1 text-[#6B7280]">...</span>
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`flex size-8 items-center justify-center rounded text-sm ${
              currentPage === totalPages
                ? "bg-[#1B2A4A] text-white"
                : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"
            }`}
          >
            {totalPages}
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Create Fee Slab Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-sm rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Create Fee Slab
            </DialogTitle>
            <button
              onClick={() => setShowCreate(false)}
              className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-3 rounded-lg bg-red-50 px-3 py-2">
            <p className="text-xs text-red-500">
              You must enter the first successor value to the input
            </p>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Job Fee Greater Than</p>
              <div className="relative">
                <Input
                  placeholder="10"
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm"
                />
                <DollarSign className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Dispute fee</p>
              <div className="relative">
                <Input
                  placeholder="10"
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm"
                />
                <DollarSign className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button
              onClick={() => setShowCreate(false)}
              className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Save
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowCreate(false)}
              className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

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

const jobFees = [
  { area: "Criminal Law", specialization: "Bail and Release Hearings", hourly: "$0-$400", fixed: "$0-$400", platform: "$50", date: "12 Jun, 2025" },
  { area: "Criminal Law", specialization: "Summary and Indictable...", hourly: "$401-$500", fixed: "$401-$500", platform: "$50", date: "12 Jun, 2025" },
  { area: "Criminal Law", specialization: "DUI / Impaired Driving", hourly: "$501-$600", fixed: "$501-$600", platform: "$50", date: "12 Jun, 2025" },
  { area: "Criminal Law", specialization: "Youth Criminal Justice", hourly: "$601-$700", fixed: "$601-$700", platform: "$50", date: "12 Jun, 2025" },
  { area: "Criminal Law", specialization: "Appeals", hourly: "$701-$800", fixed: "$701-$800", platform: "$50", date: "12 Jun, 2025" },
  { area: "Criminal Law", specialization: "Summary and Indictable...", hourly: "$801-$900", fixed: "$801-$900", platform: "$50", date: "12 Jun, 2025" },
  { area: "Criminal Law", specialization: "White Collar Crime", hourly: "$901-$1000", fixed: "$901-$1000", platform: "$50", date: "12 Jun, 2025" },
  { area: "Civil Litigation", specialization: "DUI / Impaired Driving", hourly: "$1001-$1100", fixed: "$1001-$1100", platform: "$50", date: "12 Jun, 2025" },
  { area: "Civil Litigation", specialization: "Bail and Release Hearings", hourly: "$1101-$1200", fixed: "$1101-$1200", platform: "$50", date: "12 Jun, 2025" },
  { area: "Civil Litigation", specialization: "Summary and Indictable...", hourly: "$1201-$1300", fixed: "$1201-$1300", platform: "$50", date: "12 Jun, 2025" },
  { area: "Civil Litigation", specialization: "Bail and Release Hearings", hourly: "$1301-$1400", fixed: "$1301-$1400", platform: "$50", date: "12 Jun, 2025" },
  { area: "Civil Litigation", specialization: "DUI / Impaired Driving", hourly: "$1501-$1600", fixed: "$1501-$1600", platform: "$50", date: "12 Jun, 2025" },
  { area: "Civil Litigation", specialization: "Summary and Indictable...", hourly: "$1601-$1700", fixed: "$1601-$1700", platform: "$50", date: "12 Jun, 2025" },
  { area: "Civil Litigation", specialization: "DUI / Impaired Driving", hourly: "$1701-$1800", fixed: "$1701-$1800", platform: "$50", date: "12 Jun, 2025" },
];

export default function JobFeeStructure() {
  const [entries, setEntries] = useState("13");
  const [showUpdate, setShowUpdate] = useState(false);
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
              <th className="pb-3">Practice Area</th>
              <th className="pb-3">Specialization</th>
              <th className="pb-3">Hourly Rate</th>
              <th className="pb-3">Fixed Rate</th>
              <th className="pb-3">Platform Fee</th>
              <th className="pb-3">Date Created</th>
              <th className="pb-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobFees.map((row, i) => (
              <tr key={i} className="border-b border-[#F3F4F6] last:border-0">
                <td className="py-3 text-sm text-[#1B2A4A]">{row.area}</td>
                <td className="py-3 text-sm text-[#1B2A4A]">{row.specialization}</td>
                <td className="py-3 text-sm text-[#1B2A4A]">{row.hourly}</td>
                <td className="py-3 text-sm text-[#1B2A4A]">{row.fixed}</td>
                <td className="py-3 text-sm text-[#1B2A4A]">{row.platform}</td>
                <td className="py-3 text-sm text-[#6B7280]">{row.date}</td>
                <td className="py-3 text-right">
                  <button
                    onClick={() => setShowUpdate(true)}
                    className="text-[#9CA3AF] hover:text-[#6B7280]"
                  >
                    <MoreHorizontal className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

      {/* Update Fee Structure Dialog */}
      <Dialog open={showUpdate} onOpenChange={setShowUpdate}>
        <DialogContent className="max-w-sm rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Update Fee Structure
            </DialogTitle>
            <button
              onClick={() => setShowUpdate(false)}
              className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-3">
            <p className="text-sm font-semibold text-[#1B2A4A]">Criminal Law</p>
            <p className="text-xs text-[#6B7280]">Summary And Indictable Offences</p>
          </div>

          {/* Hourly Rate */}
          <div className="mt-4">
            <p className="mb-2 text-sm text-[#6B7280]">Hourly Rate</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="mb-1 text-xs text-[#9CA3AF]">From</p>
                <div className="relative">
                  <Input placeholder="10" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                  <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                </div>
              </div>
              <div>
                <p className="mb-1 text-xs text-[#9CA3AF]">To</p>
                <div className="relative">
                  <Input placeholder="10" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                  <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Rate */}
          <div className="mt-4">
            <p className="mb-2 text-sm text-[#6B7280]">Fixed Rate</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="mb-1 text-xs text-[#9CA3AF]">From</p>
                <div className="relative">
                  <Input placeholder="10" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                  <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                </div>
              </div>
              <div>
                <p className="mb-1 text-xs text-[#9CA3AF]">To</p>
                <div className="relative">
                  <Input placeholder="10" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                  <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                </div>
              </div>
            </div>
          </div>

          {/* Platform Fee */}
          <div className="mt-4">
            <p className="mb-2 text-sm text-[#6B7280]">Platform Fee</p>
            <div className="relative">
              <Input placeholder="10" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
              <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button
              onClick={() => setShowUpdate(false)}
              className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Save
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowUpdate(false)}
              className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Fee Slab Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-sm rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Create Fee Structure
            </DialogTitle>
            <button
              onClick={() => setShowCreate(false)}
              className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Practice Area</p>
              <Input placeholder="e.g., Criminal Law" className="h-10 rounded-lg border-[#D1D5DB] text-sm" />
            </div>
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Specialization</p>
              <Input placeholder="e.g., Bail and Release Hearings" className="h-10 rounded-lg border-[#D1D5DB] text-sm" />
            </div>
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Hourly Rate</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="mb-1 text-xs text-[#9CA3AF]">From</p>
                  <div className="relative">
                    <Input placeholder="0" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                    <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-[#9CA3AF]">To</p>
                  <div className="relative">
                    <Input placeholder="0" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                    <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Fixed Rate</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="mb-1 text-xs text-[#9CA3AF]">From</p>
                  <div className="relative">
                    <Input placeholder="0" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                    <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                  </div>
                </div>
                <div>
                  <p className="mb-1 text-xs text-[#9CA3AF]">To</p>
                  <div className="relative">
                    <Input placeholder="0" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                    <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Platform Fee</p>
              <div className="relative">
                <Input placeholder="0" className="h-10 rounded-lg border-[#D1D5DB] pr-8 text-sm" />
                <DollarSign className="absolute top-1/2 right-2 size-3.5 -translate-y-1/2 text-[#9CA3AF]" />
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

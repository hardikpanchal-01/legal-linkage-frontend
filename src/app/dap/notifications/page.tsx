"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const notifications = [
  { id: "1", name: "Raul Huel", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.", time: "9min ago" },
  { id: "2", name: "Mindy Windler", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.", time: "9min ago" },
  { id: "3", name: "Hilda Gislason", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.", time: "9min ago" },
  { id: "4", name: "Shannon Wilkinson", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.", time: "9min ago" },
  { id: "5", name: "Tim Mertz", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.", time: "9min ago" },
  { id: "6", name: "Agnes Hirthe", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.", time: "9min ago" },
  { id: "7", name: "Willard Lebsack", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.", time: "9min ago" },
];

export default function DAPNotifications() {
  const [entries, setEntries] = useState("13");
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
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
            <SlidersHorizontal className="size-4" />Filter
          </Button>
        </div>
      </div>

      <div className="space-y-0">
        {notifications.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b border-[#F3F4F6] py-4 last:border-0">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6]">
              <User className="size-5 text-[#9CA3AF]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#1B2A4A]">{item.name}</p>
              <p className="text-xs text-[#6B7280]">{item.desc}</p>
            </div>
            <span className="shrink-0 text-xs text-[#9CA3AF]">{item.time}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm text-[#1B2A4A]">Showing Results: {(currentPage - 1) * 10 + 1}-{currentPage * 10}</p>
        <div className="flex items-center gap-1">
          <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]">&lt;</button>
          {[1, 2, 3, 4].map((p) => (<button key={p} onClick={() => setCurrentPage(p)} className={`flex size-8 items-center justify-center rounded text-sm ${currentPage === p ? "bg-[#1B2A4A] text-white" : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"}`}>{p}</button>))}
          <span className="px-1 text-[#6B7280]">...</span>
          <button onClick={() => setCurrentPage(totalPages)} className={`flex size-8 items-center justify-center rounded text-sm ${currentPage === totalPages ? "bg-[#1B2A4A] text-white" : "border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"}`}>{totalPages}</button>
          <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className="flex size-8 items-center justify-center rounded border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]">&gt;</button>
        </div>
      </div>
    </div>
  );
}

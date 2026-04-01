"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MoreHorizontal, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = ["Jobs Reviews", "Platform Reviews"];

const jobReviews = [
  { id: "1", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Angelica...", lawyer: "Grant Steu...", rating: 4.5, status: "Public" },
  { id: "2", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Carroll Ha...", lawyer: "Erma Grady", rating: 3.7, status: "Public" },
  { id: "3", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Mildred M...", lawyer: "Wade Feil", rating: 4.8, status: "Pending" },
  { id: "4", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Dana Mills", lawyer: "Lucia Stra...", rating: 3.6, status: "Pending" },
  { id: "5", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Renee Hills", lawyer: "Damon Os...", rating: 4.1, status: "Public" },
  { id: "6", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Danny Pur...", lawyer: "Sandy Mc...", rating: 4.6, status: "Pending" },
  { id: "7", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Jacquelin...", lawyer: "Timmy Wil...", rating: 3.8, status: "Pending" },
  { id: "8", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Wallace Sc...", lawyer: "Jenna Pfa...", rating: 4.3, status: "Public" },
  { id: "9", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Leah Muel...", lawyer: "Hugo Kutc...", rating: 3.5, status: "Public" },
  { id: "10", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Gilberto R...", lawyer: "Andrea W...", rating: 4.7, status: "Public" },
  { id: "11", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Ollie Abbo...", lawyer: "Robert Br...", rating: 4.0, status: "Public" },
  { id: "12", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Ollie Abbo...", lawyer: "Robert Br...", rating: 4.0, status: "Pending" },
  { id: "13", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Ollie Abbo...", lawyer: "Robert Br...", rating: 4.0, status: "Public" },
  { id: "14", jobId: "1495", caseTitle: "Figma ipsum compone...", client: "Ollie Abbo...", lawyer: "Robert Br...", rating: 4.0, status: "Pending" },
];

const platformReviews = [
  { id: "p1", user: "Angelica...", review: "Figma ips...", rating: 4.5, date: "12 Jun, 2025" },
  { id: "p2", user: "Carroll Ha...", review: "Figma ips...", rating: 3.7, date: "12 Jun, 2025" },
  { id: "p3", user: "Mildred M...", review: "Figma ips...", rating: 4.8, date: "12 Jun, 2025" },
  { id: "p4", user: "Dana Mills", review: "Figma ips...", rating: 3.6, date: "12 Jun, 2025" },
  { id: "p5", user: "Renee Hills", review: "Figma ips...", rating: 4.1, date: "12 Jun, 2025" },
  { id: "p6", user: "Danny Pur...", review: "Figma ips...", rating: 4.6, date: "12 Jun, 2025" },
  { id: "p7", user: "Jacquelin...", review: "Figma ips...", rating: 3.8, date: "12 Jun, 2025" },
  { id: "p8", user: "Wallace Sc...", review: "Figma ips...", rating: 4.3, date: "12 Jun, 2025" },
  { id: "p9", user: "Leah Muel...", review: "Figma ips...", rating: 3.5, date: "12 Jun, 2025" },
  { id: "p10", user: "Gilberto R...", review: "Figma ips...", rating: 4.7, date: "12 Jun, 2025" },
  { id: "p11", user: "Ollie Abbo...", review: "Figma ips...", rating: 4.0, date: "12 Jun, 2025" },
  { id: "p12", user: "Ollie Abbo...", review: "Figma ips...", rating: 4.0, date: "12 Jun, 2025" },
  { id: "p13", user: "Ollie Abbo...", review: "Figma ips...", rating: 4.0, date: "12 Jun, 2025" },
  { id: "p14", user: "Ollie Abbo...", review: "Figma ips...", rating: 4.0, date: "12 Jun, 2025" },
];

export default function DAPReviews() {
  const [activeTab, setActiveTab] = useState(0);
  const [entries, setEntries] = useState("13");
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex gap-1 border-b border-[#E5E7EB]">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)} className={`px-4 py-3 text-sm font-medium transition-colors ${activeTab === i ? "border-b-2 border-[#1B2A4A] text-[#1B2A4A]" : "text-[#6B7280] hover:text-[#1B2A4A]"}`}>{tab}</button>
        ))}
      </div>

      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[#6B7280]">
          Show
          <select value={entries} onChange={(e) => setEntries(e.target.value)} className="rounded-lg border border-[#D1D5DB] px-2 py-1 text-sm text-[#1B2A4A]"><option>13</option><option>25</option><option>50</option></select>
          Entries
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            <input type="text" placeholder="Search here..." className="rounded-lg border border-[#D1D5DB] py-2 pl-9 pr-4 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:outline-none" />
          </div>
          <Button className="h-10 gap-2 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"><SlidersHorizontal className="size-4" />Filter</Button>
        </div>
      </div>

      {activeTab === 0 && (
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
              <th className="pb-3">Job ID</th><th className="pb-3">Case Title</th><th className="pb-3">Client Name</th><th className="pb-3">Lawyer</th><th className="pb-3">Rating</th><th className="pb-3">Status</th><th className="pb-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobReviews.map((r) => (
              <tr key={r.id} className="border-b border-[#F3F4F6] last:border-0">
                <td className="py-3 text-sm text-[#1B2A4A]">{r.jobId}</td>
                <td className="py-3 text-sm"><Link href={`/dap/reviews/${r.id}`} className="font-medium text-[#3B82F6] underline">{r.caseTitle}</Link></td>
                <td className="py-3 text-sm text-[#1B2A4A]">{r.client}</td>
                <td className="py-3 text-sm text-[#1B2A4A]">{r.lawyer}</td>
                <td className="py-3 text-sm text-[#1B2A4A]">{r.rating}</td>
                <td className="py-3 text-sm"><span className={r.status === "Public" ? "text-[#1B2A4A]" : "text-[#E9A319] font-medium"}>{r.status}</span></td>
                <td className="py-3 text-right"><button className="text-[#9CA3AF] hover:text-[#6B7280]"><MoreHorizontal className="size-5" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === 1 && (
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E5E7EB] text-left text-sm font-semibold text-[#1B2A4A]">
              <th className="pb-3">User Name</th><th className="pb-3">Review</th><th className="pb-3">Rating</th><th className="pb-3">Review posted</th><th className="pb-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {platformReviews.map((r) => (
              <tr key={r.id} className="border-b border-[#F3F4F6] last:border-0">
                <td className="py-3 text-sm text-[#1B2A4A]">{r.user}</td>
                <td className="py-3 text-sm"><Link href={`/dap/reviews/${r.id}`} className="font-medium text-[#3B82F6] underline">{r.review}</Link></td>
                <td className="py-3 text-sm text-[#1B2A4A]">{r.rating}</td>
                <td className="py-3 text-sm text-[#6B7280]">{r.date}</td>
                <td className="py-3 text-right"><button className="text-[#9CA3AF] hover:text-[#6B7280]"><MoreHorizontal className="size-5" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

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

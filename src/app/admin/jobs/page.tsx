"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  SlidersHorizontal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

type JobStatus = "On Going" | "Completed" | "Pending" | "Hired";

interface Job {
  jobId: string;
  caseTitle: string;
  clientName: string;
  lawyer: string;
  jobPosted: string;
  status: JobStatus;
}

const jobs: Job[] = [
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Angelica...", lawyer: "Grant Steu...", jobPosted: "12 Jun, 2025", status: "On Going" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Mildred M...", lawyer: "Wade Feil", jobPosted: "12 Jun, 2025", status: "Completed" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Dana Mills", lawyer: "Lucia Stra...", jobPosted: "12 Jun, 2025", status: "Completed" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Renee Hills", lawyer: "Damon Os...", jobPosted: "12 Jun, 2025", status: "Completed" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Danny Pur...", lawyer: "Sandy Mc...", jobPosted: "12 Jun, 2025", status: "On Going" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Jacquelin...", lawyer: "Timmy Wil...", jobPosted: "12 Jun, 2025", status: "On Going" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Wallace Sc...", lawyer: "Jenna Pfa...", jobPosted: "12 Jun, 2025", status: "On Going" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Leah Muel...", lawyer: "Hugo Kutc...", jobPosted: "12 Jun, 2025", status: "On Going" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Gilberto R...", lawyer: "Andrea W...", jobPosted: "12 Jun, 2025", status: "On Going" },
  { jobId: "1495", caseTitle: "Figma ipsum compone...", clientName: "Ollie Abbo...", lawyer: "Robert Br...", jobPosted: "12 Jun, 2025", status: "On Going" },
];

const stats = [
  { label: "Total Jobs Posted", value: "450" },
  { label: "Total Jobs Hired", value: "450" },
  { label: "Total Jobs Completed", value: "450" },
  { label: "Avg time to hire", value: "2-3 hrs" },
];

const mainTabs = ["All", "Hired", "Completed", "Pending"] as const;
type MainTab = (typeof mainTabs)[number];

const statusStyles: Record<JobStatus, string> = {
  "On Going": "bg-blue-500 text-white",
  Completed: "bg-green-500 text-white",
  Pending: "bg-amber-400 text-white",
  Hired: "bg-[#1B2A4A] text-white",
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function JobsManagementPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<MainTab>("All");
  const [entriesPerPage, setEntriesPerPage] = useState(13);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionMenuIndex, setActionMenuIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 10;

  const filteredJobs = jobs.filter((j) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Hired" && j.status === "Hired") ||
      (activeTab === "Completed" && j.status === "Completed") ||
      (activeTab === "Pending" && j.status === "Pending");
    const matchesSearch =
      j.caseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.lawyer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.jobId.includes(searchQuery);
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
              <BarChart3 size={22} className="text-[#1B2A4A]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
              <p className="mt-1 text-2xl font-bold text-[#1B2A4A]">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-3">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setCurrentPage(1); setActionMenuIndex(null); }}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
              activeTab === tab
                ? "bg-[#1B2A4A] text-white"
                : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Show</span>
          <div className="relative">
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="appearance-none rounded-lg border border-gray-300 bg-white py-1.5 pl-3 pr-8 text-sm focus:outline-none"
            >
              {[10, 13, 25, 50].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
            <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <span>Entries</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search here..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
            <SlidersHorizontal size={16} /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">Job ID</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">Case Title</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">Client Name</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">Lawyer</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">Job Posted</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">Status</th>
              <th className="px-5 py-3 text-xs font-semibold text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredJobs.map((job, idx) => (
              <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                <td className="px-5 py-4 text-sm text-gray-600">{job.jobId}</td>
                <td className="px-5 py-4">
                  <span className="text-sm font-semibold text-blue-600 underline cursor-pointer hover:text-blue-800">
                    {job.caseTitle}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm text-gray-600">{job.clientName}</td>
                <td className="px-5 py-4 text-sm text-gray-600">{job.lawyer}</td>
                <td className="px-5 py-4 text-sm text-gray-600">{job.jobPosted}</td>
                <td className="px-5 py-4">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[job.status]}`}>
                    {job.status}
                  </span>
                </td>
                <td className="relative px-5 py-4">
                  <button
                    onClick={() => setActionMenuIndex(actionMenuIndex === idx ? null : idx)}
                    className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <MoreHorizontal size={18} />
                  </button>
                  {actionMenuIndex === idx && (
                    <div className="absolute right-5 top-full z-20 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                      <button onClick={() => { setActionMenuIndex(null); router.push("/admin/jobs/details"); }} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">View</button>
                      <button onClick={() => setActionMenuIndex(null)} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">Edit</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-amber-600">Showing Results: 2-10</p>
        <div className="flex items-center gap-1">
          <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100">
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button key={page} onClick={() => setCurrentPage(page)} className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${currentPage === page ? "bg-[#1B2A4A] text-white" : "text-gray-600 hover:bg-gray-100"}`}>
              {page}
            </button>
          ))}
          <span className="px-1 text-gray-400">...</span>
          <button onClick={() => setCurrentPage(totalPages)} className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${currentPage === totalPages ? "bg-[#1B2A4A] text-white" : "text-gray-600 hover:bg-gray-100"}`}>
            {totalPages}
          </button>
          <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
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

const paymentTabs = ["Registration Fee", "Platform Fee", "DAP Fee", "Bid Coin Spending"] as const;
type PaymentTab = (typeof paymentTabs)[number];

const stats = [
  { label: "Total Platform Income", value: "$4,250" },
  { label: "Total DAP Member Income", value: "$4,250" },
  { label: "Total Service Providers Income", value: "$4,250" },
];

const users = [
  "Cedric Ko...", "Erma Grady", "Lucia Stra...", "Damon Os...", "Sandy Mc...",
  "Timmy Wil...", "Jenna Pfa...", "Hugo Kutc...", "Andrea W...", "Robert Br...",
];

const amounts = ["$89.99", "$49.99", "$119.99", "$39.99", "$99.99", "$109.99", "$69.99", "$129.99", "$29.99", "$59.99"];

const registrationData = users.map((name, i) => ({
  userName: name,
  role: i % 2 === 0 ? "Lawyer" : "Client",
  amount: amounts[i],
  paymentDate: "12 Jun, 2025",
}));

const platformData = users.map((name, i) => ({
  userName: name,
  job: "Figma ipsum compone...",
  jobAmount: amounts[i],
  platformFee: amounts[i],
  jobPosted: "12 Jun, 2025",
}));

const dapData = users.map((name, i) => ({
  userName: name,
  job: "Figma ipsum compone...",
  jobAmount: amounts[i],
  platformFee: amounts[i],
  jobPosted: "12 Jun, 2025",
}));

const bidCoinData = users.map((name, i) => ({
  userName: name,
  totalCoinsPurchased: amounts[i],
  totalCoinsSpent: amounts[i],
  platformEarning: amounts[i],
  jobPosted: "12 Jun, 2025",
}));

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<PaymentTab>("Registration Fee");
  const [entriesPerPage, setEntriesPerPage] = useState(13);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(2);
  const [actionMenuIndex, setActionMenuIndex] = useState<number | null>(null);
  const totalPages = 10;

  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Payment Tabs */}
      <div className="flex gap-3">
        {paymentTabs.map((tab) => (
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

      {/* Registration Fee Table */}
      {activeTab === "Registration Fee" && (
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">User Name</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Role</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Amount</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Payment date</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {registrationData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm font-semibold text-[#1B2A4A]">{row.userName}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.role}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.amount}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.paymentDate}</td>
                  <td className="relative px-5 py-4">
                    <button onClick={() => setActionMenuIndex(actionMenuIndex === idx ? null : idx)} className="rounded-md p-1 text-gray-400 hover:bg-gray-100">
                      <MoreHorizontal size={18} />
                    </button>
                    {actionMenuIndex === idx && (
                      <div className="absolute right-5 top-full z-20 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                        <button onClick={() => setActionMenuIndex(null)} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">View</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Platform Fee / DAP Fee Table */}
      {(activeTab === "Platform Fee" || activeTab === "DAP Fee") && (
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">User Name</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Job</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Job Amount</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Platform Fee</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Job Posted</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === "Platform Fee" ? platformData : dapData).map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm font-semibold text-[#1B2A4A]">{row.userName}</td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-blue-600 underline cursor-pointer hover:text-blue-800">{row.job}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.jobAmount}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.platformFee}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.jobPosted}</td>
                  <td className="relative px-5 py-4">
                    <button onClick={() => setActionMenuIndex(actionMenuIndex === idx ? null : idx)} className="rounded-md p-1 text-gray-400 hover:bg-gray-100">
                      <MoreHorizontal size={18} />
                    </button>
                    {actionMenuIndex === idx && (
                      <div className="absolute right-5 top-full z-20 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                        <button onClick={() => setActionMenuIndex(null)} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">View</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bid Coin Spending Table */}
      {activeTab === "Bid Coin Spending" && (
        <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">User Name</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Total Coins Purchased</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Total Coins Spent</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Platform Earning</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Job Posted</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {bidCoinData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm font-semibold text-[#1B2A4A]">{row.userName}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.totalCoinsPurchased}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.totalCoinsSpent}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.platformEarning}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{row.jobPosted}</td>
                  <td className="relative px-5 py-4">
                    <button onClick={() => setActionMenuIndex(actionMenuIndex === idx ? null : idx)} className="rounded-md p-1 text-gray-400 hover:bg-gray-100">
                      <MoreHorizontal size={18} />
                    </button>
                    {actionMenuIndex === idx && (
                      <div className="absolute right-5 top-full z-20 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                        <button onClick={() => setActionMenuIndex(null)} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">View</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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

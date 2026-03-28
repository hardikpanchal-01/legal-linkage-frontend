"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown, BarChart3, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

const tabs = ["General Information", "Address", "Documents Uploaded", "Badge(s)", "Report"] as const;
type Tab = (typeof tabs)[number];

const generalInfo = {
  "Customer Name": "Bob Johnson",
  Email: "Bob123@example.com",
  "Phone Number": "(+145) 1231 4574 141",
  "Subscription Date": "12 Jun, 2025",
  Status: "Active",
};

const addressInfo = {
  "Street Address": "6565 W Loop S Fwy #800",
  City: "Bellaire",
  "State/Province": "Texas",
  "Postal/ Zip Code": "77401",
  Country: "United States",
};

const documents = [
  { name: "Passport", file: "passport.pdf" },
  { name: "Driving License", file: "driving_license.pdf" },
];

const profileStats = [
  { label: "Total posted Jobs", value: "3" },
  { label: "Total Spent", value: "$500+" },
  { label: "Total Hired Job", value: "2" },
];

const reportData = [
  {
    clientName: "John Doe",
    totalCases: 3,
    totalHiredJob: 3,
    totalDAPCases: 3,
    totalDAPSpendings: "$670",
    registrationFee: "$670",
    totalSpendingBfrTax: "$34,100",
  },
];

const deactivateOptions = ["15 Days", "90 Days", "Permanently"];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ActiveClientDetailsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("General Information");
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [deactivateSearch, setDeactivateSearch] = useState("");
  const [showDeactivateDropdown, setShowDeactivateDropdown] = useState(false);

  const filteredOptions = deactivateOptions.filter((o) =>
    o.toLowerCase().includes(deactivateSearch.toLowerCase())
  );

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">User Management</h1>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <Link href="/admin/users" className="hover:text-[#1B2A4A]">User Management</Link>
            <ChevronRight size={14} />
            <Link href="/admin/users" className="hover:text-[#1B2A4A]">Customer</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700">Customer Details</span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row">
            {/* Avatar */}
            <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-xl">
              <Image
                src="/images/profile.svg"
                alt="Bob Johnson"
                width={192}
                height={192}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-700">Bob Johnson</h2>

              {/* Deactivate Button */}
              <div className="mt-3">
                <button
                  onClick={() => setShowDeactivateModal(true)}
                  className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Deactivate Client
                </button>
              </div>

              {/* Stats Cards */}
              <div className="mt-4 flex flex-wrap gap-3">
                {profileStats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-3 rounded-xl px-5 py-4 ${
                      idx === 0
                        ? "bg-[#1B2A4A] text-white"
                        : "border border-gray-200 bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        idx === 0 ? "bg-white/20" : "bg-blue-50"
                      }`}
                    >
                      <BarChart3
                        size={18}
                        className={idx === 0 ? "text-white" : "text-[#1B2A4A]"}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-xs ${
                          idx === 0 ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {stat.label}
                      </p>
                      <p
                        className={`text-lg font-bold ${
                          idx === 0 ? "text-white" : "text-[#1B2A4A]"
                        }`}
                      >
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detail Tabs */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          {/* Tab Buttons */}
          <div className="mb-6 flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
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

          {/* Tab Content */}
          <div>
            {activeTab !== "Badge(s)" && activeTab !== "Report" && (
              <h3 className="mb-4 text-lg font-bold text-[#1B2A4A]">{activeTab}</h3>
            )}

            {/* General Information */}
            {activeTab === "General Information" && (
              <div className="space-y-4">
                {Object.entries(generalInfo).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-100 pb-3">
                    <p className="w-48 text-sm text-gray-500">{key}</p>
                    <p
                      className={`text-sm font-semibold ${
                        key === "Status" ? "text-green-500" : "text-[#1B2A4A]"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Address */}
            {activeTab === "Address" && (
              <div className="space-y-4">
                {Object.entries(addressInfo).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-100 pb-3">
                    <p className="w-48 text-sm text-gray-500">{key}</p>
                    <p className="text-sm font-semibold text-[#1B2A4A]">{value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Documents Uploaded */}
            {activeTab === "Documents Uploaded" && (
              <div className="flex flex-wrap gap-8">
                {documents.map((doc) => (
                  <div key={doc.name} className="w-36">
                    <p className="mb-2 text-sm text-gray-600">{doc.name}</p>
                    <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-gray-50">
                      <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
                        <path d="M0 4C0 1.79 1.79 0 4 0H30L48 18V52C48 54.21 46.21 56 44 56H4C1.79 56 0 54.21 0 52V4Z" fill="#E8D5D5" />
                        <path d="M30 0L48 18H34C31.79 18 30 16.21 30 14V0Z" fill="#D4A0A0" />
                        <text x="24" y="40" textAnchor="middle" fill="#C44040" fontSize="12" fontWeight="bold">PDF</text>
                      </svg>
                    </div>
                    <div className="mt-2 flex gap-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B2A4A] text-white hover:bg-[#2A3D66]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      </button>
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B2A4A] text-white hover:bg-[#2A3D66]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Badge(s) */}
            {activeTab === "Badge(s)" && (
              <div>
                <h3 className="mb-1 text-lg font-bold text-[#1B2A4A]">Badges Earned</h3>
                <div className="mt-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span>Partial verified</span>
                    <span className="font-semibold text-[#1B2A4A]">$10</span>
                  </div>
                  <div className="mt-3">
                    <Image
                      src="/images/partial-verified.svg"
                      alt="Partial Verified Badge"
                      width={80}
                      height={80}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Report */}
            {activeTab === "Report" && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B2A4A]">Client Based Report</h3>
                  <button className="rounded-lg bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
                    Download Report
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Client Name</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total Cases</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total Hired Job</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total DAP Cases</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total DAP Spendings</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Registration Fee</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total spending(Bfr Tax)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reportData.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-100 bg-green-50/50">
                          <td className="px-4 py-3 text-sm font-semibold text-[#1B2A4A]">{row.clientName}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.totalCases}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.totalHiredJob}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.totalDAPCases}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.totalDAPSpendings}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.registrationFee}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.totalSpendingBfrTax}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Deactivate Client Modal */}
      {showDeactivateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Deactivate Client</h2>
              <button
                onClick={() => { setShowDeactivateModal(false); setDeactivateSearch(""); setShowDeactivateDropdown(false); }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                <X size={14} />
              </button>
            </div>

            {/* Select Time Span */}
            <p className="mb-2 text-sm text-gray-600">Select Time Span</p>
            <div className="relative">
              <button
                onClick={() => setShowDeactivateDropdown(!showDeactivateDropdown)}
                className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700"
              >
                <span className={deactivateSearch ? "text-gray-700" : "text-gray-400"}>
                  {deactivateSearch || "Select"}
                </span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>

              {showDeactivateDropdown && (
                <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded-lg border border-gray-200 bg-white shadow-lg">
                  {filteredOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setDeactivateSearch(option);
                        setShowDeactivateDropdown(false);
                      }}
                      className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => { setShowDeactivateModal(false); setDeactivateSearch(""); setShowDeactivateDropdown(false); }}
                className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]"
              >
                Block
              </button>
              <button
                onClick={() => { setShowDeactivateModal(false); setDeactivateSearch(""); setShowDeactivateDropdown(false); }}
                className="rounded-lg border border-red-400 px-6 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

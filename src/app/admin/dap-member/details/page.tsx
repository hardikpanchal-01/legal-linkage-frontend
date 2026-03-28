"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  BarChart3,
  Star,
  Users,
  X,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tabs = ["General Information", "Disputes Assigned", "Registrations Assigned"] as const;
type Tab = (typeof tabs)[number];

const generalInfo = [
  { label: "Name", value: "Bob Johnson" },
  { label: "Email", value: "Bob123@example.com" },
  { label: "Phone Number", value: "(+145) 1231 4574 141" },
  { label: "Role", value: "Dispute Reviewer" },
];

const profileStats = [
  { label: "Active Cases Assigned", value: "150" },
  { label: "Resolved Cases", value: "84" },
  { label: "DAP Fee Received", value: "$10,000" },
];

type DisputeStatus = "Resolved" | "Pending" | "Rejected";
type RegStatus = "Pending" | "Approved" | "Rejected";

const disputesData = [
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Resolved" as DisputeStatus, rating: 4.8 },
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Resolved" as DisputeStatus, rating: 4.8 },
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Pending" as DisputeStatus, rating: 4.8 },
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Resolved" as DisputeStatus, rating: 4.8 },
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Pending" as DisputeStatus, rating: 4.8 },
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Rejected" as DisputeStatus, rating: 4.8 },
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Resolved" as DisputeStatus, rating: 4.8 },
  { caseId: "1495", caseTitle: "Title Here", client: "John Doe", lawyer: "Bob Johnson", opened: "12 Jun, 2025", closed: "12 Jun, 2025", outcome: "Client Refund", note: "Funds were releas...", status: "Pending" as DisputeStatus, rating: 4.8 },
];

type ClientType = "Individual" | "Organization" | "individual";

interface RegUser {
  name: string;
  username: string;
  email: string;
  registrationDate: string;
  clientType: ClientType;
  status: RegStatus;
}

const regClientUsers: RegUser[] = [
  { name: "Irving Purdy", username: "@Irving.Purdy77", email: "Lila.Ward@hotmail.com", registrationDate: "12 Jun, 2025", clientType: "Organization", status: "Pending" },
  { name: "Frances Leannon", username: "@Frances47", email: "Dennis.Stark@yahoo.c...", registrationDate: "12 Jun, 2025", clientType: "individual", status: "Pending" },
  { name: "Garrett Nicolas", username: "@Garrett71", email: "Becky_Harber30@gm...", registrationDate: "12 Jun, 2025", clientType: "Individual", status: "Approved" },
  { name: "Sheryl Macejkovic", username: "@Sheryl33", email: "Robin.Romaguera87@...", registrationDate: "12 Jun, 2025", clientType: "Organization", status: "Approved" },
  { name: "Alberto Johnston", username: "@Alberto.Johnston", email: "Verna.Kris44@yahoo.c...", registrationDate: "12 Jun, 2025", clientType: "individual", status: "Rejected" },
  { name: "Colleen Emmerich", username: "@Colleen38", email: "Philip.Huel72@gmail.c...", registrationDate: "12 Jun, 2025", clientType: "individual", status: "Pending" },
];

const regProviderUsers: RegUser[] = [
  { name: "John Smith", username: "@John.Smith", email: "john.smith@lawfirm.com", registrationDate: "10 Jun, 2025", clientType: "Individual", status: "Approved" },
  { name: "Sarah Williams", username: "@Sarah.W", email: "sarah.w@legal.com", registrationDate: "11 Jun, 2025", clientType: "Organization", status: "Pending" },
  { name: "Michael Brown", username: "@Michael.B", email: "m.brown@attorneys.com", registrationDate: "12 Jun, 2025", clientType: "Individual", status: "Approved" },
  { name: "Emily Davis", username: "@Emily.D", email: "emily.d@lawgroup.com", registrationDate: "12 Jun, 2025", clientType: "Organization", status: "Rejected" },
];

const disputeStatusStyles: Record<DisputeStatus, string> = {
  Resolved: "bg-green-500 text-white",
  Pending: "bg-amber-400 text-white",
  Rejected: "bg-red-500 text-white",
};

const regStatusStyles: Record<RegStatus, string> = {
  Pending: "bg-amber-400 text-white",
  Approved: "bg-green-500 text-white",
  Rejected: "bg-red-500 text-white",
};

const regSubTabs = ["Clients", "Legal Service Providers"] as const;

const deactivateOptions = ["15 Days", "90 Days", "Permanently"];

/* ------------------------------------------------------------------ */
/*  Pagination                                                         */
/* ------------------------------------------------------------------ */

function Pagination({ currentPage, setCurrentPage }: { currentPage: number; setCurrentPage: (p: number) => void }) {
  const totalPages = 10;
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-amber-600">Showing Results: 2-10</p>
      <div className="flex items-center gap-1">
        <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100"><ChevronLeft size={16} /></button>
        {[1, 2, 3, 4].map((page) => (
          <button key={page} onClick={() => setCurrentPage(page)} className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${currentPage === page ? "bg-[#1B2A4A] text-white" : "text-gray-600 hover:bg-gray-100"}`}>{page}</button>
        ))}
        <span className="px-1 text-gray-400">...</span>
        <button onClick={() => setCurrentPage(totalPages)} className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${currentPage === totalPages ? "bg-[#1B2A4A] text-white" : "text-gray-600 hover:bg-gray-100"}`}>{totalPages}</button>
        <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100"><ChevronRight size={16} /></button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DapMemberDetailsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("General Information");
  const [currentPage, setCurrentPage] = useState(2);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [blockSelected, setBlockSelected] = useState("");
  const [showBlockDropdown, setShowBlockDropdown] = useState(false);
  const [regSubTab, setRegSubTab] = useState<"Clients" | "Legal Service Providers">("Clients");

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">User Management</h1>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <Link href="/admin/users" className="hover:text-[#1B2A4A]">User Management</Link>
            <ChevronRight size={14} />
            <Link href="/admin/dap-member" className="hover:text-[#1B2A4A]">DAP Member</Link>
          </div>
        </div>

        {/* Profile Card */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-xl">
              <Image src="/images/profile.svg" alt="Gary Upton" width={192} height={192} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-700">Gary Upton</h2>

              {/* Action Buttons */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <button className="rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
                  Assign Registration
                </button>
                <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-[#1B2A4A] hover:bg-gray-50">
                  Assign Dispute
                </button>
                <div className="flex-1" />
                <button
                  onClick={() => setShowBlockModal(true)}
                  className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Block Account
                </button>
              </div>

              {/* Stats Cards */}
              <div className="mt-4 flex flex-wrap gap-3">
                {profileStats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex items-center gap-3 rounded-xl px-5 py-4 ${
                      idx === 0 ? "bg-[#1B2A4A] text-white" : "border border-gray-200 bg-white"
                    }`}
                  >
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${idx === 0 ? "bg-white/20" : "bg-blue-50"}`}>
                      <BarChart3 size={18} className={idx === 0 ? "text-white" : "text-[#1B2A4A]"} />
                    </div>
                    <div>
                      <p className={`text-lg font-bold ${idx === 0 ? "text-white" : "text-[#1B2A4A]"}`}>{stat.value}</p>
                      <p className={`text-xs ${idx === 0 ? "text-white/70" : "text-gray-500"}`}>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detail Tabs */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
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

          <div>
            {/* General Information */}
            {activeTab === "General Information" && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#1B2A4A]">General Information</h3>
                <div className="space-y-4">
                  {generalInfo.map(({ label, value }) => (
                    <div key={label} className="flex border-b border-gray-100 pb-3">
                      <p className="w-48 text-sm text-gray-500">{label}</p>
                      <p className="text-sm font-semibold text-[#1B2A4A]">{value}</p>
                    </div>
                  ))}
                  {/* Average Review Ratings */}
                  <div className="flex border-b border-gray-100 pb-3">
                    <p className="w-48 text-sm text-gray-500">Average Review Ratings</p>
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-amber-400 text-amber-400" />
                      <p className="text-sm font-semibold text-[#1B2A4A]">4.8</p>
                    </div>
                  </div>
                  {/* Permissions */}
                  <div className="flex border-b border-gray-100 pb-3">
                    <p className="w-48 text-sm text-gray-500">Permissions</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <Users size={14} className="text-[#1B2A4A]" />
                        <span className="text-sm font-medium text-[#1B2A4A]">Dispute Management</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users size={14} className="text-[#1B2A4A]" />
                        <span className="text-sm font-medium text-[#1B2A4A]">Registration Management</span>
                      </div>
                    </div>
                  </div>
                  {/* Status */}
                  <div className="flex border-b border-gray-100 pb-3">
                    <p className="w-48 text-sm text-gray-500">Status</p>
                    <p className="text-sm font-semibold text-green-500">Active</p>
                  </div>
                </div>
              </div>
            )}

            {/* Disputes Assigned */}
            {activeTab === "Disputes Assigned" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B2A4A]">Dispute History</h3>
                  <div className="flex items-center gap-3">
                    <div className="relative w-56">
                      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="Search here..." className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:outline-none" />
                    </div>
                    <button className="flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
                      <SlidersHorizontal size={16} /> Filter
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Case ID</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Case Title</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Client</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Lawyer</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Opened</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Closed</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Outcome</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Note</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Status</th>
                        <th className="px-3 py-3 text-xs font-semibold text-gray-500">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {disputesData.map((d, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-3 py-3 text-sm text-gray-600">{d.caseId}</td>
                          <td className="px-3 py-3 text-sm text-gray-600">{d.caseTitle}</td>
                          <td className="px-3 py-3 text-sm text-gray-600">{d.client}</td>
                          <td className="px-3 py-3 text-sm text-gray-600">{d.lawyer}</td>
                          <td className="px-3 py-3 text-sm text-gray-600">{d.opened}</td>
                          <td className="px-3 py-3 text-sm text-gray-600">{d.closed}</td>
                          <td className="px-3 py-3 text-sm text-gray-600">{d.outcome}</td>
                          <td className="px-3 py-3 text-sm text-gray-600">{d.note}</td>
                          <td className="px-3 py-3">
                            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${disputeStatusStyles[d.status]}`}>{d.status}</span>
                          </td>
                          <td className="px-3 py-3">
                            <div className="flex items-center gap-1">
                              <Star size={14} className="fill-amber-400 text-amber-400" />
                              <span className="text-sm font-semibold text-[#1B2A4A]">{d.rating}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
            )}

            {/* Registrations Assigned */}
            {activeTab === "Registrations Assigned" && (() => {
              const regUsers = regSubTab === "Clients" ? regClientUsers : regProviderUsers;
              return (
                <div className="space-y-4">
                  {/* Sub Tabs */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-3">
                      {regSubTabs.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => setRegSubTab(sub)}
                          className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                            regSubTab === sub
                              ? "bg-[#1B2A4A] text-white"
                              : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                          }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative w-56">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="text" placeholder="Search here..." className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:outline-none" />
                      </div>
                      <button className="flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
                        <SlidersHorizontal size={16} /> Filter
                      </button>
                    </div>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-5 py-3 text-xs font-semibold text-gray-500">Customer Name</th>
                          <th className="px-5 py-3 text-xs font-semibold text-gray-500">Email</th>
                          <th className="px-5 py-3 text-xs font-semibold text-gray-500">Registration Date</th>
                          <th className="px-5 py-3 text-xs font-semibold text-gray-500">Client Type</th>
                          <th className="px-5 py-3 text-xs font-semibold text-gray-500">Status</th>
                          <th className="px-5 py-3 text-xs font-semibold text-gray-500">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {regUsers.map((user, idx) => (
                          <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                            <td className="px-5 py-4">
                              <p className="text-sm font-semibold text-[#1B2A4A]">{user.name}</p>
                              <p className="text-xs text-gray-400">{user.username}</p>
                            </td>
                            <td className="px-5 py-4 text-sm text-gray-600">{user.email}</td>
                            <td className="px-5 py-4 text-sm text-gray-600">{user.registrationDate}</td>
                            <td className="px-5 py-4">
                              <span className={`text-sm font-medium ${user.clientType === "Organization" ? "text-amber-600" : "text-blue-600"}`}>
                                {user.clientType}
                              </span>
                            </td>
                            <td className="px-5 py-4">
                              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${regStatusStyles[user.status]}`}>
                                {user.status === "Approved" ? "Active" : user.status === "Rejected" ? "Inactive" : user.status}
                              </span>
                            </td>
                            <td className="px-5 py-4">
                              <button className="rounded-md p-1 text-gray-400 hover:bg-gray-100"><MoreHorizontal size={18} /></button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Block Account Modal */}
      {showBlockModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Block Account</h2>
              <button onClick={() => { setShowBlockModal(false); setBlockSelected(""); setShowBlockDropdown(false); }} className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600">
                <X size={14} />
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-600">Select Time Span</p>
            <div className="relative">
              <button onClick={() => setShowBlockDropdown(!showBlockDropdown)} className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700">
                <span className={blockSelected ? "text-gray-700" : "text-gray-400"}>{blockSelected || "Select"}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              {showBlockDropdown && (
                <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded-lg border border-gray-200 bg-white shadow-lg">
                  {deactivateOptions.map((option) => (
                    <button key={option} onClick={() => { setBlockSelected(option); setShowBlockDropdown(false); }} className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">{option}</button>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-5 flex gap-3">
              <button onClick={() => { setShowBlockModal(false); setBlockSelected(""); setShowBlockDropdown(false); }} className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]">Block</button>
              <button onClick={() => { setShowBlockModal(false); setBlockSelected(""); setShowBlockDropdown(false); }} className="rounded-lg border border-red-400 px-6 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

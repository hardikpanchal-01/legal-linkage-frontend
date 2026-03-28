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
  X,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Status = "Pending" | "Active" | "Inactive";
type ClientType = "Individual" | "Organization";

interface ClientUser {
  name: string;
  username: string;
  email: string;
  registrationDate: string;
  clientType: ClientType;
  status: Status;
}

interface ProviderUser {
  name: string;
  username: string;
  email: string;
  registrationDate: string;
  specialities: string[];
  status: Status;
}

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const clientUsers: ClientUser[] = [
  { name: "Irving Purdy", username: "@Irving.Purdy77", email: "Lila.Ward@hotmail.com", registrationDate: "12 Jun, 2025", clientType: "Organization", status: "Pending" },
  { name: "Frances Leannon", username: "@Frances47", email: "Dennis.Stark@yahoo.c...", registrationDate: "12 Jun, 2025", clientType: "Individual", status: "Pending" },
  { name: "Garrett Nicolas", username: "@Garrett71", email: "Becky_Harber30@gm...", registrationDate: "12 Jun, 2025", clientType: "Individual", status: "Active" },
  { name: "Sheryl Macejkovic", username: "@Sheryl33", email: "Robin.Romaguera87@...", registrationDate: "12 Jun, 2025", clientType: "Organization", status: "Active" },
  { name: "Alberto Johnston", username: "@Alberto.Johnston", email: "Verna.Kris44@yahoo.c...", registrationDate: "12 Jun, 2025", clientType: "Individual", status: "Inactive" },
  { name: "Colleen Emmerich", username: "@Colleen38", email: "Philip.Huel72@gmail.c...", registrationDate: "12 Jun, 2025", clientType: "Individual", status: "Pending" },
  { name: "Sam Bashirian", username: "@Sam.Bashirian", email: "Janice.Brown@hotmai...", registrationDate: "12 Jun, 2025", clientType: "Organization", status: "Inactive" },
  { name: "Wendy Daniel", username: "@Wendy24", email: "Rafael_Bergstrom35@...", registrationDate: "12 Jun, 2025", clientType: "Individual", status: "Inactive" },
];

const providerUsers: ProviderUser[] = [
  { name: "Leigh Kunze", username: "@Leigh.Kunze", email: "Leigh45@yahoo.co...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Pending" },
  { name: "Kelli Olson", username: "@Kelli32", email: "Kelli_Olson80@gm...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Active" },
  { name: "Ismael Hamill", username: "@Ismael.Hamill", email: "IsmaeL_Hamill@yah...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Inactive" },
  { name: "Kerry Langworth", username: "@Kerry.Langworth42", email: "Kerry_Langworth@...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Active" },
  { name: "Leticia Witting", username: "@Leticia23", email: "Leticia_Witting@g...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Inactive" },
  { name: "Ted Pacocha", username: "@Ted.Pacocha92", email: "Ted_Pacocha76@ya...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Active" },
  { name: "Juana Hackett", username: "@Juana.Hackett", email: "Juana50@yahoo.co...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Active" },
  { name: "Jeremiah Stark", username: "@Jeremiah.Stark3", email: "Jeremiah41@gmail...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Pending" },
  { name: "Phyllis Gleason", username: "@Phyllis36", email: "Phyllis.Gleason19@...", registrationDate: "12 Jun, 2025", specialities: ["Lawyer", "Notaries (QC)"], status: "Pending" },
];

const mainTabs = ["Clients", "Legal Service Providers"] as const;
type MainTab = (typeof mainTabs)[number];

const providerSubTabs = ["All", "Paralegal", "RCIC", "Notary Public", "Commissioner for Oaths", "Arbitrator", "Mediator", "Legal Consultant"] as const;

const clientStats = [
  { label: "Total Registered Clients", value: 450 },
  { label: "Active Clients", value: 450 },
  { label: "Verified Clients", value: 450 },
  { label: "Total Jobs Posted", value: 450 },
];

const providerStats = [
  { label: "Total Registered Clients", value: 450 },
  { label: "Active Clients", value: 450 },
  { label: "Verified Clients", value: 450 },
  { label: "Total Jobs Posted", value: 450 },
];

/* ------------------------------------------------------------------ */
/*  Status Badge                                                       */
/* ------------------------------------------------------------------ */

const statusStyles: Record<Status, string> = {
  Pending: "bg-amber-400 text-white",
  Active: "bg-green-500 text-white",
  Inactive: "bg-red-500 text-white",
};

function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}>
      {status}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Stat Card                                                          */
/* ------------------------------------------------------------------ */

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
        <BarChart3 size={22} className="text-[#1B2A4A]" />
      </div>
      <div>
        <p className="text-xs text-gray-500 leading-tight">{label}</p>
        <p className="mt-1 text-2xl font-bold text-[#1B2A4A]">{value}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function UserManagementPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<MainTab>("Clients");
  const [activeSubTab, setActiveSubTab] = useState("All");
  const [entriesPerPage, setEntriesPerPage] = useState(13);
  const [searchQuery, setSearchQuery] = useState("");
  const [actionMenuIndex, setActionMenuIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(2);
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const stats = activeTab === "Clients" ? clientStats : providerStats;
  const totalPages = 10;

  const filteredClientUsers = clientUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProviderUsers = providerUsers.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getClientActionItems = (status: Status) => {
    if (status === "Pending") {
      return [
        { label: "View", action: () => { setActionMenuIndex(null); router.push("/admin/users/client-details"); } },
        { label: "Accept Request", action: () => setActionMenuIndex(null), className: "text-green-600" },
        { label: "Reject Request", action: () => { setActionMenuIndex(null); setShowRejectionModal(true); }, className: "text-red-500" },
      ];
    }
    return [
      { label: "View", action: () => { setActionMenuIndex(null); router.push("/admin/users/active-client-details"); } },
      { label: "Edit", action: () => setActionMenuIndex(null) },
      { label: "Deactivate", action: () => setActionMenuIndex(null), className: "text-red-500" },
    ];
  };

  const getProviderActionItems = (status: Status) => {
    if (status === "Pending") {
      return [
        { label: "View", action: () => { setActionMenuIndex(null); router.push("/admin/users/provider-details"); } },
        { label: "Accept Requests", action: () => setActionMenuIndex(null), className: "text-green-600" },
        { label: "Reject Request", action: () => { setActionMenuIndex(null); setShowRejectionModal(true); }, className: "text-red-500" },
      ];
    }
    return [
      { label: "View", action: () => { setActionMenuIndex(null); router.push("/admin/users/active-provider-details"); } },
      { label: "Edit", action: () => setActionMenuIndex(null) },
      { label: "Deactivate", action: () => setActionMenuIndex(null), className: "text-red-500" },
    ];
  };

  return (
    <>
      <div className="space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#1B2A4A]">User Management</h1>

        {/* Main Tabs */}
        <div className="flex gap-3">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setCurrentPage(1); setSearchQuery(""); setActionMenuIndex(null); setActiveSubTab("All"); }}
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

        {/* Provider Sub Tabs */}
        {activeTab === "Legal Service Providers" && (
          <div className="flex flex-wrap gap-1 border-b border-gray-200">
            {providerSubTabs.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubTab(sub)}
                className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeSubTab === sub
                    ? "border-b-2 border-[#1B2A4A] text-[#1B2A4A]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Table Controls */}
        <div className="flex items-center justify-between">
          {/* Entries selector */}
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
            {/* Search */}
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

            {/* Filter button (providers only) */}
            {activeTab === "Legal Service Providers" && (
              <button className="flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
                <SlidersHorizontal size={16} />
                Filter
              </button>
            )}
          </div>
        </div>

        {/* Client Table */}
        {activeTab === "Clients" && (
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Customer Name</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Email</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Registration Date</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Client Type</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Status</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500"></th>
                </tr>
              </thead>
              <tbody>
                {filteredClientUsers.map((user, idx) => (
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
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="relative px-5 py-4">
                      <button
                        onClick={() => setActionMenuIndex(actionMenuIndex === idx ? null : idx)}
                        className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      >
                        <MoreHorizontal size={18} />
                      </button>
                      {actionMenuIndex === idx && (
                        <div className="absolute right-5 top-full z-20 w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                          {getClientActionItems(user.status).map((item) => (
                            <button
                              key={item.label}
                              onClick={item.action}
                              className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${item.className || "text-gray-700"}`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Provider Table */}
        {activeTab === "Legal Service Providers" && (
          <div className="overflow-x-auto rounded-xl bg-white shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Lawyer Name</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Email</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Registration Date</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Legal Speciality</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500">Status</th>
                  <th className="px-5 py-3 text-xs font-semibold text-gray-500"></th>
                </tr>
              </thead>
              <tbody>
                {filteredProviderUsers.map((user, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="px-5 py-4">
                      <p className="text-sm font-semibold text-[#1B2A4A]">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.username}</p>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600">{user.email}</td>
                    <td className="px-5 py-4 text-sm text-gray-600">{user.registrationDate}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {user.specialities.map((spec) => (
                          <span
                            key={spec}
                            className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700"
                          >
                            {spec}
                          </span>
                        ))}
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
                          +2
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="relative px-5 py-4">
                      <button
                        onClick={() => setActionMenuIndex(actionMenuIndex === idx ? null : idx)}
                        className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                      >
                        <MoreHorizontal size={18} />
                      </button>
                      {actionMenuIndex === idx && (
                        <div className="absolute right-5 top-full z-20 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                          {getProviderActionItems(user.status).map((item) => (
                            <button
                              key={item.label}
                              onClick={item.action}
                              className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-50 ${item.className || "text-gray-700"}`}
                            >
                              {item.label}
                            </button>
                          ))}
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
          <p className="text-sm text-amber-600 font-semibold">
            Showing Results: {(currentPage - 1) * entriesPerPage + 1}-
            {Math.min(currentPage * entriesPerPage, 100)}
          </p>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100"
            >
              <ChevronLeft size={16} />
            </button>

            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
                  currentPage === page
                    ? "bg-[#1B2A4A] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <span className="px-1 text-gray-400">...</span>

            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium ${
                currentPage === totalPages
                  ? "bg-[#1B2A4A] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {totalPages}
            </button>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className="flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Rejection Modal */}
      {showRejectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Reason for Rejection</h2>
              <button
                onClick={() => { setShowRejectionModal(false); setRejectionReason(""); }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                <X size={14} />
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-600">Enter reason for rejection</p>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Message"
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-300 p-3 text-sm placeholder:text-gray-400 focus:outline-none"
            />
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => { setShowRejectionModal(false); setRejectionReason(""); }}
                className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]"
              >
                Send
              </button>
              <button
                onClick={() => { setShowRejectionModal(false); setRejectionReason(""); }}
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

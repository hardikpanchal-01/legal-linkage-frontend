"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronDown, X, Eye, Download } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

const tabs = ["General Information", "Address", "Documents Uploaded", "Badge(s)"] as const;
type Tab = (typeof tabs)[number];

const generalInfo = {
  "Customer Name": "Bob Johnson",
  Email: "Bob123@example.com",
  "Phone Number": "(+145) 1231 4574 141",
  "Subscription Date": "12 Jun, 2025",
  Status: "Request Pending",
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

const dapMembers = [
  "Alberto Rim",
  "Albertan Jack",
  "Alice Morgan",
  "Andrew Peters",
  "Angela Smith",
  "Ben Williams",
  "Brian Cooper",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ClientDetailsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("General Information");
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignSearch, setAssignSearch] = useState("");
  const [assignedMember, setAssignedMember] = useState<string | null>(null);

  const filteredMembers = dapMembers.filter((m) =>
    m.toLowerCase().includes(assignSearch.toLowerCase())
  );

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">User Management</h1>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <Link href="/dap/registration" className="hover:text-[#1B2A4A]">User Management</Link>
            <ChevronRight size={14} />
            <Link href="/dap/registration" className="hover:text-[#1B2A4A]">Client</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700">Client Details</span>
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

              {/* Action Buttons */}
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {!assignedMember && (
                  <button
                    onClick={() => setShowAssignModal(true)}
                    className="rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]"
                  >
                    Assign To Member
                  </button>
                )}
                <button className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-[#1B2A4A] hover:bg-gray-50">
                  Accept Request
                </button>
                {!assignedMember && <div className="flex-1" />}
                <button
                  onClick={() => setShowRejectModal(true)}
                  className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700"
                >
                  Reject Request
                </button>
              </div>

              {/* Assigned Member Notice */}
              {assignedMember && (
                <div className="mt-4 flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
                  <p className="text-sm text-gray-600">
                    Request Assigned to <span className="font-bold text-[#1B2A4A]">{assignedMember}</span>
                  </p>
                  <button
                    onClick={() => setAssignedMember(null)}
                    className="text-sm font-semibold text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Account Request Notice */}
              <div className="mt-4 flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-[#1B2A4A]">Account Request</p>
                  <p className="text-sm text-gray-500">2 Attempts left to verify</p>
                </div>
                <p className="text-xs text-gray-400">2 days ago</p>
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
            {activeTab !== "Badge(s)" && (
              <h3 className="mb-4 text-lg font-bold text-[#1B2A4A]">{activeTab}</h3>
            )}

            {activeTab === "General Information" && (
              <div className="space-y-4">
                {Object.entries(generalInfo).map(([key, value]) => (
                  <div key={key} className="flex border-b border-gray-100 pb-3">
                    <p className="w-48 text-sm text-gray-500">{key}</p>
                    <p
                      className={`text-sm font-semibold ${
                        key === "Status" ? "text-amber-500" : "text-[#1B2A4A]"
                      }`}
                    >
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}

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

            {activeTab === "Documents Uploaded" && (
              <div className="flex flex-wrap gap-8">
                {documents.map((doc) => (
                  <div key={doc.name} className="w-36">
                    <p className="mb-2 text-sm text-gray-600">{doc.name}</p>
                    {/* PDF Icon */}
                    <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-gray-50">
                      <div className="flex flex-col items-center">
                        <svg width="48" height="56" viewBox="0 0 48 56" fill="none">
                          <path d="M0 4C0 1.79 1.79 0 4 0H30L48 18V52C48 54.21 46.21 56 44 56H4C1.79 56 0 54.21 0 52V4Z" fill="#E8D5D5" />
                          <path d="M30 0L48 18H34C31.79 18 30 16.21 30 14V0Z" fill="#D4A0A0" />
                          <text x="24" y="40" textAnchor="middle" fill="#C44040" fontSize="12" fontWeight="bold">PDF</text>
                        </svg>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="mt-2 flex gap-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B2A4A] text-white hover:bg-[#2A3D66]">
                        <Eye size={14} />
                      </button>
                      <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B2A4A] text-white hover:bg-[#2A3D66]">
                        <Download size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

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
          </div>
        </div>
      </div>

      {/* Assign To DAP Member Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Assign Request To DAP Member</h2>
              <button
                onClick={() => { setShowAssignModal(false); setAssignSearch(""); }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                <X size={14} />
              </button>
            </div>

            {/* Search */}
            <p className="mb-2 text-sm text-gray-600">Search for DAP Member</p>
            <div className="relative">
              <input
                type="text"
                value={assignSearch}
                onChange={(e) => setAssignSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-300 py-2.5 pl-3 pr-10 text-sm placeholder:text-gray-400 focus:outline-none"
              />
              <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Dropdown Results */}
            {assignSearch && filteredMembers.length > 0 && (
              <div className="mt-1 max-h-40 overflow-y-auto rounded-lg border border-gray-200 bg-white">
                {filteredMembers.map((member) => (
                  <button
                    key={member}
                    onClick={() => setAssignSearch(member)}
                    className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"
                  >
                    {member}
                  </button>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => {
                  if (assignSearch) {
                    setAssignedMember(assignSearch);
                    setShowAssignModal(false);
                    setAssignSearch("");
                  }
                }}
                className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]"
              >
                Assign
              </button>
              <button
                onClick={() => { setShowAssignModal(false); setAssignSearch(""); }}
                className="rounded-lg border border-red-400 px-6 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rejection Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Reason for Rejection</h2>
              <button
                onClick={() => { setShowRejectModal(false); setRejectionReason(""); }}
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
                onClick={() => { setShowRejectModal(false); setRejectionReason(""); }}
                className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]"
              >
                Send
              </button>
              <button
                onClick={() => { setShowRejectModal(false); setRejectionReason(""); }}
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

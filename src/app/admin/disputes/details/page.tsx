"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const dapMembers = [
  "Alberto Rim",
  "Albertan Jack",
  "Alice Morgan",
  "Andrew Peters",
  "Angela Smith",
];

const loremText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DisputeDetailsPage() {
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignSearch, setAssignSearch] = useState("");
  const [isResolved, setIsResolved] = useState(false);
  const [showChatModal, setShowChatModal] = useState(false);
  const [chatTab, setChatTab] = useState<"Lawyer" | "Client" | "Group">("Group");

  const filteredMembers = dapMembers.filter((m) =>
    m.toLowerCase().includes(assignSearch.toLowerCase())
  );

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1B2A4A]">Dispute Details</h1>
            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <Link href="/admin/disputes" className="hover:text-[#1B2A4A]">Dispute Management</Link>
              <ChevronRight size={14} />
              <span className="text-gray-700">Dispute Details</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!isResolved && (
              <button
                onClick={() => setShowAssignModal(true)}
                className="rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]"
              >
                Assign DAP Member
              </button>
            )}
            <button
              onClick={() => setIsResolved(!isResolved)}
              className="rounded-full border border-[#1B2A4A] bg-white px-5 py-2 text-sm font-semibold text-[#1B2A4A] hover:bg-gray-50"
            >
              View Details
            </button>
          </div>
        </div>

        {/* General Information */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">General Information</h2>
          <div className="space-y-4">
            {/* DAP */}
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">DAP</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">Alberto Rim</p>
            </div>
            {/* Dispute ID */}
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Dispute ID</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">DSP-1025</p>
            </div>
            {/* Parties Involved */}
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Parties Involved</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">
                John Doe <span className="font-normal text-gray-500">(Client)</span>
                {" "}&amp;{" "}
                Bob Johnson <span className="font-normal text-gray-500">(Lawyer)</span>
              </p>
            </div>
            {/* Initiator */}
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Initiator</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">
                John Doe <span className="font-normal text-gray-500">(Client)</span>
              </p>
            </div>
            {/* Status */}
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Status</p>
              <p className={`text-sm font-semibold ${isResolved ? "text-green-500" : "text-red-500"}`}>
                {isResolved ? "Resolved" : "Unresolved"}
              </p>
            </div>
            {/* Reason */}
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 flex-shrink-0 text-sm text-gray-500">Reason</p>
              <p className="text-sm text-gray-700">{loremText}</p>
            </div>

            {/* Payment Escrow */}
            <h3 className="pt-2 text-base font-bold text-blue-600">Payment Escrow</h3>
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Lawyer</p>
              <p className="text-sm font-semibold text-green-500">Done</p>
            </div>
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Client</p>
              {isResolved ? (
                <p className="text-sm font-semibold text-green-500">Done</p>
              ) : (
                <div className="flex flex-1 items-center justify-between">
                  <p className="text-sm font-semibold text-amber-500">Pending</p>
                  <p className="text-sm font-semibold text-red-500">16 hrs left to escrow</p>
                </div>
              )}
            </div>

            {/* Reviews (resolved only) */}
            {isResolved && (
              <>
                <h3 className="pt-2 text-base font-bold text-[#1B2A4A]">Reviews</h3>
                <div className="flex border-b border-gray-100 pb-3">
                  <p className="w-48 flex-shrink-0 text-sm text-gray-500">DAP</p>
                  <p className="text-sm text-gray-700">{loremText}</p>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <p className="w-48 flex-shrink-0 text-sm text-gray-500">Lawyer</p>
                  <p className="text-sm text-gray-700">{loremText}</p>
                </div>
                <div className="flex border-b border-gray-100 pb-3">
                  <p className="w-48 flex-shrink-0 text-sm text-gray-500">Client</p>
                  <p className="text-sm text-gray-700">{loremText}</p>
                </div>

                <h3 className="pt-2 text-base font-bold text-blue-600">Resolution Details</h3>
                <div className="flex border-b border-gray-100 pb-3">
                  <p className="w-48 text-sm text-gray-500">Method</p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">Payment Refund</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Job Info */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Job Info</h2>
          <div className="space-y-4">
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Job ID</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">DSP-1025</p>
            </div>
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Contract amount</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">$900</p>
            </div>
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Initiator</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">
                John Doe <span className="font-normal text-gray-500">(Client)</span>
              </p>
            </div>
            <div className="flex border-b border-gray-100 pb-3">
              <p className="w-48 text-sm text-gray-500">Link to the Job</p>
              <a href="#" className="text-sm font-semibold text-blue-600 underline hover:text-blue-800">
                Figma ipsum componentFigma ipsum component
              </a>
            </div>
          </div>
        </div>

        {/* Communication History */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Communication History</h2>
          <button
            onClick={() => setShowChatModal(true)}
            className="rounded-full bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]"
          >
            View Communication History
          </button>
        </div>
      </div>

      {/* Communication History Modal */}
      {showChatModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex h-[80vh] w-full max-w-lg flex-col rounded-2xl bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Dispute Title</h2>
              <button
                onClick={() => setShowChatModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Tabs */}
            <div className="flex gap-3 border-b border-gray-100 px-6 py-3">
              {(["Lawyer", "Client", "Group"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setChatTab(tab)}
                  className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-colors ${
                    chatTab === tab
                      ? "bg-[#1B2A4A] text-white"
                      : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {/* Received message */}
              <div>
                <div className="inline-block rounded-lg bg-blue-50 px-4 py-2">
                  <p className="text-sm text-gray-700">Hello There</p>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-200" />
                  <span className="text-xs text-gray-400">10:11 AM</span>
                </div>
              </div>

              {/* Received long message */}
              <div>
                <div className="max-w-sm space-y-1">
                  <div className="rounded-lg bg-red-50 px-4 py-2">
                    <p className="text-sm text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 px-4 py-2">
                    <p className="text-sm text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-200" />
                  <span className="text-xs text-gray-400">10:11 AM</span>
                </div>
              </div>

              {/* Sent message */}
              <div className="flex flex-col items-end">
                <div className="inline-block rounded-lg bg-gray-100 px-4 py-2">
                  <p className="text-sm text-gray-700">Lorem ipsum is simply a dummy text.</p>
                </div>
                <span className="mt-1 text-xs text-gray-400">10:11 AM</span>
              </div>

              {/* Received messages */}
              <div>
                <div className="max-w-sm space-y-1">
                  <div className="rounded-lg bg-red-50 px-4 py-2">
                    <p className="text-sm text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 px-4 py-2">
                    <p className="text-sm text-gray-700">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-200" />
                  <span className="text-xs text-gray-400">10:11 AM</span>
                </div>
              </div>

              {/* Sent message */}
              <div className="flex flex-col items-end">
                <div className="inline-block rounded-lg bg-gray-100 px-4 py-2">
                  <p className="text-sm text-gray-700">Lorem ipsum is simply a dummy text.</p>
                </div>
                <span className="mt-1 text-xs text-gray-400">10:11 AM</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Assign Dispute To DAP Member Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Assign Dispute To DAP Member</h2>
              <button
                onClick={() => { setShowAssignModal(false); setAssignSearch(""); }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                <X size={14} />
              </button>
            </div>
            <div className="mb-4 rounded-lg bg-red-50 px-4 py-2.5">
              <p className="text-sm text-red-600">There is no reassignment, do consider before assignment</p>
            </div>
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
            <div className="mt-5 flex gap-3">
              <button
                onClick={() => { setShowAssignModal(false); setAssignSearch(""); }}
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
    </>
  );
}

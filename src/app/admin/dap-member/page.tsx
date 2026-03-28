"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  SlidersHorizontal,
  Plus,
  X,
  User,
  Upload,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

type Status = "Active" | "Inactive";

interface DapMember {
  memberId: string;
  memberName: string;
  email: string;
  permissions: string;
  status: Status;
}

const members: DapMember[] = [
  { memberId: "1495", memberName: "Beverly Rowe-Hett...", email: "Beverly.Rowe-Hettin...", permissions: "Registration+Disput...", status: "Active" },
  { memberId: "1495", memberName: "Roman Beer", email: "Roman.Beer@yahoo...", permissions: "Registration+Disput...", status: "Active" },
  { memberId: "1495", memberName: "Angelina Hahn", email: "Angelina_Hahn@ya...", permissions: "Registration+Disput...", status: "Inactive" },
  { memberId: "1495", memberName: "Dan Rath", email: "Dan.Rath@gmail.co...", permissions: "Dispute Manager", status: "Active" },
  { memberId: "1495", memberName: "Shannon Schneider", email: "Shannon_Schneider...", permissions: "Registration+Disput...", status: "Active" },
  { memberId: "1495", memberName: "Colin Will", email: "Colin_Will69@hotm...", permissions: "Dispute Manager", status: "Inactive" },
  { memberId: "1495", memberName: "Brenda Wolf", email: "Brenda20@yahoo.c...", permissions: "Dispute Manager", status: "Active" },
  { memberId: "1495", memberName: "Pat Leannon", email: "Pat3@hotmail.com", permissions: "Dispute Manager", status: "Active" },
  { memberId: "1495", memberName: "Crystal Konopelski", email: "Crystal26@gmail.com", permissions: "Registration+Disput...", status: "Inactive" },
  { memberId: "1495", memberName: "Thomas Goodwin", email: "Thomas.Goodwin6...", permissions: "Registration+Disput...", status: "Active" },
  { memberId: "1495", memberName: "Suzanne Thompso...", email: "Suzanne67@gmail.c...", permissions: "Registration+Disput...", status: "Inactive" },
  { memberId: "1495", memberName: "Neal Jones", email: "Neal_Jones51@yaho...", permissions: "Registration+Disput...", status: "Inactive" },
];

const statusStyles: Record<Status, string> = {
  Active: "bg-green-500 text-white",
  Inactive: "bg-red-500 text-white",
};

const permissionOptions = [
  "Disputes Management",
  "Registration Requests Management",
  "Reviews Management",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function DapMemberPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(13);
  const [actionMenuIndex, setActionMenuIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(2);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const totalPages = 10;

  const filteredMembers = members.filter(
    (m) =>
      m.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePermission = (perm: string) => {
    setSelectedPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const getActionItems = (status: Status) => {
    return [
      { label: "View", action: () => { setActionMenuIndex(null); router.push("/admin/dap-member/details"); } },
      { label: "Edit", action: () => setActionMenuIndex(null) },
      { label: "Deactivate", action: () => setActionMenuIndex(null), className: "text-red-500" },
    ];
  };

  return (
    <>
      <div className="space-y-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#1B2A4A]">DAP Member</h1>

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
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#1B2A4A] hover:bg-gray-50"
            >
              <Plus size={16} /> Create
            </button>
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
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Member ID</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Member Name</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Email</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Permissions</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500">Status</th>
                <th className="px-5 py-3 text-xs font-semibold text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member, idx) => (
                <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                  <td className="px-5 py-4 text-sm text-gray-600">{member.memberId}</td>
                  <td className="px-5 py-4 text-sm font-semibold text-[#1B2A4A]">{member.memberName}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{member.email}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{member.permissions}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[member.status]}`}>
                      {member.status}
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
                      <div className="absolute right-5 top-full z-20 w-40 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                        {getActionItems(member.status).map((item) => (
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

      {/* Create DAP Member Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Create DAP Member</h2>
              <button
                onClick={() => { setShowCreateModal(false); setSelectedPermissions([]); }}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                <X size={14} />
              </button>
            </div>

            {/* Member Name */}
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-[#1B2A4A]">
                Member name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input type="text" placeholder="Full Name" className="w-full rounded-lg border border-gray-300 py-2.5 pl-3 pr-10 text-sm placeholder:text-gray-400 focus:outline-none" />
                <User size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Law License Number */}
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-[#1B2A4A]">
                Law License Number / Bar Council ID <span className="text-red-500">*</span>
              </label>
              <input type="text" placeholder="License Number / Bar Council ID" className="w-full rounded-lg border border-gray-300 py-2.5 pl-3 pr-3 text-sm placeholder:text-gray-400 focus:outline-none" />
            </div>

            {/* Practice Area */}
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-[#1B2A4A]">
                Practice Area <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-2.5 pl-3 pr-10 text-sm text-gray-400 focus:outline-none">
                  <option>Select your practice areas</option>
                </select>
                <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Upload Profile Picture */}
            <div className="mb-4">
              <label className="mb-1.5 block text-sm font-medium text-[#1B2A4A]">
                Upload Profile picture <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Upload size={16} />
                  <span>drag, drop files, or</span>
                  <button className="font-semibold text-[#1B2A4A] hover:underline">Browse</button>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="mb-2">
              <label className="mb-1.5 block text-sm font-medium text-[#1B2A4A]">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="email" placeholder="your email address" className="w-full rounded-lg border border-gray-300 py-2.5 pl-3 pr-3 text-sm placeholder:text-gray-400 focus:outline-none" />
            </div>

            {/* Password notice */}
            <div className="mb-4 rounded-lg bg-amber-50 px-3 py-2">
              <p className="text-xs text-amber-700">The password will be auto generated and sent to the email</p>
            </div>

            {/* Permissions */}
            <div className="mb-5">
              <p className="mb-3 text-sm font-semibold text-[#1B2A4A]">Permissions</p>
              <div className="space-y-3">
                {permissionOptions.map((perm) => (
                  <label key={perm} className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={selectedPermissions.includes(perm)}
                      onChange={() => togglePermission(perm)}
                      className="h-4 w-4 rounded border-gray-300"
                    />
                    <span className="text-sm text-gray-700">{perm}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => { setShowCreateModal(false); setSelectedPermissions([]); }}
                className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]"
              >
                Create
              </button>
              <button
                onClick={() => { setShowCreateModal(false); setSelectedPermissions([]); }}
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

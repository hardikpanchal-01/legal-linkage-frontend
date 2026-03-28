"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  BarChart3,
  X,
  Eye,
  Download,
  Search,
  SlidersHorizontal,
  BadgeCheck,
  MoreHorizontal,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tabs = ["General Information", "Documents Uploaded", "Badge(s)", "Jobs", "Bids", "Earnings", "Report"] as const;
type Tab = (typeof tabs)[number];

type JobStatus = "In-Process" | "Completed" | "Disputed" | "Pending";
type BidStatus = "Pending" | "Accepted" | "Rejected";
type EarningStatus = "Received" | "Pending";

const generalInfo = [
  { label: "Name", value: "Bob Johnson" },
  { label: "Email", value: "Bob123@example.com" },
  { label: "Phone Number", value: "(+145) 1231 4574 141" },
  { label: "Law License Number", value: "4574 1412025" },
];

const practiceAreas = ["Lawyer", "Notaries (QC)", "RCIC", "Commissioner for Oaths"];

const generalInfoExtra = [
  { label: "Territory", value: "California" },
  { label: "Years Of Experience", value: "5" },
  { label: "Status", value: "Active", isStatus: true },
];

const documents = [
  { name: "Passport", file: "passport.pdf" },
  { name: "Driving License", file: "driving_license.pdf" },
];

const badges = [
  "ID Government issued ID (verified by <b>CERTN</b> verification)",
  "License /certificate (verified by <b>CERTN</b> verification)",
  "Good standing verified",
  "Credit checked",
  "Crime background checked",
  "Liability insurance checked",
];

const profileStats = [
  { label: "Total Jobs Completed", value: "450" },
  { label: "Total Jobs In-Process", value: "450" },
  { label: "Total Points Balance", value: "450" },
];

const jobsData = [
  { clientName: "Alma Deckow", username: "@Alma87", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "In-Process" as JobStatus },
  { clientName: "Darin Jenkins", username: "@Darin.Jenkins", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "Completed" as JobStatus },
  { clientName: "Jeanette Wolff", username: "@Jeanette_Wolff3", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "Disputed" as JobStatus },
  { clientName: "Walter Olson", username: "@Walter.Olson80", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "Pending" as JobStatus },
  { clientName: "Eloise Gorczany", username: "@Eloise.Gorczany", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "Completed" as JobStatus },
  { clientName: "Walter Kutch", username: "@Walter.Kutch", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "Disputed" as JobStatus },
  { clientName: "Anita Boyle", username: "@Anita.Boyle", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "In-Process" as JobStatus },
  { clientName: "Todd Goldner", username: "@Todd.Goldner", description: "Criminal Defense Lawyer Needed...", startDate: "12 Jun, 2025", hours: "2.5", rate: "$300/hr", status: "Completed" as JobStatus },
];

const bidsData = [
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Pending" as BidStatus },
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Accepted" as BidStatus },
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Pending" as BidStatus },
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Pending" as BidStatus },
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Rejected" as BidStatus },
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Pending" as BidStatus },
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Rejected" as BidStatus },
  { description: "Criminal Defense Lawyer Needed...", postedOn: "12 Jun, 2025", hours: "2.5", bidPrice: "$300", status: "Accepted" as BidStatus },
];

const earningsData = [
  { clientName: "Leroy Moore", amount: "$450", status: "Received" as EarningStatus },
  { clientName: "Yvonne Kerluke", amount: "$450", status: "Pending" as EarningStatus },
  { clientName: "Moses Morissett...", amount: "$450", status: "Received" as EarningStatus },
  { clientName: "Marta Renner", amount: "$450", status: "Received" as EarningStatus },
  { clientName: "Allen Heidenreich", amount: "$450", status: "Pending" as EarningStatus },
  { clientName: "Jennifer Kohler", amount: "$450", status: "Received" as EarningStatus },
  { clientName: "Laurence Boyle", amount: "$450", status: "Received" as EarningStatus },
  { clientName: "Belinda Lockman", amount: "$450", status: "Received" as EarningStatus },
  { clientName: "Wilfred Greenholt", amount: "$450", status: "Pending" as EarningStatus },
  { clientName: "Jennie Schiller", amount: "$450", status: "Received" as EarningStatus },
];

const lawyerReportData = [
  { lawyerName: "Dewey Spi...", totalCases: 3, totalProfit: "$34,100", docusignFees: "$150", zoomFees: "$100", profitBeforeTax: "$33,850" },
];

const earningsProfileStats = [
  { label: "Total Jobs Completed", value: "450" },
  { label: "Total Jobs In-Process", value: "450" },
  { label: "Total Points Balance", value: "450" },
  { label: "Trust Account Balance", value: "450" },
];

const deactivateOptions = ["15 Days", "90 Days", "Permanently"];
const earningsFilterOptions = ["Bid Coins", "Jobs", "Dispute", "Platform Fee"];

/* ------------------------------------------------------------------ */
/*  Status badges                                                      */
/* ------------------------------------------------------------------ */

const jobStatusStyles: Record<JobStatus, string> = {
  "In-Process": "bg-blue-500 text-white",
  Completed: "bg-green-500 text-white",
  Disputed: "bg-red-500 text-white",
  Pending: "bg-amber-400 text-white",
};

const bidStatusStyles: Record<BidStatus, string> = {
  Pending: "bg-amber-400 text-white",
  Accepted: "bg-green-500 text-white",
  Rejected: "bg-red-500 text-white",
};

const earningStatusStyles: Record<EarningStatus, string> = {
  Received: "bg-green-500 text-white",
  Pending: "bg-amber-400 text-white",
};

/* ------------------------------------------------------------------ */
/*  Pagination Component                                               */
/* ------------------------------------------------------------------ */

function Pagination({ currentPage, setCurrentPage }: { currentPage: number; setCurrentPage: (p: number) => void }) {
  const totalPages = 10;
  return (
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
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ActiveProviderDetailsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("General Information");
  const [showDeactivateModal, setShowDeactivateModal] = useState(false);
  const [deactivateSelected, setDeactivateSelected] = useState("");
  const [showDeactivateDropdown, setShowDeactivateDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(2);
  const [showEarningsFilter, setShowEarningsFilter] = useState(false);

  const currentStats = activeTab === "Earnings" ? earningsProfileStats : profileStats;

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">User Management</h1>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
            <Link href="/admin/users" className="hover:text-[#1B2A4A]">User Management</Link>
            <ChevronRight size={14} />
            <span className="text-gray-700">Legal service provider</span>
          </div>
        </div>

        {/* Profile Card */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-6 sm:flex-row">
            <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-xl">
              <Image src="/images/profile.svg" alt="Dewey Spinka" width={192} height={192} className="h-full w-full object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-700">Dewey Spinka</h2>
              <div className="mt-3">
                <button onClick={() => setShowDeactivateModal(true)} className="rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-700">
                  Deactivate Account
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {currentStats.map((stat, idx) => (
                  <div key={stat.label} className={`flex items-center gap-3 rounded-xl px-5 py-4 ${idx === 0 ? "bg-[#1B2A4A] text-white" : "border border-gray-200 bg-white"}`}>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${idx === 0 ? "bg-white/20" : "bg-blue-50"}`}>
                      <BarChart3 size={18} className={idx === 0 ? "text-white" : "text-[#1B2A4A]"} />
                    </div>
                    <div>
                      <p className={`text-xs ${idx === 0 ? "text-white/70" : "text-gray-500"}`}>{stat.label}</p>
                      <p className={`text-lg font-bold ${idx === 0 ? "text-white" : "text-[#1B2A4A]"}`}>{stat.value}</p>
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
              <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${activeTab === tab ? "bg-[#1B2A4A] text-white" : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"}`}>
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
                  <div className="flex border-b border-gray-100 pb-3">
                    <p className="w-48 text-sm text-gray-500">Practice Area</p>
                    <div className="flex flex-wrap gap-2">
                      {practiceAreas.map((area) => (
                        <span key={area} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-0.5 text-xs font-medium text-blue-700">{area}</span>
                      ))}
                    </div>
                  </div>
                  {generalInfoExtra.map(({ label, value, isStatus }) => (
                    <div key={label} className="flex border-b border-gray-100 pb-3">
                      <p className="w-48 text-sm text-gray-500">{label}</p>
                      <p className={`text-sm font-semibold ${isStatus ? "text-green-500" : "text-[#1B2A4A]"}`}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documents Uploaded */}
            {activeTab === "Documents Uploaded" && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#1B2A4A]">Documents Uploaded</h3>
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
                        <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B2A4A] text-white hover:bg-[#2A3D66]"><Eye size={14} /></button>
                        <button className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1B2A4A] text-white hover:bg-[#2A3D66]"><Download size={14} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Badge(s) */}
            {activeTab === "Badge(s)" && (
              <div>
                <h3 className="mb-4 text-lg font-bold text-[#1B2A4A]">Badges Earned</h3>
                <div className="space-y-4">
                  {badges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <BadgeCheck size={24} className="flex-shrink-0 text-blue-500" />
                      <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: badge }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Jobs */}
            {activeTab === "Jobs" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B2A4A]">All Jobs</h3>
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
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Client Name</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Description</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Start Date</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Hours</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Rate</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobsData.map((job, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <p className="text-sm font-semibold text-[#1B2A4A]">{job.clientName}</p>
                            <p className="text-xs text-gray-400">{job.username}</p>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">{job.description}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{job.startDate}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{job.hours}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{job.rate}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${jobStatusStyles[job.status]}`}>{job.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
            )}

            {/* Bids */}
            {activeTab === "Bids" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B2A4A]">All Bids</h3>
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
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Description</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Posted On</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Hours</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Bid Price</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bidsData.map((bid, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm text-gray-600">{bid.description}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{bid.postedOn}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{bid.hours}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{bid.bidPrice}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${bidStatusStyles[bid.status]}`}>{bid.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
            )}

            {/* Earnings */}
            {activeTab === "Earnings" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B2A4A]">All Earnings</h3>
                  <div className="flex items-center gap-3">
                    <div className="relative w-56">
                      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input type="text" placeholder="Search here..." className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm placeholder:text-gray-400 focus:outline-none" />
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setShowEarningsFilter(!showEarningsFilter)}
                        className="flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]"
                      >
                        <SlidersHorizontal size={16} /> Filter
                      </button>
                      {showEarningsFilter && (
                        <div className="absolute right-0 top-full z-10 mt-1 w-36 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                          {earningsFilterOptions.map((opt) => (
                            <button key={opt} onClick={() => setShowEarningsFilter(false)} className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">{opt}</button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Client Name</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Amount Recieved</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Status</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {earningsData.map((earning, idx) => (
                        <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-semibold text-[#1B2A4A]">{earning.clientName}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{earning.amount}</td>
                          <td className="px-4 py-3">
                            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${earningStatusStyles[earning.status]}`}>{earning.status}</span>
                          </td>
                          <td className="px-4 py-3">
                            <button className="rounded-md p-1 text-gray-400 hover:bg-gray-100"><MoreHorizontal size={18} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
            )}

            {/* Report */}
            {activeTab === "Report" && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1B2A4A]">Lawyer Based Report</h3>
                  <button className="rounded-lg bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">Download Report</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Lawyer Name</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total Cases</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Total Profit (Before Tax)</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Docusign Fees</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Zoom Fees</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-500">Profit Before Income Tax</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lawyerReportData.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-100 bg-green-50/50">
                          <td className="px-4 py-3 text-sm font-semibold text-[#1B2A4A]">{row.lawyerName}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.totalCases}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.totalProfit}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.docusignFees}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.zoomFees}</td>
                          <td className="px-4 py-3 text-sm text-gray-600">{row.profitBeforeTax}</td>
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

      {/* Deactivate Modal */}
      {showDeactivateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#1B2A4A]">Deactivate Client</h2>
              <button onClick={() => { setShowDeactivateModal(false); setDeactivateSelected(""); setShowDeactivateDropdown(false); }} className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600">
                <X size={14} />
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-600">Select Time Span</p>
            <div className="relative">
              <button onClick={() => setShowDeactivateDropdown(!showDeactivateDropdown)} className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700">
                <span className={deactivateSelected ? "text-gray-700" : "text-gray-400"}>{deactivateSelected || "Select"}</span>
                <ChevronDown size={16} className="text-gray-400" />
              </button>
              {showDeactivateDropdown && (
                <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded-lg border border-gray-200 bg-white shadow-lg">
                  {deactivateOptions.map((option) => (
                    <button key={option} onClick={() => { setDeactivateSelected(option); setShowDeactivateDropdown(false); }} className="block w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">{option}</button>
                  ))}
                </div>
              )}
            </div>
            <div className="mt-5 flex gap-3">
              <button onClick={() => { setShowDeactivateModal(false); setDeactivateSelected(""); setShowDeactivateDropdown(false); }} className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]">Block</button>
              <button onClick={() => { setShowDeactivateModal(false); setDeactivateSelected(""); setShowDeactivateDropdown(false); }} className="rounded-lg border border-red-400 px-6 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

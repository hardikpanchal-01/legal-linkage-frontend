"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  ChevronDown,
  ChevronUp,
  Clock,
  FileText,
  Paperclip,
  Target,
  AlertTriangle,
  Star,
  Users,
  MapPin,
  Eye,
  Download,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const tabs = ["Overview", "Details", "Phases", "Spendings", "Proposals", "Hired", "Chat", "Reports"] as const;
type Tab = (typeof tabs)[number];

const loremShort = "We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings.";
const loremLong = "Figma ipsum component variant main layer. Content boolean device community comment project ellipse edit. Variant main editor figma inspect. Thumbnail content hand pencil mask underline ellipse flatten undo. Style style pixel comment export team editor.";
const loremFull = "We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings. We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings. The ideal candidate will have a strong background in criminal law and a proven track record of success in similar cases.";

const spendingStats = [
  { label: "Contract Amount", value: "$10,000" },
  { label: "Escrowed Amount", value: "$2,500" },
  { label: "Released Amount", value: "$1,250" },
  { label: "Remaining Amount", value: "$7,500" },
  { label: "Total DAP Spendings", value: "$00" },
];

const phases = [
  { name: "Phase 1", title: "Documentation and Evidence", deadline: "09/10/2025", status: "Complete" as const },
  { name: "Phase 2", title: "", deadline: "", status: "On Going" as const },
  { name: "Phase 3", title: "", deadline: "", status: "Pending" as const },
];

const phaseStatusStyles = {
  Complete: "bg-green-500 text-white",
  "On Going": "bg-blue-500 text-white",
  Pending: "bg-amber-400 text-white",
};

const detailsSections = [
  { title: "Detailed Description of Events", icon: FileText },
  { title: "Documentation and Evidence", icon: Paperclip },
  { title: "Client Goals", icon: Target },
  { title: "Timeline & Deadlines", icon: Clock },
  { title: "Potential Weaknesses or Risks", icon: AlertTriangle, isWarning: true },
];

const loremReview = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function JobDetailsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [expandedPhase, setExpandedPhase] = useState(0);
  const [expandedDetail, setExpandedDetail] = useState(0);
  const [showProposalDetail, setShowProposalDetail] = useState(false);
  const [jobStatus] = useState<"On Going" | "Completed">("On Going");

  const statusColor = jobStatus === "Completed" ? "text-green-500 border-green-500" : "text-blue-500 border-blue-500";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-blue-600 underline">
          Figma ipsum componentFigma ipsum component
        </h1>
        <button className="rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
          Download Report
        </button>
      </div>

      {/* Tabs + Status */}
      <div className="flex items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? "bg-[#1B2A4A] text-white"
                  : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <span className={`ml-auto rounded-full border px-4 py-1.5 text-sm font-semibold ${statusColor}`}>
          {jobStatus}
        </span>
      </div>

      {/* Tab Content */}
      <div className="rounded-xl bg-white p-6 shadow-sm">

        {/* Overview */}
        {activeTab === "Overview" && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#1B2A4A]">
                Criminal Defense Lawyer Needed for Assault Charges Case
              </h2>
              {jobStatus === "On Going" && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock size={14} />
                  2 hours ago
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {["Assault Charges", "Criminal Record", "Breaking and Entering"].map((tag) => (
                <span key={tag} className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">{tag}</span>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4 text-sm leading-relaxed text-gray-700">
              <p>{loremShort}</p>
              <p>{loremLong}</p>
              <p>{loremFull}</p>
            </div>

            {/* Qualifications */}
            <div className="mt-6">
              <p className="mb-2 text-sm text-gray-400">Qualifications</p>
              <p className="text-sm text-[#1B2A4A]">Juris Doctor (JD) degree from an accredited law school</p>
              <p className="text-sm text-[#1B2A4A]">Admission to the bar in the relevant jurisdiction</p>
            </div>

            {/* Reviews (completed only) */}
            {jobStatus === "Completed" && (
              <div className="mt-8">
                <h3 className="mb-4 text-base font-bold text-blue-600">Reviews</h3>
                {["Lawyer", "Client"].map((role) => (
                  <div key={role} className="mb-4">
                    <div className="flex gap-4">
                      <p className="w-20 text-sm text-gray-500">{role}</p>
                      <div>
                        <p className="text-sm text-gray-700">{loremReview}</p>
                        <div className="mt-1 flex gap-1">
                          {[1, 2, 3].map((s) => (
                            <Star key={s} size={16} className="fill-green-600 text-green-600" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Details */}
        {activeTab === "Details" && (
          <div className="space-y-4">
            {/* Basic Background Information */}
            <div className="rounded-xl border border-gray-200 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-[#1B2A4A]" />
                  <h3 className="text-base font-bold text-[#1B2A4A]">Basic Background Information</h3>
                </div>
                <ChevronUp size={18} className="text-gray-400" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400">Client Name</p>
                  <div className="mt-1 flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#1B2A4A]">John Smith</p>
                    <span className="rounded-full border border-green-500 px-2 py-0.5 text-[10px] font-semibold text-green-500">Verified</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-400">ID Number</p>
                  <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">DL-12345678</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Contact Phone</p>
                  <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Contact Email</p>
                  <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">john.smith@email.com</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-400">Relationship to Case</p>
                <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">Plaintiff - Direct victim</p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-400">Prior Legal Matters</p>
                <p className="mt-1 text-sm text-[#1B2A4A]">No prior legal matters on record</p>
              </div>
            </div>

            {/* Collapsible Sections */}
            {detailsSections.map((section, idx) => (
              <div key={idx} className={`rounded-xl border px-5 py-4 ${section.isWarning ? "border-amber-300 bg-amber-50" : "border-gray-200"}`}>
                <button
                  onClick={() => setExpandedDetail(expandedDetail === idx + 1 ? -1 : idx + 1)}
                  className="flex w-full items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <section.icon size={18} className={section.isWarning ? "text-amber-500" : "text-[#1B2A4A]"} />
                    <h3 className={`text-base font-bold ${section.isWarning ? "text-amber-500" : "text-[#1B2A4A]"}`}>
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown size={18} className="text-gray-400" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Phases */}
        {activeTab === "Phases" && (
          <div className="space-y-4">
            {phases.map((phase, idx) => (
              <div key={idx} className="rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setExpandedPhase(expandedPhase === idx ? -1 : idx)}
                  className="flex w-full items-center justify-between px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#1B2A4A]" />
                    <h3 className="text-base font-bold text-[#1B2A4A]">{phase.name}</h3>
                    <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${phaseStatusStyles[phase.status]}`}>
                      {phase.status}
                    </span>
                  </div>
                  {expandedPhase === idx ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                </button>
                {expandedPhase === idx && phase.title && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-400">Phase title</p>
                        <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">{phase.title}</p>
                        <p className="mt-3 text-xs text-gray-400">Phase deadline</p>
                        <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">{phase.deadline}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${phaseStatusStyles[phase.status]}`}>
                        {phase.status}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Spendings */}
        {activeTab === "Spendings" && (
          <div>
            {/* Practice Area */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">Practice Area</p>
                <p className="text-base font-bold text-[#1B2A4A]">Criminal Law</p>
                <p className="text-sm text-gray-500">Summary And Indictable Offences</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Fixed Fee Range</p>
                <p className="text-base font-bold text-[#1B2A4A]">$1,500-$50,000+</p>
              </div>
            </div>

            {/* Spendings Overview */}
            <h3 className="mb-4 text-sm font-semibold text-gray-500">Spendings Overview</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {spendingStats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                    <BarChart3 size={18} className="text-[#1B2A4A]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{s.label}</p>
                    <p className="text-lg font-bold text-[#1B2A4A]">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Proposals */}
        {activeTab === "Proposals" && !showProposalDetail && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5 text-center">
                <div className="mx-auto mb-3 h-14 w-14 overflow-hidden rounded-full">
                  <Image src="/images/profile1.svg" alt="Lawyer" width={56} height={56} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-base font-bold text-[#1B2A4A]">M. Craig G. Brown</h3>
                <p className="mt-1 flex items-center justify-center gap-1 text-sm text-green-500">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" /> Available
                </p>
                <p className="mt-2 text-xs text-gray-500">Skilled Legal Professional | Specializing in Legal CMS Solutions</p>
                <div className="mt-3 flex items-center justify-center gap-1">
                  <Users size={14} className="text-[#1B2A4A]" />
                  <span className="text-xs font-medium text-[#1B2A4A]">Independent Lawyer</span>
                </div>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600">10+ Years of Experience</span>
                  <span className="flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600">
                    <MapPin size={10} /> Toronto
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {["Assault Charges", "Criminal Record", "Breaking and Entering"].map((tag) => (
                    <span key={tag} className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] text-gray-500">{tag}</span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-gray-400 leading-relaxed">As a seasoned legal professional with a passion for cutting-edge technology, I specialize in providing...</p>
                <button
                  onClick={() => setShowProposalDetail(true)}
                  className="mt-4 w-full rounded-full bg-[#1B2A4A] py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]"
                >
                  View Proposals
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Proposal Detail View */}
        {activeTab === "Proposals" && showProposalDetail && (
          <div>
            <button onClick={() => setShowProposalDetail(false)} className="mb-4 rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-[#1B2A4A] hover:bg-gray-50">
              Back
            </button>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Lawyer Card */}
              <div className="rounded-xl border border-gray-200 p-5 text-center">
                <div className="mx-auto mb-3 h-14 w-14 overflow-hidden rounded-full">
                  <Image src="/images/profile1.svg" alt="Lawyer" width={56} height={56} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-base font-bold text-[#1B2A4A]">M. Craig G. Brown</h3>
                <p className="mt-1 flex items-center justify-center gap-1 text-sm text-green-500">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500" /> Available
                </p>
                <p className="mt-2 text-xs text-gray-500">Skilled Legal Professional | Specializing in Legal CMS Solutions</p>
                <div className="mt-3 flex items-center justify-center gap-3 flex-wrap">
                  <span className="flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600"><Users size={10} /> Independent Lawyer</span>
                  <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600">10+ Years of Experience</span>
                </div>
                <div className="mt-2 flex items-center justify-center">
                  <span className="flex items-center gap-1 text-xs text-gray-600"><MapPin size={10} /> Toronto</span>
                </div>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {["Assault Charges", "Criminal Record", "Breaking and Entering"].map((tag) => (
                    <span key={tag} className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] text-gray-500">{tag}</span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-gray-400 leading-relaxed">As a seasoned legal professional with a passion for cutting-edge technology, I specialize in providing comprehensive CMS (Content...</p>
                {/* Legal Service Agreement */}
                <div className="mt-4 flex items-center justify-center gap-3 rounded-lg bg-gray-50 px-4 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-red-100">
                    <span className="text-[10px] font-bold text-red-500">PDF</span>
                  </div>
                  <span className="text-xs font-medium text-[#1B2A4A]">LEGAL SERVICE AGREEMENT</span>
                  <div className="ml-auto flex gap-1">
                    <button className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white"><Eye size={12} /></button>
                    <button className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white"><Download size={12} /></button>
                  </div>
                </div>
                <p className="mt-3 flex items-center justify-center gap-1 text-sm text-amber-500">
                  <Clock size={14} /> Client Signature Pending
                </p>
              </div>

              {/* Proposal Details */}
              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-4 text-base font-bold text-[#1B2A4A]">Proposal</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400">Payment terms</p>
                    <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">Fixed Price</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Bid Price</p>
                    <p className="mt-1 text-xl font-bold text-[#1B2A4A]">$50,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Time required</p>
                    <p className="mt-1 text-sm font-semibold text-[#1B2A4A]">With in a week</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Cover letter</p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed">{loremFull}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Certificates</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
                          <span className="text-xs text-gray-600">proposal-legal.pdf</span>
                          <button className="text-red-500"><Download size={14} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Hired */}
        {activeTab === "Hired" && (
          <div className="max-w-sm">
            <div className="rounded-xl border border-gray-200 p-5 text-center">
              <div className="mx-auto mb-3 h-14 w-14 overflow-hidden rounded-full">
                <Image src="/images/profile1.svg" alt="Lawyer" width={56} height={56} className="h-full w-full object-cover" />
              </div>
              <h3 className="text-base font-bold text-[#1B2A4A]">M. Craig G. Brown</h3>
              <p className="mt-1 flex items-center justify-center gap-1 text-sm text-green-500">
                <span className="inline-block h-2 w-2 rounded-full bg-green-500" /> Available
              </p>
              <p className="mt-2 text-xs text-gray-500">Skilled Legal Professional | Specializing in Legal CMS Solutions</p>
              <div className="mt-3 flex items-center justify-center gap-1">
                <Users size={14} className="text-[#1B2A4A]" />
                <span className="text-xs font-medium text-[#1B2A4A]">Independent Lawyer</span>
              </div>
              <div className="mt-2 flex items-center justify-center gap-3">
                <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600">10+ Years of Experience</span>
                <span className="flex items-center gap-1 rounded-full border border-gray-200 px-2.5 py-0.5 text-xs text-gray-600">
                  <MapPin size={10} /> Toronto
                </span>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                {["Assault Charges", "Criminal Record", "Breaking and Entering"].map((tag) => (
                  <span key={tag} className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] text-gray-500">{tag}</span>
                ))}
              </div>
              <p className="mt-3 text-xs text-gray-400 leading-relaxed">As a seasoned legal professional with a passion for cutting-edge technology, I specialize in providing...</p>
              <button className="mt-4 w-full rounded-full bg-[#1B2A4A] py-2.5 text-sm font-semibold text-white hover:bg-[#2A3D66]">
                View Proposal
              </button>
            </div>
          </div>
        )}

        {/* Chat */}
        {activeTab === "Chat" && (
          <div>
            <h3 className="mb-4 text-base font-bold text-[#1B2A4A]">Job ID #00214</h3>
            <div className="space-y-6 min-h-[400px] flex flex-col justify-between">
              {/* Received */}
              <div className="space-y-6">
                <div>
                  <div className="inline-block max-w-sm rounded-lg bg-gray-100 px-4 py-3">
                    <p className="text-xs font-semibold text-[#1B2A4A]">Steve Cardano</p>
                    <p className="mt-1 text-sm text-gray-700">1st message comes here</p>
                  </div>
                  <div className="mt-1">
                    <div className="inline-block rounded-lg bg-gray-100 px-4 py-2">
                      <p className="text-sm text-gray-700">this is a second message</p>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">7:30 PM, Sunday, Nov.09,2025</p>
                </div>
              </div>

              {/* Sent */}
              <div className="flex flex-col items-end">
                <div className="inline-block max-w-sm rounded-lg bg-[#1B2A4A] px-4 py-3">
                  <p className="text-xs font-semibold text-white">John Smith</p>
                  <p className="mt-1 text-sm text-white">1st message comes here</p>
                </div>
                <div className="mt-1">
                  <div className="inline-block rounded-lg bg-[#1B2A4A] px-4 py-2">
                    <p className="text-sm text-white">this is a second message</p>
                  </div>
                </div>
                <p className="mt-1 text-xs text-gray-400">7:30 PM, Sunday, Nov.09,2025</p>
              </div>
            </div>
          </div>
        )}

        {/* Reports */}
        {activeTab === "Reports" && (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-blue-600 underline">Figma ipsum componentFigma ipsum component</h3>
              <button className="rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white hover:bg-[#2A3D66]">
                Download Report
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">Fee type</th>
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">Trust Deposits</th>
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">Trust Balance</th>
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">Disbursements</th>
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">Platform Fee</th>
                    <th className="px-5 py-3 text-xs font-semibold text-gray-500">Point Spending</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Hourly", amount: "$89.99" },
                    { type: "Fixed", amount: "$49.99" },
                    { type: "Fixed", amount: "$119.99" },
                    { type: "Fixed", amount: "$39.99" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-green-200 bg-green-100">
                      <td className="px-5 py-3 text-sm font-semibold text-[#1B2A4A]">{row.type}</td>
                      <td className="px-5 py-3 text-sm text-gray-600">{row.amount}</td>
                      <td className="px-5 py-3 text-sm text-gray-600">{row.amount}</td>
                      <td className="px-5 py-3 text-sm text-gray-600">{row.amount}</td>
                      <td className="px-5 py-3 text-sm text-gray-600">{row.amount}</td>
                      <td className="px-5 py-3 text-sm text-gray-600">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

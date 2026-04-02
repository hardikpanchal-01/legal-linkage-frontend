"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  User,
  FileText,
  Paperclip,
  Target,
  Clock,
  AlertTriangle,
  Users,
  FolderOpen,
  Shield,
  MessageSquare,
  Star,
  Plus,
  Send,
} from "lucide-react";

const detailTabs = ["Job Details", "Phases", "Chat", "Reviews"];

const accordionSections = [
  {
    id: "basic",
    title: "Basic Background Information",
    icon: User,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "description",
    title: "Detailed Description of Events",
    icon: FileText,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "documentation",
    title: "Documentation and Evidence",
    icon: Paperclip,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "goals",
    title: "Client Goals",
    icon: Target,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "timeline",
    title: "Timeline & Deadlines",
    icon: Clock,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "weaknesses",
    title: "Potential Weaknesses or Risks",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "parties",
    title: "Involvement of Other Parties",
    icon: Users,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "documents",
    title: "Legal Documents Already Received",
    icon: FolderOpen,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Conflict Checks",
    icon: Shield,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
  {
    id: "questions",
    title: "Client Questions & Concerns",
    icon: MessageSquare,
    color: "text-[#0B0B0B]",
    bgColor: "",
  },
];

export default function JobDetails() {
  const [activeTab, setActiveTab] = useState("Job Details");
  const [openSection, setOpenSection] = useState<string | null>("basic");
  const [openPhase, setOpenPhase] = useState<string | null>("phase1");
  const [chatMessage, setChatMessage] = useState("");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="px-6 py-6">
      {/* Top Bar */}
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/lawyer/jobs"
          className="rounded-lg border border-gray-300 px-4 py-1.5 text-sm font-medium text-[#0B0B0B] hover:bg-gray-50"
        >
          Back
        </Link>
        <span className="text-sm text-[#0B0B0B]">Jobs details</span>
        <span className="rounded-full bg-green-500 px-3 py-0.5 text-xs font-medium text-white">
          Completed
        </span>
      </div>

      <div className="flex gap-6">
        {/* Left Sidebar - Client Info */}
        <div className="hidden w-[280px] flex-shrink-0 lg:block">
          <div className="rounded-3xl border-4 border-[#C8952E] bg-gradient-to-b from-[#C8952E] to-[#A87924] p-1.5">
            <div className="rounded-2xl bg-[#5C3310] p-5 text-white">
              <p className="mb-3 text-sm font-medium text-white/70">Info about the Client</p>

              <div className="mb-4 flex items-center gap-2">
                <p className="font-semibold">Verified Client</p>
                <BadgeCheck size={16} className="text-blue-400" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total Jobs</p>
                  <p className="text-lg font-bold">2</p>
                </div>
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total Spent</p>
                  <p className="text-lg font-bold">$500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Tabs */}
          <div className="mb-6 flex border-b border-gray-200">
            {detailTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-5 pb-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "border-b-2 border-[#0B0B0B] text-[#0B0B0B]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Job Details Tab Content */}
          {activeTab === "Job Details" && (
            <div className="space-y-3">
              {accordionSections.map((section) => {
                const Icon = section.icon;
                const isOpen = openSection === section.id;

                return (
                  <div
                    key={section.id}
                    className={`rounded-xl border border-gray-200 ${section.bgColor}`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(section.id)}
                      className="flex w-full items-center justify-between px-5 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={section.color} />
                        <span className={`text-sm font-semibold ${section.color}`}>
                          {section.title}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp size={18} className="text-gray-400" />
                      ) : (
                        <ChevronDown size={18} className="text-gray-400" />
                      )}
                    </button>

                    {isOpen && section.id === "basic" && (
                      <div className="border-t border-gray-100 px-5 py-4">
                        <div className="mb-5 grid grid-cols-2 gap-x-12 gap-y-4">
                          <div>
                            <p className="mb-1 text-xs text-gray-400">Client Name</p>
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-medium text-[#0B0B0B]">John Smith</p>
                              <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-600">
                                <BadgeCheck size={10} />
                                Verified
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="mb-1 text-xs text-gray-400">ID Number</p>
                            <p className="text-sm font-medium text-[#0B0B0B]">DL-12345678</p>
                          </div>
                        </div>

                        <div className="mb-5 grid grid-cols-2 gap-x-12 gap-y-4">
                          <div>
                            <p className="mb-1 text-xs text-gray-400">Contact Phone</p>
                            <p className="text-sm font-medium text-[#0B0B0B]">+1 (555) 123-4567</p>
                          </div>
                          <div>
                            <p className="mb-1 text-xs text-gray-400">Contact Email</p>
                            <p className="text-sm font-medium text-[#0B0B0B]">john.smith@email.com</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          <p className="mb-1 text-xs text-gray-400">Relationship to Case</p>
                          <p className="text-sm font-medium text-[#0B0B0B]">Plaintiff - Direct victim</p>
                        </div>

                        <div>
                          <p className="mb-1 text-xs text-gray-400">Prior Legal Matters</p>
                          <p className="text-sm font-medium text-[#0B0B0B]">No prior legal matters on record</p>
                        </div>
                      </div>
                    )}

                    {isOpen && section.id !== "basic" && (
                      <div className="border-t border-gray-100 px-5 py-4">
                        <p className="text-sm text-gray-500">
                          Content for {section.title} will be displayed here.
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Phases Tab */}
          {activeTab === "Phases" && (
            <div className="space-y-3">
              {/* Phase 1 */}
              <div className="rounded-xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenPhase(openPhase === "phase1" ? null : "phase1")}
                  className="flex w-full items-center justify-between px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#0B0B0B]" />
                    <span className="text-sm font-semibold text-[#0B0B0B]">Phase 1</span>
                    <span className="rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-medium text-white">Complete</span>
                  </div>
                  {openPhase === "phase1" ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                </button>

                {openPhase === "phase1" && (
                  <div className="border-t border-gray-100 px-5 py-4 space-y-4">
                    <div>
                      <p className="text-xs text-gray-400">Phase title</p>
                      <p className="text-sm font-semibold text-[#0B0B0B]">Documentation and Evidence</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phase amount</p>
                      <p className="text-sm font-bold text-[#0B0B0B]">$58</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phase deadline</p>
                      <p className="text-sm font-semibold text-[#0B0B0B]">09/10/2025</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Payment details</p>
                      <p className="text-xs text-gray-400">Payment status</p>
                      <p className="text-sm font-medium text-green-500">Recieved</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Paid amount</p>
                      <p className="text-sm font-bold text-[#0B0B0B]">$58</p>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-500">
                      We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings.
                    </p>
                    <div>
                      <p className="text-xs text-gray-400">Evidence</p>
                    </div>

                    {/* Totals */}
                    <div className="border-t border-gray-100 pt-3 space-y-2">
                      <div className="flex justify-end gap-12">
                        <p className="text-sm text-gray-500">Subtotal</p>
                        <p className="text-sm font-medium text-[#0B0B0B]">145.00</p>
                      </div>
                      <div className="flex justify-end gap-12">
                        <p className="text-sm text-gray-500">Sales Tax 6.25%</p>
                        <p className="text-sm font-medium text-[#0B0B0B]">9.06</p>
                      </div>
                      <div className="flex justify-end gap-12">
                        <p className="text-sm font-semibold text-[#0B0B0B]">TOTAL</p>
                        <p className="text-lg font-bold text-[#0B0B0B]">$154.06</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Phase 2 */}
              <div className="rounded-xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenPhase(openPhase === "phase2" ? null : "phase2")}
                  className="flex w-full items-center justify-between px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#0B0B0B]" />
                    <span className="text-sm font-semibold text-[#0B0B0B]">Phase 2</span>
                    <span className="rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-medium text-white">Complete</span>
                  </div>
                  {openPhase === "phase2" ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                </button>

                {openPhase === "phase2" && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="text-sm text-gray-500">Phase 2 details here.</p>
                  </div>
                )}
              </div>

              {/* Phase 3 */}
              <div className="rounded-xl border border-gray-200 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenPhase(openPhase === "phase3" ? null : "phase3")}
                  className="flex w-full items-center justify-between px-5 py-4"
                >
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-[#0B0B0B]" />
                    <span className="text-sm font-semibold text-[#0B0B0B]">Phase 3</span>
                    <span className="rounded-full bg-green-500 px-2.5 py-0.5 text-[10px] font-medium text-white">Complete</span>
                  </div>
                  {openPhase === "phase3" ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
                </button>

                {openPhase === "phase3" && (
                  <div className="border-t border-gray-100 px-5 py-4">
                    <p className="text-sm text-gray-500">Phase 3 details here.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Chat Tab */}
          {activeTab === "Chat" && (
            <div className="rounded-xl border border-gray-200 bg-white">
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <p className="text-sm font-semibold text-[#0B0B0B]">Job ID #00214</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Job Status</span>
                  <span className="rounded-full border border-green-500 px-2.5 py-0.5 text-[10px] font-medium text-green-500">Ongoing</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="min-h-[350px] space-y-6 p-5">
                {/* Other person's messages */}
                <div>
                  <div className="mb-2 max-w-xs">
                    <p className="mb-1 text-xs">
                      <span className="font-medium text-[#0B0B0B]">Steve Cardano</span>
                      <span className="text-gray-400"> (DAP Member)</span>
                    </p>
                    <div className="space-y-1.5">
                      <div className="rounded-lg bg-gray-100 px-3 py-2">
                        <p className="text-sm text-[#0B0B0B]">1st message comes here</p>
                      </div>
                      <div className="inline-block rounded-lg bg-gray-100 px-3 py-2">
                        <p className="text-sm text-[#0B0B0B]">this is a second message</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[10px] text-gray-400">7:30 PM, Sunday, Nov.09,2025</p>
                  </div>
                </div>

                {/* Your messages */}
                <div className="flex justify-end">
                  <div className="mb-2 max-w-xs text-right">
                    <p className="mb-1 text-xs font-medium text-[#0B0B0B]">You</p>
                    <div className="space-y-1.5">
                      <div className="rounded-lg bg-[#1A1A1A] px-3 py-2">
                        <p className="text-sm text-white">1st message comes here</p>
                      </div>
                      <div className="inline-block rounded-lg bg-[#1A1A1A] px-3 py-2">
                        <p className="text-sm text-white">this is a second message</p>
                      </div>
                    </div>
                    <p className="mt-1 text-[10px] text-gray-400">7:30 PM, Sunday, Nov.09,2025</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="border-t border-gray-100 px-5 py-3">
                <div className="flex items-center gap-3">
                  <button type="button" className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:text-gray-600">
                    <Plus size={16} />
                  </button>
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Hey Steve Cardano, was great chatting with you earlier."
                    className="flex-1 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
                  />
                  <button type="button" className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#C8952E] text-white hover:bg-[#A87924]">
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === "Reviews" && (
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#0B0B0B]">Lawyer Performance Review</h3>
                <div className="flex items-center gap-1">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-bold text-[#0B0B0B]">4.6</span>
                  <span className="text-sm text-gray-400">/5.0</span>
                </div>
              </div>

              {/* Rating Items */}
              <div className="mb-8 space-y-4 divide-y divide-gray-100">
                {[
                  { label: "Responsiveness", rating: 5.0 },
                  { label: "Clarity of Communication", rating: 4.5 },
                  { label: "Professionalism", rating: 5.0 },
                  { label: "Timeliness", rating: 4.0 },
                  { label: "Overall Satisfaction", rating: 4.5 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between pt-4 first:pt-0">
                    <p className="text-sm text-[#0B0B0B]">{item.label}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={16}
                            className={
                              star <= Math.floor(item.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : star - 0.5 <= item.rating
                                  ? "fill-yellow-400/50 text-yellow-400"
                                  : "fill-gray-200 text-gray-200"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-[#0B0B0B]">{item.rating}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Written Feedback */}
              <div>
                <h4 className="mb-3 text-sm font-semibold text-[#0B0B0B]">Written Feedback</h4>
                <div className="rounded-lg border border-gray-200 p-4">
                  <p className="text-sm leading-relaxed text-gray-600">
                    Mr. Chen was exceptional throughout my case. He responded to all my emails within 24 hours and explained complex legal concepts in plain language. The only minor issue was a slight delay in filing one document due to court scheduling, but he kept me informed every step of the way. I would highly recommend his services to anyone seeking a knowledgeable and approachable lawyer.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

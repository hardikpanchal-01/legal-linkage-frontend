"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  MapPin,
  Clock,
  Coins,
  MoreVertical,
  BadgeCheck,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const jobListings = [
  {
    id: 1,
    title: "Criminal Defense Lawyer Needed for Assault Charges Case",
    tags: ["Assault Charges", "Criminal Record", "Breaking and Entering"],
    location: "Toronto",
    budget: "$50,000",
    description:
      "We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings.",
    urgency: "Urgent Legal Need",
    timeAgo: "2 hours ago",
    points: 15,
  },
  {
    id: 2,
    title: "Family Law Attorney for Custody Dispute Resolution",
    tags: ["Family Law", "Child Custody", "Mediation"],
    location: "Vancouver",
    budget: "$25,000",
    description:
      "Looking for a compassionate family law attorney to handle a custody dispute. The lawyer should have experience in mediation and family court proceedings.",
    urgency: "Urgent Legal Need",
    timeAgo: "5 hours ago",
    points: 10,
  },
  {
    id: 3,
    title: "Corporate Lawyer for Business Contract Review",
    tags: ["Corporate Law", "Contract Review", "Business Law"],
    location: "Montreal",
    budget: "$15,000",
    description:
      "We need an experienced corporate lawyer to review and draft business contracts for a growing enterprise. Must have experience with Canadian business law.",
    urgency: "",
    timeAgo: "1 day ago",
    points: 8,
  },
];

export default function LookForJobs() {
  const [selectedFees, setSelectedFees] = useState<string[]>(["hourly"]);
  const [selectedPricing, setSelectedPricing] = useState<string>("firm");
  const [selectedComplexity, setSelectedComplexity] = useState<string>("straightforward");
  const [selectedRole, setSelectedRole] = useState<string>("counselor");
  const [selectedUrgency, setSelectedUrgency] = useState<string>("yes");
  const [questionStep, setQuestionStep] = useState(1);
  const totalSteps = 5;

  const toggleFee = (fee: string) => {
    setSelectedFees((prev) =>
      prev.includes(fee) ? prev.filter((f) => f !== fee) : [...prev, fee]
    );
  };

  const handleNextQuestion = () => {
    if (questionStep < totalSteps) {
      setQuestionStep(questionStep + 1);
    }
  };

  const handleSubmitQuestionnaire = () => {
    setQuestionStep(1);
  };

  return (
    <div className="px-6 py-6">
      <div className="flex gap-6">
        {/* Left Sidebar - Profile */}
        <div className="hidden w-[320px] flex-shrink-0 lg:block">
          {/* Golden wrapper */}
          <div className="rounded-3xl border-4 border-[#C8952E] bg-gradient-to-b from-[#C8952E] to-[#A87924] p-1.5 space-y-1.5">
            {/* Profile Card */}
            <div className="rounded-2xl bg-[#5C3310] p-5 text-white">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full border-2 border-white/30 overflow-hidden">
                    <Image src="/images/profile.svg" alt="Profile" width={48} height={48} className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-semibold">Jason H.</p>
                      <BadgeCheck size={16} className="text-blue-400" />
                    </div>
                    <p className="text-xs text-white/60">Real Estate & General</p>
                  </div>
                </div>
                <button className="text-white/60 hover:text-white">
                  <MoreVertical size={18} />
                </button>
              </div>

              <div className="mb-2.5 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total completed Jobs</p>
                  <p className="text-lg font-bold">22</p>
                </div>
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total Jobs Inprocess</p>
                  <p className="text-lg font-bold">22</p>
                </div>
              </div>

              <div className="mb-2.5 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total Jobs</p>
                  <p className="text-lg font-bold">22</p>
                </div>
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total Disputed Jobs</p>
                  <p className="text-lg font-bold">22</p>
                </div>
              </div>

              <div className="group relative mb-3 flex items-center gap-2">
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Badge</p>
                  <p className="text-sm font-semibold">ID Governme...</p>
                </div>
                <span className="cursor-pointer rounded-full bg-white/20 px-2 py-0.5 text-xs">+2</span>
                {/* Hover tooltip */}
                <div className="pointer-events-none absolute left-full top-0 z-50 ml-2 hidden w-56 rounded-lg bg-white p-3 shadow-lg group-hover:pointer-events-auto group-hover:block">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <BadgeCheck size={16} className="text-blue-500" />
                      <p className="text-xs text-gray-700">ID Government issued ID verified</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck size={16} className="text-blue-500" />
                      <p className="text-xs text-gray-700">Good standing verified</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BadgeCheck size={16} className="text-blue-500" />
                      <p className="text-xs text-gray-700">Background checked</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xs text-white/40">
                A super chill lawyer who loves coming up with cool id really pays attention to the details.
              </p>
            </div>

            {/* Points Card */}
            <div className="rounded-2xl bg-[#5C3310] p-5 text-white">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-semibold">Points</p>
                <button className="text-white/60 hover:text-white">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm text-white/70">Total Points Balance available</p>
                <p className="text-2xl font-bold">892</p>
              </div>
              <p className="text-xs text-white/40">
                Figma ipsum component variant main layer.
              </p>
            </div>

            {/* Incomes Card */}
            <div className="rounded-2xl bg-[#5C3310] p-5 text-white">
              <div className="mb-3 flex items-center justify-between">
                <p className="font-semibold">Incomes</p>
                <button className="text-white/60 hover:text-white">
                  <MoreVertical size={18} />
                </button>
              </div>
              <div className="grid grid-cols-3 divide-x divide-white/20">
                <div className="pr-2">
                  <p className="text-[10px] text-white/60">This month</p>
                  <p className="text-lg font-bold">$2,500</p>
                </div>
                <div className="px-2">
                  <p className="text-[10px] text-white/60">Overall</p>
                  <p className="text-lg font-bold">$10,000</p>
                </div>
                <div className="pl-2">
                  <p className="text-[10px] text-white/60">Pending</p>
                  <p className="text-lg font-bold">$1,256</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-5">
          {/* Page Header */}
          <h2 className="text-lg font-semibold text-[#C8952E]">
            Ready to browse Jobs tailored according<br />to your expertise?
          </h2>

          {/* Search Bar */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-[#6B3A12] focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-600">
              categories
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Questionnaire Card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="bg-[#E8F5E9] px-6 pt-6 pb-4">
              <h3 className="mb-2 text-center text-lg font-semibold text-[#1A1A1A]">
                How would you like us to improve your jobs feed?
              </h3>
              <p className="text-center text-sm text-[#4CAF50]">
                Please fill out the questionnaire to let us help you improve the jobs&apos; suggestions based on your provided input
              </p>
            </div>

            <div className="px-6 pt-4 pb-6">
              {/* Step 1: Fee Structure Preference */}
              {questionStep === 1 && (
                <>
                  <p className="mb-4 text-center text-sm font-semibold text-[#1A1A1A]">
                    1. Fee Structure Preference
                  </p>
                  <p className="mb-3 text-center text-sm text-gray-500">
                    What fee structures are you willing to offer?
                  </p>

                  <div className="mx-auto max-w-md space-y-3">
                    <button
                      type="button"
                      onClick={() => toggleFee("hourly")}
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedFees.includes("hourly")
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`flex h-5 w-5 items-center justify-center rounded border ${selectedFees.includes("hourly") ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedFees.includes("hourly") && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      Hourly Rate
                    </button>

                    {selectedFees.includes("hourly") && (
                      <div>
                        <p className="mb-2 text-sm text-gray-500">My standard hourly rate</p>
                        <div className="relative">
                          <input type="text" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm focus:border-gray-400 focus:outline-none" />
                          <DollarSign size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => toggleFee("fixed")}
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedFees.includes("fixed")
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`flex h-5 w-5 items-center justify-center rounded border ${selectedFees.includes("fixed") ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedFees.includes("fixed") && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      Fixed / Flat Fee
                    </button>

                    <button
                      type="button"
                      onClick={() => toggleFee("contingency")}
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedFees.includes("contingency")
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`flex h-5 w-5 items-center justify-center rounded border ${selectedFees.includes("contingency") ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedFees.includes("contingency") && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      Contingency Fee
                    </button>
                  </div>
                </>
              )}

              {/* Step 2: Pricing Flexibility */}
              {questionStep === 2 && (
                <>
                  <p className="mb-4 text-center text-sm font-semibold text-[#1A1A1A]">
                    2. Pricing Flexibility
                  </p>
                  <p className="mb-3 text-center text-sm text-gray-500">
                    How do you approach your stated rates?
                  </p>

                  <div className="mx-auto max-w-md space-y-3">
                    <button
                      type="button"
                      onClick={() => setSelectedPricing("firm")}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedPricing === "firm"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedPricing === "firm" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedPricing === "firm" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      <div>
                        <span className="font-medium">Firm</span>
                        <span className="text-gray-500"> (My rates are non-negotiable)</span>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedPricing("negotiable")}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedPricing === "negotiable"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedPricing === "negotiable" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedPricing === "negotiable" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      <div>
                        <span className="font-medium">Negotiable</span>
                        <span className="text-gray-500"> (I am open to discussing rates based on case complexity and client circumstances)</span>
                      </div>
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Case Complexity & Scope */}
              {questionStep === 3 && (
                <>
                  <p className="mb-4 text-center text-sm font-semibold text-[#1A1A1A]">
                    3. Case Complexity & Scope
                  </p>
                  <p className="mb-3 text-center text-sm text-gray-500">
                    What type of legal matters are you best suited for?
                  </p>

                  <div className="mx-auto max-w-md space-y-3">
                    <button
                      type="button"
                      onClick={() => setSelectedComplexity("straightforward")}
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedComplexity === "straightforward"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedComplexity === "straightforward" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedComplexity === "straightforward" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      I prefer straightforward, well-defined matters.
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedComplexity("moderate")}
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedComplexity === "moderate"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedComplexity === "moderate" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedComplexity === "moderate" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      I am equipped for moderately complex cases.
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedComplexity("complex")}
                      className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                        selectedComplexity === "complex"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedComplexity === "complex" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedComplexity === "complex" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      I specialize in highly complex and novel legal challenges.
                    </button>
                  </div>
                </>
              )}

              {/* Step 4: Professional Demeanor & Role */}
              {questionStep === 4 && (
                <>
                  <p className="mb-4 text-center text-sm font-semibold text-[#1A1A1A]">
                    4. Professional Demeanor & Role
                  </p>
                  <p className="mb-3 text-center text-sm text-gray-500">
                    How would you describe your primary role with clients?
                  </p>

                  <div className="mx-auto max-w-md space-y-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRole("counselor")}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                        selectedRole === "counselor"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedRole === "counselor" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedRole === "counselor" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">I prefer straightforward, well-defined matters.</p>
                        <p className="mt-1 text-xs text-gray-500">I focus on guidance, risk assessment, and out-of-court solutions. My goal is to be your trusted advisor and prevent problems.</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedRole("advocate")}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                        selectedRole === "advocate"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedRole === "advocate" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedRole === "advocate" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">The Assertive Advocate</p>
                        <p className="mt-1 text-xs text-gray-500">I am a strong negotiator and litigator. My goal is to be your enforcer, aggressively protecting your interests and rights.</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedRole("balanced")}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                        selectedRole === "balanced"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedRole === "balanced" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedRole === "balanced" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      <div>
                        <p className="font-medium">A Balanced Approach</p>
                        <p className="mt-1 text-xs text-gray-500">I adapt my style to the case, acting as a counselor first but ready to be an assertive advocate when needed.</p>
                      </div>
                    </button>
                  </div>
                </>
              )}

              {/* Step 5: Availability for Urgent Matters */}
              {questionStep === 5 && (
                <>
                  <p className="mb-4 text-center text-sm font-semibold text-[#1A1A1A]">
                    5. Availability for Urgent Matters
                  </p>
                  <p className="mb-3 text-center text-sm text-gray-500">
                    Are you available for clients with urgent legal needs?
                  </p>

                  <div className="mx-auto max-w-md space-y-3">
                    <button
                      type="button"
                      onClick={() => setSelectedUrgency("yes")}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                        selectedUrgency === "yes"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedUrgency === "yes" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedUrgency === "yes" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      <div>
                        <p>Yes, I can accommodate urgent and time-sensitive cases.</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedUrgency("no")}
                      className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-sm transition-colors ${
                        selectedUrgency === "no"
                          ? "border-[#1A1A1A] bg-white text-gray-700"
                          : "border-gray-300 bg-white text-gray-700"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${selectedUrgency === "no" ? "border-blue-500 bg-blue-500" : "border-gray-300"}`}>
                        {selectedUrgency === "no" && (
                          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        )}
                      </div>
                      <div>
                        <p>No, I typically require standard lead time for new matters.</p>
                      </div>
                    </button>
                  </div>
                </>
              )}

              {/* Action Button */}
              <div className="mx-auto max-w-md">
                <div className="flex justify-center pt-4">
                  {questionStep < totalSteps ? (
                    <Button onClick={handleNextQuestion} className="rounded-full border-2 border-[#C8952E] bg-[#C8952E] px-8 py-2 text-sm font-medium text-white hover:bg-[#A87924]">
                      Next question
                    </Button>
                  ) : (
                    <Button onClick={handleSubmitQuestionnaire} className="rounded-full border-2 border-[#C8952E] bg-[#C8952E] px-8 py-2 text-sm font-medium text-white hover:bg-[#A87924]">
                      Submit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          {jobListings.map((job) => (
            <div key={job.id} className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-[#FFFDF5] p-6">
              <h3 className="mb-3 text-lg font-semibold text-[#1A1A1A]">
                {job.title}
              </h3>

              {/* Tags */}
              <div className="mb-3 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="mb-3 flex items-center gap-1 text-sm text-gray-500">
                <MapPin size={14} className="text-red-400" />
                {job.location}
              </div>

              {/* Budget */}
              <p className="mb-1 text-xs text-gray-400">Budget</p>
              <p className="mb-3 text-xl font-bold text-[#1A1A1A]">{job.budget}</p>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-gray-500">
                {job.description}
              </p>

              {/* Footer */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                {job.urgency && (
                  <span className="flex items-center gap-1 text-green-600">
                    <Clock size={12} />
                    {job.urgency}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {job.timeAgo}
                </span>
                <span className="flex items-center gap-1">
                  <Coins size={12} />
                  {job.points} Points Needed
                </span>
              </div>

              <Link href={`/lawyer/jobs/${job.id}`}>
                <Button
                  variant="outline"
                  className="rounded-lg border-[#1A1A1A] px-6 text-sm text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white"
                >
                  View Job
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

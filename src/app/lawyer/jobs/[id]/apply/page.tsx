"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  DollarSign,
  ChevronDown,
  Minus,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApplyForJob() {
  const [paymentTerm, setPaymentTerm] = useState("fixed");
  const [bidPrice, setBidPrice] = useState("");
  const [duration, setDuration] = useState("Within a week.");
  const [coverLetter, setCoverLetter] = useState("");
  const [showCoverLetter, setShowCoverLetter] = useState(true);

  const serviceFee = bidPrice ? (parseFloat(bidPrice) * 0.05).toFixed(2) : "00.00";
  const youReceive = bidPrice ? (parseFloat(bidPrice) * 0.95).toFixed(2) : "00.00";

  return (
    <div className="px-6 py-6">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          href="/lawyer/look-for-jobs"
          className="inline-block rounded-lg border border-gray-300 px-4 py-1.5 text-sm font-medium text-[#0B0B0B] hover:bg-gray-50"
        >
          Back
        </Link>
      </div>

      {/* Page Title */}
      <h1 className="mb-6 text-2xl font-normal text-[#0B0B0B]">
        Submit an application
      </h1>

      <div className="flex gap-6">
        {/* Left - Application Form */}
        <div className="w-full max-w-md flex-shrink-0">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            {/* Terms Section */}
            <p className="mb-4 text-sm font-semibold text-[#0B0B0B]">Terms</p>

            {/* Payment Terms */}
            <p className="mb-2 text-sm text-[#0B0B0B]">How do you want to be paid?</p>
            <p className="mb-2 text-xs text-gray-500">Payment terms</p>
            <div className="mb-5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPaymentTerm("fixed")}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  paymentTerm === "fixed"
                    ? "bg-[#C8952E] text-white"
                    : "border border-gray-300 bg-white text-gray-600"
                }`}
              >
                Fixed Price
              </button>
              <button
                type="button"
                onClick={() => setPaymentTerm("hourly")}
                className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  paymentTerm === "hourly"
                    ? "bg-[#C8952E] text-white"
                    : "border border-gray-300 bg-white text-gray-600"
                }`}
              >
                Hourly Rate
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-current text-[8px]">i</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentTerm("contingency")}
                className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  paymentTerm === "contingency"
                    ? "bg-[#C8952E] text-white"
                    : "border border-gray-300 bg-white text-gray-600"
                }`}
              >
                Contingency
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-current text-[8px]">i</span>
              </button>
            </div>

            {/* Bid Price */}
            <p className="mb-2 text-sm font-normal text-[#0B0B0B]">
              What is the full amount you&apos;d like to bid for this job?
            </p>
            <p className="mb-2 text-xs text-gray-500">Price</p>
            <div className="relative mb-1">
              <input
                type="text"
                value={bidPrice}
                onChange={(e) => setBidPrice(e.target.value)}
                placeholder="Bid Price"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm text-gray-700 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
              />
              <DollarSign size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <p className="mb-3 text-xs text-[#9CA3AF]">
              Total amount the client will see on your proposal
            </p>

            <div className="mb-1 flex items-center justify-between text-sm">
              <p className="text-gray-500">5% Lawyer Service Fee</p>
              <p className="font-medium text-[#0B0B0B]">-${serviceFee}</p>
            </div>
            <div className="mb-5 flex items-center justify-between border-b border-gray-100 pb-4 text-sm">
              <p className="text-gray-500">You will Receive</p>
              <p className="font-medium text-[#0B0B0B]">-${youReceive}</p>
            </div>

            {/* Duration */}
            <p className="mb-2 text-sm text-[#0B0B0B]">How long will this project take?</p>
            <div className="relative mb-5">
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full appearance-none rounded-lg border border-gray-300 px-4 py-2.5 pr-10 text-sm text-gray-700 focus:border-gray-400 focus:outline-none"
              >
                <option>Within a week.</option>
                <option>1-2 weeks</option>
                <option>2-4 weeks</option>
                <option>1-3 months</option>
                <option>3-6 months</option>
                <option>More than 6 months</option>
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Cover Letter */}
            <div className="mb-4">
              <button
                type="button"
                onClick={() => setShowCoverLetter(!showCoverLetter)}
                className="flex w-full items-center justify-between text-sm font-medium text-[#0B0B0B]"
              >
                Write a Cover letter
                <Minus size={16} className="text-gray-400" />
              </button>
              {showCoverLetter && (
                <textarea
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Write a custom cover letter"
                  className="mt-3 h-32 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
                />
              )}
            </div>

            {/* Upload Documents */}
            <div className="mb-4">
              <p className="mb-1 text-sm font-medium text-[#0B0B0B]">
                Add certificates and relevant attachments
              </p>
              <p className="mb-2 text-xs text-[#9CA3AF]">
                Highlight the most relevant items from your profile to demonstrate your experience and skills
              </p>
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-[#0B0B0B] hover:text-gray-600"
              >
                Upload Documents
                <Upload size={14} />
              </button>
            </div>

            {/* Legal Service Agreement */}
            <div className="mb-6">
              <p className="mb-1 text-xs font-semibold uppercase text-gray-500">
                Add LEGAL SERVICE AGREEMENT
              </p>
              <p className="mb-1 text-sm font-medium text-[#0B0B0B]">
                Add Legal Service Agreement
              </p>
              <p className="mb-2 text-xs text-[#9CA3AF]">
                Highlight the most relevant items from your profile to demonstrate your experience and skills
              </p>
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-medium text-[#0B0B0B] hover:text-gray-600"
              >
                Upload Documents
                <Upload size={14} />
              </button>
            </div>

            {/* Submit */}
            <Button className="h-11 w-full rounded-full bg-[#C8952E] text-sm font-medium text-white hover:bg-[#A87924]">
              Send Application
            </Button>
            <div className="mt-3 text-center">
              <Link
                href="/lawyer/look-for-jobs"
                className="text-sm font-medium text-[#0B0B0B] underline hover:text-gray-600"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>

        {/* Right - Job Details */}
        <div className="hidden flex-1 lg:block">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-normal text-[#0B0B0B]">
                  Car Accident Injury Claim
                </h2>
                <div className="mb-2 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin size={14} className="text-red-400" />
                  Toronto
                </div>
                <span className="inline-block rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600">
                  Personal Injury
                </span>
              </div>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar size={12} />
                2 hours ago
              </span>
            </div>

            {/* Job Details */}
            <div className="mb-6 space-y-3 border-t border-gray-100 pt-4">
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Desired Role</p>
                <p className="text-sm font-semibold text-[#0B0B0B]">Representation in Litigation</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Category Price</p>
                <p className="text-sm font-semibold text-[#0B0B0B]">$50,000</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Budget</p>
                <p className="text-sm font-semibold text-[#0B0B0B]">
                  $25,000-$50,000{" "}
                  <span className="font-normal text-gray-400">Contingency Fee</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 space-y-4 text-sm leading-relaxed text-gray-600">
              <p>
                We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings.
              </p>
              <p>
                Figma ipsum component variant main layer. Content boolean device community comment project ellipse edit. Variant main editor figma inspect. Thumbnail content hand pencil mask underline ellipse flatten undo. Style style pixel comment export team editor.
              </p>
              <p>
                We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings. We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings. The ideal candidate will have a strong background in criminal law and a proven track record of success in similar cases.
              </p>
            </div>

            {/* Additional Info */}
            <div className="space-y-3 border-t border-gray-100 pt-4">
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Client&apos;s Goal</p>
                <p className="text-sm font-semibold text-[#0B0B0B]">Financial Compensation / Damages</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Lawsuit Filed?</p>
                <p className="text-sm font-semibold text-[#0B0B0B]">No</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Preferred Fee</p>
                <p className="text-sm font-semibold text-[#0B0B0B]">Contingency Fee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

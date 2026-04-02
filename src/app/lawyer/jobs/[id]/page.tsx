"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  MapPin,
  BadgeCheck,
  MoreVertical,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JobDetail() {
  return (
    <div className="px-6 py-6">
      {/* Top Bar */}
      <div className="mb-6 flex items-center gap-4">
        <Link
          href="/lawyer/look-for-jobs"
          className="rounded-lg border border-gray-300 px-4 py-1.5 text-sm font-medium text-[#1A1A1A] hover:bg-gray-50"
        >
          Back
        </Link>
        <span className="flex items-center gap-1 text-sm font-medium text-green-600">
          <Clock size={14} />
          Urgent Legal Need
        </span>
      </div>

      <div className="flex gap-6">
        {/* Left Sidebar - Client Info */}
        <div className="hidden w-[320px] flex-shrink-0 lg:block">
          <div className="rounded-3xl border-4 border-[#C8952E] bg-gradient-to-b from-[#C8952E] to-[#A87924] p-1.5 space-y-1.5">
            {/* Client Info Card */}
            <div className="rounded-2xl bg-[#5C3310] p-5 text-white">
              <p className="mb-3 text-sm font-medium text-white/70">Info about the Client</p>

              <div className="mb-4 flex items-center gap-2">
                <p className="font-semibold">Verified Client</p>
                <BadgeCheck size={16} className="text-blue-400" />
              </div>

              <div className="mb-3 rounded-lg bg-white/10 px-3 py-2.5 flex items-center justify-between">
                <p className="text-sm text-white/60">Total Bids on this Job</p>
                <p className="text-lg font-bold">2</p>
              </div>

              <div className="mb-2.5 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total posted Jobs</p>
                  <p className="text-lg font-bold">3</p>
                </div>
                <div className="rounded-lg bg-white/10 px-3 py-2">
                  <p className="text-[10px] text-white/50">Total Spent</p>
                  <p className="text-lg font-bold">$500+</p>
                </div>
              </div>

              <div className="rounded-lg bg-white/10 px-3 py-2">
                <p className="text-[10px] text-white/50">Total Hired Job</p>
                <p className="text-lg font-bold">2</p>
              </div>
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
                <p className="text-sm text-white/70">Points available</p>
                <p className="text-2xl font-bold">892</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-2">
                <p className="text-sm text-white/70">Points required</p>
                <p className="text-lg font-bold">15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Job Details */}
        <div className="flex-1">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h1 className="mb-2 text-2xl font-normal text-[#0B0B0B]">
                  Car Accident Injury Claim
                </h1>
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

            {/* Job Details Grid */}
            <div className="mb-6 space-y-3 border-t border-gray-100 pt-4">
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Desired Role</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">Representation in Litigation</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Category Price</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">$50,000</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Budget</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">
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
            <div className="mb-6 space-y-3 border-t border-gray-100 pt-4">
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Client&apos;s Goal</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">Financial Compensation / Damages</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Lawsuit Filed?</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">No</p>
              </div>
              <div className="flex items-baseline gap-8">
                <p className="w-32 flex-shrink-0 text-sm text-gray-500">Preferred Fee</p>
                <p className="text-sm font-semibold text-[#1A1A1A]">Contingency Fee</p>
              </div>
            </div>

            {/* Apply Button */}
            <Link href="/lawyer/jobs/1/apply">
              <Button className="rounded-full border-2 border-[#C8952E] bg-[#C8952E] px-8 py-2 text-sm font-medium text-white hover:bg-[#A87924]">
                Apply For the Job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

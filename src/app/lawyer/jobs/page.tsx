"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  "Where I Sent Bid",
  "Awarded Job Request",
  "Active",
  "Client invited me",
  "Completed Jobs",
];

const jobs = [
  {
    id: 1,
    title: "Criminal Defense Lawyer Needed for Assault Charges Case",
    tags: ["Assault Charges"],
    description:
      "We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings.",
    messages: 0,
  },
  {
    id: 2,
    title: "Criminal Defense Lawyer Needed for Assault Charges Case",
    tags: ["Assault Charges"],
    description:
      "We are seeking an experienced criminal defense lawyer to represent our client facing assault charges. The lawyer will be responsible for providing legal counsel, developing defense strategies, and representing the client in court proceedings.",
    messages: 24,
  },
];

export default function Jobs() {
  const [activeTab, setActiveTab] = useState("Where I Sent Bid");
  const [sortBy, setSortBy] = useState("Most recent");

  return (
    <div className="px-6 py-6">
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-[#FFFDF5] p-6">
        {/* Page Title */}
        <h1 className="mb-5 text-2xl font-normal text-[#0B0B0B]">
          {activeTab === "Active" ? "My Applications" : "Jobs"}
        </h1>

        {/* Search + Sort */}
        <div className="mb-5 flex items-center gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
            />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm text-gray-700 focus:border-gray-400 focus:outline-none"
            >
              <option>Most recent</option>
              <option>Oldest first</option>
              <option>Budget: High to Low</option>
              <option>Budget: Low to High</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-5 pb-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-[#1A1A1A] text-[#0B0B0B]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="space-y-5">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="mb-3 text-lg font-semibold text-[#0B0B0B]">
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

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-gray-500">
                {job.description}
              </p>

              {/* Actions */}
              <div className="flex items-end justify-between">
                <Link href={activeTab === "Where I Sent Bid" ? `/lawyer/jobs/${job.id}` : `/lawyer/jobs/${job.id}/details`}>
                  <Button
                    variant="outline"
                    className="rounded-lg border-[#1A1A1A] px-5 text-sm text-[#0B0B0B] hover:bg-[#1A1A1A] hover:text-white"
                  >
                    {activeTab === "Where I Sent Bid" ? "View Job Posting" : "View Job Details"}
                  </Button>
                </Link>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <Button
                      variant="outline"
                      className="rounded-lg border-[#1A1A1A] px-5 text-sm text-[#0B0B0B] hover:bg-[#1A1A1A] hover:text-white"
                    >
                      Message
                    </Button>
                    {activeTab === "Where I Sent Bid" && (
                      <p className="mt-1 text-xs text-gray-400">
                        {job.messages} Messages
                      </p>
                    )}
                  </div>

                  {(activeTab === "Awarded Job Request" || activeTab === "Client invited me" || activeTab === "Completed Jobs") && (
                    <Button className="rounded-lg bg-[#C8952E] px-5 text-sm font-medium text-white hover:bg-[#A87924]">
                      Accept the Job
                    </Button>
                  )}

                  {activeTab === "Active" && (
                    <Button className="rounded-lg bg-[#C8952E] px-5 text-sm font-medium text-white hover:bg-[#A87924]">
                      View Stage
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            className="rounded-lg border-[#1A1A1A] px-8 text-sm text-[#0B0B0B] hover:bg-[#1A1A1A] hover:text-white"
          >
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  );
}

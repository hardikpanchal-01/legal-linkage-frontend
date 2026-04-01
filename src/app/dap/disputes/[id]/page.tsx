"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DisputeDetail() {
  const [showResolve, setShowResolve] = useState(false);
  const [showUnresolved, setShowUnresolved] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-[#1B2A4A]">Dispute Details</h1>
          <p className="text-xs text-[#6B7280]">
            Dispute Management &gt; Dispute Details
          </p>
        </div>
        <Button className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]">
          View Details
        </Button>
      </div>

      {/* General Information */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-[#1B2A4A]">General Information</h2>
        <div className="space-y-3">
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">DAP</span>
            <span className="text-sm font-medium text-[#1B2A4A]">Alberto Rim</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Dispute ID</span>
            <span className="text-sm font-medium text-[#1B2A4A]">DSP-1025</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Parties Involved</span>
            <span className="text-sm text-[#1B2A4A]">
              <span className="font-medium">John Doe</span>{" "}
              <span className="text-[#6B7280]">(Client)</span> &amp;{" "}
              <span className="font-medium">Bob Johnson</span>{" "}
              <span className="text-[#6B7280]">(Lawyer)</span>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Initiator</span>
            <span className="text-sm text-[#1B2A4A]">
              <span className="font-medium">John Doe</span>{" "}
              <span className="text-[#6B7280]">(Client)</span>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Status</span>
            <span className="text-sm font-semibold text-[#22C55E]">Resolved</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 shrink-0 text-sm text-[#6B7280]">Reason</span>
            <span className="text-sm text-[#1B2A4A]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
            </span>
          </div>
        </div>

        {/* Payment Escrow */}
        <div className="mt-5">
          <h3 className="mb-3 text-sm font-bold text-[#1B2A4A]">Payment Escrow</h3>
          <div className="space-y-2">
            <div className="flex gap-8">
              <span className="w-20 text-sm text-[#6B7280]">Lawyer</span>
              <span className="text-sm font-semibold text-[#22C55E]">Done</span>
            </div>
            <div className="flex gap-8">
              <span className="w-20 text-sm text-[#6B7280]">Client</span>
              <span className="text-sm font-semibold text-[#22C55E]">Done</span>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-5">
          <h3 className="mb-3 text-sm font-bold text-[#3B82F6]">Reviews</h3>
          <div className="space-y-3">
            <div className="flex gap-8">
              <span className="w-20 shrink-0 text-sm text-[#6B7280]">DAP</span>
              <span className="text-sm text-[#1B2A4A]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
              </span>
            </div>
            <div className="flex gap-8">
              <span className="w-20 shrink-0 text-sm text-[#6B7280]">Lawyer</span>
              <span className="text-sm text-[#1B2A4A]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
              </span>
            </div>
            <div className="flex gap-8">
              <span className="w-20 shrink-0 text-sm text-[#6B7280]">Client</span>
              <span className="text-sm text-[#1B2A4A]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
              </span>
            </div>
          </div>
        </div>

        {/* Resolution Agreement */}
        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="mb-3 text-sm font-bold text-[#3B82F6]">Resolution Agreement</h3>
            <span className="rounded-full bg-[#E9A319] px-4 py-1.5 text-xs font-medium text-white">
              Ready to reach Arbitrator
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex gap-8">
              <span className="w-20 text-sm text-[#6B7280]">Lawyer</span>
              <span className="text-sm font-semibold text-[#22C55E]">Agreed</span>
            </div>
            <div className="flex gap-8">
              <span className="w-20 text-sm text-[#6B7280]">Client</span>
              <span className="text-sm font-semibold text-red-500">Disagreed</span>
            </div>
          </div>
        </div>

        {/* Resolution Details */}
        <div className="mt-5">
          <h3 className="mb-3 text-sm font-bold text-[#3B82F6]">Resolution Details</h3>
          <div className="flex gap-8">
            <span className="w-20 text-sm text-[#6B7280]">Method</span>
            <span className="text-sm text-[#1B2A4A]">Payment Refund</span>
          </div>
        </div>
      </div>

      {/* Job Info */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-lg font-bold text-[#1B2A4A]">Job Info</h2>
        <div className="space-y-3">
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Job ID</span>
            <span className="text-sm font-medium text-[#1B2A4A]">DSP-1025</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Contract amount</span>
            <span className="text-sm font-bold text-[#1B2A4A]">$900</span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Initiator</span>
            <span className="text-sm text-[#1B2A4A]">
              <span className="font-medium">John Doe</span>{" "}
              <span className="text-[#6B7280]">(Client)</span>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-36 text-sm text-[#6B7280]">Link to the Job</span>
            <a href="#" className="text-sm font-medium text-[#3B82F6] underline">
              Figma ipsum componentFigma ipsum component
            </a>
          </div>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Communication History</h2>
          <Button className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]">
            View Communication History
          </Button>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-[#1B2A4A]">Mediation &amp; Resolution</h2>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setShowResolve(true)}
              variant="outline"
              className="h-10 rounded-lg border-[#1B2A4A] px-5 text-sm font-medium text-[#1B2A4A]"
            >
              Resolve Dispute
            </Button>
            <Button
              onClick={() => setShowUnresolved(true)}
              className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Mark as Unresolved
            </Button>
          </div>
        </div>
      </div>

      {/* Mark as Resolved Dialog */}
      <Dialog open={showResolve} onOpenChange={setShowResolve}>
        <DialogContent className="max-w-md rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Mark as Resolved
            </DialogTitle>
            <button
              onClick={() => setShowResolve(false)}
              className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Reason for marking as Resolved</p>
              <textarea
                placeholder="Type Here"
                rows={4}
                className="w-full resize-y rounded-lg border border-[#D1D5DB] px-3 py-2.5 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:ring-1 focus:ring-[#1B2A4A] focus:outline-none"
              />
            </div>
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Review</p>
              <textarea
                placeholder="Type Here"
                rows={4}
                className="w-full resize-y rounded-lg border border-[#D1D5DB] px-3 py-2.5 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:ring-1 focus:ring-[#1B2A4A] focus:outline-none"
              />
            </div>
            <div>
              <p className="mb-2 text-sm text-[#6B7280]">Resolution Details</p>
              <Select>
                <SelectTrigger className="h-10 w-full rounded-lg border-[#D1D5DB] text-sm">
                  <SelectValue placeholder="Select Resolution Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payment-refund">Payment Refund</SelectItem>
                  <SelectItem value="discussion-based">Discussion based</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button onClick={() => setShowResolve(false)} className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]">
              Confirm
            </Button>
            <Button variant="outline" onClick={() => setShowResolve(false)} className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50">
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mark as Unresolved Dialog */}
      <Dialog open={showUnresolved} onOpenChange={setShowUnresolved}>
        <DialogContent className="max-w-md rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Mark as Unresolved
            </DialogTitle>
            <button
              onClick={() => setShowUnresolved(false)}
              className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-sm text-[#6B7280]">Reason for marking as unresolved</p>
            <textarea
              placeholder="Type Here"
              rows={5}
              className="w-full resize-y rounded-lg border border-[#D1D5DB] px-3 py-2.5 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:ring-1 focus:ring-[#1B2A4A] focus:outline-none"
            />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button onClick={() => setShowUnresolved(false)} className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]">
              Confirm
            </Button>
            <Button variant="outline" onClick={() => setShowUnresolved(false)} className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50">
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

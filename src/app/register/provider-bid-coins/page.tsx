"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Footer } from "@/components/footer";

const scheduleCategories = [
  {
    name: "Criminal Law",
    services: [
      { name: "Summary and Indictable Offences", coins: 1 },
      { name: "Bail and Release Hearings", coins: 2 },
      { name: "DUI / Impaired Driving", coins: 1 },
    ],
  },
  {
    name: "Civil Litigation",
    services: [
      { name: "Contract Disputes", coins: 2 },
      { name: "Property Disputes", coins: 2 },
      { name: "Debt Recovery", coins: 1 },
    ],
  },
  {
    name: "Family Law",
    services: [
      { name: "Divorce Proceedings", coins: 2 },
      { name: "Child Custody", coins: 3 },
      { name: "Spousal Support", coins: 1 },
    ],
  },
];

const PRICE_PER_COIN = 2;

export default function ProviderBidCoins() {
  const [points, setPoints] = useState(5);
  const [showSchedule, setShowSchedule] = useState(false);
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const router = useRouter();

  const total = points * PRICE_PER_COIN;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.svg" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Add Bid Coins to your account
        </h1>
        <p className="mb-2 max-w-md text-center text-sm leading-relaxed text-[#6B7280]">
          These points will be used, placing bid to any listed job you want to win
        </p>
        <button
          type="button"
          onClick={() => setShowSchedule(true)}
          className="mb-8 text-sm font-semibold text-[#1B2A4A] underline underline-offset-2"
        >
          See Bid Coins Schedule
        </button>

        {/* Card */}
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8">
          {/* Price info */}
          <div className="mb-4 flex items-center justify-between rounded-xl bg-[#FFF8E7] p-4">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#1B2A4A] bg-[#E9A319]">
                <span className="text-sm font-bold text-white">$</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1B2A4A]">Price</p>
                <p className="text-xs text-[#6B7280]">You can get as much as you need</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-[#1B2A4A]">${PRICE_PER_COIN}</span>
              <span className="text-sm text-[#6B7280]"> /Bid Coin</span>
            </div>
          </div>

          {/* Add Points */}
          <div className="mb-4 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
            <span className="text-sm font-medium text-[#1B2A4A]">Add Points</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPoints(Math.max(1, points - 1))}
                className="flex size-8 items-center justify-center rounded-full border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"
              >
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center text-lg font-bold text-[#1B2A4A]">{points}</span>
              <button
                type="button"
                onClick={() => setPoints(points + 1)}
                className="flex size-8 items-center justify-center rounded-full border border-[#D1D5DB] text-[#6B7280] hover:bg-[#F3F4F6]"
              >
                <Plus className="size-4" />
              </button>
            </div>
          </div>

          {/* Total */}
          <div className="mb-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4">
            <span className="text-sm text-[#6B7280]">Total</span>
            <div>
              <span className="text-2xl font-bold text-[#1B2A4A]">${total}</span>
              <span className="text-sm text-[#6B7280]"> /for {points} Bid Coins</span>
            </div>
          </div>

          {/* Purchase Button */}
          <Button
            onClick={() => router.push("/register/provider-verification-mandatory")}
            className="h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
          >
            Purchase Now
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        {/* Or Skip */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <hr className="w-20 border-[#D1D5DB]" />
            <span className="text-sm text-[#6B7280]">Or</span>
            <hr className="w-20 border-[#D1D5DB]" />
          </div>
          <button
            type="button"
            onClick={() => router.push("/register/provider-verification-mandatory")}
            className="mt-1 text-sm font-medium text-[#1B2A4A] underline underline-offset-2"
          >
            Skip for Now
          </button>
        </div>
      </div>

      <Footer />

      {/* Bid Coins Schedule Dialog */}
      <Dialog open={showSchedule} onOpenChange={setShowSchedule}>
        <DialogContent className="max-w-lg rounded-2xl border-none bg-white p-6 shadow-2xl sm:max-w-md">
          <DialogTitle className="text-sm font-medium text-[#6B7280]">
            Reference for the bid coins schedule
          </DialogTitle>

          <div className="mt-4 space-y-3">
            {scheduleCategories.map((cat) => (
              <div key={cat.name} className="overflow-hidden rounded-xl border border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => setExpandedCat(expandedCat === cat.name ? null : cat.name)}
                  className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left hover:bg-[#F9FAFB]"
                >
                  <span className="text-sm font-semibold text-[#1B2A4A]">{cat.name}</span>
                  {expandedCat === cat.name ? (
                    <ChevronUp className="size-5 text-[#6B7280]" />
                  ) : (
                    <ChevronDown className="size-5 text-[#6B7280]" />
                  )}
                </button>

                {expandedCat === cat.name && (
                  <div className="border-t border-[#E5E7EB] px-4 py-2">
                    <div className="mb-2 flex items-center justify-between text-xs text-[#9CA3AF]">
                      <span>Service name</span>
                      <span>Bid Coins</span>
                    </div>
                    {cat.services.map((svc) => (
                      <div key={svc.name} className="flex items-center justify-between border-t border-[#F3F4F6] py-2.5">
                        <span className="text-sm text-[#1B2A4A]">{svc.name}</span>
                        <span className="text-sm font-medium text-[#1B2A4A]">{svc.coins}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowSchedule(false)}
            className="mt-4 w-full text-center text-sm font-medium text-[#1B2A4A] underline underline-offset-2"
          >
            Close
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Bell, User, Pencil, CheckCircle } from "lucide-react";
import { Footer } from "@/components/footer";

const badgesEarned = [
  { name: "ID Government issued ID", verifier: "CERTN", status: "verified" },
  { name: "License /certificate", verifier: "CERTN", status: "verified" },
  { name: "Good standing verified", verifier: null, status: "pending" },
  { name: "Credit checked", verifier: null, status: "pending" },
  { name: "Crime background check", verifier: null, status: "pending" },
  { name: "Liability insurance check", verifier: null, status: "pending" },
];

export default function ProviderDashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      {/* Header / Navbar - full width */}
      <header className="w-full bg-[#1B2A4A]">
        <div className="flex items-center justify-between px-6 py-3 sm:px-10">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="Logo" width={40} height={48} />
            <div>
              <p className="text-base font-bold text-white">LawLinkup</p>
              <p className="text-[10px] font-medium text-[#E9A319]">Trust by design</p>
              <p className="text-[9px] text-white/70">Where client, Lawyer, justice connect</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="rounded-full border border-white/30 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-white/10">
              Request arbitration
            </button>
            <button className="relative text-white/80 hover:text-white">
              <Bell className="size-5" />
            </button>
            <div className="flex size-9 items-center justify-center rounded-full bg-[#E9A319]">
              <User className="size-5 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 flex-col items-center px-4 pt-8 pb-8 sm:px-8">
        {/* Request is Pending */}
        <span className="mb-6 rounded-full bg-[#E9A319] px-5 py-1.5 text-xs font-medium text-white">
          Request is Pending
        </span>

        {/* Attempts card */}
        <div className="mb-8 w-full max-w-md rounded-xl border border-[#E5E7EB] bg-white p-6 text-center shadow-sm">
          <p className="mb-2 text-sm text-[#6B7280]">Attempts left to verify</p>
          <p className="text-4xl font-bold text-[#1B2A4A]">
            2 <span className="text-base font-normal text-[#6B7280]">out of 3</span>
          </p>
        </div>

        {/* Badges Earned */}
        <div className="w-full max-w-2xl">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#1B2A4A]">Badges Earned</h2>
            <Pencil className="size-4 text-[#9CA3AF]" />
          </div>

          <div className="space-y-5">
            {badgesEarned.map((badge) => (
              <div key={badge.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle className="size-6 text-[#3B82F6]" />
                  <span className="text-sm text-[#1B2A4A]">
                    <span className="font-medium">{badge.name}</span>
                    {badge.verifier && (
                      <span className="text-[#6B7280]">
                        {" "}(verified by <span className="font-bold italic">{badge.verifier}</span> verification)
                      </span>
                    )}
                  </span>
                </div>
                {badge.status === "pending" && (
                  <span className="rounded-sm bg-[#E9A319] px-3 py-1 text-[10px] font-semibold text-white">
                    Pending
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lawyer illustration */}
        <div className="mt-10">
          <Image
            src="/images/lawyer-illustration.svg"
            alt="Lawyer"
            width={200}
            height={200}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

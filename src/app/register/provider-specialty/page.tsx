"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const specialties = [
  "Lawyer",
  "Paralegal (ON only)",
  "Notaire (QC)/Notary Public",
  "Regulated Immigration Consultant (RCIC)",
  "Patent Agent / Trademark Agent",
  "Arbitrator",
  "Mediator",
  "Licensed Insolvency Trustee (LIT) / Bankruptcy Trustee",
  "Commissioner for taking affidavits / Oaths",
  "Foreign Legal Consultant (FLC)/Registered Foreign Lawyer(RFL)",
  "Other Regulated Legal Specialist",
];

export default function ProviderSpecialty() {
  const [selected, setSelected] = useState<string[]>([]);
  const [drapAnswer, setDrapAnswer] = useState<"yes" | "no" | null>(null);
  const [showDrapTooltip, setShowDrapTooltip] = useState(false);
  const router = useRouter();

  const toggleSpecialty = (specialty: string) => {
    setSelected((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleContinue = () => {
    router.push("/register/provider-certified");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        {/* Logo */}
        <div className="mb-5">
          <Image
            src="/images/logo.svg"
            alt="ClientLawyerLink Logo"
            width={60}
            height={72}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          What specialty you will
          <br />
          be working on
        </h1>
        <p className="mb-8 text-sm text-[#6B7280]">Select one</p>

        {/* Specialty list */}
        <div className="mb-8 flex w-full max-w-xl flex-col gap-3">
          {specialties.map((specialty) => (
            <div key={specialty}>
              <button
                type="button"
                onClick={() => toggleSpecialty(specialty)}
                className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border bg-white px-5 py-4 text-left transition-all hover:shadow-md ${
                  selected.includes(specialty)
                    ? "border-[#1B2A4A] ring-1 ring-[#1B2A4A]/20"
                    : "border-[#E5E7EB]"
                }`}
              >
                <div
                  className={`flex size-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                    selected.includes(specialty)
                      ? "border-[#1B2A4A] bg-[#1B2A4A]"
                      : "border-[#9CA3AF]"
                  }`}
                >
                  {selected.includes(specialty) && (
                    <svg
                      className="size-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-[#1B2A4A]">{specialty}</span>
              </button>

              {/* Arbitrator expanded section */}
              {specialty === "Arbitrator" && selected.includes("Arbitrator") && (
                <div className="mt-2 ml-2 rounded-xl border border-[#E5E7EB] bg-white p-4">
                  <div className="mb-3 flex items-start gap-2">
                    <p className="text-xs leading-relaxed text-[#4A4A4A]">
                      Are you willing to be considered for the Internal Dispute Panel, which handles cases between platform users at a preset, discounted fee?
                    </p>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowDrapTooltip(!showDrapTooltip)}
                        className="text-[#9CA3AF] hover:text-[#6B7280]"
                      >
                        <Info className="size-4" />
                      </button>
                      {showDrapTooltip && (
                        <div className="absolute right-0 top-6 z-10 w-60 rounded-lg bg-[#1B2A4A] p-3 text-[10px] leading-relaxed text-white shadow-lg">
                          <p className="font-medium">DRAP Explanation:</p>
                          <p>The DRAP staff behaves as an internal staff to resolve disputes between the lawyers and clients on the platform.</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setDrapAnswer("yes")}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
                        drapAnswer === "yes"
                          ? "border-[#1B2A4A] ring-1 ring-[#1B2A4A]/20"
                          : "border-[#E5E7EB]"
                      }`}
                    >
                      <div
                        className={`flex size-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                          drapAnswer === "yes"
                            ? "border-[#1B2A4A] bg-[#1B2A4A]"
                            : "border-[#9CA3AF]"
                        }`}
                      >
                        {drapAnswer === "yes" && (
                          <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setDrapAnswer("no")}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-all ${
                        drapAnswer === "no"
                          ? "border-[#1B2A4A] ring-1 ring-[#1B2A4A]/20"
                          : "border-[#E5E7EB]"
                      }`}
                    >
                      <div
                        className={`flex size-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                          drapAnswer === "no"
                            ? "border-[#1B2A4A] bg-[#1B2A4A]"
                            : "border-[#9CA3AF]"
                        }`}
                      >
                        {drapAnswer === "no" && (
                          <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      No
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Continue button */}
        <Button
          onClick={handleContinue}
          className="h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66]"
        >
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

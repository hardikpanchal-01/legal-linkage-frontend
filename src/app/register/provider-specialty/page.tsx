"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
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
  const router = useRouter();

  const toggleSpecialty = (specialty: string) => {
    setSelected((prev) =>
      prev.includes(specialty)
        ? prev.filter((s) => s !== specialty)
        : [...prev, specialty]
    );
  };

  const handleContinue = () => {
    if (selected.length === 0) return;
    // TODO: Navigate to next step
    console.log("Selected specialties:", selected);
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
            <button
              key={specialty}
              type="button"
              onClick={() => toggleSpecialty(specialty)}
              className={`flex cursor-pointer items-center gap-4 rounded-xl border bg-white px-5 py-4 text-left transition-all hover:shadow-md ${
                selected.includes(specialty)
                  ? "border-[#1B2A4A] ring-1 ring-[#1B2A4A]/20"
                  : "border-[#E5E7EB]"
              }`}
            >
              <div
                className={`flex size-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  selected.includes(specialty)
                    ? "border-[#1B2A4A] bg-[#1B2A4A]"
                    : "border-[#D1D5DB]"
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
          ))}
        </div>

        {/* Continue button */}
        <Button
          onClick={handleContinue}
          disabled={selected.length === 0}
          className="h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66] disabled:opacity-40"
        >
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

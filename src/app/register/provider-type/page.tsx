"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

type ProviderType = "individual" | "firm";

export default function ProviderType() {
  const [selected, setSelected] = useState<ProviderType | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (!selected) return;
    if (selected === "individual") {
      router.push("/register/provider-individual");
    } else {
      router.push("/register/provider-organization");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      {/* Main content */}
      <div className="flex flex-1 flex-col items-center px-4 pt-12 pb-8 sm:px-8">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/logo.png"
            alt="LawLinkage™ Logo"
            width={70}
            height={84}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          How you will be
          <br />
          providing law services
        </h1>
        <p className="mb-8 text-sm text-[#6B7280]">Select one</p>

        {/* Provider type cards */}
        <div className="mb-8 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Individual Legal Service Provider */}
          <button
            type="button"
            onClick={() => setSelected("individual")}
            className={`cursor-pointer rounded-2xl border-2 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg ${
              selected === "individual"
                ? "border-[#1B2A4A] ring-2 ring-[#1B2A4A]/20"
                : "border-transparent"
            }`}
          >
            <div className="mb-3 flex justify-center">
              <Image
                src="/images/loyer-individual.svg"
                alt="Individual legal service provider"
                width={100}
                height={100}
              />
            </div>
            <p className="text-sm font-medium text-[#1B2A4A]">
              Individual legal service provider
            </p>
          </button>

          {/* Law Firm / Legal Organization */}
          <button
            type="button"
            onClick={() => setSelected("firm")}
            className={`cursor-pointer rounded-2xl border-2 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg ${
              selected === "firm"
                ? "border-[#1B2A4A] ring-2 ring-[#1B2A4A]/20"
                : "border-transparent"
            }`}
          >
            <div className="mb-3 flex justify-center">
              <Image
                src="/images/loyer-organigation.svg"
                alt="Law Firm / Legal Organization"
                width={140}
                height={100}
              />
            </div>
            <p className="text-sm font-medium text-[#1B2A4A]">
              Law Firm / Legal Organization
            </p>
          </button>
        </div>

        {/* Continue button */}
        <Button
          onClick={handleContinue}
          disabled={!selected}
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

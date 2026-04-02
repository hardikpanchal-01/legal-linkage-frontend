"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/footer";

export default function ProviderInsurance() {
  const [hasInsurance, setHasInsurance] = useState(false);
  const [noInsurance, setNoInsurance] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/provider-languages");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.png" alt="LawLinkage™ Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Complete Account Details
        </h1>
        <p className="mb-8 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          Enter your details to create an account and start your journey with us.
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <h2 className="mb-1 text-center text-base font-semibold text-[#1B2A4A]">
            Professional Liability Insurance
          </h2>
          <p className="mb-6 text-center text-sm font-medium text-[#22C55E]">
            Highly Recommended!
          </p>

          {/* Yes checkbox */}
          <label className="mb-4 flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={hasInsurance}
              onChange={() => { setHasInsurance(!hasInsurance); setNoInsurance(false); }}
              className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
            />
            <span className="text-sm text-[#4A4A4A]">
              Yes, I currently maintain professional liability insurance.
            </span>
          </label>

          {/* Insurance fields - always visible */}
          <div className="mb-4">
            <Label htmlFor="insuranceProvider" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Insurance Provider <span className="text-red-500">*</span>
            </Label>
            <Input
              id="insuranceProvider"
              name="insuranceProvider"
              placeholder="Insurance Provider Name"
              className="h-11 rounded-lg border-[#D1D5DB] text-sm placeholder:text-[#9CA3AF]"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="policyNumber" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Policy Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="policyNumber"
              name="policyNumber"
              placeholder="Insurance Policy Number"
              className="h-11 rounded-lg border-[#D1D5DB] text-sm placeholder:text-[#9CA3AF]"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="coverageAmount" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Coverage Amount <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="coverageAmount"
                name="coverageAmount"
                placeholder="0"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <DollarSign className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          <div className="mb-5">
            <Label htmlFor="expiryDate" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Policy Expiry Date <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="expiryDate"
                name="expiryDate"
                type="date"
                placeholder="Select Date"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
            </div>
          </div>

          {/* No checkbox */}
          <label className="mb-6 flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={noInsurance}
              onChange={() => { setNoInsurance(!noInsurance); setHasInsurance(false); }}
              className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
            />
            <span className="text-sm text-[#4A4A4A]">
              No, I do not currently have professional liability insurance.
            </span>
          </label>

          <Button type="submit" className="h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]">
            Next
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

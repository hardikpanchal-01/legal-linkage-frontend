"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const mandatoryItems = [
  { name: "ID Government issued ID verify", price: 4.99 },
  { name: "License /certificate Verify", price: 29.99 },
  { name: "Good standing verify", price: 9.99 },
  { name: "Credit check", price: 12.99 },
  { name: "Crime background check", price: 48.79 },
  { name: "Liability insurance", price: 9.99 },
];

export default function ProviderVerificationMandatory() {
  const router = useRouter();
  const total = mandatoryItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.svg" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-8 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Registration &amp;
          <br />
          Verification process
        </h1>

        {/* Card with timeline */}
        <div className="flex w-full max-w-lg gap-4">
          {/* Timeline dots */}
          <div className="flex flex-col items-center pt-2">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#1B2A4A] bg-[#E9A319]">
              <div className="size-4 rounded-full bg-[#E9A319]" />
            </div>
            {mandatoryItems.map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-8 w-0.5 bg-[#D1D5DB]" />
                <div className="size-3 rounded-full bg-[#E9A319]" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 rounded-2xl bg-white p-6 shadow-md">
            <p className="mb-4 text-xs font-medium text-[#6B7280]">Mandatory Verifications</p>

            <div className="space-y-0">
              {mandatoryItems.map((item) => (
                <div key={item.name} className="flex items-center justify-between border-b border-[#F3F4F6] py-3">
                  <span className="text-sm text-[#1B2A4A]">{item.name}</span>
                  <span className="text-sm font-medium text-[#1B2A4A]">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Total</span>
              <span className="text-3xl font-bold text-[#1B2A4A]">${total.toFixed(2)}</span>
            </div>

            {/* Continue */}
            <Button
              onClick={() => router.push("/register/provider-verification-optional")}
              className="mt-6 h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Continue
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* Or Will do it Later */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <hr className="w-20 border-[#D1D5DB]" />
            <span className="text-sm text-[#6B7280]">Or</span>
            <hr className="w-20 border-[#D1D5DB]" />
          </div>
          <Link
            href="/register/provider-verification-optional"
            className="mt-1 text-sm font-medium text-[#1B2A4A] underline underline-offset-2"
          >
            Will do it Later
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

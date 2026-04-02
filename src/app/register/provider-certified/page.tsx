"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/footer";

type Answer = "yes" | "no";

export default function ProviderCertified() {
  const [selected, setSelected] = useState<Answer | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    router.push("/register/provider-categories");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        {/* Logo */}
        <div className="mb-5">
          <Image
            src="/images/logo.png"
            alt="LawLinkage™ Logo"
            width={60}
            height={72}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Are you a Certified
          <br />
          Specialist (C.S.) ?
        </h1>
        <p className="mb-8 text-sm text-[#6B7280]">Select one</p>

        {/* Options */}
        <div className="flex w-full max-w-xl flex-col gap-3">
          {/* Yes */}
          <button
            type="button"
            onClick={() => setSelected("yes")}
            className={`flex cursor-pointer items-center gap-4 rounded-xl border bg-white px-5 py-4 text-left transition-all hover:shadow-md ${
              selected === "yes"
                ? "border-[#1B2A4A] ring-1 ring-[#1B2A4A]/20"
                : "border-[#E5E7EB]"
            }`}
          >
            <div
              className={`flex size-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                selected === "yes"
                  ? "border-[#1B2A4A] bg-[#1B2A4A]"
                  : "border-[#D1D5DB]"
              }`}
            >
              {selected === "yes" && (
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
            <span className="text-sm font-medium text-[#1B2A4A]">Yes</span>
          </button>

          {/* Conditional input when Yes is selected */}
          {selected === "yes" && (
            <div className="ml-2">
              <p className="mb-2 text-xs text-[#6B7280]">
                I am a Certified Specialist (C.S.) in
              </p>
              <Input
                placeholder="(e.g., Family Law, Criminal Law)"
                className="h-11 rounded-lg border-[#D1D5DB] text-sm placeholder:text-[#9CA3AF]"
              />
            </div>
          )}

          {/* No */}
          <button
            type="button"
            onClick={() => setSelected("no")}
            className={`flex cursor-pointer items-center gap-4 rounded-xl border bg-white px-5 py-4 text-left transition-all hover:shadow-md ${
              selected === "no"
                ? "border-[#1B2A4A] ring-1 ring-[#1B2A4A]/20"
                : "border-[#E5E7EB]"
            }`}
          >
            <div
              className={`flex size-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                selected === "no"
                  ? "border-[#1B2A4A] bg-[#1B2A4A]"
                  : "border-[#D1D5DB]"
              }`}
            >
              {selected === "no" && (
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
            <span className="text-sm font-medium text-[#1B2A4A]">No</span>
          </button>
        </div>

        {/* Continue button */}
        <Button
          onClick={handleContinue}
          className="mt-8 h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66]"
        >
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

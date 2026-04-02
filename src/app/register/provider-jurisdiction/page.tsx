"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Footer } from "@/components/footer";

type Scope = "provincial" | "canada-wide";

const provinces = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon",
];

export default function ProviderJurisdiction() {
  const [selected, setSelected] = useState<Scope | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/provider-insurance");
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
          Complete Account Details
        </h1>
        <p className="mb-8 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          Enter your details to create an account and start your journey with us.
        </p>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8"
        >
          {/* Section title */}
          <h2 className="mb-6 text-center text-base font-semibold text-[#1B2A4A]">
            Jurisdictional Scope of Primary License
          </h2>

          {/* Provincial/Territorial */}
          <div className="mb-2">
            <label className="flex cursor-pointer items-center gap-3 py-3">
              <input
                type="checkbox"
                checked={selected === "provincial"}
                onChange={() => setSelected("provincial")}
                className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
              />
              <span className="text-sm font-medium text-[#1B2A4A]">
                Provincial/Territorial
              </span>
            </label>
          </div>

          {/* Expanded fields when Provincial is selected */}
          {selected === "provincial" && (
            <div className="mb-4 space-y-2 pl-7">
              <p className="text-xs text-[#6B7280]">
                Please specify <span className="text-red-500">*</span>
              </p>
              <Label className="text-sm font-medium text-[#1B2A4A]">
                Province/Territory <span className="text-red-500">*</span>
              </Label>
              <Select name="province">
                <SelectTrigger className="h-11 w-full rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                  <SelectValue placeholder="Select your Province/Territory" />
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((province) => (
                    <SelectItem
                      key={province}
                      value={province.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Canada-Wide */}
          <div className="mb-6">
            <label className="flex cursor-pointer items-center gap-3 py-3">
              <input
                type="checkbox"
                checked={selected === "canada-wide"}
                onChange={() => setSelected("canada-wide")}
                className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
              />
              <span className="text-sm font-medium text-[#1B2A4A]">
                Canada-Wide (e.g., RCIC)
              </span>
            </label>
          </div>

          {/* Next Button */}
          <Button
            type="submit"
            className="h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
          >
            Next
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

"use client";

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

const educationOptions = [
  "LLB (Bachelor of Laws)",
  "JD (Juris Doctor)",
  "LLM (Master of Laws)",
  "PhD in Law",
  "BCL (Bachelor of Civil Law)",
  "Other",
];

const experienceOptions = [
  "Less than 1 year",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10-15 years",
  "15-20 years",
  "20+ years",
];

const expertiseOptions = [
  "Criminal Law",
  "Family Law",
  "Corporate Law",
  "Immigration Law",
  "Real Estate Law",
  "Employment Law",
  "Intellectual Property",
  "Tax Law",
  "Personal Injury",
  "Environmental Law",
  "Civil Litigation",
  "Human Rights Law",
  "Bankruptcy Law",
  "Insurance Law",
];

const languageOptions = [
  "English",
  "French",
  "Mandarin",
  "Cantonese",
  "Punjabi",
  "Hindi",
  "Spanish",
  "Arabic",
  "Tagalog",
  "Urdu",
  "Portuguese",
  "Korean",
  "Tamil",
  "Italian",
  "German",
  "Other",
];

export default function ProviderDetails() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/provider-licensing");
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
          {/* Highest Legal Education */}
          <div className="mb-4">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Highest Legal Education <span className="text-red-500">*</span>
            </Label>
            <Select name="education">
              <SelectTrigger className="h-11 w-full rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Please select one" />
              </SelectTrigger>
              <SelectContent>
                {educationOptions.map((opt) => (
                  <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Years of Experience */}
          <div className="mb-4">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Years of Experience <span className="text-red-500">*</span>
            </Label>
            <Select name="experience">
              <SelectTrigger className="h-11 w-full rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Please select one" />
              </SelectTrigger>
              <SelectContent>
                {experienceOptions.map((opt) => (
                  <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Areas of Expertise */}
          <div className="mb-1">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Areas of Expertise <span className="text-red-500">*</span>
            </Label>
            <Select name="expertise">
              <SelectTrigger className="h-11 w-full rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Select from list" />
              </SelectTrigger>
              <SelectContent>
                {expertiseOptions.map((opt) => (
                  <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="mb-4 text-xs text-[#6B7280]">Select all that apply</p>

          {/* Languages */}
          <div className="mb-1">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Languages <span className="text-red-500">*</span>
            </Label>
            <Select name="languages">
              <SelectTrigger className="h-11 w-full rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Select from list" />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((opt) => (
                  <SelectItem key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="mb-6 text-xs text-[#6B7280]">Select all that apply</p>

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

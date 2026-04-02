"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Footer } from "@/components/footer";

const proficiencyLevels = [
  "Native",
  "Fluent",
  "Advanced",
  "Intermediate",
  "Basic",
];

export default function ProviderLanguages() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/provider-payment");
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
          <h2 className="mb-6 text-center text-base font-semibold text-[#1B2A4A]">
            Language Proficiency
          </h2>

          {/* Native Language */}
          <div className="mb-5">
            <Label htmlFor="nativeLanguage" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Native Language
            </Label>
            <Input
              id="nativeLanguage"
              name="nativeLanguage"
              placeholder="Tell us about your native language"
              className="h-11 rounded-lg border-[#D1D5DB] text-sm placeholder:text-[#9CA3AF]"
            />
          </div>

          {/* Additional Languages */}
          <div className="mb-6">
            <Label className="mb-4 border-b border-[#E5E7EB] pb-2 text-sm font-medium text-[#1B2A4A]">
              Additional Languages
            </Label>

            <div className="space-y-3">
              {/* English */}
              <div className="grid grid-cols-[auto_1fr_1fr] items-center gap-4 py-2">
                <input type="checkbox" className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]" />
                <span className="text-sm font-medium text-[#1B2A4A]">English</span>
                <Select>
                  <SelectTrigger className="h-10 rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF]">
                    <SelectValue placeholder="Select proficiency" />
                  </SelectTrigger>
                  <SelectContent>
                    {proficiencyLevels.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase()}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* French */}
              <div className="grid grid-cols-[auto_1fr_1fr] items-center gap-4 py-2">
                <input type="checkbox" className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]" />
                <span className="text-sm font-medium text-[#1B2A4A]">French</span>
                <Select>
                  <SelectTrigger className="h-10 rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF]">
                    <SelectValue placeholder="Select proficiency" />
                  </SelectTrigger>
                  <SelectContent>
                    {proficiencyLevels.map((level) => (
                      <SelectItem key={level} value={level.toLowerCase()}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Other */}
              <div className="grid grid-cols-[auto_1fr_1fr] items-center gap-4 py-2">
                <input type="checkbox" className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]" />
                <Input
                  placeholder="Other"
                  className="h-10 rounded-lg border-[#D1D5DB] text-sm placeholder:text-[#9CA3AF]"
                />
                <Select>
                  <SelectTrigger className="h-10 rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF]">
                    <SelectValue placeholder="Select proficiency" />
                  </SelectTrigger>
                  <SelectContent>
                    {proficiencyLevels.map((level) => (
                      <SelectItem key={`other-${level}`} value={level.toLowerCase()}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

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

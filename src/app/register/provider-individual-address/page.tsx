"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, MapPin, Mail } from "lucide-react";
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

export default function ProviderIndividualAddress() {
  const [differentMailing, setDifferentMailing] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/setup-password");
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
          Create an Account
        </h1>
        <p className="mb-4 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          Enter your details to create an account and start your journey with us.
        </p>

        {/* Already have account */}
        <p className="mb-6 text-sm text-[#6B7280]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#3B82F6] hover:underline">
            Log in
          </Link>
        </p>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8"
        >
          {/* Street Address */}
          <div className="mb-4">
            <Label htmlFor="streetAddress" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Street Address <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="streetAddress"
                name="streetAddress"
                placeholder="Your Street Address"
                required
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <MapPin className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Apartment/Unit # */}
          <div className="mb-4">
            <Label htmlFor="apartment" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Apartment/Unit # <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="apartment"
                name="apartment"
                placeholder="Apartment/Unit #"
                required
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <MapPin className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* City/Community / Municipality / County */}
          <div className="mb-4">
            <Label htmlFor="city" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              City/Community / Municipality / County <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="city"
                name="city"
                placeholder="Please enter here"
                required
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <MapPin className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Province/Territory */}
          <div className="mb-4">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Province/Territory <span className="text-red-500">*</span>
            </Label>
            <Select name="province" required>
              <SelectTrigger className="h-11 rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Select your Province/Territory" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem key={province} value={province.toLowerCase().replace(/\s+/g, "-")}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Postal Code */}
          <div className="mb-5">
            <Label htmlFor="postalCode" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Postal Code <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
                required
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <MapPin className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Checkbox - different mailing address */}
          <div className="mb-4">
            <label className="flex cursor-pointer items-start gap-2.5">
              <input
                type="checkbox"
                checked={differentMailing}
                onChange={(e) => setDifferentMailing(e.target.checked)}
                className="mt-0.5 size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
              />
              <span className="text-sm text-[#4A4A4A]">
                My mailing address is different from my practice address
              </span>
            </label>
          </div>

          {/* Mailing Address (conditional) */}
          {differentMailing && (
            <div className="mb-5">
              <Label htmlFor="mailingAddress" className="mb-2 text-sm font-medium text-[#1B2A4A]">
                Mailing Address
              </Label>
              <div className="relative">
                <Input
                  id="mailingAddress"
                  name="mailingAddress"
                  placeholder="Mailing Address"
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <Mail className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
          )}

          {/* Mailing Address field always visible but disabled when unchecked */}
          {!differentMailing && (
            <div className="mb-5">
              <div className="relative">
                <Input
                  placeholder="Mailing Address"
                  disabled
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF] disabled:opacity-50"
                />
                <Mail className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
          )}

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

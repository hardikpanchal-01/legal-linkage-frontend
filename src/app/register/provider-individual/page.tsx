"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, User, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/footer";

export default function ProviderIndividual() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/provider-individual-address");
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
          {/* Your Name */}
          <div className="mb-4">
            <Label htmlFor="fullName" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Your name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="fullName"
                name="fullName"
                placeholder="Full Name (as per license)"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <User className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Middle Name */}
          <div className="mb-4">
            <Label htmlFor="middleName" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Middle name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="middleName"
                name="middleName"
                placeholder="middle name"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <User className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <Label htmlFor="phone" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Please enter your Primary Phone Number"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <Phone className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Alternative Phone Number */}
          <div className="mb-4">
            <Label htmlFor="altPhone" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Alternative Phone Number
            </Label>
            <div className="relative">
              <Input
                id="altPhone"
                name="altPhone"
                type="tel"
                placeholder="Please enter your Alternative Phone Number"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <Phone className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <Label htmlFor="email" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Email address <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <Mail className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Professional Bio/Summary */}
          <div className="mb-6">
            <Label htmlFor="bio" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Professional Bio/Summary <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="bio"
              name="bio"
              placeholder="Provide a brief bio — it will be visible on your profile to help clients and colleagues understand your background."
              rows={4}
              className="w-full resize-y rounded-lg border border-[#D1D5DB] px-3 py-2.5 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:ring-1 focus:ring-[#1B2A4A] focus:outline-none"
            />
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

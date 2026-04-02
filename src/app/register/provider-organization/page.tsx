"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  User,
  Building2,
  CreditCard,
  Briefcase,
  Clock,
} from "lucide-react";
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

const practiceAreas = [
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
];

export default function ProviderOrganization() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfileImage(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/terms-of-service");
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
          Sign Up with Email
        </h1>
        <p className="mb-6 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          Enter your email address to create an account and start your journey with us.
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

          {/* Firm/Organization Name */}
          <div className="mb-4">
            <Label htmlFor="firmName" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Firm/Organization Name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="firmName"
                name="firmName"
                placeholder="Registered name"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <Building2 className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Law License Number / Bar Council ID */}
          <div className="mb-4">
            <Label htmlFor="licenseNumber" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Law License Number / Bar Council ID <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="licenseNumber"
                name="licenseNumber"
                placeholder="License Number / Bar Council ID"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <CreditCard className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Practice Area */}
          <div className="mb-4">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Practice Area <span className="text-red-500">*</span>
            </Label>
            <Select name="practiceArea">
              <SelectTrigger className="h-11 rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Select your practice areas" />
              </SelectTrigger>
              <SelectContent>
                {practiceAreas.map((area) => (
                  <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, "-")}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Years of Experience */}
          <div className="mb-4">
            <Label htmlFor="experience" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Years of Experience <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="experience"
                name="experience"
                placeholder="Enter years of experience"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <Clock className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Upload Profile Picture */}
          <div className="mb-6">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Upload Profile picture <span className="text-red-500">*</span>
            </Label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#D1D5DB] px-4 py-3 transition-colors hover:border-[#1B2A4A]/30"
            >
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="size-8 rounded-full object-cover"
                />
              ) : (
                <User className="size-5 text-[#9CA3AF]" />
              )}
              <span className="flex-1 text-sm text-[#9CA3AF]">
                Drag and drop files, or{" "}
                <span className="font-semibold text-[#1B2A4A]">Browse</span>
              </span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            className="h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
          >
            Sign Up
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>

        {/* Already have account */}
        <p className="mt-6 text-sm text-[#6B7280]">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#3B82F6] hover:underline">
            Log in
          </Link>
        </p>
      </div>

      <Footer />
    </div>
  );
}

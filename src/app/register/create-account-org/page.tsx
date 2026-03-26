"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, User, Phone, MapPin, Building2 } from "lucide-react";
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

export default function CreateAccountOrg() {
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
        <p className="mb-8 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          Enter your details to create an account and start your journey with us.
        </p>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8"
        >
          {/* Upload Profile Picture */}
          <div className="mb-5">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Upload Profile picture
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
            <p className="mt-1.5 text-xs leading-relaxed text-[#3B82F6]">
              Make sure your profile photo is really you — the same as the
              picture on your ID works great!
            </p>
          </div>

          {/* Organization Name */}
          <div className="mb-4">
            <Label htmlFor="orgName" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Organization Name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="orgName"
                name="orgName"
                placeholder="Registered organization name"
                required
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <Building2 className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Contact Person Name */}
          <div className="mb-4">
            <Label htmlFor="contactName" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Contact Person Name <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="contactName"
                name="contactName"
                placeholder="Full Name"
                required
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <User className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">Gender</Label>
            <Select name="gender">
              <SelectTrigger className="h-11 rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact */}
          <div className="mb-4">
            <Label htmlFor="phone" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Contact
            </Label>
            <div className="relative">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <Phone className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Mailing Address */}
          <div className="mb-4">
            <Label htmlFor="address" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Mailing Address
            </Label>
            <div className="relative">
              <Input
                id="address"
                name="address"
                placeholder="Enter your address"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <MapPin className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* City */}
          <div className="mb-4">
            <Label htmlFor="city" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              City /Community / Municipality / County
            </Label>
            <div className="relative">
              <Input
                id="city"
                name="city"
                placeholder="Please enter here"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <MapPin className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          {/* Province / Territory */}
          <div className="mb-4">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Province / Territory
            </Label>
            <Select name="province">
              <SelectTrigger className="h-11 rounded-lg border-[#D1D5DB] text-sm text-[#9CA3AF] data-[state=open]:text-[#1B2A4A]">
                <SelectValue placeholder="Select your Province / Territory" />
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

          {/* Country */}
          <div className="mb-6">
            <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">Country</Label>
            <Select name="country" defaultValue="canada">
              <SelectTrigger className="h-11 rounded-lg border-[#D1D5DB] text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="canada">Canada</SelectItem>
              </SelectContent>
            </Select>
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

        {/* Already have an account */}
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

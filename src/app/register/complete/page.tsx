"use client";

import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Smartphone,
  Mail,
  MapPin,
  Shield,
  CheckCircle,
  User,
  Pencil,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function ProfileComplete() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      {/* Main content */}
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
          Congratulations!
        </h1>
        <p className="mb-8 text-sm text-[#6B7280]">
          Your Profile is successfully completed
        </p>

        {/* Profile card */}
        <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-md sm:p-8">
          {/* Profile header */}
          <div className="mb-6 flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#E9A319]/20">
              <User className="size-8 text-[#E9A319]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1B2A4A]">Abel Kris</h2>
              <p className="text-sm text-[#6B7280]">Individual Client</p>
              <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#E9A319] px-3 py-1 text-xs font-medium text-white">
                <CheckCircle className="size-3" />
                Fully Verified
              </span>
            </div>
          </div>

          {/* Divider */}
          <hr className="mb-6 border-[#E5E7EB]" />

          {/* Contact Information */}
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <Phone className="size-5 text-[#1B2A4A]" />
              <h3 className="text-base font-semibold text-[#1B2A4A]">
                Contact Information
              </h3>
            </div>

            <div className="space-y-4 pl-7">
              {/* Primary Phone */}
              <div className="flex items-start gap-3">
                <Smartphone className="mt-0.5 size-4 text-[#9CA3AF]" />
                <div>
                  <p className="text-xs text-[#6B7280]">
                    Primary Phone (mobile)
                  </p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">
                    527-594-0372 x2850
                  </p>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 text-[#9CA3AF]" />
                <div>
                  <p className="text-xs text-[#6B7280]">Secondary Phone</p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">
                    527-594-0372 x2850
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 text-[#9CA3AF]" />
                <div>
                  <p className="text-xs text-[#6B7280]">Email Address</p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">
                    Abel.Kris36@hotmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="mb-6 border-[#E5E7EB]" />

          {/* Address Information */}
          <div className="mb-6">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="size-5 text-[#E9A319]" />
              <h3 className="text-base font-semibold text-[#1B2A4A]">
                Address Information
              </h3>
            </div>

            <div className="pl-7">
              <div className="flex items-start gap-3">
                <div>
                  <p className="text-xs text-[#6B7280]">
                    Residential Address
                  </p>
                  <p className="text-sm font-semibold text-[#1B2A4A]">
                    2767 Taryn Hill, Fritschport 58816-3796
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="mb-6 border-[#E5E7EB]" />

          {/* Verification Status */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Shield className="size-5 text-[#E9A319]" />
              <h3 className="text-base font-semibold text-[#1B2A4A]">
                Verification Status
              </h3>
            </div>

            <div className="pl-7">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 size-5 text-[#22C55E]" />
                <div>
                  <p className="text-sm font-semibold text-[#1B2A4A]">
                    Full Identity Verification
                  </p>
                  <p className="text-xs leading-relaxed text-[#6B7280]">
                    Your profile displays a &apos;Verified&apos; badge. Legal
                    professionals can see you are a serious client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <Button className="h-12 flex-1 rounded-lg bg-[#E9A319] text-sm font-medium text-white hover:bg-[#D4920F]">
            Find Legal Professionals
          </Button>
          <Button
            variant="outline"
            className="h-12 rounded-lg border-[#D1D5DB] px-6 text-sm font-medium text-[#1B2A4A] hover:bg-[#F9FAFB]"
          >
            <Pencil className="mr-2 size-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

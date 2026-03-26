"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Footer } from "@/components/footer";

const badges = [
  {
    id: "email",
    title: "Email verified",
    recommended: false,
    image: "/images/email-verified.svg",
    price: "$0",
  },
  {
    id: "partial",
    title: "Partial verified",
    recommended: false,
    image: "/images/partial-verified.svg",
    price: "$10",
  },
  {
    id: "id",
    title: "ID verified",
    recommended: true,
    image: "/images/id-verified.svg",
    price: "$4.99",
  },
];

export default function Verification() {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);
  const router = useRouter();

  const handleGetBadge = (badgeId: string) => {
    setSelectedBadge(badgeId);
    setShowDialog(true);
  };

  const handleDialogComplete = () => {
    setShowDialog(false);
    router.push("/register/complete");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      {/* Main content */}
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
        <h1 className="mb-3 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Build a Trusted Profile, Find Your Match Efficiently
        </h1>
        <p className="mb-10 max-w-2xl text-center text-sm leading-relaxed text-[#6B7280]">
          Verifications help you earn badges that signal your credibility to
          professionals on our platform. This leads to better, faster matching as
          the system can prioritize your request with greater confidence.
        </p>

        {/* Badge cards */}
        <div className="mb-10 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`flex flex-col items-center rounded-2xl border-2 bg-white p-6 shadow-md transition-all ${
                badge.recommended
                  ? "border-[#E9A319] ring-2 ring-[#E9A319]/20"
                  : "border-transparent"
              }`}
            >
              {/* Title */}
              <h3 className="mb-4 text-center text-sm font-semibold text-[#1B2A4A]">
                {badge.title}{" "}
                {badge.recommended && (
                  <span className="font-normal text-[#6B7280]">
                    (Recommended)
                  </span>
                )}
              </h3>

              {/* Badge illustration */}
              <div className="mb-4 flex w-full justify-center">
                <Image
                  src={badge.image}
                  alt={badge.title}
                  width={200}
                  height={220}
                  className="h-auto w-full max-w-[200px]"
                />
              </div>

              {/* Price */}
              <p className="mb-5 text-3xl font-bold text-[#1B2A4A]">
                {badge.price}
              </p>

              {/* Get the badge button */}
              <Button
                onClick={() => handleGetBadge(badge.id)}
                className="h-11 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
              >
                Get the badge
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mb-6 max-w-2xl text-center text-xs leading-relaxed text-[#6B7280]">
          *Remember: lawlinkup is a neutral technology platform for matching
          users with legal services. We are not a law firm, do not provide legal
          advice, and are not a party to any attorney-client relationship.
        </p>

        {/* Skip */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm text-[#6B7280]">Or</span>
          <Link
            href="/"
            className="text-sm font-medium text-[#1B2A4A] underline underline-offset-2 hover:text-[#2A3D66]"
          >
            Skip for Now
          </Link>
        </div>
      </div>

      <Footer />

      {/* Applicant Information Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-lg rounded-2xl border-none bg-[#FAFEF5] p-0 shadow-2xl sm:max-w-md">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#E5E7EB] px-6 py-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-[#1B2A4A]">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={24}
                height={28}
              />
            </div>
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Applicant Information
            </DialogTitle>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            <div className="flex items-center justify-between rounded-lg border-b border-[#E5E7EB] pb-4">
              <span className="text-sm font-medium text-[#1B2A4A]">
                ID Verifications
              </span>
              <button
                onClick={handleDialogComplete}
                className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-[#4ADE80] transition-colors hover:bg-[#3ECB72]"
              >
                <Check className="size-5 text-white" strokeWidth={3} />
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

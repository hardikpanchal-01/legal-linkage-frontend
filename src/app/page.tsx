"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Role = "provider" | "client";

export default function SelectRole() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const router = useRouter();

  const handleContinue = () => {
    if (!selectedRole) return;
    setShowDialog(true);
  };

  const handleDialogContinue = () => {
    setShowDialog(false);
    if (selectedRole === "provider") {
      router.push("/register/provider-type");
    } else {
      router.push("/register/service-type");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      {/* Main content */}
      <div className="flex flex-1 flex-col items-center px-4 pt-12 pb-8 sm:px-8">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/logo.svg"
            alt="ClientLawyerLink Logo"
            width={70}
            height={84}
            priority
          />
        </div>

        {/* Welcome text */}
        <h1 className="mb-3 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Welcome to
          <br />
          ClientLawyerLink.com
        </h1>
        <p className="mb-8 max-w-md text-center text-sm leading-relaxed text-[#4A4A4A] sm:text-base">
          This platform is a professional network that connects verified
          clients with vetted lawyers authorized to provide legal services to
          the public throughout Canada.
        </p>

        {/* Select one */}
        <p className="mb-6 text-sm text-[#6B7280]">Select one</p>

        {/* Role cards */}
        <div className="mb-8 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Legal Service Provider Card */}
          <button
            type="button"
            onClick={() => setSelectedRole("provider")}
            className={`group cursor-pointer rounded-2xl border-2 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg ${
              selectedRole === "provider"
                ? "border-[#1B2A4A] ring-2 ring-[#1B2A4A]/20"
                : "border-transparent"
            }`}
          >
            <h3 className="mb-4 text-sm font-semibold text-[#1B2A4A]">
              I&apos;m a Legal service provider
            </h3>
            <div className="mb-4 flex justify-center">
              <Image
                src="/images/lawyer-illustration.svg"
                alt="Legal service provider"
                width={180}
                height={150}
              />
            </div>
            <p className="text-xs text-[#6B7280]">
              Find work and manage your Law business
            </p>
          </button>

          {/* Client Card */}
          <button
            type="button"
            onClick={() => setSelectedRole("client")}
            className={`group cursor-pointer rounded-2xl border-2 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg ${
              selectedRole === "client"
                ? "border-[#1B2A4A] ring-2 ring-[#1B2A4A]/20"
                : "border-transparent"
            }`}
          >
            <h3 className="mb-4 text-sm font-semibold text-[#1B2A4A]">
              I&apos;m a Client
            </h3>
            <div className="mb-4 flex justify-center">
              <Image
                src="/images/client-illustration.svg"
                alt="Client"
                width={220}
                height={150}
              />
            </div>
            <p className="text-xs text-[#6B7280]">
              Post jobs and reach lawyers
            </p>
          </button>
        </div>

        {/* Continue button */}
        <Button
          onClick={handleContinue}
          disabled={!selectedRole}
          className="h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66] disabled:opacity-40"
        >
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />

      {/* Registration Disclaimer Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-lg rounded-2xl border-none bg-white p-8 shadow-2xl sm:max-w-md">
          <DialogTitle className="sr-only">Registration Disclaimer</DialogTitle>
          <div className="space-y-5 text-center">
            <p className="text-sm font-semibold leading-relaxed text-[#1B2A4A]">
              Registration is intended only for individuals with genuine legal
              needs and licensed legal professionals seeking to assist them.
            </p>
            <p className="text-sm leading-relaxed text-[#4A4A4A]">
              To maintain the integrity and trust of our network, all clients
              will undergo identity verification, and all lawyers will be
              professionally vetted before activation.
            </p>
            <p className="text-sm font-semibold leading-relaxed text-[#1B2A4A]">
              Please complete this form accurately — your information helps
              ensure a safe, credible, and respectful legal community.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="h-10 rounded-lg border-[#1B2A4A] px-6 text-sm text-[#1B2A4A] hover:bg-[#1B2A4A]/5"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDialogContinue}
              className="h-10 rounded-lg bg-[#E9A319] px-6 text-sm font-medium text-white hover:bg-[#D4920F]"
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

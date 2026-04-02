"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

type ServiceType = "individual" | "organization";

export default function ServiceType() {
  const [selected, setSelected] = useState<ServiceType | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (!selected) return;
    if (selected === "individual") {
      router.push("/register/create-account");
    } else {
      router.push("/register/create-account-org");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      {/* Main content */}
      <div className="flex flex-1 flex-col items-center px-4 pt-12 pb-8 sm:px-8">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/logo.png"
            alt="LawLinkage™ Logo"
            width={70}
            height={84}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          How you will be using
          <br />
          our services
        </h1>
        <p className="mb-8 text-sm text-[#6B7280]">Select one</p>

        {/* Service type cards */}
        <div className="mb-8 grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Individual Card */}
          <button
            type="button"
            onClick={() => setSelected("individual")}
            className={`cursor-pointer rounded-2xl border-2 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg ${
              selected === "individual"
                ? "border-[#1B2A4A] ring-2 ring-[#1B2A4A]/20"
                : "border-transparent"
            }`}
          >
            <h3 className="mb-4 text-sm font-semibold text-[#1B2A4A]">
              I&apos;m an individual
            </h3>
            <div className="flex justify-center">
              <Image
                src="/images/individual-illustration.svg"
                alt="Individual"
                width={180}
                height={180}
              />
            </div>
          </button>

          {/* Organization Card */}
          <button
            type="button"
            onClick={() => setSelected("organization")}
            className={`cursor-pointer rounded-2xl border-2 bg-white p-6 text-center shadow-md transition-all hover:shadow-lg ${
              selected === "organization"
                ? "border-[#1B2A4A] ring-2 ring-[#1B2A4A]/20"
                : "border-transparent"
            }`}
          >
            <h3 className="mb-4 text-sm font-semibold text-[#1B2A4A]">
              We are an Organization
            </h3>
            <div className="flex justify-center">
              <Image
                src="/images/organization-illustration.svg"
                alt="Organization"
                width={220}
                height={180}
              />
            </div>
          </button>
        </div>

        {/* Continue button */}
        <Button
          onClick={handleContinue}
          disabled={!selected}
          className="h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66] disabled:opacity-40"
        >
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

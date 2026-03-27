"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function ProviderTermsVerification() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.svg" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-8 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Terms of verification consent &amp;
          <br />
          authorization
        </h1>

        {/* Content card */}
        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <h2 className="mb-1 text-lg font-semibold text-[#1B2A4A]">
            Government-issued ID verification is required
          </h2>
          <p className="mb-5 text-sm text-[#6B7280]">to approve your registration</p>

          <ul className="space-y-4 text-sm text-[#4A4A4A]">
            <li>
              <span className="font-semibold text-[#1B2A4A]">• Complete ID verification</span>
              <span className="text-[#6B7280]"> (mandatory)</span>
              <ul className="mt-1 ml-4 space-y-1 text-xs text-[#6B7280]">
                <li>• Upload your professional license or accreditation for verification</li>
                <li>
                  • Pay the applicable{" "}
                  <span className="font-semibold text-[#1B2A4A] underline">verification fee</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="text-[#1B2A4A]">
                • After your accreditation is verified, you will receive a visible badge on your profile.
              </span>
              <p className="mt-1 ml-4 text-xs text-[#6B7280]">
                This badge signals trust and professionalism, helping you stand out and win clients&apos; preference.
              </p>
            </li>
          </ul>
        </div>

        <Button
          onClick={() => router.push("/register/provider-congrats")}
          className="mt-8 h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66]"
        >
          I agree to the Agreement
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function ProviderVSC() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.png" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Getting Your Vulnerable Sector Check (VSC)
        </h1>
        <h2 className="mb-6 text-center text-base font-semibold text-[#1B2A4A]">
          Why We Ask for This
        </h2>

        {/* Info paragraphs */}
        <div className="mb-8 max-w-xl space-y-4 text-center text-sm leading-relaxed text-[#6B7280]">
          <p>
            Some clients you may serve are considered vulnerable populations (e.g., seniors, children, people with disabilities).
          </p>
          <p>
            To keep everyone safe and maintain trust, we require a Vulnerable Sector Check (VSC) for lawyers who want to handle cases or provide services involving vulnerable persons.
          </p>
          <p>
            Providing a VSC is your choice — but if you wish to accept cases or clients that require this level of clearance, you must submit a valid VSC.
          </p>
          <p>
            Once your VSC is verified, your profile will display a{" "}
            <CheckCircle className="inline size-4 text-[#22C55E]" />{" "}
            <span className="font-medium text-[#1B2A4A]">VSC Verified</span> badge, which signals to clients that you are cleared to take on VSC-related legal matters.
          </p>
        </div>

        {/* Steps card */}
        <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <div className="max-h-[400px] overflow-y-auto">
            <p className="mb-1 text-xs text-[#6B7280]">Step 1</p>
            <h3 className="mb-4 text-lg font-bold text-[#1B2A4A]">
              Request Your VSC from Police
            </h3>

            <p className="mb-4 text-xs uppercase tracking-wide text-[#6B7280]">
              THE INDIVIDUAL ACCEPTING THIS AGREEMENT DOES SO ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY (&quot;Customer&quot;);
            </p>

            <p className="mb-4 text-sm text-[#4A4A4A]">
              The VSC must come from a Canadian police service — not from us or from third-party background check providers.
            </p>

            <div className="space-y-4 text-sm text-[#4A4A4A]">
              <div>
                <p className="mb-2 font-medium text-[#1B2A4A]">1. Find your local police service</p>
                <ul className="ml-4 space-y-1 text-xs text-[#6B7280]">
                  <li>• If you live in a city with its own police (e.g., Toronto, Calgary, Vancouver), visit their website and look for &quot;Vulnerable Sector Check.&quot;</li>
                  <li>• If you are outside a city jurisdiction, use the RCMP or provincial police (OPP, SQ, etc.) website for your area.</li>
                </ul>
              </div>

              <div>
                <p className="mb-2 font-medium text-[#1B2A4A]">2. Apply online (or in person if required)</p>
                <ul className="ml-4 space-y-1 text-xs text-[#6B7280]">
                  <li>• Most police services offer online applications with digital ID verification.</li>
                  <li>• You will need
                    <ul className="ml-4 mt-1 space-y-0.5">
                      <li>◦ Government-issued photo ID</li>
                      <li>◦ Your current address</li>
                      <li>◦ Purpose: &quot;Employment or volunteer work with vulnerable persons&quot;</li>
                    </ul>
                  </li>
                  <li>• You may be asked for fingerprints if your name/date of birth match someone with a record. This is normal.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Button
          onClick={() => router.push("/register/provider-upload-docs")}
          className="mt-8 h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66]"
        >
          Continue
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />
    </div>
  );
}

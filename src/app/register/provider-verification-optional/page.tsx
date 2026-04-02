"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Footer } from "@/components/footer";

const optionalItems = [
  { name: "VSC (Vulnerable Sector Check)", price: 10.0 },
  { name: "Education", price: 29.99 },
  { name: "Liability insurance", price: 9.99 },
];

export default function ProviderVerificationOptional() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showVSC, setShowVSC] = useState(false);
  const router = useRouter();

  const toggleItem = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const total = optionalItems
    .filter((item) => selected.includes(item.name))
    .reduce((sum, item) => sum + item.price, 0);

  const handleContinue = () => {
    setShowVSC(true);
  };

  const handleVSCContinue = () => {
    setShowVSC(false);
    router.push("/register/provider-upload-docs");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.png" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-8 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Registration &amp;
          <br />
          Verification process
        </h1>

        {/* Card with timeline */}
        <div className="flex w-full max-w-lg gap-4">
          {/* Timeline dots */}
          <div className="flex flex-col items-center pt-2">
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-[#1B2A4A] bg-[#E9A319]">
              <div className="size-4 rounded-full bg-[#E9A319]" />
            </div>
            {optionalItems.map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="h-8 w-0.5 bg-[#D1D5DB]" />
                <div className="size-3 rounded-full bg-[#E9A319]" />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 rounded-2xl bg-white p-6 shadow-md">
            <p className="mb-4 text-xs font-medium text-[#6B7280]">Optional Verifications</p>

            <div className="space-y-0">
              {optionalItems.map((item) => (
                <div key={item.name} className="flex items-center justify-between border-b border-[#F3F4F6] py-3">
                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(item.name)}
                      onChange={() => toggleItem(item.name)}
                      className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
                    />
                    <span className="text-sm text-[#1B2A4A]">{item.name}</span>
                  </label>
                  <span className="text-sm font-medium text-[#1B2A4A]">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">Total</span>
              <span className="text-3xl font-bold text-[#1B2A4A]">
                ${total > 0 ? total.toFixed(2) : "00"}
              </span>
            </div>

            {/* Continue */}
            <Button
              onClick={handleContinue}
              className="mt-6 h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Continue
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* Or Skip */}
        <div className="mt-6 flex flex-col items-center gap-1">
          <div className="flex items-center gap-3">
            <hr className="w-20 border-[#D1D5DB]" />
            <span className="text-sm text-[#6B7280]">Or</span>
            <hr className="w-20 border-[#D1D5DB]" />
          </div>
          <button
            type="button"
            onClick={() => router.push("/register/provider-upload-docs")}
            className="mt-1 text-sm font-medium text-[#1B2A4A] underline underline-offset-2"
          >
            Skip for Now
          </button>
        </div>
      </div>

      <Footer />

      {/* VSC Dialog */}
      <Dialog open={showVSC} onOpenChange={setShowVSC}>
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border-none bg-white p-6 shadow-2xl sm:max-w-xl">
          <DialogTitle className="sr-only">Vulnerable Sector Check</DialogTitle>

          <div className="flex flex-col items-center">
            <Image src="/images/logo.png" alt="Logo" width={50} height={60} />

            <h2 className="mt-4 mb-2 text-center text-xl font-bold text-[#1B2A4A]">
              Getting Your Vulnerable Sector Check (VSC)
            </h2>
            <h3 className="mb-5 text-center text-sm font-semibold text-[#1B2A4A]">
              Why We Ask for This
            </h3>

            <div className="mb-6 space-y-3 text-center text-xs leading-relaxed text-[#6B7280]">
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
                <CheckCircle className="inline size-3.5 text-[#22C55E]" />{" "}
                <span className="font-medium text-[#1B2A4A]">VSC Verified</span> badge, which signals to clients that you are cleared to take on VSC-related legal matters.
              </p>
            </div>
          </div>

          {/* Steps card */}
          <div className="rounded-xl border border-[#E5E7EB] p-5">
            <p className="mb-1 text-xs text-[#6B7280]">Step 1</p>
            <h4 className="mb-3 text-base font-bold text-[#1B2A4A]">
              Request Your VSC from Police
            </h4>

            <p className="mb-3 text-[10px] uppercase tracking-wide text-[#6B7280]">
              THE INDIVIDUAL ACCEPTING THIS AGREEMENT DOES SO ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY (&quot;Customer&quot;);
            </p>

            <p className="mb-3 text-xs text-[#4A4A4A]">
              The VSC must come from a Canadian police service — not from us or from third-party background check providers.
            </p>

            <div className="space-y-3 text-xs text-[#4A4A4A]">
              <div>
                <p className="mb-1 font-medium text-[#1B2A4A]">1. Find your local police service</p>
                <ul className="ml-3 space-y-0.5 text-[11px] text-[#6B7280]">
                  <li>• If you live in a city with its own police (e.g., Toronto, Calgary, Vancouver), visit their website and look for &quot;Vulnerable Sector Check.&quot;</li>
                  <li>• If you are outside a city jurisdiction, use the RCMP or provincial police (OPP, SQ, etc.) website for your area.</li>
                </ul>
              </div>

              <div>
                <p className="mb-1 font-medium text-[#1B2A4A]">2. Apply online (or in person if required)</p>
                <ul className="ml-3 space-y-0.5 text-[11px] text-[#6B7280]">
                  <li>• Most police services offer online applications with digital ID verification.</li>
                  <li>• You will need
                    <ul className="ml-3 mt-0.5 space-y-0.5">
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

          <Button
            onClick={handleVSCContinue}
            className="mt-5 h-11 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
          >
            Continue
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { PaymentDialog } from "@/components/payment-dialog";

export default function ProviderZoom() {
  const [showPayment, setShowPayment] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.svg" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Zoom Account Subscription
        </h1>
        <p className="mb-8 max-w-md text-center text-sm leading-relaxed text-[#6B7280]">
          To use Zoom calling on the platform, you&apos;ll need to subscribe first.
        </p>

        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <div className="flex items-center gap-4 pb-4">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#2D8CFF]">
              <Video className="size-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1B2A4A]">Zoom</p>
              <p className="text-xs text-[#6B7280]">
                You can easily find the call link in your profile to share with your clients.
              </p>
            </div>
          </div>
          <hr className="mb-4 border-[#E5E7EB]" />
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#6B7280]">Total</span>
            <span className="text-3xl font-bold text-[#1B2A4A]">$48</span>
          </div>
        </div>

        <Button
          onClick={() => setShowPayment(true)}
          className="mt-8 h-12 rounded-full bg-[#1B2A4A] px-10 text-sm font-medium text-white hover:bg-[#2A3D66]"
        >
          Connect Zoom Account
          <ArrowRight className="ml-2 size-4" />
        </Button>
      </div>

      <Footer />

      <PaymentDialog
        open={showPayment}
        onOpenChange={setShowPayment}
        onSubmit={() => { setShowPayment(false); router.push("/register/provider-terms-verification"); }}
      />
    </div>
  );
}

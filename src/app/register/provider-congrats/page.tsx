"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function ProviderCongrats() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.svg" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-3 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Congratulations Jane!
        </h1>
        <p className="mb-5 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          we have received your registration request as a legal service provider, you will be notified on your provided email about any further progress
        </p>

        {/* Request is Pending badge */}
        <span className="mb-8 rounded-full bg-[#E9A319] px-4 py-1.5 text-xs font-medium text-white">
          Request is Pending
        </span>

        {/* Warning card */}
        <div className="w-full max-w-md rounded-xl bg-[#1B2A4A] p-6 text-center">
          <p className="mb-4 text-sm leading-relaxed text-white/90">
            You have 3 times to correct information submitted for registration purpose, if failed, you have to restart the registration by using your other email
          </p>
          <Button
            onClick={() => router.push("/")}
            className="rounded-full bg-[#E9A319] px-6 text-sm font-medium text-white hover:bg-[#D4920F]"
          >
            Logout
            <LogOut className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

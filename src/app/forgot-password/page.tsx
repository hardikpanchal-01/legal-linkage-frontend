"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/footer";

export default function ForgotPassword() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/forgot-password/otp");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.svg" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-8 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Enter your email to receive OTP
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <div className="mb-5">
            <Label htmlFor="email" className="mb-2 text-sm font-medium text-[#1B2A4A]">
              Email <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Admin Email"
                className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
              />
              <User className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
            </div>
          </div>

          <Button type="submit" className="h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]">
            Send OTP
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

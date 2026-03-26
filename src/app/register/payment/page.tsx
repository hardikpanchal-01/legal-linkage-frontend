"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  User,
  CreditCard,
  Lock,
  Shield,
  Eye,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/footer";

const securityFeatures = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    description:
      "Your payment details are secured like those of top Canadian banks, keeping your information private and compliant. Register and pay confidently.",
  },
  {
    icon: Shield,
    title: "No card storage",
    description: "We never keep your full card number on our servers.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted payment partners",
    description:
      "Transactions are processed through certified providers that meet strict PCI-DSS security standards.",
  },
  {
    icon: Eye,
    title: "Your control",
    description: "You see every charge before confirming.",
  },
];

export default function Payment() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/register/verification");
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
        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Secure Payment Protection
        </h1>
        <p className="mb-8 max-w-md text-center text-sm leading-relaxed text-[#6B7280]">
          We use bank-grade security to keep your information safe
        </p>

        {/* Security features */}
        <div className="mb-8 grid w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-4 sm:px-4 lg:px-8">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col justify-between rounded-xl bg-white/60 p-5 shadow-sm"
            >
              <div>
                <h3 className="mb-2 text-sm font-semibold text-[#1B2A4A]">
                  {feature.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#6B7280]">
                  {feature.description}
                </p>
              </div>
              <feature.icon className="mt-4 size-5 text-[#1B2A4A]/60" />
            </div>
          ))}
        </div>

        {/* Divider text */}
        <p className="mb-6 text-sm text-[#6B7280]">
          Your data stays private and protected at
        </p>

        {/* Payment form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8"
        >
          {/* Row 1: Name on card + Expiry */}
          <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="cardName" className="mb-2 text-sm font-medium text-[#1B2A4A]">
                Name on card <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="Enter your name"
                  required
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <User className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
            <div>
              <Label htmlFor="expiry" className="mb-2 text-sm font-medium text-[#1B2A4A]">
                Expiry <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="expiry"
                  name="expiry"
                  placeholder="mm / yy"
                  required
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <CreditCard className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
          </div>

          {/* Row 2: Card number + CVV */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="cardNumber" className="mb-2 text-sm font-medium text-[#1B2A4A]">
                Card number <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  required
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <CreditCard className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
            <div>
              <Label htmlFor="cvv" className="mb-2 text-sm font-medium text-[#1B2A4A]">
                CVV <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="cvv"
                  name="cvv"
                  placeholder="****"
                  required
                  className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <Lock className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <Button
            type="submit"
            className="h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
          >
            Continue
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

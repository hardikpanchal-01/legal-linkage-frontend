"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

export default function TermsOfService() {
  const router = useRouter();

  const handleAgree = () => {
    router.push("/register/setup-email");
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
          Terms of service
        </h1>
        <p className="mb-8 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          To continue you must accept the terms of services
        </p>

        {/* Terms content card */}
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#D1D5DB] bg-white shadow-md">
          <div className="max-h-[400px] overflow-y-auto p-6 sm:p-8">
            <p className="mb-4">
              <span className="text-base font-bold text-[#1B2A4A]">
                Effective date
              </span>{" "}
              <span className="text-sm text-[#6B7280]">3rd of Sep, 2025</span>
            </p>

            <p className="mb-4 text-sm leading-relaxed text-[#4A4A4A]">
              THE INDIVIDUAL ACCEPTING THIS AGREEMENT DOES SO ON BEHALF OF A
              COMPANY OR OTHER LEGAL ENTITY (&quot;Customer&quot;);
            </p>

            <p className="mb-4 text-sm leading-relaxed text-[#4A4A4A]">
              the individual accepting this agreement does so on behalf of a
              company or other legal entity (&quot;customer&quot;); such
              individual represents and warrants that they have the authority to
              bind such entity to this agreement. if the individual accepting
              this agreement does not have such authority, or the applicable
              entity does not agree with these terms and conditions, such
              individual must not accept this agreement and may not use or
              receive the service. capitalized terms have the definitions set
              forth herein. the parties agree as follows:
            </p>

            <p className="text-sm leading-relaxed text-[#4A4A4A]">
              Figma ipsum component variant main layer. Device layout union
              draft scrolling background ipsum group mask. Selection project
              vertical stroke font invite. Vertical vector editor prototype font
              hand editor blur boolean. Hand reesizing outline object share
              horizontal star plugin content hand. Blur frame outline pixel
              slice outline boolean text ipsum edit. Move outline bold editor
              editor library. Distribute opacity font export inspect rectangle.
              Library selection style list strikethrough. Figma clip text star
              effect select invite rectangle. Component device slice effect
              duplicate thumbnail line vertical undo. Reesizing vertical rotate
              layout link vertical figma frame. Prototype team layer slice
              rectangle polygon clip. Duplicate group hand.
            </p>
          </div>
        </div>

        {/* Agree Button */}
        <Button
          onClick={handleAgree}
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

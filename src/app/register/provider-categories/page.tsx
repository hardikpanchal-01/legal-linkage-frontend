"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, ChevronUp, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/footer";

interface Service {
  name: string;
  fixedFee: string;
  hourlyFee: string;
  contingencyFee: string;
  checked: boolean;
}

interface Category {
  name: string;
  expanded: boolean;
  services: Service[];
}

const initialCategories: Category[] = [
  {
    name: "Criminal Law",
    expanded: false,
    services: [
      { name: "Summary and Indictable Offences", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
      { name: "Bail and Release Hearings", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
      { name: "DUI / Impaired Driving", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
    ],
  },
  {
    name: "Civil Litigation",
    expanded: false,
    services: [
      { name: "Contract Disputes", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
      { name: "Property Disputes", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
      { name: "Debt Recovery", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
    ],
  },
  {
    name: "Family Law",
    expanded: false,
    services: [
      { name: "Divorce Proceedings", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
      { name: "Child Custody", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
      { name: "Spousal Support", fixedFee: "", hourlyFee: "", contingencyFee: "", checked: false },
    ],
  },
];

export default function ProviderCategories() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const router = useRouter();

  const toggleCategory = (index: number) => {
    setCategories((prev) =>
      prev.map((cat, i) =>
        i === index ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  };

  const toggleService = (catIndex: number, svcIndex: number) => {
    setCategories((prev) =>
      prev.map((cat, ci) =>
        ci === catIndex
          ? {
              ...cat,
              services: cat.services.map((svc, si) =>
                si === svcIndex ? { ...svc, checked: !svc.checked } : svc
              ),
            }
          : cat
      )
    );
  };

  const updateFee = (
    catIndex: number,
    svcIndex: number,
    field: "fixedFee" | "hourlyFee" | "contingencyFee",
    value: string
  ) => {
    setCategories((prev) =>
      prev.map((cat, ci) =>
        ci === catIndex
          ? {
              ...cat,
              services: cat.services.map((svc, si) =>
                si === svcIndex ? { ...svc, [field]: value } : svc
              ),
            }
          : cat
      )
    );
  };

  const handleContinue = () => {
    router.push("/register/provider-details");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        {/* Logo */}
        <div className="mb-5">
          <Image
            src="/images/logo.png"
            alt="LawLinkage™ Logo"
            width={60}
            height={72}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Please select the
          <br />
          category fields you want
          <br />
          to provide services for
        </h1>
        <p className="mb-8 text-sm text-[#6B7280]">Select all that apply</p>

        {/* Categories */}
        <div className="w-full max-w-2xl rounded-2xl bg-white p-4 shadow-md sm:p-6">
          <div className="flex flex-col gap-3">
            {categories.map((category, catIndex) => (
              <div
                key={category.name}
                className="overflow-hidden rounded-xl border border-[#E5E7EB]"
              >
                {/* Category header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(catIndex)}
                  className="flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left transition-colors hover:bg-[#F9FAFB]"
                >
                  <span className="text-sm font-semibold text-[#1B2A4A]">
                    {category.name}
                  </span>
                  {category.expanded ? (
                    <ChevronUp className="size-5 text-[#6B7280]" />
                  ) : (
                    <ChevronDown className="size-5 text-[#6B7280]" />
                  )}
                </button>

                {/* Expanded services */}
                {category.expanded && (
                  <div className="border-t border-[#E5E7EB] px-4 py-3">
                    {/* Table header */}
                    <div className="mb-2 grid grid-cols-[1fr_auto_auto_auto] items-center gap-2 text-xs text-[#6B7280]">
                      <span>Service name</span>
                      <span className="w-20 text-center">Fixed Fee</span>
                      <span className="w-20 text-center">Hourly Fee</span>
                      <span className="w-24 text-center">Contingency Fee</span>
                    </div>

                    {/* Service rows */}
                    {category.services.map((service, svcIndex) => (
                      <div
                        key={service.name}
                        className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-2 border-t border-[#F3F4F6] py-3"
                      >
                        {/* Checkbox + name */}
                        <label className="flex cursor-pointer items-center gap-2">
                          <input
                            type="checkbox"
                            checked={service.checked}
                            onChange={() => toggleService(catIndex, svcIndex)}
                            className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
                          />
                          <span className="text-xs text-[#1B2A4A]">
                            {service.name}
                          </span>
                        </label>

                        {/* Fixed Fee */}
                        <div className="flex w-20 items-center gap-1">
                          <Input
                            value={service.fixedFee}
                            onChange={(e) =>
                              updateFee(catIndex, svcIndex, "fixedFee", e.target.value)
                            }
                            className="h-8 w-14 rounded border-[#D1D5DB] px-1.5 text-xs"
                          />
                          <Info className="size-3.5 shrink-0 text-[#9CA3AF]" />
                        </div>

                        {/* Hourly Fee */}
                        <div className="flex w-20 items-center gap-1">
                          <Input
                            value={service.hourlyFee}
                            onChange={(e) =>
                              updateFee(catIndex, svcIndex, "hourlyFee", e.target.value)
                            }
                            className="h-8 w-14 rounded border-[#D1D5DB] px-1.5 text-xs"
                          />
                          <Info className="size-3.5 shrink-0 text-[#9CA3AF]" />
                        </div>

                        {/* Contingency Fee */}
                        <div className="flex w-24 items-center gap-1">
                          <Input
                            value={service.contingencyFee}
                            onChange={(e) =>
                              updateFee(catIndex, svcIndex, "contingencyFee", e.target.value)
                            }
                            className="h-8 w-14 rounded border-[#D1D5DB] px-1.5 text-xs"
                          />
                          <Info className="size-3.5 shrink-0 text-[#9CA3AF]" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Continue button */}
        <Button
          onClick={handleContinue}
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

"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Scale, CreditCard, Info, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Footer } from "@/components/footer";

const licenseTypes = [
  "Provincial Bar License",
  "NCA Certificate of Qualification",
  "Paralegal License",
  "RCIC Membership",
];

export default function ProviderLicensing() {
  const [selected, setSelected] = useState<string[]>([]);
  const [licenseFile, setLicenseFile] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [standing, setStanding] = useState<"confirm" | "unsure" | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggleLicense = (license: string) => {
    setSelected((prev) =>
      prev.includes(license)
        ? prev.filter((l) => l !== license)
        : [...prev, license]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLicenseFile(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowDialog(true);
  };

  const handleDialogSubmit = () => {
    setShowDialog(false);
    router.push("/register/provider-jurisdiction");
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
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
          Complete Account Details
        </h1>
        <p className="mb-8 max-w-sm text-center text-sm leading-relaxed text-[#6B7280]">
          Enter your details to create an account and start your journey with us.
        </p>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8"
        >
          {/* Section title */}
          <h2 className="mb-1 text-center text-base font-semibold text-[#1B2A4A]">
            Primary Licensing &amp; Certification
          </h2>
          <p className="mb-6 text-center text-xs text-[#6B7280]">
            Select all that apply
          </p>

          {/* License options */}
          {licenseTypes.map((license, index) => (
            <div key={license}>
              {/* Checkbox row */}
              <div className="flex items-center justify-between py-3">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(license)}
                    onChange={() => toggleLicense(license)}
                    className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
                  />
                  <span className="text-sm text-[#1B2A4A]">{license}</span>
                </label>
                <Info className="size-4 text-[#9CA3AF]" />
              </div>

              {/* Expanded fields for Provincial Bar License */}
              {license === "Provincial Bar License" && selected.includes(license) && (
                <div className="mb-4 space-y-4 pl-7">
                  {/* Governing Body */}
                  <div>
                    <Label htmlFor="governingBody" className="mb-2 text-sm font-medium text-[#1B2A4A]">
                      Governing Body <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="governingBody"
                        name="governingBody"
                        placeholder="e.g., Law Society of Ontario (LSO)"
                        className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                      />
                      <Scale className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
                    </div>
                  </div>

                  {/* License Number */}
                  <div>
                    <Label htmlFor="licenseNumber" className="mb-2 text-sm font-medium text-[#1B2A4A]">
                      License Number <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Input
                        id="licenseNumber"
                        name="licenseNumber"
                        placeholder="Enter your License Number"
                        className="h-11 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                      />
                      <CreditCard className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[#9CA3AF]" />
                    </div>
                  </div>

                  {/* Upload License */}
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <Label className="text-sm font-medium text-[#1B2A4A]">
                        Upload License
                      </Label>
                      <Info className="size-4 text-[#9CA3AF]" />
                    </div>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 transition-colors hover:border-[#1B2A4A]/30"
                    >
                      <div className="flex size-9 items-center justify-center rounded-lg bg-[#1B2A4A]">
                        <Upload className="size-4 text-white" />
                      </div>
                      <span className="flex-1 text-sm text-[#9CA3AF]">
                        {licenseFile || (
                          <>
                            Drag and drop files, or{" "}
                            <span className="font-semibold text-[#1B2A4A]">Browse</span>
                          </>
                        )}
                      </span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Divider between items */}
              {index < licenseTypes.length - 1 && !selected.includes(license) && (
                <hr className="border-[#F3F4F6]" />
              )}
            </div>
          ))}

          {/* Next Button */}
          <Button
            type="submit"
            className="mt-6 h-12 w-full rounded-full bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
          >
            Next
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </form>
      </div>

      <Footer />

      {/* Good Standing Confirmation Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-lg rounded-2xl border-none bg-white p-6 shadow-2xl sm:max-w-md">
          <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
            Good Standing Confirmation
          </DialogTitle>

          <div className="mt-4 space-y-4">
            {/* Option 1: I confirm */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={standing === "confirm"}
                onChange={() => setStanding("confirm")}
                className="mt-1 size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
              />
              <span className="text-sm leading-relaxed text-[#4A4A4A]">
                I confirm that all my listed licenses and certifications are
                currently in good standing with their respective governing
                bodies.
              </span>
            </label>

            {/* Option 2: I am not sure */}
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={standing === "unsure"}
                onChange={() => setStanding("unsure")}
                className="mt-1 size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]"
              />
              <span className="text-sm text-[#4A4A4A]">
                I am not sure that all are in good standing.
              </span>
            </label>

            {/* Textarea when "unsure" is selected */}
            {standing === "unsure" && (
              <div>
                <Label className="mb-2 text-sm font-medium text-[#1B2A4A]">
                  Please explain <span className="text-red-500">*</span>
                </Label>
                <textarea
                  placeholder="Briefly describe your concerns"
                  rows={4}
                  className="w-full resize-y rounded-lg border border-[#D1D5DB] px-3 py-2.5 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:ring-1 focus:ring-[#1B2A4A] focus:outline-none"
                />
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-2">
            <Button
              onClick={handleDialogSubmit}
              className="h-11 w-full rounded-lg bg-[#1B2A4A] text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Submit
            </Button>
            <button
              type="button"
              onClick={() => setShowDialog(false)}
              className="text-sm font-medium text-[#1B2A4A] underline underline-offset-2 hover:text-[#2A3D66]"
            >
              Cancel
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

const documents = [
  { id: "drivers", label: "Valid Drivers license (both sides)", active: true },
  { id: "license", label: "License/certificate upload", active: false },
];

export default function ProviderUploadDocs() {
  const [files, setFiles] = useState<Record<string, string>>({});
  const fileRefs = useRef<Record<string, HTMLInputElement | null>>({});
  const router = useRouter();

  const handleFileChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFiles((prev) => ({ ...prev, [id]: file.name }));
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#FFF8E7] to-[#FDF5E6]">
      <div className="flex flex-1 flex-col items-center px-4 pt-10 pb-8 sm:px-8">
        <div className="mb-5">
          <Image src="/images/logo.png" alt="Logo" width={60} height={72} priority />
        </div>

        <h1 className="mb-8 text-center text-2xl font-bold text-[#1B2A4A] sm:text-3xl">
          Upload Verification Documents
        </h1>

        <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-md sm:p-8">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between gap-4 border-b border-[#F3F4F6] py-4 last:border-b-0">
              <div className="flex items-center gap-3">
                <div className={`size-3 rounded-full ${doc.active ? "bg-[#E9A319]" : "bg-[#D1D5DB]"}`} />
                <span className={`text-sm ${doc.active ? "text-[#1B2A4A]" : "text-[#9CA3AF]"}`}>
                  {doc.label}
                </span>
              </div>
              <div
                onClick={() => fileRefs.current[doc.id]?.click()}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-3 py-2 text-xs transition-colors hover:border-[#1B2A4A]/30"
              >
                <div className="flex size-6 items-center justify-center rounded bg-[#1B2A4A]">
                  <Upload className="size-3 text-white" />
                </div>
                <span className="text-[#9CA3AF]">
                  {files[doc.id] || <>Drag and drop files, or <span className="font-semibold text-[#1B2A4A]">Browse</span></>}
                </span>
                <input
                  ref={(el) => { fileRefs.current[doc.id] = el; }}
                  type="file"
                  onChange={(e) => handleFileChange(doc.id, e)}
                  className="hidden"
                />
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={() => router.push("/register/provider-docusign")}
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

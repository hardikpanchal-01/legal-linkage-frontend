"use client";

import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormField {
  id: number;
  type: string;
  name: string;
}

const fieldTypes = ["Type Input", "Radio", "Description", "Checkbox", "Dropdown", "Date", "File Upload"];

const initialFields: FormField[] = [
  { id: 1, type: "Type Input", name: "Employee Name" },
  { id: 2, type: "Radio", name: "Are you a certified legal service provider?" },
  { id: 3, type: "Description", name: "Description" },
];

export default function FormsCMS() {
  const [viewMode, setViewMode] = useState<"list" | "view" | "edit">("list");
  const [fields, setFields] = useState<FormField[]>(initialFields);

  const addField = () => {
    setFields([...fields, { id: fields.length + 1, type: "Type Input", name: "" }]);
  };

  const updateField = (id: number, key: "type" | "name", value: string) => {
    setFields(fields.map((f) => (f.id === id ? { ...f, [key]: value } : f)));
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-xl font-bold text-[#1B2A4A]">Contract Agreement Form</h1>

      {/* Form card */}
      <div className="rounded-xl border border-[#E5E7EB] p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlignJustify className="size-5 text-[#9CA3AF]" />
            <div>
              <p className="text-xs text-[#9CA3AF]">Last updated</p>
              <p className="text-sm font-semibold text-[#1B2A4A]">2024/8/14</p>
            </div>
          </div>
          {viewMode === "list" && (
            <Button
              onClick={() => setViewMode("view")}
              className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              View Form
            </Button>
          )}
          {viewMode === "view" && (
            <Button
              onClick={() => setViewMode("edit")}
              className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Edit Form
            </Button>
          )}
          {viewMode === "edit" && (
            <Button
              onClick={() => setViewMode("list")}
              className="h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Save Form
            </Button>
          )}
        </div>

        {/* View Form mode */}
        {viewMode === "view" && (
          <div className="mt-6 space-y-5">
            <div className="flex items-center gap-6">
              <span className="w-60 shrink-0 text-sm text-[#1B2A4A]">Job Title</span>
              <Input placeholder="Job Title" className="h-10 rounded-lg border-[#D1D5DB] text-sm placeholder:text-[#9CA3AF]" />
            </div>
            <div className="flex items-center gap-6">
              <span className="w-60 shrink-0 text-sm text-[#1B2A4A]">
                Are you a verified legal service provider?
              </span>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]" />
                  <span className="text-sm text-[#6B7280]">Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="size-4 rounded border-[#D1D5DB] accent-[#1B2A4A]" />
                  <span className="text-sm text-[#6B7280]">No</span>
                </label>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <span className="w-60 shrink-0 pt-2 text-sm text-[#1B2A4A]">Description</span>
              <textarea
                rows={4}
                className="w-full resize-y rounded-lg border border-[#D1D5DB] px-3 py-2.5 text-sm placeholder:text-[#9CA3AF] focus:border-[#1B2A4A] focus:ring-1 focus:ring-[#1B2A4A] focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* Edit Form mode - Field Builder */}
        {viewMode === "edit" && (
          <div className="mt-6">
            <div className="space-y-6">
              {fields.map((field) => (
                <div key={field.id} className="rounded-xl border border-[#E5E7EB] p-5">
                  <p className="mb-4 text-xs text-[#9CA3AF]">Field ({String(field.id).padStart(2, "0")})</p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-6">
                      <span className="w-28 shrink-0 text-sm text-[#1B2A4A]">Field Type</span>
                      <Select
                        value={field.type}
                        onValueChange={(v) => { if (v) updateField(field.id, "type", v); }}
                      >
                        <SelectTrigger className="h-10 w-full rounded-lg border-[#D1D5DB] text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {fieldTypes.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="w-28 shrink-0 text-sm text-[#1B2A4A]">Field Name</span>
                      <Input
                        value={field.name}
                        onChange={(e) => updateField(field.id, "name", e.target.value)}
                        className="h-10 rounded-lg border-[#D1D5DB] text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={addField}
              className="mt-5 h-10 rounded-lg bg-[#1B2A4A] px-5 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Add Another Field
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

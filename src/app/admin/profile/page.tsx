"use client";

import { useState } from "react";
import { Mail, Phone, Eye, EyeOff, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function AdminProfile() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      <p className="mb-4 text-sm text-[#6B7280]">Profile</p>

      {/* Profile header */}
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-center gap-5">
          <div className="size-24 overflow-hidden rounded-xl bg-[#D1D5DB]">
            <div className="flex size-full items-center justify-center bg-amber-100 text-2xl font-bold text-[#1B2A4A]">
              BJ
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1B2A4A]">Bob Johnson</h2>
            <div className="mt-1 flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                <Mail className="size-3.5 text-[#22C55E]" />
                Bob123@example.com
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                <Phone className="size-3.5" />
                (+123) 1234 4569 7845
              </span>
            </div>
            <Button
              onClick={() => setShowChangePassword(true)}
              className="mt-3 h-8 rounded-lg bg-[#E9A319] px-4 text-xs font-medium text-white hover:bg-[#D4920F]"
            >
              Change Password
            </Button>
          </div>
        </div>
      </div>

      {/* General Information */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="mb-5 text-base font-semibold text-[#1B2A4A]">General Information</h3>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <Label className="mb-2 text-sm text-[#6B7280]">First Name</Label>
            <Input defaultValue="Bob" className="h-10 rounded-lg border-[#D1D5DB] text-sm" />
          </div>
          <div>
            <Label className="mb-2 text-sm text-[#6B7280]">Last Name</Label>
            <Input defaultValue="Johnson" className="h-10 rounded-lg border-[#D1D5DB] text-sm" />
          </div>
          <div>
            <Label className="mb-2 text-sm text-[#6B7280]">Email</Label>
            <Input defaultValue="johnd@gmail.com" className="h-10 rounded-lg border-[#D1D5DB] text-sm" />
          </div>
          <div>
            <Label className="mb-2 text-sm text-[#6B7280]">Phone</Label>
            <Input defaultValue="(+45) 1254 1254 14" className="h-10 rounded-lg border-[#D1D5DB] text-sm" />
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <Button className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]">
            Edit
          </Button>
          <Button
            variant="outline"
            className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50"
          >
            Cancel
          </Button>
        </div>
      </div>

      {/* Change Password Dialog */}
      <Dialog open={showChangePassword} onOpenChange={setShowChangePassword}>
        <DialogContent className="max-w-sm rounded-2xl border-none bg-white p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-base font-semibold text-[#1B2A4A]">
              Change Password
            </DialogTitle>
            <button
              onClick={() => setShowChangePassword(false)}
              className="flex size-7 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <Label className="mb-2 text-sm text-[#6B7280]">Current Password</Label>
              <div className="relative">
                <Input
                  type={showCurrent ? "text" : "password"}
                  placeholder="Type Here"
                  className="h-10 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9CA3AF]"
                >
                  {showCurrent ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
            <div>
              <Label className="mb-2 text-sm text-[#6B7280]">New Password</Label>
              <div className="relative">
                <Input
                  type={showNew ? "text" : "password"}
                  placeholder="Type Here"
                  className="h-10 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9CA3AF]"
                >
                  {showNew ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
            <div>
              <Label className="mb-2 text-sm text-[#6B7280]">Confirm New Password</Label>
              <div className="relative">
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Type Here"
                  className="h-10 rounded-lg border-[#D1D5DB] pr-10 text-sm placeholder:text-[#9CA3AF]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9CA3AF]"
                >
                  {showConfirm ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <Button
              onClick={() => setShowChangePassword(false)}
              className="h-10 rounded-lg bg-[#1B2A4A] px-6 text-sm font-medium text-white hover:bg-[#2A3D66]"
            >
              Save
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowChangePassword(false)}
              className="h-10 rounded-lg border-red-500 px-6 text-sm font-medium text-red-500 hover:bg-red-50"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

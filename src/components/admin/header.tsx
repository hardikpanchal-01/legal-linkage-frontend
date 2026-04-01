"use client";

import { Bell, ChevronDown, User } from "lucide-react";

export function AdminHeader() {
  return (
    <header className="flex h-14 items-center justify-end bg-[#1B2A4A] px-6">
      <div className="flex items-center gap-4">
        <button className="relative text-white/80 hover:text-white">
          <Bell className="size-5" />
          <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
            3
          </span>
        </button>
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center overflow-hidden rounded-full bg-[#6B7280]">
            <User className="size-5 text-white" />
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-white">Name Here</p>
            <p className="text-[10px] text-white/60">Admin</p>
          </div>
          <ChevronDown className="size-3.5 text-white/60" />
        </div>
      </div>
    </header>
  );
}

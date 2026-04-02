"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Scale,
  UserPlus,
  MessageSquare,
  Star,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  ChevronUp,
  User,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dap/dashboard" },
  { label: "Dispute Management", icon: Scale, href: "/dap/disputes" },
  { label: "Registration Management", icon: UserPlus, href: "/dap/registration" },
  { label: "Dispute Chat Rooms", icon: MessageSquare, href: "/dap/chat-rooms" },
  { label: "Reviews management", icon: Star, href: "/dap/reviews" },
];

export default function DAPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[220px] flex-shrink-0 flex flex-col bg-[#1B2A4A] text-white">
        {/* Logo */}
        <div className="flex flex-col items-center px-4 pt-5 pb-4">
          <div className="flex size-20 items-center justify-center rounded-full bg-white shadow-lg overflow-hidden">
            <Image src="/images/logo.png" alt="LawLinkage" width={160} height={160} className="object-cover scale-150" />
          </div>
          <p className="mt-2 text-base font-bold leading-tight text-white">LawLinkage&trade;</p>
          <p className="text-[10px] leading-tight text-white/50">Transparent legal help, connected.</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-white/15 text-white font-medium"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} />
                <span className="flex-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-white/10 px-3 py-3">
          <Link href="/dap-login" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors">
            <LogOut size={18} />
            <span className="flex-1 text-left">Logout</span>
            <ChevronUp size={14} />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between bg-[#1B2A4A] px-6">
          <div className="relative w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search here..." className="w-full rounded-lg bg-white py-2 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none" />
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dap/notifications" className="relative text-white/80 hover:text-white">
              <Bell size={20} />
              <span className="absolute -right-1 -top-1 flex h-2 w-2 rounded-full bg-red-500" />
            </Link>

            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gray-300 overflow-hidden">
                  <div className="flex h-full w-full items-center justify-center bg-amber-100 text-sm font-semibold text-[#1B2A4A]">D</div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">Name Here</p>
                  <p className="text-xs text-white/60">Admin</p>
                </div>
                <ChevronDown size={14} className={`text-white/60 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 z-50 w-44 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                  <Link href="/dap/profile" onClick={() => setProfileOpen(false)} className="block px-4 py-2.5 text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]">Profile</Link>
                  <Link href="/dap-login" onClick={() => setProfileOpen(false)} className="block px-4 py-2.5 text-sm text-red-500 hover:bg-[#F3F4F6]">Logout</Link>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Shield,
  Scale,
  Briefcase,
  CreditCard,
  FileText,
  BarChart3,
  Star,
  Bell,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const mainNav = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "User Management", href: "/admin/user-management", icon: Users },
  { name: "DAP Member", href: "/admin/dap-member", icon: Shield },
  { name: "Dispute Management", href: "/admin/dispute-management", icon: Scale },
  { name: "Jobs Management", href: "/admin/jobs-management", icon: Briefcase },
  { name: "Payments", href: "/admin/payments", icon: CreditCard },
];

const feesSchedules = [
  { name: "Zoom Subscriptions", href: "/admin/fees-schedules/zoom-subscriptions" },
  { name: "Registration Fees", href: "/admin/fees-schedules/registration-fees" },
  { name: "Territory Taxes", href: "/admin/fees-schedules/territory-taxes" },
  { name: "DAP Fee Structure", href: "/admin/fees-schedules/dap-fee-structure" },
  { name: "Job Fee Structure", href: "/admin/fees-schedules/job-fee-structure" },
];

const bottomNav = [
  { name: "Reports & Analysis", href: "/admin/reports", icon: BarChart3 },
  { name: "Reviews & Rating", href: "/admin/reviews", icon: Star },
  { name: "Notifications", href: "/admin/notifications", icon: Bell },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const [feesOpen, setFeesOpen] = useState(
    pathname.startsWith("/admin/fees-schedules")
  );

  const isActive = (href: string) => pathname === href;
  const isFeeActive = pathname.startsWith("/admin/fees-schedules");

  return (
    <aside className="flex h-screen w-56 flex-col bg-[#1B2A4A] text-white">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5">
        <Image src="/images/logo.svg" alt="Logo" width={32} height={38} />
        <div>
          <p className="text-sm font-bold text-white">ClientLawyerLink</p>
          <p className="text-[9px] text-white/60">Vetted &amp; Transparent</p>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-2">
        {mainNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition-colors ${
              isActive(item.href)
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon className="size-4" />
            {item.name}
          </Link>
        ))}

        {/* Fees Schedules (collapsible) */}
        <button
          type="button"
          onClick={() => setFeesOpen(!feesOpen)}
          className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-xs transition-colors ${
            isFeeActive
              ? "bg-white/10 text-white"
              : "text-white/70 hover:bg-white/5 hover:text-white"
          }`}
        >
          <div className="flex items-center gap-3">
            <FileText className="size-4" />
            Fees Schedules
          </div>
          {feesOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
        </button>

        {feesOpen && (
          <div className="ml-7 space-y-0.5">
            {feesSchedules.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-[11px] transition-colors ${
                  isActive(item.href)
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {bottomNav.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs transition-colors ${
              isActive(item.href)
                ? "bg-white/10 text-white"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon className="size-4" />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="border-t border-white/10 px-2 py-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs text-white/70 hover:bg-white/5 hover:text-white">
          <LogOut className="size-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}

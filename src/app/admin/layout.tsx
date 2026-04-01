"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  ShieldAlert,
  Briefcase,
  CreditCard,
  CalendarCog,
  BarChart3,
  Star,
  FileText,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  ChevronUp,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
  { label: "User Management", icon: Users, href: "/admin/users" },
  { label: "DAP Member", icon: Users, href: "/admin/dap-member" },
  { label: "Dispute Management", icon: ShieldAlert, href: "/admin/disputes" },
  { label: "Jobs Management", icon: Briefcase, href: "/admin/jobs" },
  { label: "Payments", icon: CreditCard, href: "/admin/payments" },
];

const feesSubItems = [
  { label: "Zoom Subscriptions", href: "/admin/fees-schedules/zoom-subscriptions" },
  { label: "Registration Fees", href: "/admin/fees-schedules/registration-fees" },
  { label: "Territory Taxes", href: "/admin/fees-schedules/territory-taxes" },
  { label: "DAP Fee Structure", href: "/admin/fees-schedules/dap-fee-structure" },
  { label: "Job Fee Structure", href: "/admin/fees-schedules/job-fee-structure" },
];

const bottomItems = [
  { label: "Reports & Analysis", icon: BarChart3, href: "/admin/reports" },
  { label: "Reviews & Rating", icon: Star, href: "/admin/reviews" },
  { label: "Forms CMS", icon: FileText, href: "/admin/forms" },
  { label: "Notifications", icon: Bell, href: "/admin/notifications" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [feesOpen, setFeesOpen] = useState(pathname.startsWith("/admin/fees-schedules"));
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[220px] flex-shrink-0 flex flex-col bg-[#1B2A4A] text-white">
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5">
          <Image src="/images/logo.svg" alt="LawLinkup" width={48} height={48} />
          <div>
            <h1 className="text-lg font-bold leading-tight">LawLinkup</h1>
            <p className="text-[10px] text-amber-400 font-medium">Trust by design</p>
            <p className="text-[9px] text-white/60 leading-tight">
              Where client, Lawyer,
              <br />
              justice connect
            </p>
          </div>
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

          {/* Fees Schedules (collapsible) */}
          <button
            type="button"
            onClick={() => setFeesOpen(!feesOpen)}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
              pathname.startsWith("/admin/fees-schedules")
                ? "bg-white/15 text-white font-medium"
                : "text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            <CalendarCog size={18} />
            <span className="flex-1 text-left">Fees Schedules</span>
            {feesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          {feesOpen && (
            <div className="ml-8 space-y-0.5">
              {feesSubItems.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className={`block rounded-lg px-3 py-2 text-xs transition-colors ${
                    pathname === sub.href
                      ? "text-white font-medium"
                      : "text-white/50 hover:text-white/80"
                  }`}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}

          {bottomItems.map((item) => {
            const isActive = pathname === item.href;
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
          <Link href="/admin-login" className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors">
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
          {/* Search */}
          <div className="relative w-80">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full rounded-lg bg-white py-2 pl-10 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link href="/admin/notifications" className="relative text-white/80 hover:text-white">
              <Bell size={20} />
              <span className="absolute -right-1 -top-1 flex h-2 w-2 rounded-full bg-red-500" />
            </Link>

            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3"
              >
                <div className="h-9 w-9 rounded-full bg-gray-300 overflow-hidden">
                  <div className="flex h-full w-full items-center justify-center bg-amber-100 text-sm font-semibold text-[#1B2A4A]">
                    A
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white">Name Here</p>
                  <p className="text-xs text-white/60">Admin</p>
                </div>
                <ChevronDown size={14} className={`text-white/60 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 z-50 w-44 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                  <Link
                    href="/admin/profile"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/admin-login"
                    onClick={() => setProfileOpen(false)}
                    className="block px-4 py-2.5 text-sm text-red-500 hover:bg-[#F3F4F6]"
                  >
                    Logout
                  </Link>
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

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageCircle,
  Bell,
  ChevronDown,
  Search,
} from "lucide-react";

const navItems = [
  {
    label: "Look For Jobs",
    href: "/lawyer/look-for-jobs",
    hasDropdown: true,
  },
  {
    label: "Jobs",
    href: "/lawyer/jobs",
    hasDropdown: true,
  },
  {
    label: "Reports & Reviews",
    href: "/lawyer/reports",
    hasDropdown: true,
  },
  {
    label: "Disputes",
    href: "/lawyer/disputes",
    hasDropdown: true,
  },
];

export default function LawyerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#1C1408]">
        <div className="flex h-18 items-center justify-between px-6">
          {/* Logo + Nav */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link href="/lawyer/look-for-jobs" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-white overflow-hidden">
                <Image src="/images/logo.png" alt="LawLinkage" width={40} height={40} className="object-cover scale-150" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-white">LawLinkage&trade;</p>
                <p className="text-[9px] leading-tight text-white/60">Transparent legal help, connected.</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "text-white font-medium"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={14} />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Request Arbitration */}
            <Link
              href="/lawyer/request-arbitration"
              className="hidden rounded-lg border border-white/30 px-4 py-1.5 text-sm font-medium text-white hover:bg-white/10 lg:block"
            >
              Request arbitration
            </Link>

            {/* Chat */}
            <Link href="/lawyer/chat" className="relative text-white/80 hover:text-white">
              <MessageCircle size={20} />
            </Link>

            {/* Notifications */}
            <Link href="/lawyer/notifications" className="relative text-white/80 hover:text-white">
              <Bell size={20} />
              <span className="absolute -right-1 -top-1 flex h-2 w-2 rounded-full bg-red-500" />
            </Link>

            {/* Profile */}
            <div className="relative">
              <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-gray-300 overflow-hidden">
                  <Image src="/images/profile.svg" alt="Profile" width={36} height={36} className="object-cover" />
                </div>
              </button>
              {profileOpen && (
                <div className="absolute right-0 top-12 z-50 w-44 rounded-lg border border-[#E5E7EB] bg-white py-1 shadow-lg">
                  <Link href="/lawyer/profile" onClick={() => setProfileOpen(false)} className="block px-4 py-2.5 text-sm text-[#1B2A4A] hover:bg-[#F3F4F6]">
                    Profile
                  </Link>
                  <Link href="/lawyer-login" onClick={() => setProfileOpen(false)} className="block px-4 py-2.5 text-sm text-red-500 hover:bg-[#F3F4F6]">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#171717] text-white">
        <div className="mx-auto max-w-7xl px-6 pt-12 pb-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-white overflow-hidden">
                  <Image src="/images/logo.png" alt="LawLinkage" width={48} height={48} className="object-cover scale-150" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">LawLinkage&trade;</p>
                  <p className="text-xs text-white/50">Transparent legal help, connected.</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/50">
                We connect clients with lawyers fast. All legal service providers on our platform are licensed, certified, or otherwise qualified in accordance with the regulations of their jurisdiction. We verify credentials before listing providers, but we do not certify them ourselves.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-white/50 hover:text-white">About us</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-white">Trust by Design</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-white">Q&A</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
              <ul className="space-y-2.5">
                <li><Link href="#" className="text-sm text-white/50 hover:text-white">Terms of service</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-white">Privacy policy</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-white">User agreement</Link></li>
                <li><Link href="#" className="text-sm text-white/50 hover:text-white">Cookie policy</Link></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white">
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><polygon fill="#171717" points="9.545,15.568 15.818,12 9.545,8.432"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-sm text-white/50">&copy; 2025 Legal linkage Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

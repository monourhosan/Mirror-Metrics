"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenEstimator: () => void;
}

export default function Header({ onOpenEstimator }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Divisions", href: "#divisions" },
    { label: "Methodology", href: "#methodology" },
    { label: "Nationwide Reach", href: "#coverage" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled
          ? "border-b border-[#E5E7EB] shadow-[0_2px_12px_rgba(7,36,66,0.04)]"
          : "border-b border-[#E5E7EB]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Identity & Logo */}
        <Link href="/" className="flex items-center gap-3.5 group focus:outline-none">
          <div className="relative w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center p-0.5 border border-[#E5E7EB] shadow-xs group-hover:border-[#24538E]/50 transition-colors">
            <Image
              src="/logo.png"
              alt="Mirror Metrics RESEARCH LTD Logo"
              width={48}
              height={48}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-[#072442] text-lg leading-tight flex items-center gap-1.5">
              Mirror Metrics
              <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-100 text-[#072442]/80 border border-[#E5E7EB]">
                LTD
              </span>
            </span>
            <span className="text-[11px] font-medium text-[#24538E] tracking-wider uppercase font-mono">
              Research &amp; Consultancy • Dhaka
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-wider text-[#072442]/75 hover:text-[#072442] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#24538E] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenEstimator}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-lg bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] hover:bg-[#22B839] shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Commission a Study</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={onOpenEstimator}
            className="px-2.5 py-1.5 text-xs font-bold rounded-md bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]"
          >
            Commission
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#E5E7EB] text-[#072442] hover:bg-slate-50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E5E7EB] bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-[#072442] rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E5E7EB] flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]"
            >
              <span>Commission a Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold rounded-lg border border-[#072442] text-[#072442] text-center"
            >
              Contact Dhaka Office
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

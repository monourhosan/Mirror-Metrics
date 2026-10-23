"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, MapPin, Mail, Phone, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-[#E5E7EB] text-[#072442] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Info & Logo (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 shrink-0 bg-white rounded-lg flex items-center justify-center p-0.5 border border-[#E5E7EB] shadow-xs">
                <Image
                  src="/logo.png"
                  alt="Mirror Metrics RESEARCH LTD Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-tight text-[#072442] text-lg leading-tight">
                  Mirror Metrics RESEARCH LTD
                </span>
                <span className="text-[11px] font-medium text-[#24538E] tracking-wider uppercase font-mono">
                  Social &amp; Market Research // Dhaka
                </span>
              </div>
            </div>

            <p className="text-xs text-[#072442]/80 leading-relaxed max-w-sm">
              &ldquo;Reflecting Reality Through Data-Driven Social &amp; Market Insights&rdquo;
            </p>

            <p className="text-xs text-[#072442]/70 leading-relaxed max-w-sm">
              Headquartered in Banani, Dhaka, Mirror Metrics is Bangladesh&apos;s premier full-service research and
              consultancy organization, deploying rigorous digital CAPI methodologies across all 8 divisions.
            </p>

            {/* Compliance & Standards Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 border border-[#E5E7EB] text-[#072442]">
                ESOMAR Member Aligned
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 border border-[#E5E7EB] text-[#072442]">
                IRB Certified
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 border border-[#E5E7EB] text-[#072442]">
                100% CAPI Geofenced
              </span>
            </div>
          </div>

          {/* Quick Links: Core Divisions */}
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#072442]/80">
              Research Divisions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#divisions" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Social Research Division
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Market Research Division
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Baseline &amp; Endline Evaluations
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Brand Health &amp; CSAT Tracking
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Public Health &amp; Nutrition
                </a>
              </li>
              <li>
                <a href="#divisions" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Climate Resilience &amp; DRR
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Methodology & Coverage */}
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#072442]/80">
              Operations &amp; Field
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#methodology" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Sampling Architecture (PPS)
                </a>
              </li>
              <li>
                <a href="#methodology" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  CAPI / CATI Handheld Tech
                </a>
              </li>
              <li>
                <a href="#methodology" className="text-[#072442]/75 hover:text-[#24538E] transition-colors flex items-center gap-1.5">
                  <span>Quality Control &amp; Auditing</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  8-Division Regional Roster
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  64 Districts Field Coverage
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-[#072442]/75 hover:text-[#24538E] transition-colors">
                  Published Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links: Contact & HQ */}
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-wider text-[#072442]/80">
              Dhaka Headquarters
            </div>
            <div className="space-y-2.5 text-xs text-[#072442]/75">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#24538E] shrink-0 mt-0.5" />
                <span>House 42, Road 11, Block D, Banani, Dhaka-1213</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFBD2E] shrink-0 mt-0.5" />
                <span>inquiry@mirrormetrics.org</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#27C93F] shrink-0 mt-0.5" />
                <span>+880 2-9884210</span>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#24538E] hover:underline"
                >
                  Direct Inquiry Portal &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* macOS-style Bottom Window Card Footer */}
        <div className="pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#072442]/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            <span className="ml-1">
              &copy; 2026 Mirror Metrics RESEARCH LTD. All rights reserved. Registered in Dhaka, Bangladesh.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E5E7EB] bg-white text-[#072442] hover:bg-slate-50 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import { BANGLADESH_DIVISIONS } from "../data/researchData";
import {
  MapPin,
  Users2,
  CheckCircle2,
  Globe2,
  Languages,
  Building,
  Navigation,
  Compass,
} from "lucide-react";

export default function NationwideCoverage() {
  const [selectedDivisionId, setSelectedDivisionId] = useState<string>("dhaka");

  const currentDivision =
    BANGLADESH_DIVISIONS.find((d) => d.id === selectedDivisionId) || BANGLADESH_DIVISIONS[0];

  return (
    <section id="coverage" className="py-20 md:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] shadow-xs">
            Nationwide Field Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072442] tracking-tight">
            Active Across All 8 Divisions &amp; 64 Districts
          </h2>
          <p className="text-sm sm:text-base text-[#072442]/75 leading-relaxed">
            Bangladesh presents immense demographic, linguistic, and geographical diversity. Our permanent field stations,
            trained local enumerators, and regional coordinators ensure deep contextual understanding and rapid deployment.
          </p>
        </div>

        {/* Division Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {BANGLADESH_DIVISIONS.map((div) => {
            const isSelected = div.id === selectedDivisionId;
            return (
              <button
                key={div.id}
                type="button"
                onClick={() => setSelectedDivisionId(div.id)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#072442] border-[#072442] text-white shadow-xs"
                    : "bg-white border-[#E5E7EB] text-[#072442] hover:border-[#24538E]/50"
                }`}
              >
                <span>{div.name.replace(" Division", "")}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-[#072442]/70"
                  }`}
                >
                  {div.districtsCount} Dist.
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Division Interactive Window Card */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_6px_24px_rgba(7,36,66,0.06)] overflow-hidden">
          {/* macOS Window Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-white">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
              <span className="ml-2 font-mono text-xs uppercase tracking-wider text-[#072442]/70 font-semibold">
                REGIONAL COMMAND // {currentDivision.name.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#072442] font-mono">{currentDivision.bengaliName}</span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                Operational
              </span>
            </div>
          </div>

          {/* Division Details Grid */}
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left summary (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold uppercase text-[#24538E] flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#24538E]" />
                  <span>Regional Operations Profile</span>
                </div>
                <h3 className="text-3xl font-black text-[#072442] tracking-tight">
                  {currentDivision.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#072442]/80 leading-relaxed font-mono">
                  Field Base: {currentDivision.fieldStation}
                </p>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-slate-50/50">
                  <div className="text-[10px] font-mono uppercase text-[#072442]/60">Administrative Units</div>
                  <div className="text-xl font-black text-[#072442]">{currentDivision.districtsCount} Districts</div>
                  <div className="text-[11px] text-[#072442]/70">Full upazila coverage</div>
                </div>

                <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-slate-50/50">
                  <div className="text-[10px] font-mono uppercase text-[#072442]/60">Field Enumerators</div>
                  <div className="text-xl font-black text-[#072442]">{currentDivision.enumeratorsCount}+ Agents</div>
                  <div className="text-[11px] text-[#072442]/70">CAPI / Bio-marker trained</div>
                </div>
              </div>

              {/* Linguistic & Dialectal Fluency */}
              <div className="p-4 rounded-xl border border-[#DEA123] bg-[#FFBD2E]/10 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#875210] flex items-center gap-1.5 font-mono">
                  <Languages className="w-4 h-4 text-[#875210]" />
                  Dialectal &amp; Linguistic Mastery
                </div>
                <p className="text-xs text-[#072442]/85 leading-relaxed">
                  Our regional enumerators are native speakers of local dialects, eliminating communication barriers
                  and social distance during qualitative FGDs and intimate household surveys:
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentDivision.dialects.map((dialect) => (
                    <span
                      key={dialect}
                      className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-white border border-[#DEA123] text-[#875210]"
                    >
                      {dialect}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right specialties & featured study (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#072442]/80 font-mono">
                  Specialized Research Capabilities in {currentDivision.name}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentDivision.specialties.map((item) => (
                    <div
                      key={item}
                      className="p-3 rounded-xl border border-[#E5E7EB] bg-white flex items-start gap-2.5 hover:border-[#24538E]/50 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#27C93F] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-[#072442]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Case Study for this Division */}
              <div className="p-4 rounded-xl border border-[#E5E7EB] bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#24538E]">
                    Representative Regional Study
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] text-[#875210]">
                    Verified Field Dataset
                  </span>
                </div>
                <div className="text-sm font-bold text-[#072442]">
                  {currentDivision.featuredProject}
                </div>
                <p className="text-xs text-[#072442]/70 leading-relaxed">
                  Conducted utilizing our decentralized regional supervisor network with 100% CAPI tablet sync,
                  GPS waypoint geofencing, and centralized quality verification at Banani, Dhaka HQ.
                </p>
              </div>

              {/* Deployment Commitment */}
              <div className="flex flex-wrap items-center justify-between p-3.5 rounded-xl border border-[#E5E7EB] bg-white gap-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#072442]">
                  <span className="w-2 h-2 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  <span>Deployment Readiness: <strong className="text-[#072442]">24 to 72 Hours</strong></span>
                </div>
                <a
                  href="#contact"
                  className="text-xs font-bold text-[#24538E] hover:underline flex items-center gap-1"
                >
                  Inquire about {currentDivision.name} deployment &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

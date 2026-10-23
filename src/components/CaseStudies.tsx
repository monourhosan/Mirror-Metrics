"use client";

import React, { useState } from "react";
import { CASE_STUDIES, CaseStudy } from "../data/researchData";
import {
  FileText,
  MapPin,
  Users,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Filter,
  Sparkles,
} from "lucide-react";

interface CaseStudiesProps {
  onOpenEstimator: () => void;
}

export default function CaseStudies({ onOpenEstimator }: CaseStudiesProps) {
  const [filter, setFilter] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const categories = ["All", "Social Research", "Market Research", "Policy & Development"];

  const filteredStudies =
    filter === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.divisionCategory === filter);

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-[#FFBD2E] border border-[#DEA123] text-[#875210] shadow-xs">
            Proven Field Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072442] tracking-tight">
            Selected Case Studies &amp; Research Archives
          </h2>
          <p className="text-sm sm:text-base text-[#072442]/75 leading-relaxed">
            Examine how Mirror Metrics transforms rigorous field methodologies into actionable strategy,
            policy interventions, and market advantage for our global and national partners.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  filter === cat
                    ? "bg-[#072442] border-[#072442] text-white"
                    : "bg-white border-[#E5E7EB] text-[#072442] hover:border-[#072442]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid (macOS Window Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => {
            const isRed = study.accentType === "red";
            const isYellow = study.accentType === "yellow";
            const isGreen = study.accentType === "green";

            return (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_16px_rgba(7,36,66,0.04)] overflow-hidden flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(7,36,66,0.08)] transition-all duration-200"
              >
                <div>
                  {/* macOS Window Top Bar */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E7EB] bg-white">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                      <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                      <span className="ml-2 font-mono text-[11px] font-bold text-[#072442]/70 uppercase">
                        CASE REF // {study.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Accent Badges matching strict specs */}
                    {isRed && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FF5F56] border border-[#E0443E] text-[#790A05]">
                        {study.divisionCategory}
                      </span>
                    )}
                    {isYellow && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] text-[#875210]">
                        {study.divisionCategory}
                      </span>
                    )}
                    {isGreen && (
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                        {study.divisionCategory}
                      </span>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 md:p-7 space-y-5">
                    {/* Client Sector */}
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#072442]/60 uppercase">
                      <span>Client Partner:</span>
                      <span className="font-semibold text-[#072442]">{study.clientSector}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#072442] leading-snug">
                      {study.title}
                    </h3>

                    {/* Key Metric Spotlight */}
                    <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-slate-50/50 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono uppercase text-[#072442]/60">
                          {study.metricLabel}
                        </div>
                        <div className="text-xl font-black text-[#072442]">{study.metricValue}</div>
                      </div>

                      {isRed && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FF5F56] border border-[#E0443E] text-[#790A05]">
                          Quality Verified
                        </span>
                      )}
                      {isYellow && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFBD2E] border border-[#DEA123] text-[#875210]">
                          Market Shift
                        </span>
                      )}
                      {isGreen && (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                          High Impact
                        </span>
                      )}
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#072442]/75 leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Meta parameters: Sample size & Geography */}
                    <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-[#E5E7EB]">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono text-[#072442]/60 uppercase">Sample Size</div>
                        <div className="font-bold text-[#072442]">{study.sampleSize}</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono text-[#072442]/60 uppercase">Geography</div>
                        <div className="font-bold text-[#072442] truncate" title={study.geography}>
                          {study.geography}
                        </div>
                      </div>
                    </div>

                    {/* Deliverables List */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[10px] font-mono text-[#072442]/60 uppercase font-bold">
                        Key Study Deliverables:
                      </div>
                      {study.deliverables.map((del) => (
                        <div key={del} className="flex items-start gap-2 text-xs text-[#072442]/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 py-4 bg-slate-50/60 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#072442]/70">Field Rigor: 100% CAPI Geofenced</span>
                  <button
                    type="button"
                    onClick={onOpenEstimator}
                    className="text-xs font-bold text-[#24538E] hover:underline flex items-center gap-1"
                  >
                    Commission Similar Study &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

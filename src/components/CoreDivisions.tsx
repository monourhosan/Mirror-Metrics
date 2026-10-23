"use client";

import React, { useState } from "react";
import { CORE_DIVISIONS } from "../data/researchData";
import {
  Users,
  TrendingUp,
  CheckCircle2,
  FileText,
  Building2,
  ChevronRight,
  Sparkles,
  BarChart3,
  Award,
} from "lucide-react";

interface CoreDivisionsProps {
  onOpenEstimator: () => void;
}

export default function CoreDivisions({ onOpenEstimator }: CoreDivisionsProps) {
  const [activeDivision, setActiveDivision] = useState<"all" | "social" | "market">("all");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <section id="divisions" className="py-20 md:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-[#FFBD2E] border border-[#DEA123] text-[#875210]">
            Core Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072442] tracking-tight">
            Two Specialized Divisions. One Unified Standard of Precision.
          </h2>
          <p className="text-sm sm:text-base text-[#072442]/75 leading-relaxed">
            Mirror Metrics RESEARCH LTD operates two distinct, highly specialized research divisions in Dhaka,
            sharing a nationwide field network, centralized quality control infrastructure, and rigorous econometric modeling.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setActiveDivision("all")}
              className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                activeDivision === "all"
                  ? "bg-[#072442] border-[#072442] text-white"
                  : "bg-white border-[#E5E7EB] text-[#072442] hover:border-[#072442]/40"
              }`}
            >
              Both Divisions
            </button>
            <button
              type="button"
              onClick={() => setActiveDivision("social")}
              className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                activeDivision === "social"
                  ? "bg-[#FFBD2E] border-[#DEA123] text-[#875210]"
                  : "bg-white border-[#E5E7EB] text-[#875210] hover:border-[#DEA123]"
              }`}
            >
              Social Research Division
            </button>
            <button
              type="button"
              onClick={() => setActiveDivision("market")}
              className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                activeDivision === "market"
                  ? "bg-[#27C93F] border-[#1AAB29] text-[#0C4F16]"
                  : "bg-white border-[#E5E7EB] text-[#0C4F16] hover:border-[#1AAB29]"
              }`}
            >
              Market Research Division
            </button>
          </div>
        </div>

        {/* Two-Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DIVISION 1: Social Research Division */}
          {(activeDivision === "all" || activeDivision === "social") && (
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_20px_rgba(7,36,66,0.05)] overflow-hidden flex flex-col justify-between">
              <div>
                {/* macOS Window Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E7EB] bg-white">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                    <span className="ml-2 font-mono text-xs uppercase tracking-wider text-[#072442]/70 font-semibold">
                      DIVISION 01 // SOCIAL RESEARCH
                    </span>
                  </div>
                  {/* Yellow Accent Badge */}
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFBD2E] border border-[#DEA123] text-[#875210] shadow-xs">
                    Social Research Division
                  </span>
                </div>

                {/* Division Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#875210] font-mono text-xs font-bold uppercase tracking-wider">
                      <Users className="w-4 h-4" />
                      <span>Development, Public Policy &amp; Impact</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#072442] tracking-tight">
                      Socioeconomic Baselines &amp; Development Program Evaluations
                    </h3>
                    <p className="text-sm text-[#072442]/75 leading-relaxed">
                      {CORE_DIVISIONS.social.description}
                    </p>
                  </div>

                  {/* Core Services Accordion / Card List */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#072442]/80 font-mono">
                      Core Practice Capabilities:
                    </div>

                    {CORE_DIVISIONS.social.keyServices.map((service) => {
                      const isExpanded = expandedService === service.title;
                      return (
                        <div
                          key={service.title}
                          className="border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-200 hover:border-[#DEA123]"
                        >
                          <button
                            type="button"
                            onClick={() => toggleExpand(service.title)}
                            className="w-full text-left p-4 flex items-center justify-between gap-3 bg-white hover:bg-slate-50/50"
                          >
                            <span className="font-bold text-sm text-[#072442]">{service.title}</span>
                            <ChevronRight
                              className={`w-4 h-4 text-[#875210] shrink-0 transition-transform ${
                                isExpanded ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-4 pb-4 pt-1 bg-slate-50/30 border-t border-[#E5E7EB] space-y-2.5">
                              <p className="text-xs text-[#072442]/80 leading-relaxed">{service.description}</p>
                              <div className="space-y-1">
                                {service.points.map((pt) => (
                                  <div
                                    key={pt}
                                    className="flex items-start gap-2 text-xs text-[#072442]/85 font-medium"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F] shrink-0 mt-0.5" />
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Typical Clients & Metrics */}
                  <div className="pt-4 border-t border-[#E5E7EB] space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#072442]/80 font-mono">
                      Client Partnerships &amp; Sponsors:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CORE_DIVISIONS.social.typicalClients.map((client) => (
                        <span
                          key={client}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-[#072442] border border-[#E5E7EB]"
                        >
                          {client}
                        </span>
                      ))}
                    </div>

                    {/* Division KPI Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      {CORE_DIVISIONS.social.metrics.map((m) => (
                        <div key={m.label} className="p-2.5 rounded-lg border border-[#E5E7EB] bg-slate-50/50">
                          <div className="text-[10px] text-[#072442]/60 uppercase font-mono">{m.label}</div>
                          <div className="text-base font-black text-[#072442]">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Division Card Footer */}
              <div className="px-6 py-4 bg-slate-50/60 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-xs font-mono text-[#072442]/70">Field Protocols: CAPI / GPS / IRB Approved</span>
                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#875210] hover:underline"
                >
                  <span>Commission Social Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* DIVISION 2: Market Research Division */}
          {(activeDivision === "all" || activeDivision === "market") && (
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_20px_rgba(7,36,66,0.05)] overflow-hidden flex flex-col justify-between">
              <div>
                {/* macOS Window Header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E7EB] bg-white">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                    <span className="ml-2 font-mono text-xs uppercase tracking-wider text-[#072442]/70 font-semibold">
                      DIVISION 02 // MARKET RESEARCH
                    </span>
                  </div>
                  {/* Green Accent Badge */}
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] shadow-xs">
                    Market Research Division
                  </span>
                </div>

                {/* Division Content */}
                <div className="p-6 md:p-8 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#0C4F16] font-mono text-xs font-bold uppercase tracking-wider">
                      <TrendingUp className="w-4 h-4" />
                      <span>Commercial Strategy &amp; Consumer Insights</span>
                    </div>
                    <h3 className="text-2xl font-black text-[#072442] tracking-tight">
                      Consumer Intelligence, Retail Census &amp; Brand Equity
                    </h3>
                    <p className="text-sm text-[#072442]/75 leading-relaxed">
                      {CORE_DIVISIONS.market.description}
                    </p>
                  </div>

                  {/* Core Services Accordion / Card List */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#072442]/80 font-mono">
                      Core Practice Capabilities:
                    </div>

                    {CORE_DIVISIONS.market.keyServices.map((service) => {
                      const isExpanded = expandedService === service.title;
                      return (
                        <div
                          key={service.title}
                          className="border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-200 hover:border-[#1AAB29]"
                        >
                          <button
                            type="button"
                            onClick={() => toggleExpand(service.title)}
                            className="w-full text-left p-4 flex items-center justify-between gap-3 bg-white hover:bg-slate-50/50"
                          >
                            <span className="font-bold text-sm text-[#072442]">{service.title}</span>
                            <ChevronRight
                              className={`w-4 h-4 text-[#0C4F16] shrink-0 transition-transform ${
                                isExpanded ? "rotate-90" : ""
                              }`}
                            />
                          </button>

                          {isExpanded && (
                            <div className="px-4 pb-4 pt-1 bg-slate-50/30 border-t border-[#E5E7EB] space-y-2.5">
                              <p className="text-xs text-[#072442]/80 leading-relaxed">{service.description}</p>
                              <div className="space-y-1">
                                {service.points.map((pt) => (
                                  <div
                                    key={pt}
                                    className="flex items-start gap-2 text-xs text-[#072442]/85 font-medium"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F] shrink-0 mt-0.5" />
                                    <span>{pt}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Typical Clients & Metrics */}
                  <div className="pt-4 border-t border-[#E5E7EB] space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#072442]/80 font-mono">
                      Industry Sectors Served:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CORE_DIVISIONS.market.typicalClients.map((client) => (
                        <span
                          key={client}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-[#072442] border border-[#E5E7EB]"
                        >
                          {client}
                        </span>
                      ))}
                    </div>

                    {/* Division KPI Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      {CORE_DIVISIONS.market.metrics.map((m) => (
                        <div key={m.label} className="p-2.5 rounded-lg border border-[#E5E7EB] bg-slate-50/50">
                          <div className="text-[10px] text-[#072442]/60 uppercase font-mono">{m.label}</div>
                          <div className="text-base font-black text-[#072442]">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Division Card Footer */}
              <div className="px-6 py-4 bg-slate-50/60 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-xs font-mono text-[#072442]/70">Testing Facility: Banani CLT Suite &amp; CATI Call Center</span>
                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0C4F16] hover:underline"
                >
                  <span>Commission Market Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

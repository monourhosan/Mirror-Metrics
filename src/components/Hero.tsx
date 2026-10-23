"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Activity,
  Layers,
  Database,
  Users2,
  FileSpreadsheet,
} from "lucide-react";

interface HeroProps {
  onOpenEstimator: () => void;
}

export default function Hero({ onOpenEstimator }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"telemetry" | "integrity" | "roster">("telemetry");

  return (
    <section className="relative bg-white pt-12 pb-20 md:pt-16 md:pb-28 border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill matching Green Accent spec */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0C4F16] animate-pulse" />
                <span>Active Across All 8 Divisions of Bangladesh</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#072442] tracking-tight leading-[1.08]">
              Evidence-Based <span className="text-[#24538E]">Social</span> &amp;{" "}
              <span className="text-[#13A8A8]">Market Research</span> for a Changing World.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#072442]/80 leading-relaxed font-normal max-w-2xl">
              Premier research organization headquartered in Dhaka, delivering high-precision consumer intelligence,
              socioeconomic baseline surveys, public health evaluations, and policy research across urban hubs and rural
              communities nationwide.
            </p>

            {/* Dual CTAs & Commission Trigger */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#divisions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#072442] text-white hover:bg-[#0c355f] border border-[#051a30] shadow-sm transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Our Research</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] hover:bg-[#22B839] shadow-xs transition-all hover:translate-y-[-1px]"
              >
                <Layers className="w-4 h-4" />
                <span>Commission a Study</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white border border-[#E5E7EB] text-[#072442] hover:border-[#072442] hover:bg-slate-50 transition-colors"
              >
                <span>Contact Dhaka Office</span>
              </a>
            </div>

            {/* Quick Credentials Strip */}
            <div className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center gap-6 text-xs text-[#072442]/75">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                <span className="font-semibold text-[#072442]">ESOMAR-Aligned Ethics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="font-semibold text-[#072442]">100% CAPI Digital Capture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="font-semibold text-[#072442]">Dual-Layer Audio/GPS Audits</span>
              </div>
            </div>
          </div>

          {/* Right Column: macOS-Inspired Crisp Dashboard Preview Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgba(7,36,66,0.06)] overflow-hidden">
              {/* Window Header with exact macOS dots and strict 1px borders */}
              <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                  <span className="ml-2 font-mono text-[11px] font-bold uppercase tracking-wider text-[#072442]/70">
                    MIRROR METRICS // FIELD TELEMETRY
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold text-[#27C93F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-ping" />
                  <span>LIVE HQ</span>
                </div>
              </div>

              {/* Card Interactive Tab Nav */}
              <div className="grid grid-cols-3 border-b border-[#E5E7EB] bg-slate-50/50 text-center text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("telemetry")}
                  className={`py-2.5 transition-colors border-r border-[#E5E7EB] ${
                    activeTab === "telemetry"
                      ? "bg-white text-[#072442] border-b-2 border-b-[#24538E]"
                      : "text-[#072442]/60 hover:text-[#072442]"
                  }`}
                >
                  Core Metrics
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("integrity")}
                  className={`py-2.5 transition-colors border-r border-[#E5E7EB] ${
                    activeTab === "integrity"
                      ? "bg-white text-[#072442] border-b-2 border-b-[#24538E]"
                      : "text-[#072442]/60 hover:text-[#072442]"
                  }`}
                >
                  Quality Audits
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("roster")}
                  className={`py-2.5 transition-colors ${
                    activeTab === "roster"
                      ? "bg-white text-[#072442] border-b-2 border-b-[#24538E]"
                      : "text-[#072442]/60 hover:text-[#072442]"
                  }`}
                >
                  Field Stations
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4 bg-white">
                {activeTab === "telemetry" && (
                  <>
                    {/* Metric 1: Green Accent Pill */}
                    <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-white flex items-center justify-between hover:border-[#1AAB29]/50 transition-colors">
                      <div className="space-y-0.5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#072442]/70">
                          Field Data Reliability
                        </div>
                        <div className="text-xl font-black text-[#072442]">99.4% Verified Accuracy</div>
                        <div className="text-[11px] text-[#072442]/60">Algorithmic outlier checks &amp; GPS fences</div>
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                        Verified
                      </span>
                    </div>

                    {/* Metric 2: Yellow Accent Pill */}
                    <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-white flex items-center justify-between hover:border-[#DEA123]/50 transition-colors">
                      <div className="space-y-0.5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#072442]/70">
                          Nationwide Coverage
                        </div>
                        <div className="text-xl font-black text-[#072442]">8 Divisions / 64 Districts</div>
                        <div className="text-[11px] text-[#072442]/60">Permanent regional coordinators</div>
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FFBD2E] border border-[#DEA123] text-[#875210]">
                        Nationwide
                      </span>
                    </div>

                    {/* Metric 3: Red Accent Pill */}
                    <div className="p-3.5 rounded-xl border border-[#E5E7EB] bg-white flex items-center justify-between hover:border-[#E0443E]/50 transition-colors">
                      <div className="space-y-0.5">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#072442]/70">
                          Rigorous Quality Control
                        </div>
                        <div className="text-xl font-black text-[#072442]">100% Dual Audio/GPS Audit</div>
                        <div className="text-[11px] text-[#072442]/60">Zero tolerance for speed-run surveys</div>
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-bold bg-[#FF5F56] border border-[#E0443E] text-[#790A05]">
                        10% Back-Check
                      </span>
                    </div>

                    {/* Summary row */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-lg border border-[#E5E7EB] bg-slate-50/50">
                        <div className="text-[10px] font-mono text-[#072442]/60 uppercase">Studies Completed</div>
                        <div className="text-lg font-black text-[#072442]">250+ Multidisciplinary</div>
                      </div>
                      <div className="p-3 rounded-lg border border-[#E5E7EB] bg-slate-50/50">
                        <div className="text-[10px] font-mono text-[#072442]/60 uppercase">Certified Enumerators</div>
                        <div className="text-lg font-black text-[#072442]">1,200+ Field Agents</div>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === "integrity" && (
                  <div className="space-y-3">
                    <div className="text-xs text-[#072442]/80 leading-relaxed">
                      Every CAPI survey uploaded to our Dhaka operations server undergoes 4-tier automated auditing before
                      data approval:
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg border border-[#E5E7EB] flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#072442]">Speed-Run Detection</div>
                          <div className="text-[11px] text-[#072442]/70">
                            Automatic flag if module duration &lt; 70% threshold
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg border border-[#E5E7EB] flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#072442]">GPS Geofence Validation</div>
                          <div className="text-[11px] text-[#072442]/70">
                            Coordinates matched with pre-mapped enumeration cluster
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg border border-[#E5E7EB] flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#072442]">Randomized Audio Sampling</div>
                          <div className="text-[11px] text-[#072442]/70">
                            10% consent-approved audio clips verified for interview fidelity
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-50 text-[11px] text-[#072442]/70 border border-[#E5E7EB]">
                      Status: <span className="font-semibold text-[#072442]">Central Audit Server Online (Dhaka Banani HQ)</span>
                    </div>
                  </div>
                )}

                {activeTab === "roster" && (
                  <div className="space-y-3">
                    <div className="text-xs text-[#072442]/80 leading-relaxed">
                      Certified regional enumerator squads ready for rapid deployment across all 8 divisions:
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { div: "Dhaka HQ", count: "340 Field Agents", badge: "Hub" },
                        { div: "Chattogram", count: "260 Field Agents", badge: "Coastal/Hill" },
                        { div: "Rajshahi", count: "180 Field Agents", badge: "Agri" },
                        { div: "Khulna", count: "165 Field Agents", badge: "Mangrove" },
                        { div: "Barishal", count: "125 Field Agents", badge: "Riverine" },
                        { div: "Sylhet", count: "115 Field Agents", badge: "Haor" },
                        { div: "Rangpur", count: "145 Field Agents", badge: "North" },
                        { div: "Mymensingh", count: "95 Field Agents", badge: "Central-North" },
                      ].map((item) => (
                        <div key={item.div} className="p-2 rounded-lg border border-[#E5E7EB] bg-slate-50/40">
                          <div className="font-bold text-[#072442] flex items-center justify-between">
                            <span>{item.div}</span>
                            <span className="text-[9px] px-1 py-0.2 rounded bg-white border border-[#E5E7EB] text-[#072442]/70">
                              {item.badge}
                            </span>
                          </div>
                          <div className="text-[11px] text-[#072442]/70 font-mono">{item.count}</div>
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-center text-[#24538E] font-semibold pt-1">
                      72-hour maximum mobilization anywhere in Bangladesh
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Bar */}
              <div className="px-5 py-3 bg-slate-50/80 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <span className="text-[#072442]/70 font-medium">Headquarters: Banani, Dhaka-1213</span>
                <button
                  type="button"
                  onClick={onOpenEstimator}
                  className="font-bold text-[#24538E] hover:underline flex items-center gap-1"
                >
                  Configure Study &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

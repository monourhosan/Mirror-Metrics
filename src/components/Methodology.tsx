"use client";

import React, { useState } from "react";
import { METHODOLOGY_STEPS } from "../data/researchData";
import {
  FileCheck2,
  Smartphone,
  ShieldAlert,
  LineChart,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Layers,
  Radio,
} from "lucide-react";

export default function Methodology() {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Default to Step 3 (Quality Control)

  const stepIcons = [
    <FileCheck2 key="0" className="w-5 h-5 text-[#875210]" />,
    <Smartphone key="1" className="w-5 h-5 text-[#0C4F16]" />,
    <ShieldAlert key="2" className="w-5 h-5 text-[#790A05]" />,
    <LineChart key="3" className="w-5 h-5 text-[#0C4F16]" />,
  ];

  return (
    <section id="methodology" className="py-20 md:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-[#FF5F56] border border-[#E0443E] text-[#790A05] shadow-xs">
            Flagship Quality Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072442] tracking-tight">
            Our 4-Step Methodology &amp; Auditing Protocol
          </h2>
          <p className="text-sm sm:text-base text-[#072442]/75 leading-relaxed">
            Data is only as valuable as the integrity of its collection. We have engineered a 4-tier pipeline
            that guarantees zero-fraud, scientifically valid data capture from rural haor basins to corporate boardrooms.
          </p>
        </div>

        {/* 4-Step Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const isQualityStep = step.isHighlighted;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`cursor-pointer rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden bg-white ${
                  isQualityStep
                    ? "border-[#E0443E] shadow-[0_6px_24px_rgba(255,95,86,0.12)] ring-1 ring-[#E0443E]"
                    : "border-[#E5E7EB] hover:border-[#24538E]/50 shadow-[0_2px_8px_rgba(7,36,66,0.04)]"
                } ${activeStepIndex === idx ? "translate-y-[-2px]" : ""}`}
              >
                <div>
                  {/* macOS Window Top Bar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB] bg-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                      <span className="ml-1.5 font-mono text-[11px] font-bold text-[#072442]/70 uppercase">
                        STEP {step.step}
                      </span>
                    </div>

                    {/* Step Badge */}
                    {isQualityStep ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FF5F56] border border-[#E0443E] text-[#790A05]">
                        {step.badge}
                      </span>
                    ) : (
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          step.badgeStyle === "badge-yellow"
                            ? "bg-[#FFBD2E] border border-[#DEA123] text-[#875210]"
                            : "bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]"
                        }`}
                      >
                        {step.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                          isQualityStep
                            ? "bg-[#FFF1F0] border-[#E0443E]"
                            : "bg-slate-50 border-[#E5E7EB]"
                        }`}
                      >
                        {stepIcons[idx]}
                      </div>
                      <h3 className="font-bold text-base text-[#072442] leading-snug">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#072442]/75 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detailed Points */}
                    <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-start gap-2 text-xs text-[#072442]/85">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isQualityStep ? "text-[#E0443E]" : "text-[#27C93F]"
                            }`}
                          />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50/50 border-t border-[#E5E7EB] text-center">
                  <span className="text-[11px] font-bold text-[#072442]/70">
                    Click to view audit specs &darr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Focus Spotlight for Step 3: Rigorous Quality Control & Auditing */}
        <div className="rounded-2xl border border-[#E0443E] bg-white p-6 md:p-8 shadow-[0_8px_30px_rgba(255,95,86,0.08)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#790A05]">
                  STEP 03 DEEP DIVE // ZERO-FRAUD PROTOCOL
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FF5F56] border border-[#E0443E] text-[#790A05]">
                  100% Guaranteed Dual-Auditing
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#072442] tracking-tight">
                How Mirror Metrics Eliminates Field Enumeration Fraud in Bangladesh
              </h3>
              <p className="text-xs sm:text-sm text-[#072442]/75 max-w-3xl">
                Field research in emerging markets often suffers from phantom respondents, rushed interviews, and curb-stoning.
                Our proprietary Data Quality Unit in Banani, Dhaka deploys a 4-tier verification shield on every single study:
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <div className="px-3 py-2 rounded-xl bg-[#FFF1F0] border border-[#E0443E] text-center">
                <div className="text-xl font-black text-[#790A05]">10%</div>
                <div className="text-[10px] font-bold uppercase text-[#790A05]">Mandatory Back-Checks</div>
              </div>
              <div className="px-3 py-2 rounded-xl bg-[#FFF1F0] border border-[#E0443E] text-center">
                <div className="text-xl font-black text-[#790A05]">0%</div>
                <div className="text-[10px] font-bold uppercase text-[#790A05]">Tolerance for Fraud</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl border border-[#E5E7EB] bg-slate-50/40 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-[#790A05] flex items-center gap-1.5">
                <Radio className="w-3.5 h-3.5 text-[#FF5F56]" />
                1. Silent Audio Audits
              </div>
              <p className="text-xs text-[#072442]/80 leading-relaxed">
                Key question blocks record short ambient audio segments (with consent) to verify whether the enumerator is
                actively probing the respondent in person or fabricating answers.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E7EB] bg-slate-50/40 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-[#790A05] flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#FF5F56]" />
                2. Algorithmic Speed Runs
              </div>
              <p className="text-xs text-[#072442]/80 leading-relaxed">
                Every questionnaire section has millisecond timestamp triggers. If an enumerator completes a 40-minute survey
                in 18 minutes, the submission is automatically quarantined for scrutiny.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E7EB] bg-slate-50/40 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-[#790A05] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#FF5F56]" />
                3. GPS Cluster Geofencing
              </div>
              <p className="text-xs text-[#072442]/80 leading-relaxed">
                Handheld tablets verify longitude/latitude against the designated mouza/ward cluster coordinates. Surveys conducted
                outside the authorized sampling radius are flagged instantly.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[#E5E7EB] bg-slate-50/40 space-y-2">
              <div className="text-xs font-mono font-bold uppercase text-[#790A05] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5F56]" />
                4. Independent Back-Check Teams
              </div>
              <p className="text-xs text-[#072442]/80 leading-relaxed">
                Autonomous supervisory squads (unaffiliated with the primary enumerators) re-contact 10% of respondents in person
                or via CATI phone verify core responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

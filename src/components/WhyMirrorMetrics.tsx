"use client";

import React from "react";
import { WHY_CHOOSE_US } from "../data/researchData";
import {
  Globe,
  Languages,
  ShieldCheck,
  GraduationCap,
  Scale,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface WhyMirrorMetricsProps {
  onOpenEstimator: () => void;
}

export default function WhyMirrorMetrics({ onOpenEstimator }: WhyMirrorMetricsProps) {
  const icons = [
    <Globe key="0" className="w-5 h-5 text-[#0C4F16]" />,
    <Languages key="1" className="w-5 h-5 text-[#875210]" />,
    <ShieldCheck key="2" className="w-5 h-5 text-[#790A05]" />,
    <GraduationCap key="3" className="w-5 h-5 text-[#875210]" />,
    <Scale key="4" className="w-5 h-5 text-[#0C4F16]" />,
    <Cpu key="5" className="w-5 h-5 text-[#790A05]" />,
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-[#FFBD2E] border border-[#DEA123] text-[#875210] shadow-xs">
            Institutional Differentiators
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072442] tracking-tight">
            Why Leading Organizations Trust Mirror Metrics
          </h2>
          <p className="text-sm sm:text-base text-[#072442]/75 leading-relaxed">
            In an era of rapid socioeconomic change and expanding digital consumerism across Bangladesh,
            reliable ground-truth data is the foundation of effective strategy.
          </p>
        </div>

        {/* 6-Card Grid in macOS Window Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WHY_CHOOSE_US.map((item, idx) => {
            const isRed = item.accent === "red";
            const isYellow = item.accent === "yellow";
            const isGreen = item.accent === "green";

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_2px_10px_rgba(7,36,66,0.03)] overflow-hidden flex flex-col justify-between hover:border-[#24538E]/40 transition-all duration-200"
              >
                <div>
                  {/* macOS Window Top Bar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB] bg-white">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                      <span className="ml-1.5 font-mono text-[10px] font-bold text-[#072442]/70 uppercase">
                        DIFF // {item.id.toUpperCase()}
                      </span>
                    </div>

                    {isRed && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FF5F56] border border-[#E0443E] text-[#790A05]">
                        Critical Standard
                      </span>
                    )}
                    {isYellow && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] text-[#875210]">
                        Field Capability
                      </span>
                    )}
                    {isGreen && (
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                        Verified Ready
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        isRed
                          ? "bg-[#FFF1F0] border-[#E0443E]"
                          : isYellow
                          ? "bg-[#FFF9E6] border-[#DEA123]"
                          : "bg-[#EDFCF0] border-[#1AAB29]"
                      }`}
                    >
                      {icons[idx]}
                    </div>

                    <h3 className="font-bold text-lg text-[#072442] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#072442]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50/50 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#072442]/70">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F]" />
                    Full Quality Assurance
                  </span>
                  <span className="font-mono text-[11px]">8 Divisions</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Commitment Banner */}
        <div className="rounded-2xl border border-[#E5E7EB] bg-slate-50/70 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#072442]">
              Need a Rapid Quantitative or Qualitative Assessment in Bangladesh?
            </h4>
            <p className="text-xs sm:text-sm text-[#072442]/75">
              Our central team in Banani, Dhaka mobilizes specialized field teams within 72 hours.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] hover:bg-[#22B839] shadow-xs transition-all"
            >
              <span>Build Scope Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-bold rounded-xl bg-white border border-[#E5E7EB] text-[#072442] hover:border-[#072442] transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

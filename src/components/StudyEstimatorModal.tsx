"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Calculator, CheckCircle2, ArrowRight, ShieldCheck, Users, Clock, MapPin } from "lucide-react";

interface StudyEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScope?: (scopeSummary: {
    division: string;
    methodology: string;
    geography: string;
    sampleSize: string;
    timeline: string;
  }) => void;
}

export default function StudyEstimatorModal({
  isOpen,
  onClose,
  onSelectScope,
}: StudyEstimatorModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const [division, setDivision] = useState<"social" | "market">("social");
  const [methodology, setMethodology] = useState<string>("CAPI Digital Survey");
  const [geography, setGeography] = useState<string>("Nationwide (All 8 Divisions)");
  const [sampleSize, setSampleSize] = useState<string>("2,500 - 5,000");
  const [timeline, setTimeline] = useState<string>("Standard (6 - 8 Weeks)");

  // Handle modal open/close using native showModal() / close()
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Modern Web Guidance: Fallback for browsers that do not yet support closedby="any"
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleDialogClick = (event: MouseEvent) => {
      // If closedBy is natively supported, browser handles light-dismiss
      if ("closedBy" in HTMLDialogElement.prototype) return;

      if (event.target !== dialog) return;

      const rect = dialog.getBoundingClientRect();
      const isDialogContent =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;

      if (!isDialogContent) {
        dialog.close();
        onClose();
      }
    };

    const handleCloseEvent = () => {
      onClose();
    };

    dialog.addEventListener("click", handleDialogClick);
    dialog.addEventListener("close", handleCloseEvent);

    return () => {
      dialog.removeEventListener("click", handleDialogClick);
      dialog.removeEventListener("close", handleCloseEvent);
    };
  }, [onClose]);

  // Dynamic estimations based on selections
  const getEstimatedMetrics = () => {
    let enumerators = "24 - 36 Certified Enumerators";
    let fieldDays = "18 - 24 Days";
    let supervisors = "4 - 6 Quality Supervisors";

    if (sampleSize === "< 1,000") {
      enumerators = "10 - 16 Certified Enumerators";
      fieldDays = "10 - 14 Days";
      supervisors = "2 Quality Supervisors";
    } else if (sampleSize === "1,000 - 2,500") {
      enumerators = "18 - 28 Certified Enumerators";
      fieldDays = "14 - 18 Days";
      supervisors = "3 - 4 Quality Supervisors";
    } else if (sampleSize === "2,500 - 5,000") {
      enumerators = "32 - 48 Certified Enumerators";
      fieldDays = "20 - 28 Days";
      supervisors = "6 - 8 Quality Supervisors";
    } else if (sampleSize === "5,000 - 10,000+") {
      enumerators = "60 - 95 Certified Enumerators";
      fieldDays = "30 - 45 Days";
      supervisors = "10 - 14 Quality Supervisors";
    }

    return { enumerators, fieldDays, supervisors };
  };

  const metrics = getEstimatedMetrics();

  const handleApplyToContact = () => {
    if (onSelectScope) {
      onSelectScope({
        division: division === "social" ? "Social Research" : "Market Research",
        methodology,
        geography,
        sampleSize,
        timeline,
      });
    }
    onClose();

    // Smooth scroll to contact form
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby="dialogTitle"
      className="p-0 rounded-2xl border border-[#E5E7EB] bg-white shadow-2xl max-w-3xl w-[94vw] text-[#072442] backdrop:bg-[#072442]/50 backdrop:backdrop-blur-sm m-auto"
    >
      <div className="flex flex-col max-h-[90vh]">
        {/* Modal Window Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] bg-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#24538E]" />
              <h2 id="dialogTitle" className="text-base font-bold text-[#072442] tracking-tight">
                Commission a Study // Scope & Deployment Estimator
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-[#072442] hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-xs text-[#072442]/75 leading-relaxed">
            Configure your research requirements to generate preliminary field squad allocations, timeline models,
            and data quality requirements for deployment anywhere across Bangladesh.
          </p>

          {/* Step 1: Select Research Division */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-2">
              1. Primary Research Discipline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDivision("social")}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  division === "social"
                    ? "border-[#DEA123] bg-[#FFBD2E]/10 ring-1 ring-[#DEA123]"
                    : "border-[#E5E7EB] hover:border-[#DEA123]/50 bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-[#072442]">Social Research</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] text-[#875210]">
                    Public & Non-Profit
                  </span>
                </div>
                <p className="text-xs text-[#072442]/70">
                  Baselines, public health, climate resilience, NGO impact evaluations & policy studies.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setDivision("market")}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  division === "market"
                    ? "border-[#1AAB29] bg-[#27C93F]/10 ring-1 ring-[#1AAB29]"
                    : "border-[#E5E7EB] hover:border-[#1AAB29]/50 bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-[#072442]">Market Research</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                    Commercial Intelligence
                  </span>
                </div>
                <p className="text-xs text-[#072442]/70">
                  Brand tracking, retail audits, consumer testing, CSAT/NPS & market entry feasibility.
                </p>
              </button>
            </div>
          </div>

          {/* Step 2: Methodology */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-2">
              2. Core Field Methodology
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                "CAPI Digital Survey",
                "CATI Phone Survey",
                "Qualitative FGDs & KIIs",
                "Retail & Trade Census",
                "Central Location Test",
                "Experimental RCT / Endline",
                "Mystery Shopping",
                "Mixed-Methods Synthesis",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setMethodology(item)}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all ${
                    methodology === item
                      ? "border-[#072442] bg-[#072442] text-white"
                      : "border-[#E5E7EB] text-[#072442] hover:border-[#072442]/40 bg-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Geographic Coverage & Sample Size */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-2">
                3. Geographic Scope
              </label>
              <select
                value={geography}
                onChange={(e) => setGeography(e.target.value)}
                className="w-full text-xs font-medium p-2.5 rounded-lg border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E]"
              >
                <option value="Nationwide (All 8 Divisions)">Nationwide (All 8 Divisions / 64 Districts)</option>
                <option value="Dhaka Metropolitan & Peri-Urban">Dhaka Metropolitan & Peri-Urban Zone</option>
                <option value="Northern Belt (Rajshahi & Rangpur)">Northern Agrarian Belt (Rajshahi & Rangpur)</option>
                <option value="Southern Coastal & Riverine (Khulna & Barishal)">
                  Southern Coastal & Riverine (Khulna & Barishal)
                </option>
                <option value="Southeastern & CHT (Chattogram & Cox's Bazar)">
                  Southeastern Hub & Refugee Areas (Chattogram/Cox&apos;s Bazar)
                </option>
                <option value="Northeastern Haor Basin (Sylhet & Mymensingh)">
                  Northeastern Haor Basin (Sylhet & Mymensingh)
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-2">
                4. Target Sample Size
              </label>
              <select
                value={sampleSize}
                onChange={(e) => setSampleSize(e.target.value)}
                className="w-full text-xs font-medium p-2.5 rounded-lg border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E]"
              >
                <option value="< 1,000">&lt; 1,000 Respondents / Outlets</option>
                <option value="1,000 - 2,500">1,000 - 2,500 Respondents / Outlets</option>
                <option value="2,500 - 5,000">2,500 - 5,000 Respondents / Outlets (Recommended)</option>
                <option value="5,000 - 10,000+">5,000 - 10,000+ Large-Scale Census</option>
              </select>
            </div>
          </div>

          {/* Step 4: Timeline */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-2">
              5. Desired Timeline
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["Rapid (2 - 4 Weeks)", "Standard (6 - 8 Weeks)", "Multi-Wave Longitudinal"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeline(t)}
                  className={`p-2 text-xs font-medium rounded-lg border text-center transition-all ${
                    timeline === t
                      ? "border-[#24538E] bg-[#24538E]/10 text-[#072442] font-semibold"
                      : "border-[#E5E7EB] text-[#072442]/80 hover:border-[#24538E]/50 bg-white"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Instant Estimation Matrix Card */}
          <div className="p-4 rounded-xl border border-[#E5E7EB] bg-slate-50/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#072442] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#27C93F]" />
                Mirror Metrics Field Deployment Architecture
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                Guaranteed Dual-Audit Ready
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB]">
                <div className="flex items-center gap-1.5 text-xs text-[#072442]/70 mb-1">
                  <Users className="w-3.5 h-3.5 text-[#24538E]" />
                  <span>Field Force Required</span>
                </div>
                <div className="text-xs font-bold text-[#072442]">{metrics.enumerators}</div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB]">
                <div className="flex items-center gap-1.5 text-xs text-[#072442]/70 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#FFBD2E]" />
                  <span>Estimated Fieldwork</span>
                </div>
                <div className="text-xs font-bold text-[#072442]">{metrics.fieldDays}</div>
              </div>

              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB]">
                <div className="flex items-center gap-1.5 text-xs text-[#072442]/70 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5F56]" />
                  <span>Supervisory Cadre</span>
                </div>
                <div className="text-xs font-bold text-[#072442]">{metrics.supervisors}</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-[11px] text-[#072442]/80 pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F]" /> 10% Back-Check Audit
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F]" /> GPS Coordinate Geo-tagging
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F]" /> Silent Audio Spot-Checks
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#27C93F]" /> CAPI Speed-run Flagging
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-[#E5E7EB] bg-white">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold rounded-lg border border-[#E5E7EB] text-[#072442] hover:bg-slate-50 transition-colors"
          >
            Dismiss
          </button>

          <button
            type="button"
            onClick={handleApplyToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] hover:bg-[#22B839] shadow-xs transition-all"
          >
            Apply Scope & Request Study Proposal
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </dialog>
  );
}

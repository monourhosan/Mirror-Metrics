"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from "lucide-react";

interface ContactSectionProps {
  prefilledScope?: {
    division: string;
    methodology: string;
    geography: string;
    sampleSize: string;
    timeline: string;
  } | null;
}

export default function ContactSection({ prefilledScope }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    researchType: prefilledScope?.division || "Social Research",
    scopeDetails: prefilledScope
      ? `Methodology: ${prefilledScope.methodology} | Geography: ${prefilledScope.geography} | Sample: ${prefilledScope.sampleSize} | Timeline: ${prefilledScope.timeline}`
      : "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update scope details if prefilledScope changes
  React.useEffect(() => {
    if (prefilledScope) {
      setFormData((prev) => ({
        ...prev,
        researchType: prefilledScope.division,
        scopeDetails: `Estimated: ${prefilledScope.division} | ${prefilledScope.methodology} | ${prefilledScope.geography} | ${prefilledScope.sampleSize} | ${prefilledScope.timeline}`,
      }));
    }
  }, [prefilledScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] shadow-xs">
            Dhaka Corporate Headquarters
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#072442] tracking-tight">
            Commission a Study or Inquire with Our Team
          </h2>
          <p className="text-sm sm:text-base text-[#072442]/75 leading-relaxed">
            Whether preparing an international development grant RFP, designing a national baseline survey,
            or commissioning consumer intelligence in Dhaka, our team responds within 24 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Dhaka HQ Details & Operational Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_16px_rgba(7,36,66,0.04)] overflow-hidden">
              {/* macOS Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E7EB] bg-white">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                  <span className="ml-2 font-mono text-[11px] font-bold text-[#072442]/70 uppercase">
                    HQ DIRECTORY // DHAKA
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16]">
                  Active Desk
                </span>
              </div>

              {/* Office Details */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#072442]">Mirror Metrics RESEARCH LTD</h3>
                  <p className="text-xs text-[#24538E] font-mono mt-0.5 font-semibold">
                    Registration No. C-184920 // Joint Stock Companies &amp; Firms, Dhaka
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-[#E5E7EB] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#24538E]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#072442]">Corporate Headquarters</div>
                      <div className="text-[#072442]/75 leading-relaxed">
                        House 42, Road 11, Block D, Banani
                        <br />
                        Dhaka-1213, Bangladesh
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-[#E5E7EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#FFBD2E]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#072442]">Official Correspondence</div>
                      <div className="text-[#072442]/75">
                        <a href="mailto:inquiry@mirrormetrics.org" className="hover:text-[#24538E] underline">
                          inquiry@mirrormetrics.org
                        </a>
                        <br />
                        <a href="mailto:proposals@mirrormetrics.org" className="hover:text-[#24538E] underline">
                          proposals@mirrormetrics.org
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-[#E5E7EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#27C93F]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#072442]">Direct Lines &amp; Field Coordination</div>
                      <div className="text-[#072442]/75 font-mono">
                        <span>+880 2-9884210 (Direct Office)</span>
                        <br />
                        <span>+880 1711-234567 (Field Operations Cell)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-[#E5E7EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#FF5F56]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#072442]">Office Working Hours</div>
                      <div className="text-[#072442]/75">
                        Sunday – Thursday: 09:00 AM – 06:00 PM (BST / UTC+6)
                        <br />
                        <span className="text-[#27C93F] font-semibold">
                          Field Enumerator Dispatch active 7 days/week
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Security Guarantee Pill */}
                <div className="p-3.5 rounded-xl border border-[#1AAB29] bg-[#EDFCF0] flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#0C4F16] shrink-0 mt-0.5" />
                  <div className="text-[11px] text-[#0C4F16] leading-relaxed">
                    <strong>Institutional NDA &amp; Data Ethics:</strong> All research protocols conform to the ESOMAR
                    code of conduct, Bangladesh Statistics Act 2013, and strict confidentiality protections.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_4px_16px_rgba(7,36,66,0.04)] overflow-hidden">
              {/* macOS Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#E5E7EB] bg-white">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block" />
                  <span className="ml-2 font-mono text-[11px] font-bold text-[#072442]/70 uppercase">
                    PROPOSAL DISPATCH // SECURE ENCRYPTED INQUIRY
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#072442]/60">EST. RESPONSE: &lt;24H</span>
              </div>

              {submitted ? (
                <div className="p-8 md:p-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#EDFCF0] border border-[#1AAB29] flex items-center justify-center mx-auto text-[#0C4F16]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#072442]">Study Inquiry Received</h3>
                  <p className="text-xs sm:text-sm text-[#072442]/75 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <strong>Mirror Metrics RESEARCH LTD</strong>. Your inquiry has been routed
                    to our Senior Field Operations Director in Dhaka. A technical proposal and preliminary methodology note will
                    be delivered to your email shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          organization: "",
                          email: "",
                          phone: "",
                          researchType: "Social Research",
                          scopeDetails: "",
                          message: "",
                        });
                      }}
                      className="px-4 py-2 text-xs font-bold rounded-lg border border-[#E5E7EB] text-[#072442] hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
                  {prefilledScope && (
                    <div className="p-3 rounded-xl border border-[#DEA123] bg-[#FFBD2E]/10 flex items-center justify-between text-xs text-[#875210]">
                      <span className="font-semibold flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Scope imported from Estimator ({prefilledScope.division})
                      </span>
                      <span className="font-mono text-[10px]">Applied</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Tanvir Hossain"
                        className="w-full text-xs p-3 rounded-xl border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E] focus:ring-1 focus:ring-[#24538E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-1.5">
                        Organization / Agency *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. USAID / BRAC / Marico Bangladesh"
                        className="w-full text-xs p-3 rounded-xl border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E] focus:ring-1 focus:ring-[#24538E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. t.hossain@organization.org"
                        className="w-full text-xs p-3 rounded-xl border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E] focus:ring-1 focus:ring-[#24538E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-1.5">
                        Contact Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 17XXXXXXXX"
                        className="w-full text-xs p-3 rounded-xl border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E] focus:ring-1 focus:ring-[#24538E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-1.5">
                        Primary Research Type *
                      </label>
                      <select
                        value={formData.researchType}
                        onChange={(e) => setFormData({ ...formData, researchType: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E] focus:ring-1 focus:ring-[#24538E]"
                      >
                        <option value="Social Research">Social Research (Baseline / Midline / Endline)</option>
                        <option value="Market Research">Market Research (Consumer / Brand / Retail)</option>
                        <option value="Public Health & Nutrition">Public Health &amp; Nutrition Evaluation</option>
                        <option value="Climate Resilience & DRR">Climate Resilience &amp; DRR Assessment</option>
                        <option value="Qualitative Focus Groups">Qualitative Deep-Dive (FGDs &amp; KIIs)</option>
                        <option value="Data Auditing & Quality Verification">
                          Third-Party Data Auditing &amp; Back-Checks
                        </option>
                        <option value="Strategic Research Consultancy">Strategic Research Consultancy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-1.5">
                        Scope Parameters / Target Divisions
                      </label>
                      <input
                        type="text"
                        value={formData.scopeDetails}
                        onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                        placeholder="e.g. Nationwide 8 Divisions, N=3,500, CAPI"
                        className="w-full text-xs p-3 rounded-xl border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E] focus:ring-1 focus:ring-[#24538E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#072442]/80 mb-1.5">
                      Project Description / Scope of Work / RFP Notes *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your research objectives, expected timeline, target respondent profiles, and any specific sampling requirements..."
                      className="w-full text-xs p-3 rounded-xl border border-[#E5E7EB] bg-white text-[#072442] focus:outline-none focus:border-[#24538E] focus:ring-1 focus:ring-[#24538E] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[11px] text-[#072442]/70">
                      <span className="w-2 h-2 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                      <span>Encrypted SSL Transmission • Dhaka Banani Operations Center</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-[#27C93F] border border-[#1AAB29] text-[#0C4F16] hover:bg-[#22B839] shadow-xs transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Proposal Request</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

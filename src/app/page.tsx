"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CoreDivisions from "../components/CoreDivisions";
import Methodology from "../components/Methodology";
import NationwideCoverage from "../components/NationwideCoverage";
import CaseStudies from "../components/CaseStudies";
import WhyMirrorMetrics from "../components/WhyMirrorMetrics";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StudyEstimatorModal from "../components/StudyEstimatorModal";

export default function Home() {
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [prefilledScope, setPrefilledScope] = useState<{
    division: string;
    methodology: string;
    geography: string;
    sampleSize: string;
    timeline: string;
  } | null>(null);

  const handleOpenEstimator = () => {
    setIsEstimatorOpen(true);
  };

  const handleCloseEstimator = () => {
    setIsEstimatorOpen(false);
  };

  const handleSelectScope = (scopeSummary: {
    division: string;
    methodology: string;
    geography: string;
    sampleSize: string;
    timeline: string;
  }) => {
    setPrefilledScope(scopeSummary);
  };

  return (
    <div className="min-h-screen bg-white text-[#072442] selection:bg-[#FFBD2E]/30 selection:text-[#072442]">
      {/* Sticky Minimal Header */}
      <Header onOpenEstimator={handleOpenEstimator} />

      <main className="w-full">
        {/* Hero Section */}
        <Hero onOpenEstimator={handleOpenEstimator} />

        {/* Core Practice Areas (Two-Column Interactive Grid) */}
        <CoreDivisions onOpenEstimator={handleOpenEstimator} />

        {/* Research Methodology & Quality Auditing (4-Step Workflow) */}
        <Methodology />

        {/* Nationwide Reach (Interactive 8-Division Explorer) */}
        <NationwideCoverage />

        {/* Selected Case Studies & Impact Metrics */}
        <CaseStudies onOpenEstimator={handleOpenEstimator} />

        {/* Why Mirror Metrics (Key Differentiators) */}
        <WhyMirrorMetrics onOpenEstimator={handleOpenEstimator} />

        {/* Contact & Dhaka Headquarters */}
        <ContactSection prefilledScope={prefilledScope} />
      </main>

      {/* Corporate Minimal Footer */}
      <Footer />

      {/* Interactive "Commission a Study" Estimator & Scope Builder Modal */}
      <StudyEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={handleCloseEstimator}
        onSelectScope={handleSelectScope}
      />
    </div>
  );
}

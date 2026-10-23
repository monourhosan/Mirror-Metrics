import React from "react";

interface WindowCardProps {
  title?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  headerClassName?: string;
}

export default function WindowCard({
  title,
  badge,
  children,
  className = "",
  headerClassName = "",
}: WindowCardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#E5E7EB] shadow-[0_2px_8px_rgba(7,36,66,0.04)] overflow-hidden transition-all duration-200 hover:shadow-[0_6px_20px_rgba(7,36,66,0.07)] ${className}`}
    >
      {/* macOS-style Window Header */}
      <div
        className={`flex items-center justify-between px-4 py-3 border-b border-[#E5E7EB] bg-white ${headerClassName}`}
      >
        <div className="flex items-center gap-2">
          {/* macOS window dots with strict 1px borders */}
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] inline-block shrink-0" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] inline-block shrink-0" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] inline-block shrink-0" />
          {title && (
            <span className="ml-2 font-mono text-xs uppercase tracking-wider text-[#072442]/70 font-semibold select-none">
              {title}
            </span>
          )}
        </div>
        {badge && <div className="shrink-0">{badge}</div>}
      </div>

      {/* Card Content on Pure White */}
      <div className="p-5 md:p-6 bg-white">{children}</div>
    </div>
  );
}

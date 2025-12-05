"use client";

import React from "react";

interface TabsProps {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function Tabs({ activeIndex, setActiveIndex }: TabsProps) {
  const tabNames = ["Home", "AI Defect Detect", "Internship", "Ask AI About Me", "Auto Clicker"];

  return (
    <div className="tabs">
      {tabNames.map((label, i) => (
        <button
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`tab ${activeIndex === i ? "active-tab" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
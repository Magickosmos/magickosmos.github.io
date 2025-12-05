"use client";
import React from "react";

export default function Navbar() {
  const links = ["Home", "About", "Experience", "Projects", "Ask AI", "Auto Clicker"];
  return (
    <nav className="fixed w-full bg-gray-900 text-white z-50 shadow-md">
      <ul className="flex justify-center space-x-6 py-4">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.replace(/\s/g, "").toLowerCase()}`} className="hover:text-teal-400 transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
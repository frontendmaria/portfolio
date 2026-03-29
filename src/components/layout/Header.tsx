"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

import { scrollToSection } from "@/lib/scroll";
import { NavLogo } from "../Navbar/NavLogo";
import { DesktopNavbar } from "../Navbar/DestktopNavbar";
import { MobileToggle } from "../Navbar/MobileToggle";
import { MobileNavbar } from "../Navbar/MobileNavbar";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
      <NavLogo onClick={() => handleNavigate("home")} />

      <DesktopNavbar
        onNavigate={(id) => {
          scrollToSection(id);
          setMobileOpen(false);
        }}
      />

      <MobileToggle
        open={mobileOpen}
        onToggle={() => setMobileOpen((prev) => !prev)}
      />

      <MobileNavbar open={mobileOpen} onNavigate={handleNavigate} />
    </header>
  );
}

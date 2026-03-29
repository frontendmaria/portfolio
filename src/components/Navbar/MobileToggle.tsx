"use client";

import { FiMenu,FiX } from "react-icons/fi";
interface MobileToggleProps {
  open: boolean;
  onToggle: () => void;
}

export function MobileToggle({ open, onToggle }: MobileToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle menu"
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="md:hidden inline-flex items-center justify-center rounded-md p-2
                 text-gray-300 hover:text-purple-400
                 transition-colors duration-200
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50"
    >
      {open ? <FiX size={22} /> : <FiMenu size={22} />}
    </button>
  );
}

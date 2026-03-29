"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "./constants";


interface MobileNavbarProps {
  open: boolean;
  onNavigate: (id: string) => void;
}

export function MobileNavbar({ open, onNavigate }: MobileNavbarProps) {
  if (!open) return null;

  return (
    <nav
    className={cn(
      "fixed top-16 left-0 w-full z-40 md:hidden",
      "bg-gray-900/95 backdrop-blur-md border-t border-purple-500/20",
      open ? "block" : "hidden"
    )}
  >
      <ul className="px-4 py-4 flex flex-col gap-2">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              onClick={(e) => {
                if (item.href.startsWith("#")) {
                  e.preventDefault(); 
                  onNavigate(item.id);
                }
              }}
              className={cn(
                "block w-full px-3 py-2.5 rounded-lg text-sm font-medium",
                "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5",
                "transition-all duration-300"
              )}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
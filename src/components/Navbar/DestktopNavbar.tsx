"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "./constants";

interface DesktopNavbarProps {
  onNavigate: (id: string) => void;
}

export function DesktopNavbar({ onNavigate }: DesktopNavbarProps) {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <NavigationMenuItem key={item.id}>
            <NavigationMenuLink asChild>
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
                  "text-gray-300 hover:text-purple-400 text-md",
                  "transform transition-transform duration-200 ease-out",
                  "hover:scale-[1.1]"
                )}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
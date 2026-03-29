"use client";
 
import { motion } from "framer-motion";
import type { MouseEvent } from "react";
 
interface Props {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  label?: string;
}
 
export function NavLogo({ onClick, label = "<Dev/>" }: Props) {
  return (
    <motion.button
      onClick={onClick}
      aria-label="Scroll to top"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent"
    >
      {label}
    </motion.button>
  );
}
 
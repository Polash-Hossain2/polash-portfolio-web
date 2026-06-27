"use client";

import { motion } from "framer-motion";
import { BiSolidZap } from "react-icons/bi";

export default function Bounce() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute -left-4 top-[-14px] z-15 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-cyan-500"
    >
      
      
      <BiSolidZap className="text-white text-lg" />
    </motion.div>
  );
}
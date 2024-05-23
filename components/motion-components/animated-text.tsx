"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { moveIn } from "./variants";

interface AnimateTextProps {
  text: string;
  className?: string;
}

export function AnimateText({ text, className }: Readonly<AnimateTextProps>) {
  const words = text.split(" ");
  return (
    <motion.h2
      className={cn(
        "overflow-hidden flex flex-wrap items-center justify-center p-1",
        className
      )}
      transition={{
        staggerChildren: 0.1,
        ease: "backIn",
      }}
      initial="initial"
      animate="animate"
    >
      {words.map((w) => (
        <motion.div className="ml-2.5" variants={moveIn} key={w}>
          {w}
        </motion.div>
      ))}
    </motion.h2>
  );
}

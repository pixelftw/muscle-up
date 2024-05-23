"use client";
import { motion } from "framer-motion";
import { MotionProps } from "./variants";

interface StaggerChildrenProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerChildren({
  children,
  className,
  animate,
  initial,
  whileInView,
}: Readonly<StaggerChildrenProps>) {
  return (
    <motion.div
      transition={{ staggerChildren: 0.15 }}
      animate={animate}
      initial={initial}
      whileInView={whileInView}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";
import { motion } from "framer-motion";
import { MotionProps, moveIn } from "./variants";

interface MoveInProps extends MotionProps {
  children: React.ReactNode;
}

export function MoveIn({
  children,
  initial,
  animate,
  whileInView,
}: Readonly<MoveInProps>) {
  return (
    <motion.div
      variants={moveIn}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

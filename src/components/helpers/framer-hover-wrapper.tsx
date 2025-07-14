import * as motion from "framer-motion/client";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}
export default function FramerHoverWrapper({ className, children }: Props) {
  return (
    <motion.div className={className} whileHover={{ scale: 1.02 }}>
      {children}
    </motion.div>
  );
}

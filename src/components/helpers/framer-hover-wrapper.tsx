import * as motion from "framer-motion/client";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function FramerHoverWrapper({ children }: Props) {
  return <motion.div whileHover={{ scale: 1.02 }}>{children}</motion.div>;
}

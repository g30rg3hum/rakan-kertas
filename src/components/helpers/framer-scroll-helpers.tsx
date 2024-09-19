import * as motion from "framer-motion/client";

export function scrollBaseVariants(
  additionalOffscreenStyles = {},
  additionalOnscreenStyles = {}
) {
  return {
    offscreen: {
      opacity: 0,
      ...additionalOffscreenStyles,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 5,
      },
      ...additionalOnscreenStyles,
    },
  };
}

interface FadeInScrollProps {
  children: React.ReactNode;
}

export function FadeInScroll({ children }: FadeInScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.5 }}
    >
      {children}
    </motion.div>
  );
}

interface AnimateScrollWrapperProps {
  children: React.ReactNode;
}

export function AnimateScrollWrapper({ children }: AnimateScrollWrapperProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.05 }}
      transition={{ staggerChildren: 0.75 }}
    >
      {children}
    </motion.div>
  );
}

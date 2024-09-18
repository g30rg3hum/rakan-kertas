import * as motion from "framer-motion/client";

interface Props {
  children: React.ReactNode;
}

export default function FadeInScroll({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

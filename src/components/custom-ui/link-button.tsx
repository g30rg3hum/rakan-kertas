import Link from "next/link";
import { buttonVariants } from "../ui/button";
import * as motion from "framer-motion/client";

interface Props {
  href: string;
  variant: "default" | "secondary" | "link";
  xPadding?: number;
  yPadding?: number;
  text: string;
}

export default function LinkButton({
  href,
  variant,
  xPadding = 6,
  yPadding = 0.25,
  text,
}: Props) {
  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={buttonVariants({ variant })}
        style={{ padding: `${yPadding}rem ${xPadding}rem` }}
      >
        {text}
      </Link>
    </motion.button>
  );
}

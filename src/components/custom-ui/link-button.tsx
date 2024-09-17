import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import * as motion from "framer-motion/client";

interface Props {
  href: string;
  variant: "default" | "secondary";
  xPadding?: number;
  yPadding?: number;
  text: string;
}

export default function LinkButton({
  href,
  variant,
  xPadding = 14,
  yPadding = 1,
  text,
}: Props) {
  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          buttonVariants({ variant }),
          `px-${xPadding} py-${yPadding}`
        )}
      >
        {text}
      </Link>
    </motion.button>
  );
}

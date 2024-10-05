"use client";

import {
  AnimateScrollWrapper,
  scrollBaseVariants as baseVariants,
} from "@/components/helpers/framer-scroll-helpers";
import { useState } from "react";
import * as motion from "framer-motion/client";

const materials = [
  "Mixed Colors",
  "Carton Box",
  "Old Newspaper",
  "Black And White",
  "All White",
  "Aluminum",
  "Metal",
  "Plastics",
];

export default function MaterialsSection() {
  const [currentMaterial, setCurrentMaterial] = useState("Mixed Colors");

  return (
    <AnimateScrollWrapper>
      <div className="px-6 lg:px-12 py-16 background-texture bg-white flex flex-col lg:flex-row items-center justify-center gap-12">
        <motion.div variants={baseVariants({ x: -10 }, { x: 0 })}>
          <div>
            <h2 className="font-bold text-4xl lg:text-5xl mb-5">
              Materials we collect
            </h2>
            <ul className="grid grid-cols-2 gap-x-1 w-full max-w-sm list-disc list-inside">
              {materials.map((material) => (
                <li
                  key={material}
                  className={`hover:cursor-pointer hover:underline w-max ${
                    currentMaterial === material ? "text-primary" : "text-black"
                  }`}
                  onClick={() => setCurrentMaterial(material)}
                >
                  {material}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={baseVariants({ x: 10 }, { x: 0 })}
          className="h-80 w-full lg:max-w-xl bg-center bg-cover rounded-lg shadow-md border border-black"
          style={{
            backgroundImage: `url("/images/materials/${currentMaterial.replaceAll(
              " ",
              ""
            )}.jpg")`,
          }}
        ></motion.div>
      </div>
    </AnimateScrollWrapper>
  );
}

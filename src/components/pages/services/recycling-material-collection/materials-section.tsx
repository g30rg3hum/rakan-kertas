"use client";

import {
  AnimateScrollWrapper,
  scrollBaseVariants as baseVariants,
} from "@/components/helpers/framer-scroll-helpers";
import { useState } from "react";
import * as motion from "framer-motion/client";
import { useLanguage } from "@/components/language/LanguageContext";

export default function MaterialsSection() {
  const [currentMaterial, setCurrentMaterial] = useState("Mixed Colors");
  const language = useLanguage().language;

  const materialsEnglish = [
    "Mixed Colors",
    "Carton Box",
    "Old Newspaper",
    "Black And White",
    "All White",
    "Aluminum",
    "Metal",
    "Plastics",
  ];
  const materialsTranslated =
    language === "en"
      ? [
          "Mixed Colors",
          "Carton Box",
          "Old Newspaper",
          "Black And White",
          "All White",
          "Aluminum",
          "Metal",
          "Plastics",
        ]
      : language === "ch"
      ? ["混合颜色", "纸箱", "旧报纸", "黑白", "全白", "铝", "金属", "塑料"]
      : [
          "Warna Campuran",
          "Kotak Kertas",
          "Akhbar Lama",
          "Hitam dan Putih",
          "Semua Putih",
          "Aluminium",
          "Logam",
          "Plastik",
        ];

  return (
    <AnimateScrollWrapper>
      <div className="px-6 lg:px-12 py-16 background-texture bg-white flex flex-col lg:flex-row items-center justify-center gap-12">
        <motion.div variants={baseVariants({ x: -10 }, { x: 0 })}>
          <div className="w-max">
            <h2 className="font-bold text-4xl lg:text-5xl mb-5 max-w-md w-full text-center lg:text-left">
              {language === "en"
                ? "Materials we collect"
                : language === "ch"
                ? "我们收集的材料"
                : "Bahan yang kami kumpulkan"}
            </h2>
            <ul className="grid grid-cols-2 gap-x-1 w-full max-w-sm list-disc list-inside">
              {materialsTranslated.map((material, index) => (
                <li
                  key={index}
                  className={`hover:cursor-pointer hover:underline w-max ${
                    currentMaterial === materialsEnglish[index]
                      ? "text-primary"
                      : "text-black"
                  }`}
                  onClick={() => setCurrentMaterial(materialsEnglish[index])}
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

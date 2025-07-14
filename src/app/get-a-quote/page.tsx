"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailForm } from "./components/email-form";
import {
  AnimateScrollWrapper,
  scrollBaseVariants as baseVariants,
} from "@/components/helpers/framer-scroll-helpers";
import * as motion from "framer-motion/client";
import { useLanguage } from "@/components/language/LanguageContext";

// const center: Position = { lat: 5.418588619577099, lng: 100.38607336141544 };

// const markers: MarkerType[] = [
//   {
//     position: { lat: 5.418619138014335, lng: 100.38474609406381 },
//     title: "Main office",
//   },
//   {
//     position: { lat: 5.362658636259797, lng: 100.41593739459336 },
//     title: "Second office",
//   },
//   {
//     position: { lat: 5.300114220855713, lng: 100.28693110240704 },
//     title: "LBS Industries office",
//   },
// ];

export default function GetAQuote() {
  const language = useLanguage().language;

  return (
    <>
      <AnimateScrollWrapper>
        <div
          className="px-5 flex flex-col md:items-center justify-center gap-5 bg-cover"
          style={{ backgroundImage: "url('/images/darkenedgreenery.png')" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-[9rem] mb-16">
            <motion.div
              variants={baseVariants(
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0 }
              )}
              className="w-full lg:max-w-xl"
            >
              <Card className="p-4 h-full">
                <CardHeader>
                  <CardTitle className="font-bold text-3xl">
                    {language === "en"
                      ? "Write us an email!"
                      : language === "ch"
                      ? "给我们写封电子邮件！"
                      : "Tulis e-mel kepada kami!"}{" "}
                    💬
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EmailForm />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={baseVariants(
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0 }
              )}
              className="w-full lg:max-w-xl lg:h-[510px]"
            >
              <Card className="p-4 h-full lg:pt-16 mb-1">
                <CardHeader>
                  <CardTitle className="font-bold text-3xl">
                    {language === "en"
                      ? "Or find us directly!"
                      : language === "ch"
                      ? "或者直接找到我们!"
                      : "Atau cari kami terus!"}{" "}
                    📌
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    <span className="font-bold">
                      {language === "en"
                        ? "Main office"
                        : language === "ch"
                        ? "总办事处"
                        : "Pejabat utama"}
                    </span>{" "}
                    Lorong Mak Mandin 4, Kawasan Perindustrian Mak Mandin, 13400
                    Butterworth, Pulau Pinang
                  </p>
                  <p>
                    <span className="font-bold">
                      {language === "en"
                        ? "Second office:"
                        : language === "cn"
                        ? "第二办公室"
                        : "Pejabat Kedua"}
                    </span>{" "}
                    No. 15 Jalan Sega Jaya 1, Taman Perindustrian Saga Jaya
                    13600 Perai, Pulau Pinang
                  </p>
                  <p>
                    <span className="font-bold">LBS Industries office:</span>{" "}
                    27, Lintang Bayan Lepas 6, Bayan Lepas Free Industrial Zone
                    Phase 4, 11900 Bayan Lepas, Pulau Pinang
                  </p>
                  <p>
                    <span className="font-bold">
                      {language === "en"
                        ? "Email"
                        : language === "ch"
                        ? "电子邮件"
                        : "E-mel"}
                    </span>
                    : rakankertas2@gmail.com
                  </p>
                  <p>
                    <span className="font-bold">
                      {language === "en"
                        ? "Phone"
                        : language === "ch"
                        ? "电话"
                        : "Telefon"}
                    </span>
                    : 04-3232273 / 04-6465573
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimateScrollWrapper>
    </>
  );
}

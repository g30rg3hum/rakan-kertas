import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailForm } from "./components/email-form";
import {
  AnimateScrollWrapper,
  scrollBaseVariants as baseVariants,
} from "@/components/helpers/framer-scroll-helpers";
import * as motion from "framer-motion/client";

export default function GetAQuote() {
  return (
    <>
      <AnimateScrollWrapper>
        <div
          className="px-5 lg:h-screen flex flex-col lg:flex-row md:items-center justify-center gap-5 bg-cover bg-opacity-10"
          style={{ backgroundImage: "url('/images/forest.png')" }}
        >
          <motion.div
            variants={baseVariants({ opacity: 0, y: 20 }, { opacity: 1, y: 0 })}
            className="w-full lg:max-w-xl mt-28 lg:mt-0"
          >
            <Card className="p-4 h-full">
              <CardHeader>
                <CardTitle className="font-bold text-3xl">
                  Write us an email! 💬
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EmailForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={baseVariants({ opacity: 0, y: 20 }, { opacity: 1, y: 0 })}
            className="mb-8 lg:mb-0 w-full lg:max-w-xl lg:h-[510px]"
          >
            <Card className="p-4 h-full lg:pt-16">
              <CardHeader>
                <CardTitle className="font-bold text-3xl">
                  Or find us directly! 📌
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  <span className="font-bold">Main office:</span> Lorong Mak
                  Mandin 4, Kawasan Perindustrian Mak Mandin, 13400 Butterworth,
                  Pulau Pinang
                </p>
                <p>
                  <span className="font-bold">Second office:</span> No. 15 Jalan
                  Sega Jaya 1, Taman Perindustrian Saga Jaya 13600 Perai, Pulau
                  Pinang
                </p>
                <p>
                  <span className="font-bold">LBS Industries office:</span> 27,
                  Lintang Bayan Lepas 6, Bayan Lepas Free Industrial Zone Phase
                  4, 11900 Bayan Lepas, Pulau Pinang
                </p>
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  rakankertas2@gmail.com
                </p>
                <p>
                  <span className="font-bold">Phone:</span> 04-3232273 /
                  04-6465573
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </AnimateScrollWrapper>
    </>
  );
}

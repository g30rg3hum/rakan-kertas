import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailForm } from "./components/email-form";
import {
  AnimateScrollWrapper,
  scrollBaseVariants as baseVariants,
} from "@/components/helpers/framer-scroll-helpers";
import * as motion from "framer-motion/client";
import GoogleMapComponent, {
  Position,
  MarkerType,
} from "@/components/custom-ui/google-map";

const center: Position = { lat: 5.418588619577099, lng: 100.38607336141544 };

const markers: MarkerType[] = [
  {
    position: { lat: 5.418588619577099, lng: 100.38607336141544 },
    title: "Main office",
  },
  {
    position: { lat: 5.357390934012585, lng: 100.41453002503266 },
    title: "Second office",
  },
  {
    position: { lat: 5.300321859253804, lng: 100.28687140615803 },
    title: "LBS Industries office",
  },
];

export default function GetAQuote() {
  return (
    <>
      <AnimateScrollWrapper>
        <div
          className="px-5 flex flex-col md:items-center justify-center gap-5 bg-cover"
          style={{ backgroundImage: "url('/images/forest.png')" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-[7.5rem]">
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
                    Write us an email! 💬
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
              <Card className="p-4 h-full lg:pt-16">
                <CardHeader>
                  <CardTitle className="font-bold text-3xl">
                    Or find us directly! 📌
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>
                    <span className="font-bold">Main office:</span> Lorong Mak
                    Mandin 4, Kawasan Perindustrian Mak Mandin, 13400
                    Butterworth, Pulau Pinang
                  </p>
                  <p>
                    <span className="font-bold">Second office:</span> No. 15
                    Jalan Sega Jaya 1, Taman Perindustrian Saga Jaya 13600
                    Perai, Pulau Pinang
                  </p>
                  <p>
                    <span className="font-bold">LBS Industries office:</span>{" "}
                    27, Lintang Bayan Lepas 6, Bayan Lepas Free Industrial Zone
                    Phase 4, 11900 Bayan Lepas, Pulau Pinang
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

          <motion.div
            variants={baseVariants({ opacity: 0, y: 20 }, { opacity: 1, y: 0 })}
            className="mb-16 w-full lg:max-w-[952px]"
          >
            <GoogleMapComponent center={center} markers={markers} />
          </motion.div>
        </div>
      </AnimateScrollWrapper>
    </>
  );
}

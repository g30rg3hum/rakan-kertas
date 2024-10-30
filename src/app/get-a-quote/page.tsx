"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EmailForm } from "./components/email-form";
import { FadeInScroll } from "@/components/helpers/framer-scroll-helpers";

export default function GetAQuote() {
  return (
    <>
      <div>
        <FadeInScroll>
          <Card className="mt-28 mx-5 p-4 md:max-w-lg mb-6">
            <CardHeader>
              <CardTitle className="font-bold text-4xl">
                Write us an email! 💬
              </CardTitle>
            </CardHeader>
            <CardContent>
              <EmailForm />
            </CardContent>
          </Card>
        </FadeInScroll>
      </div>
    </>
  );
}

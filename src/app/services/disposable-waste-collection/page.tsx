"use client";

import LinkButton from "@/components/custom-ui/link-button";
import {
  AnimateScrollWrapper,
  scrollBaseVariants as baseVariants,
  FadeInScroll,
} from "@/components/helpers/framer-scroll-helpers";
import {
  faHandHolding,
  faPhone,
  faTrash,
  faTruck,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import * as motion from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FramerHoverWrapper from "@/components/helpers/framer-hover-wrapper";
import { useLanguage } from "@/components/language/LanguageContext";

/* eslint-disable @next/next/no-img-element */
export default function DisposableWasteCollection() {
  const language = useLanguage().language;

  return (
    <>
      <div className="starry-sky px-6 lg:px-12 pt-40 pb-20 flex justify-center text-white">
        <AnimateScrollWrapper>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div variants={baseVariants({ x: -10 }, { x: 0 })}>
              <FramerHoverWrapper>
                <img
                  src="/images/garbage-truck.png"
                  alt="Garbage truck illustration"
                  className="w-full max-w-md shadow-lg"
                />
              </FramerHoverWrapper>
            </motion.div>
            <motion.div variants={baseVariants({ x: 10 }, { x: 0 })}>
              <div className="w-full max-w-lg">
                <h1 className="font-bold text-4xl lg:text-5xl mb-5">
                  {language === "en" && "Disposable waste"}
                  {language === "ch" && "一次性废物"}
                  {language === "my" && "Sisa pakai buang"} <br />{" "}
                  <span className="text-primary">
                    {language === "en" && "collection service"}
                    {language === "ch" && "收集服务"}
                    {language === "my" && "perkhidmatan pengumpulan"}
                  </span>
                </h1>
                <p>
                  {language === "en" &&
                    "Perfectly described by its name, we offer this service to those who need to dispose of any kind of waste. May it be at your main headquarters or factory, we can send an industrial waste bin to you, so you can manage your waste easily and quickly!"}
                  {language === "ch" &&
                    "正如其名，我们为需要处理任何类型的废物的人提供此服务。无论是在您的总部还是工厂，我们都可以向您发送工业废物箱，以便您可以轻松快速地管理您的废物！"}
                  {language === "my" &&
                    "Seperti namanya, kami menawarkan perkhidmatan ini kepada mereka yang perlu membuang sebarang jenis sisa. Sama ada di ibu pejabat utama atau kilang anda, kami boleh menghantar tong sisa industri kepada anda, supaya anda boleh menguruskan sisa anda dengan mudah dan cepat!"}
                </p>
              </div>
            </motion.div>
          </div>
        </AnimateScrollWrapper>
      </div>
      <div className="flex flex-col lg:gap-10 lg:p-10 items-center bg-gray-100 background-texture">
        <FadeInScroll>
          <Step
            title={
              language === "en"
                ? "1. Contact us"
                : language === "ch"
                ? "1. 联系我们"
                : "1. Hubungi kami"
            }
            icon={faPhone}
            image="/images/phone.jpg"
            body={
              language === "en"
                ? [
                    "There is a large amount of waste of which you have nowhere to dispose it at. It is taking up space and it's making the environment unpleasant! Fret not, Rakan Kertas is here to help you. Email or give us a call and we can help work something out.",
                    "Either click the get a quote button at the top right or scroll down to the bottom for all our contact and location details!",
                  ]
                : language === "ch"
                ? [
                    "您有大量废物需要处理，但不知道该如何处置。它占用了空间，并且使环境变得不愉快！别担心，Rakan Kertas在这里帮助您。给我们发电子邮件或打电话，我们可以帮您解决问题。",
                    "您可以点击右上角的获取报价按钮，或者向下滚动到底部查看我们的所有联系方式和位置详情！",
                  ]
                : [
                    "Anda mempunyai sejumlah besar sisa yang tidak tahu di mana hendak dibuang. Ia mengambil ruang dan menjadikan persekitaran tidak menyenangkan! Jangan risau, Rakan Kertas di sini untuk membantu anda. E-mel atau hubungi kami dan kami boleh membantu menyelesaikannya.",
                    "Sama ada klik butang dapatkan sebut harga di sudut kanan atas atau tatal ke bawah ke bahagian bawah untuk semua butiran hubungan dan lokasi kami!",
                  ]
            }
            rightArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title={
              language === "en"
                ? "2. Trucks sent"
                : language === "ch"
                ? "2. 发送卡车"
                : "2. Trak dihantar"
            }
            icon={faTruck}
            image="/images/trucks.jpg"
            body={
              language === "en"
                ? [
                    "Once we have discussed and agreed on the terms, we will organise a date and send a truck (or how ever many you require) to your location.",
                    "When we arrive, our team will help you place it in the most convenient spot for you.",
                  ]
                : language === "ch"
                ? [
                    "一旦我们讨论并同意了条款，我们将组织一个日期并将卡车（或您需要的数量）发送到您的位置。",
                    "当我们到达时，我们的团队将帮助您将其放置在最方便的位置。",
                  ]
                : [
                    "Setelah kami membincangkan dan bersetuju dengan terma, kami akan mengaturkan tarikh dan menghantar trak (atau berapa banyak yang anda perlukan) ke lokasi anda.",
                    "Apabila kami tiba, pasukan kami akan membantu anda meletakkannya di tempat yang paling sesuai untuk anda.",
                  ]
            }
            right
            leftArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title={
              language === "en"
                ? "3. Throw waste"
                : language === "ch"
                ? "3. 扔垃圾"
                : "3. Buang sisa"
            }
            icon={faTrash}
            image="/images/waste.jpg"
            body={
              language === "en"
                ? [
                    "With the waste bins planted at your proposed site, you can start throwing your waste in them. The bins are large and can hold a lot of waste.",
                    "Toss to your heart's content! Don't worry about what you throw in there, we will take care of it for you.",
                  ]
                : language === "ch"
                ? [
                    "在您指定的地点放置好废物箱后，您可以开始将废物扔进箱子里。箱子很大，可以容纳很多废物。",
                    "尽情地扔吧！不用担心您扔进去的东西，我们会为您处理好。",
                  ]
                : [
                    "Dengan tong sisa diletakkan di lokasi yang dicadangkan, anda boleh mula membuang sisa anda ke dalamnya. Tong tersebut besar dan boleh menampung banyak sisa.",
                    "Buang sepuas hati! Jangan risau tentang apa yang anda buang di situ, kami akan mengurusnya untuk anda.",
                  ]
            }
            rightArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title={
              language === "en"
                ? "4. Collection"
                : language === "ch"
                ? "4. 收集"
                : "4. Pengumpulan"
            }
            icon={faHandHolding}
            image="/images/moving-truck.jpg"
            body={
              language === "en"
                ? [
                    "When the waste bins are full, give us a call and we will send a truck to collect the waste. We can also schedule regular pickups if you require.",
                    "We will then take the waste to our recycling plant and sort out whatever you've thrown in there accordingly.",
                  ]
                : language === "ch"
                ? [
                    "当废物箱满了时，给我们打电话，我们会派一辆卡车来收集废物。如果您需要，我们还可以安排定期收集。",
                    "我们会将废物带到我们的回收工厂，并相应地分类您扔进去的东西。",
                  ]
                : [
                    "Apabila tong sisa penuh, hubungi kami dan kami akan menghantar trak untuk mengumpul sisa. Kami juga boleh menjadualkan pengambilan berkala jika anda memerlukannya.",
                    "Kami akan membawa sisa tersebut ke kilang kitar semula kami dan menyusun apa sahaja yang anda buang di dalamnya dengan sewajarnya.",
                  ]
            }
            right
          />
        </FadeInScroll>
      </div>
      <div className="mesh-gradient text-center py-16 px-6 text-white flex flex-col items-center">
        <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
          {language === "en"
            ? "Sounds like something you're interested in?"
            : language === "ch"
            ? "听起来像是您感兴趣的事情？"
            : "Nampaknya ini sesuatu yang anda berminat?"}
        </h2>
        <p className="w-full max-w-4xl mb-6">
          {language === "en"
            ? "This service is perfect for those who have large amounts of waste and are unsure of where to dispose of it, or just want overall convenient waste management handled for them!"
            : language === "ch"
            ? "此服务非常适合那些有大量废物并且不确定如何处理它，或者只是想要整体方便的废物管理的人！"
            : "Perkhidmatan ini sangat sesuai untuk mereka yang mempunyai sejumlah besar sisa dan tidak pasti di mana hendak membuangnya, atau hanya ingin pengurusan sisa yang mudah dan cepat!"}
        </p>
        <br />
        <LinkButton
          href=""
          variant="secondary"
          text={
            language === "en"
              ? "Get a quote"
              : language === "ch"
              ? "获取报价"
              : "Dapatkan sebut harga"
          }
        />
      </div>
    </>
  );
}

interface StepProps {
  title: string;
  icon: IconDefinition;
  body: string[];
  image: string;
  right?: boolean;
  rightArrow?: boolean;
  leftArrow?: boolean;
}
function Step({
  title,
  icon,
  body,
  image,
  right,
  rightArrow = false,
  leftArrow = false,
}: StepProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-stretch lg:rounded-xl w-full lg:w-max shadow-lg lg:border border-black relative ${
        right ? "lg:ml-10" : "lg:mr-10"
      }`}
    >
      <div className="flex flex-col justify-center px-6 lg:px-12 py-12 w-full lg:max-w-xl bg-white background-texture lg:rounded-l-xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-5">
          {title} <FontAwesomeIcon icon={icon} className="ml-1 text-primary" />
        </h2>
        <div className="flex flex-col gap-5">
          {body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div
        className="h-60 lg:h-auto w-full lg:w-96 bg-cover bg-center lg:rounded-r-xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {rightArrow && (
        <img
          src="/images/tb-right-arrow.svg"
          alt="Right arrow"
          className="w-10 absolute bottom-[-3rem] right-[-3rem] z-20 hidden lg:block"
        />
      )}
      {leftArrow && (
        <img
          src="/images/tb-left-arrow.svg"
          alt="Left arrow"
          className="w-10 absolute bottom-[-3rem] left-[-3rem] z-20 hidden lg:block"
        />
      )}
    </div>
  );
}

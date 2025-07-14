"use client";

import LinkButton from "@/components/custom-ui/link-button";
import {
  AnimateScrollWrapper,
  scrollBaseVariants as baseVariants,
  FadeInScroll,
} from "@/components/helpers/framer-scroll-helpers";
import {
  faCalculator,
  faHandHolding,
  faMoneyBill,
  faPhone,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import * as motion from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FramerHoverWrapper from "@/components/helpers/framer-hover-wrapper";
import MaterialsSection from "@/components/pages/services/recycling-material-collection/materials-section";
import { useLanguage } from "@/components/language/LanguageContext";

/* eslint-disable @next/next/no-img-element */
export default function RecyclingMaterialCollection() {
  const language = useLanguage().language;

  return (
    <>
      <div className="starry-sky px-6 lg:px-12 pt-40 pb-20 flex justify-center text-white">
        <AnimateScrollWrapper>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <motion.div variants={baseVariants({ x: -10 }, { x: 0 })}>
              <FramerHoverWrapper>
                <img
                  src="/images/recyclingcollection.png"
                  alt="Recycling collection illustration"
                  className="w-full max-w-md shadow-lg"
                />
              </FramerHoverWrapper>
            </motion.div>
            <motion.div variants={baseVariants({ x: 10 }, { x: 0 })}>
              <div className="w-full max-w-lg">
                <h1 className="font-bold text-4xl lg:text-5xl mb-5">
                  {language === "en"
                    ? "Recycling material"
                    : language === "ch"
                    ? "回收材料"
                    : "Kitar semula bahan"}{" "}
                  <br />{" "}
                  <span className="text-primary">
                    {language === "en"
                      ? "collection"
                      : language === "ch"
                      ? "收藏"
                      : "koleksi"}
                  </span>
                </h1>
                <p>
                  {language === "en"
                    ? "As one of our many efforts to help the environment, we'd like to pay you for your recyclable waste! If you have recyclable materials that you don't know what to do with, we'll gladly take them off your hands and compensate you for it."
                    : language === "ch"
                    ? "作为我们帮助环境的众多努力之一，我们愿意为您的可回收废物付费！如果您有可回收材料，不知道该怎么办，我们将很乐意为您处理，并为此给予补偿。"
                    : "Sebagai salah satu usaha kami untuk membantu alam sekitar, kami ingin membayar anda untuk sisa kitar semula anda! Jika anda mempunyai bahan kitar semula yang tidak tahu apa yang perlu dilakukan dengannya, kami dengan senang hati akan mengambilnya dari tangan anda dan memberi pampasan kepada anda."}
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
                    "You have recyclable waste (see below to check what we collect) that you have no use for. It might be leftover paper from your factory operations, or plastic bottles from your home.",
                    "Contact us by clicking the blue button on the top right or scroll down to the bottom for more contact details.",
                  ]
                : language === "ch"
                ? [
                    "您有可回收的废物（请查看下面以检查我们收集的内容），您没有用处。它可能是您工厂操作中剩余的纸张，或者是您家中的塑料瓶。",
                    "通过点击右上角的蓝色按钮或向下滚动到页面底部以获取更多联系信息来联系我们。",
                  ]
                : [
                    "Anda mempunyai sisa kitar semula (lihat di bawah untuk memeriksa apa yang kami kumpulkan) yang anda tidak mempunyai kegunaan. Ia mungkin kertas sisa dari operasi kilang anda, atau botol plastik dari rumah anda.",
                    "Hubungi kami dengan mengklik butang biru di bahagian atas kanan atau tatal ke bawah untuk maklumat hubungan lanjut.",
                  ]
            }
            rightArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title={
              language === "en"
                ? "2. Rates given"
                : language === "ch"
                ? "2. 给出费率"
                : "2. Kadar diberikan"
            }
            icon={faCalculator}
            image="/images/calculator.jpg"
            body={
              language === "en"
                ? [
                    "Once you've contacted us, we will discuss the rates we can offer you for your recyclable waste. The rates will be based on the type of material and the quantity you have.",
                    "We offer one of the most competitive rates in the market, so you can be sure you're getting the best deal from us!",
                  ]
                : language === "ch"
                ? [
                    "一旦您与我们联系，我们将讨论我们可以为您的可回收废物提供的费率。费率将基于材料类型和您拥有的数量。",
                    "我们提供市场上最具竞争力的费率之一，因此您可以确保从我们这里获得最优惠的交易！",
                  ]
                : [
                    "Setelah anda menghubungi kami, kami akan membincangkan kadar yang boleh kami tawarkan kepada anda untuk sisa kitar semula anda. Kadar akan berdasarkan jenis bahan dan kuantiti yang anda miliki.",
                    "Kami menawarkan salah satu kadar yang paling kompetitif di pasaran, jadi anda boleh yakin bahawa anda mendapat tawaran terbaik daripada kami!",
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
                ? "3. Collection"
                : language === "ch"
                ? "3. 收集"
                : "3. Pengumpulan"
            }
            icon={faHandHolding}
            image="/images/moving-truck.jpg"
            body={
              language === "en"
                ? [
                    "At this point, we've reached an agreement on what to do with your recyclable waste, and the next step would be for us to collect it from you.",
                    "There are two options at this point - you can deliver the materials yourself or we can come and collect it from you (transport fees apply).",
                  ]
                : language === "ch"
                ? [
                    "在这一点上，我们已经就如何处理您的可回收废物达成协议，下一步就是我们从您那里收集它。",
                    "此时有两个选项 - 您可以自己交付材料，或者我们可以来收集它（运输费用适用）。",
                  ]
                : [
                    "Pada ketika ini, kami telah mencapai persetujuan tentang apa yang perlu dilakukan dengan sisa kitar semula anda, dan langkah seterusnya adalah untuk kami mengumpulkannya dari anda.",
                    "Pada ketika ini terdapat dua pilihan - anda boleh menghantar bahan itu sendiri atau kami boleh datang dan mengumpulkannya dari anda (yuran pengangkutan dikenakan).",
                  ]
            }
            rightArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title={
              language === "en"
                ? "4. Payout"
                : language === "ch"
                ? "4. 付款"
                : "4. Pembayaran"
            }
            icon={faMoneyBill}
            image="/images/money.jpg"
            body={
              language === "en"
                ? [
                    "Once we receive the materials, we will accurately weigh all of it out. We will then calculate the total amount of money you will receive based on the agreed rates, and pay you accordingly!",
                  ]
                : language === "ch"
                ? [
                    "一旦我们收到材料，我们将准确称量所有材料。然后，我们将根据商定的费率计算您将收到的总金额，并相应地支付给您！",
                  ]
                : [
                    "Setelah kami menerima bahan tersebut, kami akan menimbangnya dengan tepat. Kami kemudian akan mengira jumlah wang yang anda akan terima berdasarkan kadar yang dipersetujui, dan membayar anda dengan sewajarnya!",
                  ]
            }
            right
          />
        </FadeInScroll>
      </div>
      <MaterialsSection />
      <div className="mesh-gradient text-center py-16 px-6 text-white flex flex-col items-center">
        <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
          {language === "en"
            ? "Sounds like something you're interested in?"
            : language === "ch"
            ? "听起来像是您感兴趣的事情？"
            : "Nampaknya ini sesuatu yang anda berminat?"}
        </h2>
        <p className="w-full max-w-4xl">
          {language === "en"
            ? "This service is perfect for those who have leftover recycling materials and have no use for them! We'd be more than happy to pay you for your recycling efforts."
            : language === "ch"
            ? "此服务非常适合那些有剩余回收材料并且没有用处的人！我们很乐意为您的回收努力付费。"
            : "Perkhidmatan ini sangat sesuai untuk mereka yang mempunyai bahan kitar semula yang tidak digunakan! Kami dengan senang hati akan membayar anda untuk usaha kitar semula anda."}
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

"use client";

/* eslint-disable @next/next/no-img-element */
import CheckedList from "@/components/custom-ui/checked-list";
import ImageSlideshow, { Image } from "@/components/custom-ui/image-slideshow";
import {
  faScroll,
  faPallet,
  faSheetPlastic,
  faWrench,
  faTruck,
  faRecycle,
  IconDefinition,
  faHandshake,
  faLightbulb,
  faThumbsUp,
  faTree,
  faCertificate,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as motion from "framer-motion/client";
import LinkButton from "@/components/custom-ui/link-button";
import {
  scrollBaseVariants as baseVariants,
  FadeInScroll,
  AnimateScrollWrapper,
} from "@/components/helpers/framer-scroll-helpers";
import FramerHoverWrapper from "@/components/helpers/framer-hover-wrapper";
import { useLanguage } from "@/components/language/LanguageContext";

const heroImages: Image[] = [
  { src: "/images/company/17.jpg", alt: "Outside company office 1" },
  { src: "/images/company/5.jpg", alt: "Recycling area" },
  { src: "/images/company/8.jpg", alt: "Recycled cylinders" },
  { src: "images/company/10.jpg", alt: "Lorry" },
];

export default function Home() {
  const language = useLanguage().language;

  const companyUpsideFacts: CompanyUpsideFactProps[] = [
    {
      icon: faHandshake,
      title:
        language === "en"
          ? "Reliable service"
          : language === "ch"
          ? "可靠的服务"
          : "Perkhidmatan yang boleh dipercayai",
      description:
        language === "en"
          ? "Providing dependable and efficient recycling services for everyone."
          : language === "ch"
          ? "提供可靠和高效的回收服务，适合每个人。"
          : "Memberikan perkhidmatan kitar semula yang boleh dipercayai dan cekap untuk semua orang.",
    },
    {
      icon: faLightbulb,
      title:
        language === "en"
          ? "Innovative solutions"
          : language === "ch"
          ? "创新解决方案"
          : "Penyelesaian inovatif",
      description:
        language === "en"
          ? "Using creative recycling processes to turn waste back into useful resources."
          : language === "ch"
          ? "利用创新的回收流程将废物转化为有用的资源。"
          : "Menggunakan proses kitar semula yang kreatif untuk mengubah sisa menjadi sumber yang berguna.",
    },
    {
      icon: faThumbsUp,
      title:
        language === "en"
          ? "Convenience for customers"
          : language === "ch"
          ? "客户便利"
          : "Kemudahan untuk pelanggan",
      description:
        language === "en"
          ? "Providing dependable and efficient recycling services for everyone."
          : language === "ch"
          ? "为每个人提供可靠和高效的回收服务。"
          : "Memberikan perkhidmatan kitar semula yang boleh dipercayai dan cekap untuk semua orang.",
    },
    {
      icon: faTree,
      title:
        language === "en"
          ? "Environmental focus"
          : language === "ch"
          ? "环境关注"
          : "Fokus alam sekitar",
      description:
        language === "en"
          ? "Promoting eco-friendly practices to reduce waste and protect the environment."
          : language === "ch"
          ? "促进环保实践，减少废物并保护环境。"
          : "Menggalakkan amalan mesra alam untuk mengurangkan sisa dan melindungi alam sekitar.",
    },
    {
      icon: faCertificate,
      title:
        language === "en"
          ? "Multiple certifications"
          : language === "ch"
          ? "多项认证"
          : "Pelbagai pensijilan",
      description:
        language === "en"
          ? "We are certified by multiple organisations for our commitment to sustainability."
          : language === "ch"
          ? "我们获得了多个组织的认证，证明我们对可持续发展的承诺。"
          : "Kami disahkan oleh pelbagai organisasi atas komitmen kami terhadap kelestarian.",
    },
    {
      icon: faMoneyBillWave,
      title:
        language === "en"
          ? "Incentives for recycling"
          : language === "ch"
          ? "回收奖励"
          : "Insentif untuk kitar semula",
      description:
        language === "en"
          ? "We offer competitive rates for recyclable materials, providing an incentive for recycling."
          : language === "ch"
          ? "我们为可回收材料提供有竞争力的价格，激励回收。"
          : "Kami menawarkan kadar yang kompetitif untuk bahan kitar semula, memberikan insentif untuk kitar semula.",
    },
  ];

  type QuestionAndAnswer = {
    question: string;
    answer: string;
  };
  const questionAndAnswers: QuestionAndAnswer[] = [
    {
      question:
        language === "en"
          ? "What is the pricing that Rakan Kertas offers?"
          : language === "ch"
          ? "Rakan Kertas 提供的价格是多少？"
          : "Apakah harga yang ditawarkan oleh Rakan Kertas?",
      answer:
        language === "en"
          ? "We offer the best competitive market pricing. Feel free to contact us for a quote."
          : language === "ch"
          ? "我们提供最具竞争力的市场价格。欢迎随时联系我们获取报价。"
          : "Kami menawarkan harga pasaran yang paling kompetitif. Sila hubungi kami untuk mendapatkan sebut harga.",
    },
    {
      question:
        language === "en"
          ? "Is Rakan Kertas reliable?"
          : language === "ch"
          ? "Rakan Kertas 可靠么？"
          : "Adakah Rakan Kertas boleh dipercayai?",
      answer:
        language === "en"
          ? "Yes, we have 30+ years of experience in the recycling industry."
          : language === "ch"
          ? "是的，我们在回收行业有超过30年的经验。"
          : "Ya, kami mempunyai pengalaman lebih dari 30 tahun dalam industri kitar semula.",
    },
    {
      question:
        language === "en"
          ? "Can Rakan Kertas collect or do I have to deliver?"
          : language === "ch"
          ? "Rakan Kertas 可以收集还是我需要送货？"
          : "Bolehkah Rakan Kertas mengumpul atau adakah saya perlu menghantar?",
      answer:
        language === "en"
          ? "We offer collection services on top of drop-off services."
          : language === "ch"
          ? "我们提供收集服务以及自送服务。"
          : "Kami menawarkan perkhidmatan pengumpulan di samping perkhidmatan penghantaran sendiri.",
    },
    {
      question:
        language === "en"
          ? "How do I know what is recyclable?"
          : language === "ch"
          ? "我怎么知道什么是可回收的？"
          : "Bagaimana saya tahu apa yang boleh dikitar semula?",
      answer:
        language === "en"
          ? "Refer to our Recycling Materials page under services for specific materials we support."
          : language === "ch"
          ? "请参考我们服务页面下的回收材料部分，了解我们支持的具体材料。"
          : "Rujuk halaman Bahan Kitar Semula kami di bawah perkhidmatan untuk bahan khusus yang kami sokong.",
    },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row relative">
        <div className="bg-gray-950 text-white polka pt-48 px-6 lg:px-[5.5rem] lg:w-1/2 pb-36 text-center lg:text-left">
          <FadeInScroll>
            <h1 className="font-bold text-5xl lg:text-[3.62rem] mb-7 leading-tight">
              {language === "en" && (
                <>
                  Your <span className="curved-underline">recycling</span> ally!
                </>
              )}
              {language === "ch" && (
                <>
                  你的 <span className="curved-underline">回收</span> 伙伴!
                </>
              )}
              {language === "my" && (
                <>
                  Rakan{" "}
                  <span className="curved-underline text-nowrap">
                    kitar semula
                  </span>{" "}
                  anda!
                </>
              )}
            </h1>
            <div className="mb-5 text-md sm:text-lg text-left">
              <div className="mx-auto lg:mx-0 w-max">
                {language === "en" && (
                  <CheckedList
                    points={[
                      "Sustainable waste management",
                      "Innovative recycling solutions",
                      "Community and corporate partnerships",
                    ]}
                  />
                )}
                {language === "ch" && (
                  <CheckedList
                    points={[
                      "可持续废物管理",
                      "创新回收解决方案",
                      "社区与企业合作伙伴关系",
                    ]}
                  />
                )}
                {language === "my" && (
                  <CheckedList
                    points={[
                      "Pengurusan sisa yang lestari",
                      "Penyelesaian kitar semula yang inovatif",
                      "Kerjasama komuniti dan korporat",
                    ]}
                  />
                )}
              </div>
            </div>

            {language === "en" && (
              <LinkButton
                href="/get-a-quote"
                variant="default"
                text="Get a quote"
              />
            )}

            {language === "ch" && (
              <LinkButton
                href="/get-a-quote"
                variant="default"
                text="获取报价"
              />
            )}

            {language === "my" && (
              <LinkButton
                href="/get-a-quote"
                variant="default"
                text="Dapatkan sebut harga"
              />
            )}
          </FadeInScroll>
        </div>

        <div className="h-96 lg:w-1/2 lg:h-auto">
          <ImageSlideshow images={heroImages} />
        </div>
      </div>
      <div className="py-16 px-16">
        <AnimateScrollWrapper>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14">
            <motion.div variants={baseVariants({ y: 100 }, { y: 0 })}>
              <FramerHoverWrapper>
                <img
                  src="/images/company/9.jpg"
                  alt="Recycled wood"
                  className="w-full md:max-w-xl rounded-lg shadow-lg"
                />
              </FramerHoverWrapper>
            </motion.div>
            <motion.div
              variants={baseVariants({ x: 10, display: "hidden" }, { x: 0 })}
            >
              <div className="w-full sm:max-w-xl text-center lg:text-left">
                <span className="text-md sm:text-lg italic">
                  {language === "en" && <p>What do we do?</p>}
                  {language === "ch" && <p>我们做什么？</p>}
                  {language === "my" && <p>Apa yang kami lakukan?</p>}
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-5">
                  {language === "en" && (
                    <>
                      Recycling made{" "}
                      <span className="text-primary">easier.</span> ✨
                    </>
                  )}
                  {language === "ch" && (
                    <>
                      让回收变得更 <span className="text-primary">简单。</span>
                    </>
                  )}
                  {language === "my" && (
                    <>
                      Kitar semula menjadi lebih{" "}
                      <span className="text-primary">mudah.</span> ✨
                    </>
                  )}
                </h2>
                {language === "en" && (
                  <p>
                    At Rakan Kertas Sdn Bhd, we specialise in efficient and
                    innovative waste management tailored to the needs of
                    corporations and organisations, with a strong emphasis on
                    eco-friendly practices.
                  </p>
                )}
                {language === "ch" && (
                  <p>
                    在 Rakan Kertas Sdn
                    Bhd，我们专注于为企业和组织提供高效创新的废物管理服务，强调环保实践。
                  </p>
                )}
                {language === "my" && (
                  <p>
                    Di Rakan Kertas Sdn Bhd, kami pakar dalam pengurusan sisa
                    yang cekap dan inovatif yang disesuaikan dengan keperluan
                    korporat dan organisasi, dengan penekanan kuat pada amalan
                    mesra alam.
                  </p>
                )}
                <br />
                {language === "en" && (
                  <p>
                    Our comprehensive approach includes a variety of waste
                    collection solutions, accomodating both recyclable and
                    non-recyclable materials.
                  </p>
                )}
                {language === "ch" && (
                  <p>
                    我们全面的方法包括各种废物收集解决方案，适用于可回收和不可回收材料。
                  </p>
                )}
                {language === "my" && (
                  <p>
                    Pendekatan komprehensif kami merangkumi pelbagai
                    penyelesaian pengumpulan sisa, yang menampung bahan boleh
                    kitar semula dan tidak boleh kitar semula.
                  </p>
                )}
                <br />
                <div className="text-lg">
                  {language === "en" && (
                    <p className="font-semibold mb-2">
                      Some of the main materials that we collect:
                    </p>
                  )}
                  {language === "ch" && (
                    <p className="font-semibold mb-2">
                      我们收集的一些主要材料：
                    </p>
                  )}
                  {language === "my" && (
                    <p className="font-semibold mb-2">
                      Beberapa bahan utama yang kami kumpulkan:
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center lg:justify-start">
                    <div>
                      <FontAwesomeIcon
                        icon={faScroll}
                        className="text-primary"
                      />
                      {language === "en" && <span className="ml-2">Paper</span>}
                      {language === "ch" && <span className="ml-2">纸张</span>}
                      {language === "my" && (
                        <span className="ml-2">Kertas</span>
                      )}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPallet}
                        className="text-primary"
                      />
                      {language === "en" && <span className="ml-2">Wood</span>}
                      {language === "ch" && <span className="ml-2">木材</span>}
                      {language === "my" && <span className="ml-2">Kayu</span>}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faSheetPlastic}
                        className="text-primary"
                      />
                      {language === "en" && (
                        <span className="ml-2">Plastic</span>
                      )}
                      {language === "ch" && <span className="ml-2">塑料</span>}
                      {language === "my" && (
                        <span className="ml-2">Plastik</span>
                      )}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faWrench}
                        className="text-primary"
                      />
                      {language === "en" && <span className="ml-2">Metal</span>}
                      {language === "ch" && <span className="ml-2">金属</span>}
                      {language === "my" && <span className="ml-2">Logam</span>}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimateScrollWrapper>
      </div>
      <div className="py-16 px-6 bg-primary text-white relative text-center flex flex-col items-center mesh-gradient">
        <FadeInScroll>
          <span className="text-md sm:text-lg italic">
            {language === "en" && <>What can we offer you?</>}
            {language === "ch" && <>我们能为您提供什么？</>}
            {language === "my" && (
              <>Apa yang kami boleh tawarkan kepada anda?</>
            )}
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-14">
            {language === "en" && <>We have two main services.</>}
            {language === "ch" && <>我们有两项主要服务。</>}
            {language === "my" && <>Kami mempunyai dua perkhidmatan utama.</>}
          </h2>
        </FadeInScroll>

        <AnimateScrollWrapper>
          <div className="flex flex-col md:flex-row gap-20 md:gap-16">
            <motion.div
              variants={baseVariants(
                { x: -50, rotate: -5 },
                { x: 0, rotate: 0 }
              )}
            >
              {language === "en" && (
                <ServiceCard
                  icon={faTruck}
                  titlePtOne="Disposable Waste"
                  titlePtTwo="Collection"
                  paragraphOne="We will send an industrial waste bin to your area. This can be
                anywhere - a construction site or even just the company office. Any
                place where mass rubbish needs to be thrown."
                  paragraphTwo="Then, once the waste bin is full, we will come and collect it.
                It's really just that simple! No work needed on your end, just
                gotta throw your rubbish in the bin."
                  buttonText="More about waste collection"
                  buttonLink="/disposable-waste-collection"
                />
              )}
              {language === "ch" && (
                <ServiceCard
                  icon={faTruck}
                  titlePtOne="一次性废物"
                  titlePtTwo="收集"
                  paragraphOne="我们会将工业废物箱送到您的区域。这可以是任何地方 - 建筑工地甚至只是公司办公室。任何需要大量垃圾处理的地方。"
                  paragraphTwo="然后，一旦废物箱满了，我们就会来收集它。真的就是这么简单！您只需将垃圾扔进箱子里，无需其他工作。"
                  buttonText="了解更多关于废物收集的信息"
                  buttonLink="'/disposable-waste-collection"
                />
              )}
              {language === "my" && (
                <ServiceCard
                  icon={faTruck}
                  titlePtOne="Pengumpulan Sisa"
                  titlePtTwo="Buangan Sekali Pakai"
                  paragraphOne="Kami akan menghantar tong sisa industri ke kawasan anda. Ini boleh berlaku di mana-mana - tapak pembinaan atau pejabat syarikat. Mana-mana tempat yang memerlukan pembuangan sampah secara besar-besaran."
                  paragraphTwo="Kemudian, setelah tong sisa penuh, kami akan datang untuk mengumpulkannya. Ia sangat mudah! Tiada kerja diperlukan dari pihak anda, hanya perlu membuang sampah ke dalam tong."
                  buttonText="Ketahui lebih lanjut tentang pengumpulan sisa"
                  buttonLink="/disposable-waste-collection"
                />
              )}
            </motion.div>
            <motion.div
              variants={baseVariants({ x: 50, rotate: 5 }, { x: 0, rotate: 0 })}
            >
              {language === "en" && (
                <ServiceCard
                  icon={faRecycle}
                  titlePtOne="Recycling Material"
                  titlePtTwo="Collection"
                  paragraphOne="This service is for those who have recyclable materials on
                  hand, have no use for them and would like to sell them for
                  some extra cash. Some easy money, if you will."
                  paragraphTwo="We purchase and collect paper, carton boxes, metals, wood
                  pallets, and so much more! Just give us a call, let us know
                  what you'd like to recycle, and we'll give you a
                  quote on what we can offer in return."
                  buttonText="More about recycling"
                  buttonLink="/recycling-material-collection"
                />
              )}
              {language === "ch" && (
                <ServiceCard
                  icon={faRecycle}
                  titlePtOne="回收材料"
                  titlePtTwo="收集"
                  paragraphOne="此服务适用于那些手头有可回收材料、没有用处并希望出售以赚取一些额外现金的人。可以说是轻松赚钱。"
                  paragraphTwo="我们购买和收集纸张、纸箱、金属、木托盘等更多材料！只需给我们打个电话，告诉我们您想回收的材料，我们会给您一个报价。"
                  buttonText="了解更多关于回收的信息"
                  buttonLink="/recycling-material-collection"
                />
              )}
              {language === "my" && (
                <ServiceCard
                  icon={faRecycle}
                  titlePtOne="Pengumpulan Bahan"
                  titlePtTwo="Kitar Semula"
                  paragraphOne="Perkhidmatan ini adalah untuk mereka yang mempunyai bahan kitar semula, tidak mempunyai kegunaan untuknya dan ingin menjualnya untuk mendapatkan wang tambahan. Boleh dikatakan sedikit wang mudah."
                  paragraphTwo="Kami membeli dan mengumpul kertas, kotak kadbod, logam, palet kayu dan banyak lagi! Hanya hubungi kami, beritahu kami apa yang anda ingin kitar semula, dan kami akan memberikan sebut harga tentang apa yang boleh kami tawarkan sebagai balasan."
                  buttonText="Ketahui lebih lanjut tentang kitar semula"
                  buttonLink="/recycling-material-collection"
                />
              )}
            </motion.div>
          </div>
        </AnimateScrollWrapper>
      </div>
      <div className="h-[650px] bg-[url('/images/company/13.jpg')] bg-cover bg-center relative after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[300px] after:bg-gradient-to-b after:from-transparent after:to-[#2a2a36] after:z-2 after:background-texture-2"></div>
      <div className="py-16 px-6 bg-[#19192E] relative text-white md:px-20 background-texture-2">
        <AnimateScrollWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {companyUpsideFacts.map((fact) => (
              <motion.div
                key={fact.title}
                variants={baseVariants({ scale: 0.8 }, { scale: 1 })}
              >
                <CompanyUpsideFact {...fact} />
              </motion.div>
            ))}
          </div>
        </AnimateScrollWrapper>
      </div>
      <div className="py-16 px-6 flex flex-col items-center">
        <FadeInScroll>
          <div className="flex flex-col items-center">
            <span className="text-md sm:text-lg italic">
              {language === "en" && <>You may have some questions...</>}
              {language === "ch" && <>您可能有一些问题...</>}
              {language === "my" && <>Anda mungkin ada soalan...</>}
            </span>
            <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
              {language === "en" && <>Frequently Asked Questions</>}
              {language === "ch" && <>常见问题解答</>}
              {language === "my" && <>Soalan Lazim</>}
            </h2>
          </div>
        </FadeInScroll>

        <Accordion type="single" collapsible className="w-full max-w-xl">
          <AnimateScrollWrapper>
            {questionAndAnswers.map((qa, index) => (
              <motion.div key="index" variants={baseVariants()}>
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">
                    {qa.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    {qa.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </AnimateScrollWrapper>
        </Accordion>
      </div>
      <div className="py-16 px-6 text-center bg-gray-100 background-texture">
        <FadeInScroll>
          <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
            {language === "en" && (
              <>Sounds like something you&apos;re interested in?</>
            )}
            {language === "ch" && <>听起来像是您感兴趣的事情？</>}
            {language === "my" && <>Nampaknya sesuatu yang anda berminat?</>}
          </h2>

          <LinkButton
            href="/get-a-quote"
            variant="default"
            text={
              language === "en"
                ? "Get a quote"
                : language === "ch"
                ? "获取报价"
                : "Dapatkan sebut harga"
            }
          />
        </FadeInScroll>
      </div>
    </>
  );
}

interface ServiceCardProps {
  icon: IconDefinition;
  titlePtOne: string;
  titlePtTwo: string;
  paragraphOne: string;
  paragraphTwo: string;
  buttonText: string;
  buttonLink: string;
}
function ServiceCard({
  icon,
  titlePtOne,
  titlePtTwo,
  paragraphOne,
  paragraphTwo,
  buttonText,
  buttonLink,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-6 items-center z-20 h-full">
      <FramerHoverWrapper className="flex-1">
        <div className="w-full max-w-sm border border-[6px] border-white rounded-lg px-5 py-12 shadow-md relative select-none h-full flex-1">
          <FontAwesomeIcon
            icon={icon}
            className="text-4xl text-primary absolute top-[-30px] translate-x-[-50%] bg-white p-3 rounded-lg"
          />
          <h3 className="text-3xl font-bold">
            {titlePtOne}
            <br />
            {titlePtTwo}
          </h3>
          <br />
          <div className="text-md">
            <p>{paragraphOne}</p>
            <br />
            <p>{paragraphTwo}</p>
          </div>
        </div>
      </FramerHoverWrapper>

      <div className="z-20">
        <LinkButton
          href={buttonLink}
          variant="secondary"
          text={buttonText}
          xPadding={3}
        />
      </div>
    </div>
  );
}

interface CompanyUpsideFactProps {
  icon: IconDefinition;
  title: string;
  description: string;
}
function CompanyUpsideFact({
  icon,
  title,
  description,
}: CompanyUpsideFactProps) {
  return (
    <FramerHoverWrapper>
      <div className="w-full z-20 select-none">
        <FontAwesomeIcon icon={icon} className="text-accent text-lg" />
        <h4 className="font-bold text-xl">{title}</h4>
        <p>{description}</p>
      </div>
    </FramerHoverWrapper>
  );
}

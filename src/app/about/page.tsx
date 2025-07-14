"use client";

/* eslint-disable @next/next/no-img-element */
import { Image } from "@/components/custom-ui/image-slideshow";
import {
  AnimateScrollWrapper,
  FadeInScroll,
  scrollBaseVariants as baseVariants,
} from "@/components/helpers/framer-scroll-helpers";
import { useLanguage } from "@/components/language/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  faGlasses,
  faHandFist,
  faHeart,
  faLeaf,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as motion from "framer-motion/client";

const carouselImages: Image[] = [
  { src: "/images/company/2.jpg", alt: "carousel image 1" },
  { src: "/images/company/5.jpg", alt: "carousel image 2" },
  { src: "/images/company/7.jpg", alt: "carousel image 3" },
  { src: "/images/company/11.jpg", alt: "carousel image 4" },
  { src: "/images/company/16.png", alt: "carousel image 5" },
];

interface Value {
  title: string;
  icon: IconDefinition;
  description: string;
}

export default function AboutUs() {
  const language = useLanguage().language;

  const values: Value[] = [
    {
      title:
        language === "en"
          ? "Transparency"
          : language === "ch"
          ? "透明度"
          : "Ketelusan",
      icon: faGlasses,
      description:
        language === "en"
          ? "Openly sharing progress and practices with customers, ensuring integrity not only in environmental impact but also our business operations."
          : language === "ch"
          ? "公开与客户分享进展和实践，确保在环境影响和商业运营方面的诚信。"
          : "Secara terbuka berkongsi kemajuan dan amalan dengan pelanggan, memastikan integriti bukan sahaja dalam kesan alam sekitar tetapi juga operasi perniagaan kami.",
    },
    {
      title:
        language === "en"
          ? "Customer-centric"
          : language === "ch"
          ? "以客户为中心"
          : "Pelanggan berpusat",
      icon: faHeart,
      description:
        language === "en"
          ? "Putting customers first, understanding their needs and providing solutions that are tailored to their unique requirements. We are committed to delivering the best service possible."
          : language === "ch"
          ? "以客户为中心，理解他们的需求并提供量身定制的解决方案。我们致力于提供最佳服务。"
          : "Meletakkan pelanggan sebagai keutamaan, memahami keperluan mereka dan menyediakan penyelesaian yang disesuaikan dengan keperluan unik mereka. Kami komited untuk memberikan perkhidmatan terbaik.",
    },
    {
      title:
        language === "en"
          ? "SDG-aligned"
          : language === "ch"
          ? "可持续发展目标对齐"
          : "Selaras dengan SDG",
      icon: faLeaf,
      description:
        language === "en"
          ? "Committed to achieving the Sustainable Development Goals set by the United Nations, we are dedicated to making a positive impact on the environment."
          : language === "ch"
          ? "致力于实现联合国设定的可持续发展目标，我们致力于对环境产生积极影响。"
          : "Komited untuk mencapai Matlamat Pembangunan Lestari yang ditetapkan oleh Pertubuhan Bangsa-Bangsa Bersatu, kami berdedikasi untuk memberi impak positif kepada alam sekitar.",
    },
    {
      title:
        language === "en"
          ? "Empowerment"
          : language === "ch"
          ? "赋能"
          : "Pemberdayaan",
      icon: faHandFist,
      description:
        language === "en"
          ? "Empowering our employees to make decisions and take actions that will benefit the environment and our customers."
          : language === "ch"
          ? "赋能我们的员工做出有利于环境和客户的决策和行动。"
          : "Memberdayakan pekerja kami untuk membuat keputusan dan mengambil tindakan yang akan memberi manfaat kepada alam sekitar dan pelanggan kami.",
    },
  ];

  const bulletPoints =
    language === "en"
      ? [
          "Developing sustianable practices",
          "Fostering a community environment",
          "Creating a legacy of positive environmental impacts",
        ]
      : language === "ch"
      ? ["发展可持续实践", "培养社区环境", "创造积极的环境影响遗产"]
      : [
          "Membangunkan amalan lestari",
          "Memupuk persekitaran komuniti",
          "Mencipta warisan impak alam sekitar yang positif",
        ];

  return (
    <>
      <div
        className="flex min-h-[50vh] bg-center bg-cover relative text-white pt-32 lg:pt-36 px-6 md:px-20 lg:px-16"
        style={{ backgroundImage: "url('/images/greenery.jpg')" }}
      >
        <div className="bg-black inset-0 absolute w-full opacity-[0.8] z-0"></div>
        <div className="z-10 max-w-xl h-max mb-20">
          <FadeInScroll>
            <h1 className="font-bold text-5xl mb-5">
              {language === "en" && "We give waste"}
              {language === "ch" && "我们给废物"}
              {language === "my" && "Kami memberi sisa"}
              <br />{" "}
              <span className="text-primary">
                {language === "en" && "a second chance."}
                {language === "ch" && "第二次机会。"}
                {language === "my" && "peluang kedua."}
              </span>
            </h1>
            <p>
              {language === "en" &&
                "Rakan Kertas specialises in the collection of all kinds of waste materials, and doing it in smart and earth-friendly ways. We work mostly with other corporations and business organisations, but our services are open to anyone needing to recycle or dispose of waste!"}
              {language === "ch" &&
                "Rakan Kertas 专注于收集各种废物材料，并以智能和环保的方式进行处理。我们主要与其他公司和商业组织合作，但我们的服务对任何需要回收或处理废物的人开放！"}
              {language === "my" &&
                "Rakan Kertas mengkhusus dalam pengumpulan semua jenis bahan buangan, dan melakukannya dengan cara yang pintar dan mesra alam. Kami kebanyakannya bekerja dengan korporat lain dan organisasi perniagaan, tetapi perkhidmatan kami terbuka kepada sesiapa sahaja yang memerlukan untuk mengitar semula atau membuang sisa!"}
            </p>
            <br />
            <p>
              {language === "en" &&
                "We tailor our services to meet the unique needs of our clients, offering both regular pickups and one-time bulk collections."}
              {language === "ch" &&
                "我们根据客户的独特需求定制服务，提供定期收集和一次性大宗收集。"}
              {language === "my" &&
                "Kami menyesuaikan perkhidmatan kami untuk memenuhi keperluan unik pelanggan kami, menawarkan pengambilan berkala dan pengumpulan besar sekali sahaja."}
            </p>
          </FadeInScroll>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch">
        <div
          className="h-96 lg:h-auto w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/company/14.jpg)" }}
        ></div>
        <div className="mesh-gradient text-white px-6 lg:px-12 py-16 grow flex items-center">
          <FadeInScroll>
            <div className="h-max">
              <h2 className="text-4xl lg:text-5xl font-bold mb-5">
                {language === "en" && "Our origins"}
                {language === "ch" && "我们的起源"}
                {language === "my" && "Asal usul kami"}
              </h2>
              <p className="font-semibold">
                {language === "en" &&
                  "Established in 2005, we&apos;ve evolved from a modest operation into a key player in the waste management industry."}
                {language === "ch" &&
                  "成立于2005年，我们从一个小规模的运营发展成为废物管理行业的关键参与者。"}
                {language === "my" &&
                  "Ditubuhkan pada tahun 2005, kami telah berkembang dari operasi kecil menjadi pemain utama dalam industri pengurusan sisa."}
              </p>
              <br />
              <p>
                {language === "en" &&
                  "Guided by our unwavering commitment to environmental stewardship, we are dedicated to minimising the ecological impact of waste. With every collection, we move one step closer to a cleaner, more sustainable future."}
                {language === "ch" &&
                  "在我们坚定不移的环境管理承诺的指导下，我们致力于最小化废物对生态的影响。每一次收集，我们都向更清洁、更可持续的未来迈进一步。"}
                {language === "my" &&
                  "Dipandu oleh komitmen kami yang tidak tergoyahkan terhadap pengurusan alam sekitar, kami berdedikasi untuk meminimumkan kesan ekologi sisa. Dengan setiap pengumpulan, kami bergerak selangkah lebih dekat ke masa depan yang lebih bersih dan lestari."}
              </p>
              <br />
              <p>
                {language === "en" &&
                  "We pride ourselves in our innovative recycling solutions, which we offer to other businesses to help make it easier for everyone to recycle. It is our job to keep the environment clean and recycle materials for reuse, to ensure the future generation's access to a clean and green environment."}
                {language === "ch" &&
                  "我们以创新的回收解决方案为荣，向其他企业提供这些解决方案，以帮助每个人更容易地进行回收。我们的工作是保持环境清洁并回收材料以供再利用，以确保未来一代人能够享有清洁和绿色的环境。"}
                {language === "my" &&
                  "Kami berbangga dengan penyelesaian kitar semula inovatif kami, yang kami tawarkan kepada perniagaan lain untuk membantu memudahkan semua orang mengitar semula. Tugas kami adalah menjaga kebersihan alam sekitar dan mengitar semula bahan untuk digunakan semula, untuk memastikan akses generasi masa depan kepada alam sekitar yang bersih dan hijau."}
              </p>
            </div>
          </FadeInScroll>
        </div>
      </div>
      <div className="px-6 lg:px-12 py-16 flex flex-col items-center lg:flex-row lg:items-start justify-center gap-14">
        <div className="w-full lg:w-4/6">
          <AnimateScrollWrapper>
            <motion.div variants={baseVariants({ x: -20 }, { x: 0 })}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-5">
                {language === "en" && "What we value"}
                {language === "ch" && "我们重视的价值观"}
                {language === "my" && "Apa yang kami hargai"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-stretch w-full">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={baseVariants({ x: -20 }, { x: 0 })}
                >
                  <Value {...value} />
                </motion.div>
              ))}
            </div>
          </AnimateScrollWrapper>
        </div>
        <div className="w-full lg:w-2/6 text-center lg:text-left">
          <AnimateScrollWrapper>
            <motion.div variants={baseVariants({ x: 50 }, { x: 0 })}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-5">
                {language === "en" && "...and our mission is to"}
                {language === "ch" && "...我们的使命是"}
                {language === "my" && "...dan misi kami adalah untuk"}{" "}
                <span className="text-accent">
                  {language === "en" && "lead"}
                  {language === "ch" && "引领"}
                  {language === "my" && "memimpin"}
                </span>{" "}
                {language === "en" && "in the field of recycling by:"}
                {language === "ch" && "在回收领域引领潮流："}
                {language === "my" && "dalam bidang kitar semula dengan:"}
              </h2>
            </motion.div>
            <ul className="list-image-[url(/images/star-solid.svg)] list-inside text-lg">
              {bulletPoints.map((text: string, index) => (
                <motion.div
                  key={index}
                  variants={baseVariants({ x: 50 }, { x: 0 })}
                >
                  <li>
                    <span className="ml-1">{text}</span>
                  </li>
                </motion.div>
              ))}
            </ul>
          </AnimateScrollWrapper>
        </div>
      </div>
      <div className="px-16 py-16 polka">
        <Carousel className="mx-auto" opts={{ align: "center", loop: true }}>
          <CarouselContent>
            {carouselImages.map((image) => (
              <CarouselItem
                key={image.alt}
                className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-md shadow-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

function Value({ title, icon, description }: Value) {
  return (
    <div className="w-full h-full bg-gray-200 rounded-md p-3 shadow-md flex flex-col">
      <h3 className="text-xl font-semibold">
        <FontAwesomeIcon icon={icon} className="mr-2 text-primary" />
        {title}
      </h3>
      <p className="mt-auto my-auto">{description}</p>
    </div>
  );
}

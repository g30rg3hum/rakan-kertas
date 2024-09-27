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

const heroImages: Image[] = [
  { src: "/images/hero-image1.jpg", alt: "Hero image 1" },
  { src: "/images/hero-image2.jpg", alt: "Hero image 2" },
  { src: "/images/hero-image3.jpg", alt: "Hero image 3" },
];

const companyUpsideFacts: CompanyUpsideFactProps[] = [
  {
    icon: faHandshake,
    title: "Reliable service",
    description:
      "Providing dependable and efficient recycling services for everyone.",
  },
  {
    icon: faLightbulb,
    title: "Innovative solutions",
    description:
      "Using creative recycling processes to turn waste back into useful resources.",
  },
  {
    icon: faThumbsUp,
    title: "Convenience for customers",
    description:
      "Providing dependable and efficient recycling services for everyone.",
  },
  {
    icon: faTree,
    title: "Environmental focus",
    description:
      "Promoting eco-friendly practices to reduce waste and protect the environment.",
  },
  {
    icon: faCertificate,
    title: "Multiple certifications",
    description:
      "We are certified by multiple organisations for our commitment to sustainability.",
  },
  {
    icon: faMoneyBillWave,
    title: "Incentives for recycling",
    description:
      "We offer competitive rates for recyclable materials, providing an incentive for recycling.",
  },
];

type QuestionAndAnswer = {
  question: string;
  answer: string;
};
const questionAndAnswers: QuestionAndAnswer[] = [
  {
    question: "Question 1",
    answer: "Answer to question 1.",
  },
  {
    question: "Question 2",
    answer: "Answer to question 2.",
  },
  {
    question: "Question 3",
    answer: "Answer to question 3.",
  },
  {
    question: "Question 4",
    answer: "Answer to question 4.",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row relative">
        <div className="bg-gray-950 text-white polka pt-48 px-6 lg:px-[5.5rem] lg:w-1/2 pb-36 text-center lg:text-left">
          <FadeInScroll>
            <h1 className="font-bold text-5xl lg:text-[3.62rem] mb-7 leading-tight">
              Your <span className="curved-underline">recycling</span> ally!
            </h1>
            <div className="mb-5 text-md sm:text-lg text-left">
              <div className="mx-auto lg:mx-0 w-max">
                <CheckedList
                  points={[
                    "Sustainable waste management",
                    "Innovative recycling solutions",
                    "Community and corporate partnerships",
                  ]}
                />
              </div>
            </div>

            <LinkButton href="" variant="default" text="Get a quote" />
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
                  src="/images/what-image.jpg"
                  alt="What image"
                  className="w-full md:max-w-xl rounded-lg shadow-lg"
                />
              </FramerHoverWrapper>
            </motion.div>
            <motion.div
              variants={baseVariants({ x: 10, display: "hidden" }, { x: 0 })}
            >
              <div className="w-full sm:max-w-xl text-center lg:text-left">
                <span className="text-md sm:text-lg italic">
                  What do we do?
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold mb-5">
                  Recycling made <span className="text-primary">easier.</span>{" "}
                  ✨
                </h2>
                <p>
                  At Rakan Kertas Sdn Bhd, we specialise in efficient and
                  innovative waste management tailored to the needs of
                  corporations and organisations, with a strong emphasis on
                  eco-friendly practices.
                </p>
                <br />
                <p>
                  Our comprehensive approach includes a variety of waste
                  collection solutions, accomodating both recyclable and
                  non-recyclable materials.
                </p>
                <br />
                <div className="text-lg">
                  <p className="font-semibold mb-2">
                    Some of the main materials that we collect:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center lg:justify-start">
                    <div>
                      <FontAwesomeIcon
                        icon={faScroll}
                        className="text-primary"
                      />
                      <span className="ml-2">Paper</span>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPallet}
                        className="text-primary"
                      />
                      <span className="ml-2">Wood</span>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faSheetPlastic}
                        className="text-primary"
                      />
                      <span className="ml-2">Plastic</span>
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faWrench}
                        className="text-primary"
                      />
                      <span className="ml-2">Metal</span>
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
            What can we offer you?
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-12">
            We have two main services.
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
                buttonLink=""
              />
            </motion.div>
            <motion.div
              variants={baseVariants({ x: 50, rotate: 5 }, { x: 0, rotate: 0 })}
            >
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
                buttonLink=""
              />
            </motion.div>
          </div>
        </AnimateScrollWrapper>
      </div>
      <div className="h-[650px] bg-[url('/images/landingpage.jpg')] bg-cover bg-center relative after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[300px] after:bg-gradient-to-b after:from-transparent after:to-[#2a2a36] after:z-2 after:background-texture-2"></div>
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
              You may have some questions...
            </span>
            <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeInScroll>

        <Accordion type="single" collapsible className="w-full max-w-xl">
          <AnimateScrollWrapper>
            {questionAndAnswers.map((qa, index) => (
              <motion.div key="index" variants={baseVariants()}>
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-lg">
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
            Sounds like something you&apos;re interested in?
          </h2>

          <LinkButton href="" variant="default" text="Get a quote" />
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
    <div className="flex flex-col gap-6 items-center z-20">
      <FramerHoverWrapper>
        <div className="w-full max-w-sm border border-[6px] border-white rounded-lg px-5 py-12 shadow-md relative select-none">
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
          <div className="text-md h-[250px]">
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

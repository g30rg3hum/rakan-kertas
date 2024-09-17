/* eslint-disable @next/next/no-img-element */
import CheckedList from "@/components/custom-ui/checked-list";
import { Image } from "@/components/custom-ui/image-slideshow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="px-6 py-10 flex flex-col gap-12 justify-center items-center text-center">
        <div>
          <h1 className="font-bold text-5xl lg:text-6xl mb-7 leading-tight text-center">
            Your <span className="curved-underline">recycling</span> ally!{" "}
            <span className="inline-block animate-spin duration-[3000ms]">
              ♻️
            </span>
          </h1>
          <div className="mb-5 text-md sm:text-lg flex justify-center text-left">
            <CheckedList
              points={[
                "Sustainable waste management",
                "Innovative recycling solutions",
                "Community and corporate partnerships",
              ]}
            />
          </div>

          <Link
            href=""
            className={cn(buttonVariants({ variant: "default" }), "px-14 py-1")}
          >
            Get a quote
          </Link>
        </div>
        <div className="relative">
          <span className="absolute top-0 right-0 z-10 translate-x-[20px] rotate-[10deg] bg-yellow-200 px-3 py-1 shadow-lg rounded font-medium text-sm">
            Try swiping through this!
          </span>
          <Carousel className="sm:max-w-xl">
            <CarouselContent>
              {heroImages.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full rounded-lg"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <div className="py-16 px-6 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14">
        <div className="w-full sm:max-w-xl text-center lg:text-left">
          <span className="text-md sm:text-lg italic">What do we do?</span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Recycling made <span className="text-primary">easier.</span> ✨
          </h2>
          <p>
            At Rakan Kertas Sdn Bhd, we specialise in efficient and innovative
            waste management tailored to the needs of corporations and
            organisations, with a strong emphasis on eco-friendly practices.
          </p>
          <br />
          <p>
            Our comprehensive approach includes a variety of waste collection
            solutions, accomodating both recyclable and non-recyclable
            materials.
          </p>
          <br />
          <div className="text-lg">
            <p className="font-semibold mb-2">
              Some of the main materials that we collect:
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center lg:justify-start">
              <div>
                <FontAwesomeIcon icon={faScroll} className="text-primary" />
                <span className="ml-2">Paper</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faPallet} className="text-primary" />
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
                <FontAwesomeIcon icon={faWrench} className="text-primary" />
                <span className="ml-2">Metal</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/images/what-image.jpg"
          alt="What image"
          className="w-full md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
      <div className="py-16 px-6 bg-primary text-white relative text-center flex flex-col items-center">
        <div className="absolute background-texture inset-0 z-10 opacity-30"></div>
        <span className="text-md sm:text-lg italic">
          What can we offer you?
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">
          We have two main services.
        </h2>
        <div className="flex flex-col md:flex-row gap-20 md:gap-16">
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
        </div>
      </div>
      <div className="py-16 px-6 bg-[#19192E] relative text-white md:px-20">
        <div className="absolute background-texture inset-0 opacity-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {companyUpsideFacts.map((fact) => (
            <CompanyUpsideFact key={fact.title} {...fact} />
          ))}
        </div>
      </div>
      <div className="py-16 px-6 flex flex-col items-center">
        <span className="text-md sm:text-lg italic">
          You may have some questions...
        </span>
        <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-xl">
          {questionAndAnswers.map((qa, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-lg">
                {qa.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {qa.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="py-16 px-6 flex flex-col items-center bg-gray-100 background-texture">
        <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
          Sounds like something you&apos;re interested in?
        </h2>
        <Link
          href=""
          className={cn(buttonVariants({ variant: "default" }), "px-14 py-1")}
        >
          Get a quote
        </Link>
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
    <div className="flex flex-col gap-6 items-center">
      <div className="w-full max-w-sm border border-[6px] border-white rounded-lg px-5 py-12 shadow-md relative ">
        <FontAwesomeIcon
          icon={icon}
          className="text-5xl text-white absolute top-[-20px] translate-x-[-50%] bg-primary px-4"
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
      <Link
        href={buttonLink}
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "px-12 py-1 z-20"
        )}
      >
        {buttonText}
      </Link>
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
    <div className="w-full">
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <h4 className="font-bold text-xl">{title}</h4>
      <p>{description}</p>
    </div>
  );
}

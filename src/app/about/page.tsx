/* eslint-disable @next/next/no-img-element */
import { Image } from "@/components/custom-ui/image-slideshow";
import {
  AnimateScrollWrapper,
  FadeInScroll,
  scrollBaseVariants as baseVariants,
} from "@/components/helpers/framer-scroll-helpers";
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
  { src: "/images/carousel-1.jpg", alt: "carousel 1" },
  { src: "/images/carousel-2.jpg", alt: "carousel 2" },
  { src: "/images/carousel-3.jpg", alt: "carousel 3" },
  { src: "/images/carousel-4.jpg", alt: "carousel 5" },
  { src: "/images/carousel-5.jpg", alt: "carousel 6" },
];

interface Value {
  title: string;
  icon: IconDefinition;
  description: string;
}
const values: Value[] = [
  {
    title: "Transparency",
    icon: faGlasses,
    description:
      "Openly sharing progress and practices with customers, ensuring integrity not only in environmental impact but also our business operations.",
  },
  {
    title: "Customer-centric",
    icon: faHeart,
    description:
      "Putting customers first, understanding their needs and providing solutions that are tailored to their unique requirements. We are committed to delivering the best service possible.",
  },
  {
    title: "SDG-aligned",
    icon: faLeaf,
    description:
      "Committed to achieving the Sustainable Development Goals set by the United Nations, we are dedicated to making a positive impact on the environment.",
  },
  {
    title: "Empowerment",
    icon: faHandFist,
    description:
      "Empowering our employees to make decisions and take actions that will benefit the environment and our customers.",
  },
];

export default function AboutUs() {
  return (
    <>
      <div
        className="flex min-h-[50vh] bg-center bg-cover relative text-white pt-32 lg:pt-36 px-6 md:px-20 lg:px-16"
        style={{ backgroundImage: "url('/images/scenery.jpg')" }}
      >
        <div className="bg-black inset-0 absolute w-full opacity-[0.675] z-0"></div>
        <div className="z-10 max-w-xl h-max mb-20">
          <FadeInScroll>
            <h1 className="font-bold text-5xl mb-5">
              We give waste
              <br /> <span className="text-primary">a second chance.</span>
            </h1>
            <p>
              Rakan Kertas specialises in the collection of all kinds of waste
              materials, and doing it in smart and earth-friendly ways. We work
              mostly with other corporations and business organisations, but our
              services are open to anyone needing to recycle or dispose of
              waste!
            </p>
            <br />
            <p>
              We tailor our services to meet the unique needs of our clients,
              offering both regular pickups and one-time bulk collections.
            </p>
          </FadeInScroll>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch">
        <div
          className="h-96 lg:h-auto w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/team.jpg)" }}
        ></div>
        <div className="mesh-gradient text-white px-6 lg:px-12 py-16 grow flex items-center">
          <FadeInScroll>
            <div className="h-max">
              <h2 className="text-4xl lg:text-5xl font-bold mb-5">
                Our origins
              </h2>
              <p className="font-semibold">
                Established in 2005, we&apos;ve evolved from a modest operation
                into a key player in the waste management industry.
              </p>
              <br />
              <p>
                Guided by our unwavering commitment to environmental
                stewardship, we are dedicated to minimising the ecological
                impact of waste. With every collection, we move one step closer
                to a cleaner, more sustainable future.
              </p>
              <br />
              <p>
                We pride ourselves in our innovative recycling solutions, which
                we offer to other businesses to help make it easier for everyone
                to recycle. It is our job to keep the environment clean and
                recycle materials for reuse, to ensure the future
                generation&apos;s access to a clean and green environment.
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
                What we value
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-stretch w-full">
              {values.map((value) => (
                <motion.div
                  key={value.title}
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
                ...and our mission is to{" "}
                <span className="text-accent">lead</span> in the field of
                recycling by:
              </h2>
            </motion.div>
            <ul className="list-image-[url(/images/star-solid.svg)] list-inside text-lg">
              {[
                "Developing sustianable practices",
                "Fostering a community environment",
                "Creating a legacy of positive environmental impacts",
              ].map((text: string) => (
                <motion.div
                  key={text}
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

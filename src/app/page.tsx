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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const heroImages: Image[] = [
  { src: "/images/hero-image1.jpg", alt: "Hero image 1" },
  { src: "/images/hero-image2.jpg", alt: "Hero image 2" },
  { src: "/images/hero-image3.jpg", alt: "Hero image 3" },
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
        <span className="text-md sm:text-lg italic">
          What can we offer you?
        </span>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">
          We have two main services.
        </h2>
        <div className="flex flex-col md:flex-row gap-20 md:gap-16">
          <div className="flex flex-col gap-6 items-center">
            <div className="w-full max-w-sm border border-[6px] border-white rounded-lg px-5 py-12 shadow-md relative ">
              <FontAwesomeIcon
                icon={faTruck}
                className="text-5xl text-white absolute top-[-20px] translate-x-[-50%] bg-primary px-4"
              />
              <h3 className="text-3xl font-bold">
                Disposable Waste
                <br />
                Collection
              </h3>
              <br />
              <div className="text-md h-[250px]">
                <p>
                  We will send an industrial waste bin to your area. This can be
                  anywhere - a construction site or even just the company
                  office. Any place where mass rubbish needs to be thrown.
                </p>
                <br />
                <p>
                  Then, once the waste bin is full, we will come and collect it.
                  It&apos;s really just that simple! No work needed on your end,
                  just gotta throw your rubbish in the bin.
                </p>
              </div>
            </div>
            <Link
              href=""
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "px-12 py-1"
              )}
            >
              More about waste collection
            </Link>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <div className="w-full max-w-sm border border-[6px] border-white rounded-lg px-5 py-12 shadow-md relative">
              <FontAwesomeIcon
                icon={faRecycle}
                className="text-5xl text-white absolute top-[-20px] translate-x-[-50%] bg-primary px-4 "
              />
              <h3 className="text-3xl font-bold">
                Recycling Material
                <br />
                Collection
              </h3>
              <br />
              <div className="text-md h-[250px]">
                <p>
                  This service is for those who have recyclable materials on
                  hand, have no use for them and would like to sell them for
                  some extra cash. Some easy money, if you will.
                </p>
                <br />
                <p>
                  We purchase and collect paper, carton boxes, metals, wood
                  pallets, and so much more! Just give us a call, let us know
                  what you&apos;d like to recycle, and we&apos;ll give you a
                  quote on what we can offer in return.
                </p>
              </div>
            </div>
            <Link
              href=""
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "px-12 py-1"
              )}
            >
              More about recycling
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

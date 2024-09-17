/* eslint-disable @next/next/no-img-element */
import CheckedList from "@/components/custom-ui/checked-list";
import ImageSlideshow, { Image } from "@/components/custom-ui/image-slideshow";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const heroImages: Image[] = [
  { src: "/images/hero-image1.jpg", alt: "Hero image 1" },
  { src: "/images/hero-image2.jpg", alt: "Hero image 2" },
  { src: "/images/hero-image3.jpg", alt: "Hero image 3" },
];

export default function Home() {
  return (
    <>
      <div className="px-6 py-14 flex flex-col gap-12 justify-center items-center text-center">
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
        <div className="w-full md:max-w-2xl">
          <ImageSlideshow images={heroImages} />
        </div>
      </div>
      <div className="py-12 px-6 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-14">
        <div className="w-full lg:max-w-xl">
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
          <p className="font-semibold">Some materials that we collect:</p>
        </div>
        <img
          src="/images/what-image.jpg"
          alt="What image"
          className="w-full md:max-w-lg rounded shadow-lg"
        />
      </div>
    </>
  );
}

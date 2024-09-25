/* eslint-disable @next/next/no-img-element */
import { Image } from "@/components/custom-ui/image-slideshow";
import { FadeInScroll } from "@/components/helpers/framer-scroll-helpers";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselImages: Image[] = [
  { src: "/images/carousel-1.jpg", alt: "carousel 1" },
  { src: "/images/carousel-2.jpg", alt: "carousel 2" },
  { src: "/images/carousel-3.jpg", alt: "carousel 3" },
  { src: "/images/carousel-4.jpg", alt: "carousel 5" },
  { src: "/images/carousel-5.jpg", alt: "carousel 6" },
];

export default function AboutUs() {
  return (
    <>
      <div
        className="flex min-h-[35rem] bg-center bg-cover relative text-white pt-40 lg:pt-44 px-6 md:px-20 lg:px-16"
        style={{ backgroundImage: "url('/images/metals.jpg')" }}
      >
        <div className="bg-black inset-0 absolute w-full opacity-[0.675] z-0"></div>
        <div className="z-10 max-w-xl h-max mb-24">
          <FadeInScroll>
            <h1 className="font-bold text-5xl mb-5">
              We give waste
              <br /> <span className="text-accent">a second chance.</span>
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
          className="h-96 w-full lg:w-[75rem] bg-cover bg-center"
          style={{ backgroundImage: "url(/images/team.jpg)" }}
        ></div>
        <div className="bg-primary text-white background-texture-2 px-12 grow flex items-center h-96">
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
                stewardship, we are dedicated ot minimising the ecological
                impact of waste. With every collection, we move one step closer
                to a cleaner, more sustainable future.
              </p>
            </div>
          </FadeInScroll>
        </div>
      </div>
      <div className="px-16 py-16">
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

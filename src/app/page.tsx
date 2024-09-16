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
      <div className="px-6 py-12 flex flex-col gap-12 justify-center items-center text-center">
        <div>
          <h1 className="font-bold text-5xl lg:text-6xl mb-7 leading-tight text-center">
            Your <span className="curved-underline">recycling</span> ally! ♻️
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
        <div className="w-full md:max-w-3xl">
          <ImageSlideshow images={heroImages} />
        </div>
      </div>
    </>
  );
}

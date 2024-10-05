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

/* eslint-disable @next/next/no-img-element */
export default function RecyclingMaterialCollection() {
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
                  Recycling material
                  <br /> <span className="text-primary">collection</span>
                </h1>
                <p>
                  As one of our many efforts to help the environment, we&apos;d
                  like to pay you for your recyclable waste! If you have
                  recyclable materials that you don&apos;t know what to do with,
                  we&apos;ll gladly take them off your hands and compensate you
                  for it.
                </p>
              </div>
            </motion.div>
          </div>
        </AnimateScrollWrapper>
      </div>
      <div className="flex flex-col lg:gap-10 lg:p-10 items-center bg-gray-100 background-texture">
        <FadeInScroll>
          <Step
            title="1. Contact us"
            icon={faPhone}
            image="/images/phone.jpg"
            body={[
              "You have recyclable waste (see below to check what we collect) that you have no use for. It might be leftover paper from your factory operations, or plastic bottles from your home.",
              "Contact us by clicking the blue button on the top right or scroll down to the bottom for more contact details.",
            ]}
            rightArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title="2. Rates given"
            icon={faCalculator}
            image="/images/calculator.jpg"
            body={[
              "Once you've contacted us, we will discuss the rates we can offer you for your recyclable waste. The rates will be based on the type of material and the quantity you have.",
              "We offer one of the most competitive rates in the market, so you can be sure you're getting the best deal from us!",
            ]}
            right
            leftArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title="3. Collection"
            icon={faHandHolding}
            image="/images/moving-truck.jpg"
            body={[
              "At this point, we've reached an agreement on what to do with your recyclable waste, and the next step would be for us to collect it from you.",
              "There are two options at this point - you can deliver the materials yourself or we can come and collect it from you (transport fees apply).",
            ]}
            rightArrow
          />
        </FadeInScroll>

        <FadeInScroll>
          <Step
            title="4. Payout"
            icon={faMoneyBill}
            image="/images/money.jpg"
            body={[
              "Once we receive the materials, we will accurately weigh all of it out. We will then calculate the total amount of money you will receive based on the agreed rates, and pay you accordingly!",
            ]}
            right
          />
        </FadeInScroll>
      </div>
      <MaterialsSection />
      <div className="mesh-gradient text-center py-16 px-6 text-white flex flex-col items-center">
        <h2 className="font-bold text-4xl lg:text-5xl mb-5 text-center">
          Sounds like something you&apos;re interested in?
        </h2>
        <p className="w-full max-w-4xl">
          This service is perfect for those who have leftover recycling
          materials and have no use for them! We&apos;d be more than happy to
          pay you for your recycling efforts.
        </p>
        <br />
        <LinkButton href="" variant="secondary" text="Get a quote" />
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

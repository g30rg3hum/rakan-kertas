import {
  faHandHolding,
  faPhone,
  faTrash,
  faTruck,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable @next/next/no-img-element */
export default function DisposableWasteCollection() {
  return (
    <>
      <div className="starry-sky px-12 pt-40 pb-20 flex justify-center text-white">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <img
            src="/images/garbage-truck.png"
            alt="Garbage truck illustration"
            className="w-full max-w-md shadow-lg"
          />
          <div className="w-full max-w-lg">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5">
              Disposable waste
              <br /> <span className="text-primary">collection</span>
            </h1>
            <p>
              Perfectly described by its name, we offer this service to those
              who need to dispose of any kind of waste. May it be at your main
              headquarters or factory, we can send an industrial waste bin to
              you, so you can manage your waste easily and quickly!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:gap-10 lg:p-10 items-center bg-gray-100 background-texture">
        <Step
          title="1. Contact us"
          icon={faPhone}
          image="/images/phone.jpg"
          body={[
            "There is a large amount of waste of which you have nowhere to dispose it at. It is taking up space and it's making the environment unpleasant! Fret not, Rakan Kertas is here to help you. Email or give us a call and we can help work something out.",
            "Either click the get a quote button at the top right or scroll down to the bottom for all our contact and location details!",
          ]}
        />
        <Step
          title="2. Trucks sent"
          icon={faTruck}
          image="/images/trucks.jpg"
          body={[
            "Once we have discussed and agreed on the terms, we will organise a date and send a truck (or how ever many you require) to your location.",
            "When we arrive, our team will help you place it in the most convenient spot for you.",
          ]}
          right
        />
        <Step
          title="3. Throw waste"
          icon={faTrash}
          image="/images/waste.jpg"
          body={[
            "With the waste bins planted at your proposed site, you can start throwing your waste in them.",
            "Toss to your heart's content! Don't worry about what you throw in there, we will take care of it for you.",
          ]}
        />
        <Step
          title="4. Collection"
          icon={faHandHolding}
          image="/images/moving-truck.jpg"
          body={[
            "When the waste bins are full, give us a call and we will send a truck to collect the waste.",
            "We will then take the waste to our recycling plant and sort out whatever you've thrown in there accordingly.",
          ]}
          right
        />
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
}
function Step({ title, icon, body, image, right }: StepProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row items-stretch lg:rounded-xl w-full lg:w-max shadow-lg lg:border border-black ${
        right ? "lg:ml-10" : "lg:mr-10"
      }`}
    >
      <div className="flex flex-col justify-center p-12 w-full lg:max-w-xl bg-white background-texture lg:rounded-l-xl">
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
    </div>
  );
}

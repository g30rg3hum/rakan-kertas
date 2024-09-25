/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export type Image = {
  src: string;
  alt: string;
};

interface Props {
  images: Image[];
}

export default function ImageSlideshow({ images }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full relative">
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute inset-0 w-full h-full object-cover object-center transition ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

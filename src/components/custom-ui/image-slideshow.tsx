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
    <div className="rounded shadow-lg w-full h-[400px] relative">
      {images.map((image, index) => (
        <img
          className={`absolute top-0 left-0 rounded w-full h-full object-cover object-center transition ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

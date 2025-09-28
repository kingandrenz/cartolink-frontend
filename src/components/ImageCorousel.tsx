"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageItem {
  id?: string | number;
  image: string;
}

interface ImageCorouselProps {
  data: ImageItem[];
  interval?: number;
}

const ImageCorousel: React.FC<ImageCorouselProps> = ({ data, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [interval, data.length]);

  return (
    <div className="w-full max-w-3xl mx-auto shawdo outline-0 border-none">
      {/* Image container */}
      <div className="relative h-64 overflow-hidden rounded-xl">
        {data?.map((item, index) => {
          const isActive = currentSlide === index;

          return (
            <div
              key={item.id ?? index}
              className={`absolute inset-0 transform transition-all duration-700 ease-in-out
                ${isActive ? "translate-x-0 opacity-100 z-10" : "-translate-x-full opacity-0 z-0"}`}
            >
              <Image
                src={item.image}
                alt={`slide ${index + 1}`}
                width={600}
                height={400}
                layout="fill"
                priority
                className="object-cover rounded-xl "
              />
            </div>
          );
        })}
      </div>

      {/* Indicators aligned to the right */}
      <div className="flex justify-end mt-4 space-x-2 mr-6">
        {data?.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-gray-800 dark:bg-white scale-125"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCorousel;

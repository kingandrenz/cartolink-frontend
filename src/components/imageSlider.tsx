"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface ImageItem {
  id?: string | number;
  image: string;
}

interface ImageSliderProps {
  data: ImageItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNext = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-xl">
      {/* Image container */}
      <div className="relative h-64 w-full overflow-hidden rounded-xl shadow">
        {data?.map((item, index) => (
          <div
            key={item.id ?? index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={`slide ${index + 1}`}
              width={600}
              height={400}
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>

      {/* Buttons below image */}
      <div className="flex justify-center gap-4 mt-3">
        <button
          onClick={handlePrevious}
          className="cursor-pointer bg-gray-300 text-black rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-400 transition"
        >
          <MdKeyboardArrowLeft className="h-4 w-4" />
        </button>

        <button
          onClick={handleNext}
          className="cursor-pointer bg-gray-300 text-black d rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-400 transition"
        >
          <MdKeyboardArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

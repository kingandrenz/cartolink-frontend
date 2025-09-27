"use client";

import Header from "../components/Header";
import ImageCorousel from "../components/ImageCorousel";
import ImageSlider from "../components/imageSlider";
import { courouselData, sliderData } from "../util/data";
import Generate from "../components/Generate";
import Footer from "../components/Footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import FooterLinks from "../components/FooterLinks";

const CAROUSEL_INTERVAL = 3000;

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="min-h-screen pt-[5rem] pb-[4rem] transition-colors duration-300">
      <Header />

      {/* Carousel + Slider Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-4 mt-10">
        <ImageCorousel data={courouselData} interval={CAROUSEL_INTERVAL} />
        <ImageSlider data={sliderData} />
      </section>

      {/* Generate Section */}
      <section className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Generate</h3>
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-1 text-sm text-blue-500 dark:text-blue-400 hover:underline"
          >
            {showAll ? (
              <>
                Show less <IoIosArrowUp />
              </>
            ) : (
              <>
                Show all <IoIosArrowDown />
              </>
            )}
          </button>
        </div>

        {/* Expand/Collapse Container */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden`}
          style={{
            maxHeight: showAll ? "2000px" : "500px", // Adjust maxHeight as needed
          }}
        >
          <Generate showAll={showAll} />
        </div>
      </section>

      <FooterLinks />
      <Footer />
    </div>
  );
}

"use client";
import React from "react";
// import Image from "next/image";
import { generateItems } from "@/util/data";
import { 
  BsCardImage, IoVideocam,
  FaPaintBrush, FaWandMagic,
  SiOpenjdk, GiMicrophone,
  BsPersonArmsUp, GiMagicSwirl
  } from "./Icons";

interface GenerateProps {
  showAll: boolean;
}

const Generate: React.FC<GenerateProps> = ({ showAll }) => {
  const displayedItems = showAll ? generateItems : generateItems.slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {displayedItems.map((item) => (
        <div
          key={item.label}
          className="flex items-center justify-between rounded-xl p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow"
        >
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center justify-center ${item.bgColor} rounded-lg`}
              style={{
                width: "3rem",
                height: "3rem",
                minWidth: "3rem",
                minHeight: "3rem",
              }}
            >
              {/* <Image
                src={item.genImage}
                alt={item.label}
                width={28}
                height={28}
                className="object-contain"
              /> */}

              {
                item.id === 1 ? (
                  <BsCardImage
                    size={28}
                    className="bg-gradient-to-b from-gray-600 to-gray-100 text-white"
                  />
                ) : item.id === 2 ? (
                  <IoVideocam
                    size={28}
                    className="bg-yellow-500 text-white"
                  />
                ) : item.id === 3 ? (
                  <FaPaintBrush
                    size={28}
                    className="bg-gradient-to-b from-sky-400 to-blue-200 text-white"
                  />
                ) : item.id === 4 ? (
                  <FaWandMagic
                    size={28}
                    className="bg-gradient-to-b from-gray-800 to-transparent text-white"
                  />
                ) : item.id === 5 ? (
                  <SiOpenjdk
                    size={28}
                    className="bg-gradient-to-b from-purple-700 to-purple-100 text-white"
                  />
                ) : item.id === 6 ? (
                  <GiMicrophone
                    size={28}
                    className="bg-gradient-to-b from-green-800 to-green-300 text-white"
                  />
                ) : item.id === 7 ? (
                  <BsPersonArmsUp
                    size={28}
                    className="bg-gradient-to-b from-gray-900 to-gray-700 text-white"
                  />
                ) : item.id === 8 ? ( // ✅ changed this to 8
                  <GiMagicSwirl
                    size={28}
                    className="rounded-full bg-gradient-to-b from-purple-500 to-pink-500 text-blue-500"
                  />
                ) : null
              }

            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium">{item.label}</h3>
                {item.newBtn && (
                  <span className="text-[10px] text-white bg-blue-600 px-1.5 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </div>
              {item.desc && (
                <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              )}
            </div>
          </div>

          <button
            onClick={item.onClick}
            disabled={!item.onClick}
            className={`text-xs px-3 py-1 rounded-full transition ${
              item.onClick
                ? "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                : "bg-gray-200 dark:bg-gray-600 cursor-not-allowed opacity-50"
            }`}
          >
            Open
          </button>
        </div>
      ))}
    </div>
  );
};

export default Generate;

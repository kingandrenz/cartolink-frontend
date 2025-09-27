"use client";
import React from "react";
import Image from "next/image";
import { generateItems } from "@/util/data";

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
              <Image
                src={item.genImage}
                alt={item.label}
                width={28}
                height={28}
                className="object-contain"
              />
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

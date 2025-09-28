"use client";
import React from "react";
import { GenerateItem } from "@/util/data";

interface CardProps {
  tool: GenerateItem;
}

const GenerateCard: React.FC<CardProps> = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <div className="flex items-center justify-between rounded-xl p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition hover:shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center ${tool.bgColor} rounded-lg`}
          style={{ width: "3rem", height: "3rem", minWidth: "3rem" }}
        >
          <Icon size={28} className={`${tool.textColor}`} />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium">{tool.label}</h3>
            {tool.newBtn && (
              <span className="text-[10px] text-white bg-blue-600 px-1.5 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
          {tool.desc && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {tool.desc}
            </p>
          )}
        </div>
      </div>

      <button
        onClick={tool.onClick}
        disabled={!tool.onClick}
        className={`text-xs px-3 py-1 rounded-full transition ${
          tool.onClick
            ? "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
            : "bg-gray-200 dark:bg-gray-600 cursor-not-allowed opacity-50"
        }`}
      >
        Open
      </button>
    </div>
  );
};

export default GenerateCard;

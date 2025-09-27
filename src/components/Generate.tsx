"use client";
import React from "react";
import { generateItems } from "@/util/data";
import GenerateCard from "./GenerateCard";

interface GenerateProps {
  showAll: boolean;
}

const Generate: React.FC<GenerateProps> = ({ showAll }) => {
  const displayedItems = showAll ? generateItems : generateItems.slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {displayedItems.map((item) => (
        <GenerateCard key={item.id} tool={item} />
      ))}
    </div>
  );
};

export default Generate;

"use client";

import Image from "next/image";

import useTheme from "@/hooks/useTheme";
import { IoIosArrowDown } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { BsCardImage } from "react-icons/bs";
import { IoSunny, IoSunnyOutline, IoVideocam } from "react-icons/io5";
import { FaPaintbrush, FaWandMagicSparkles } from "react-icons/fa6";
import { SiOpenjdk } from "react-icons/si";
import { FaBell, FaFolder } from "react-icons/fa";
import { RiImage2Fill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

function Header() {
  const [theme, setTheme] = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow transition-colors border-0 outline-none">
      {/* Left Section */}
      <div className="flex items-center gap-x-2">
        <Image src="/k-t.png" alt="K logo" width={64} height={64} />
        <div className="flex items-center gap-x-0.5">
          <Image
            src="/blur_1.png"
            alt="Profile avatar"
            width={44}
            height={44}
            className="rounded-full object-cover"
          />
          <span className="font-medium text-sm">KingAndrenz</span>
          <IoIosArrowDown className="cursor-pointer" />
        </div>
      </div>

      {/* Center Section */}
      <div className="flex items-center gap-x-3 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow transition-colors">
        <MdHome className="w-8 h-6 cursor-pointer bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 rounded-sm p-0.5" />
        <BsCardImage className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
        <IoVideocam className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
        <FaWandMagicSparkles className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
        <FaPaintbrush className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
        <SiOpenjdk className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
        <FaFolder className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-x-3">
        <div className="flex items-center gap-x-1.5 bg-gray-200 dark:bg-gray-700 px-2 py-1.5 rounded cursor-pointer">
          <RiImage2Fill className="w-5 h-5" />
          <span className="text-sm">Gallery</span>
        </div>
        <div className="flex items-center gap-x-1.5 bg-gray-200 dark:bg-gray-700 px-2 py-1.5 rounded cursor-pointer">
          <BiSupport className="w-5 h-5" />
          <span className="text-sm">Support</span>
        </div>
        <FaBell className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
        <IoSunny
          className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300"
          onClick={() => setTheme(isDark ? "light" : "dark")}
        />
        <div className="w-8 h-8 overflow-hidden rounded-full cursor-pointer">
          <Image
            src="/crystal.jpg"
            alt="Profile"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;

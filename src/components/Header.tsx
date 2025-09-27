"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";

import {
  IoIosArrowDown,
  MdHome,
  BsCardImage,
  IoMoon,
  IoSunnyOutline,
  IoVideocam,
  FaWandMagicSparkles,
  SiOpenjdk,
  FaBell,
  FaFolder,
  RiImage2Fill,
  BiSupport,
  FaPaintbrush,
} from "./Icons";

export default function Header() {
  const [theme, setTheme] = useTheme();
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);
  const mobilePanelRef = useRef<HTMLDivElement | null>(null);

  // close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
    if (window.innerWidth >= 768) setOpen(false); // 768px is the md breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // close on click outside mobile panel
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!open) return;
      if (
        mobilePanelRef.current &&
        !mobilePanelRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors border-0 outline-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-4 md:px-6 py-2">
        {/* Left */}
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-1">
            <Image
              src="/blur_1.png"
              alt="Profile avatar"
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <span className="font-medium text-sm">KingAndrenz</span>
            <IoIosArrowDown className="ml-0.5 w-4 h-4 text-gray-500 dark:text-gray-300" />
          </div>
        </div>

        {/* Center (desktop only) */}
        <nav className="hidden md:flex items-center gap-x-3 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl shadow transition-colors">
          <MdHome className="w-6 h-6 cursor-pointer bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 rounded-sm p-0.5" />
          <BsCardImage className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          <IoVideocam className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          <FaWandMagicSparkles className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          <FaPaintbrush className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          <SiOpenjdk className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
          <FaFolder className="w-5 h-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
        </nav>

        {/* Right */}
        <div className="flex items-center gap-x-3">
          {/* desktop actions */}
          <div className="hidden sm:flex items-center gap-x-3">
            <div className="flex items-center gap-x-1.5 bg-gray-200 dark:bg-gray-700 px-2 py-1.5 rounded cursor-pointer">
              <RiImage2Fill className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              <span className="text-sm">Gallery</span>
            </div>

            <div className="flex items-center gap-x-1.5 bg-gray-100 dark:bg-gray-700 px-2 py-1.5 rounded cursor-pointer">
              <BiSupport className="w-5 h-5 text-gray-700 dark:text-gray-200" />
              <span className="text-sm">Support</span>
            </div>
          </div>

          <FaBell className="w-5 h-5 cursor-pointer text-gray-600 dark:text-gray-300" />

          {/* theme toggle (desktop & mobile) */}
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isDark ? (
              <IoMoon className="w-5 h-5 hover:text-gray-600 dark:hover:text-gray-300" />
            ) : (
              <IoSunnyOutline className="w-5 h-5 hover:text-yellow-500 dark:hover:text-gray-300" />
            )}
          </button>

          {/* profile avatar */}
          <div className="w-8 h-8 overflow-hidden rounded-full cursor-pointer hidden sm:block">
            <Image
              src="/crystal.jpg"
              alt="Profile"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {/* simple hamburger / close icon */}
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-200"
              viewBox="0 0 24 24"
              fill="none"
            >
              {open ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div
          id="mobile-menu"
          ref={mobilePanelRef}
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-md"
        >
          <div className="px-4 py-3">
            {/* center icons in a grid */}
            <div className="grid grid-cols-4 gap-3">
              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <MdHome className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </button>

              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <BsCardImage className="w-6 h-6" />
                <span className="text-xs">Image</span>
              </button>

              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <IoVideocam className="w-6 h-6" />
                <span className="text-xs">Video</span>
              </button>

              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <FaWandMagicSparkles className="w-6 h-6" />
                <span className="text-xs">Magic</span>
              </button>

              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <FaPaintbrush className="w-6 h-6" />
                <span className="text-xs">Brush</span>
              </button>

              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <SiOpenjdk className="w-6 h-6" />
                <span className="text-xs">Train</span>
              </button>

              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <FaFolder className="w-6 h-6" />
                <span className="text-xs">Files</span>
              </button>

              <button className="flex flex-col items-center gap-1 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800">
                <SiOpenjdk className="w-6 h-6" />
                <span className="text-xs">More</span>
              </button>
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-gray-100 dark:border-gray-800" />

            {/* right-side items (mobile layout) */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 px-2 py-1.5 rounded">
                  <RiImage2Fill className="w-4 h-4" />
                  <span className="text-xs">Gallery</span>
                </div>

                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-2 py-1.5 rounded">
                  <BiSupport className="w-4 h-4" />
                  <span className="text-xs">Support</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaBell className="w-4 h-4" />
                <button
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <IoMoon className="w-4 h-4 hover:text-yellow-500 dark:hover:text-gray-300" />
                  ) : (
                    <IoSunnyOutline className="w-4 h-4 hover:text-gray-600 dark:hover:text-gray-300" />
                  )}
                </button>

                <div className="w-8 h-8 overflow-hidden rounded-full">
                  <Image
                    src="/crystal.jpg"
                    alt="profile"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

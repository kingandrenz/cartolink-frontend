"use client";
import Image from "next/image";
import useTheme from "@/hooks/useTheme";

export default function Footer() {
  const [theme] = useTheme();
  console.log("Footer: ", theme);

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-gray-800 text-white dark:bg-gray-300 dark:text-gray-800 p-4 h-[3rem] transition-colors duration-300 mt-0">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="text-sm font-medium flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <div className="h-10 w-10 flex items-center justify-center">
              <Image 
                src="/krea-ai.jpeg" 
                alt="krea logo"
                width={20}
                height={20}
              />
            </div>
            <span className="text-base font-semibold">Krea AI</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>Curated by</span>
          <div className="h-8 w-8">
            <Image
              src="/icons/mobbin_footer.svg"
              alt="Mobbin Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

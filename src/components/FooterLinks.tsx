import { PiNotebookFill, IoCard } from "./Icons";

export default function FooterLinks() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-6">
      {/* Gallery Section */}
      <div className="px-6 py-4">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Gallery
        </h2>
        {/*  gallery content/grid (placeholder): adding future contents later, I will put it here */}
      </div>

      <div className="flex items-center gap-4">
        {/* Legal */}
        <div className="flex items-center gap-1">
          <PiNotebookFill className="w-3 h-3 text-gray-500 dark:text-white" />
          <a
            href="#"
            className="text-xs text-gray-500 hover:underline dark:text-white"
          >
            Legal
          </a>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-1">
          <IoCard className="w-3 h-3 text-gray-500 dark:text-white" />
          <a
            href="#"
            className="text-xs text-gray-500 hover:underline dark:text-white"
          >
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
}

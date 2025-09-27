import { PiNotebookFill, IoCard } from "./Icons";

export default function FooterLinks() {
  return (
    <div className="w-full h-16 flex items-center justify-end px-6">
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

export default function FooterLinks() {
  return (
    <div className="w-full h-16 flex items-center justify-end px-6">
      <div className="flex items-center gap-4">
        <a href="#" className="text-xs text-gray-500 hover:underline dark:text-white">
          Legal
        </a>
        <a href="#" className="text-xs text-gray-500 hover:underline dark:text-white">
          Pricing
        </a>
      </div>
    </div>
  );
}
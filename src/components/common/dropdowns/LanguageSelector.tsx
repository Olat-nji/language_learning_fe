import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import { useState } from "react";

const languages = [{ name: "French", flag: "🇫🇷" }];

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="border-neutral inline-flex w-full justify-between rounded-xl border bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg hover:bg-neutral-50 focus:outline-none"
        >
          Language
          {isOpen ? (
            <ChevronUp className="ml-2" />
          ) : (
            <ChevronDown className="ml-2" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-60 rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="p-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex cursor-pointer items-center p-2">
                <span className="mr-2">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            ))}
            <div className="border-t border-gray-200"></div>
            <div className="flex cursor-pointer items-center p-2">
              <Globe className="mr-2" />
              <span>Select new language</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

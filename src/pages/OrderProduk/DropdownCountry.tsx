import React, { useCallback, useState } from "react";
import { CountryResponseItem, IDropdownCountry } from "../../utils/interfaces";

const DropdownCountry: React.FC<IDropdownCountry> = ({
  label,
  options,
  defaultValue,
  optionChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<
    CountryResponseItem | undefined
  >();

  const toggleDropdown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleOptionClick = (option: CountryResponseItem) => {
    optionChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full mb-5">
      <h4
        className="font-medium text-dark cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </h4>
      <div className="mt-2">
        <button
          type="button"
          className="flex w-full justify-between items-center py-4 px-4 rounded-lg shadow-md bg-[white] shadow-dark-100/5"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption.country_name : defaultValue}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="bg-[white] absolute top-24 left-0 w-full z-20 shadow-2xl shadow-primary-100/20 rounded-lg h-[200px] overflow-y-auto">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option: CountryResponseItem) => (
              <button
                key={option.id}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-[#e9e9e9]"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {option.country_name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownCountry;

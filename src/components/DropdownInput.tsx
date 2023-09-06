import React, { useState, useEffect } from "react";
import { IDropdown } from "../utils/interfaces";
import { ServiceByCountryResponse } from "../pages/OrderProduk";
import { formatRupiah } from "../utils/functions";

const DropdownInput: React.FC<IDropdown> = ({
  label,
  options,
  defaultValue,
  optionChange,
}) => {
  const [selectedOption, setSelectedOption] =
    useState<ServiceByCountryResponse | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: ServiceByCountryResponse) => {
    setSelectedOption(option);
    optionChange(option);
    setIsOpen(false);
    setInputValue("");
  };

  const handleInputSelectValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (options.length !== 0 && options !== undefined) {
      setFilteredOptions(
        options.filter((opt: ServiceByCountryResponse) => {
          return opt?.name.toLowerCase().includes(inputValue);
        })
      );
    }
  }, [inputValue, options]);

  return (
    <div className="relative inline-block text-left w-full mb-5">
      <h4
        className="font-medium text-dark cursor-default"
        onClick={toggleDropdown}
      >
        {label}
      </h4>
      <div className="mt-2">
        <button
          type="button"
          className="flex w-full justify-between items-center py-4 px-4 rounded-lg shadow-md bg-[white] shadow-dark-100/5"
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption.name : defaultValue}
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
        <div className="bg-[white] absolute bottom-16 left-0 w-full z-20 shadow-2xl shadow-primary-100/20 rounded-lg">
          <div
            className="p-3 h-[200px] overflow-auto"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="mb-4">
              <input
                type="text"
                className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
                placeholder="Pilih layanan"
                onChange={handleInputSelectValue}
              />
            </div>
            {filteredOptions?.map((option: ServiceByCountryResponse) => (
              <button
                key={option.id}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-[#e9e9e9]"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                {`${option.name} (${formatRupiah(option.price)})`}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownInput;

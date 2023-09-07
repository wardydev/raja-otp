import React, { useCallback, useEffect, useState } from "react";
import IChevronLeft from "/icons/IChevronLeft.svg";
import IChevronRight from "/icons/IChevronRight.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    let calculatedStartPage = startPage;

    if (totalPages > 5) {
      if (currentPage > 3) {
        calculatedStartPage = Math.min(currentPage - 2, totalPages - 4);
      } else {
        calculatedStartPage = 1;
      }
    }

    setStartPage(calculatedStartPage);
  }, [currentPage, totalPages]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const renderPage = useCallback(() => {
    const pageNumbers = [];
    let maxPages = 5;

    if (totalPages <= 5) {
      maxPages = totalPages;
    } else if (currentPage > 3) {
      maxPages = Math.min(currentPage + 2, totalPages);
    }

    for (let i = startPage; i <= maxPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <button
            className={`py-2 px-4 rounded-lg -mx-3 font-medium ${
              currentPage === i
                ? "bg-secondary-100 hover:bg-secondary-200 text-light"
                : "text-gray"
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }

    if (totalPages > 5 && maxPages < totalPages) {
      pageNumbers.push(
        <li key={maxPages + 1}>
          <button
            className="py-2 px-4 rounded-lg -mx-3 text-gray cursor-default"
            disabled={true}
          >
            ...
          </button>
        </li>
      );
      pageNumbers.push(
        <li key={maxPages + 2}>
          <button
            className={`py-2 px-4 rounded-lg -mx-3 font-medium ${
              currentPage === totalPages
                ? "bg-secondary-100 hover:bg-secondary-200 text-light"
                : "text-gray"
            }`}
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        </li>
      );
    }

    return pageNumbers;
  }, [currentPage, totalPages, startPage, onPageChange]);

  return (
    <div className="flex justify-end mt-6 mb-2">
      <nav>
        <ul className="bg-[white] shadow-lg py-4 px-6 rounded-2xl shadow-[#0000000c] flex items-center space-x-4">
          <li className=" mr-4">
            <button
              className={`p-3 rounded-lg flex items-center ${
                isFirstPage
                  ? "disabled bg-[#eaeaea] hover:bg-[#d4d4d4]"
                  : "bg-[#c2c1c1] hover:bg-[#999999]"
              }`}
              onClick={() => onPageChange(currentPage - 1)}
              disabled={isFirstPage}
            >
              <img src={IChevronLeft} alt="chevron-left" width={16} />
            </button>
          </li>
          {renderPage()}
          <li className="ml-4">
            <button
              className={`p-3 rounded-lg flex items-center ${
                isLastPage
                  ? "disabled bg-[#eaeaea] hover:bg-[#d4d4d4]"
                  : "bg-primary-100 hover:bg-primary-200"
              }`}
              onClick={() => onPageChange(currentPage + 1)}
              disabled={isLastPage}
            >
              <img src={IChevronRight} alt="chevron-right" width={16} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

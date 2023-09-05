import React from "react";
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
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

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
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                className={`py-2 px-4 rounded-lg -mx-3 font-medium ${
                  currentPage === index + 1
                    ? "bg-secondary-100 hover:bg-secondary-200 text-light"
                    : "text-[gray]"
                }`}
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
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

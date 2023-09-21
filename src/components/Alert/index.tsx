import React, { useCallback, useState, useMemo } from "react";
import ICorrect from "/icons/ICorrectAlert.svg";
import IError from "/icons/IErrorAlert.svg";

interface AlertProps {
  message: string | undefined;
  types: "success" | "danger";
}

const Alert: React.FC<AlertProps> = ({ message, types = "success" }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  const alertTypes = useMemo(() => {
    return types === "success"
      ? "border-[#42C065] bg-[#EBF7EE]"
      : "border-[#ED4E2C] bg-[#FCEDEA]";
  }, [types]);

  const alertHeading = useMemo(() => {
    return types === "success" ? "Sukses!" : "Error!";
  }, [types]);

  const alertIcon = useMemo(() => {
    return types === "success" ? ICorrect : IError;
  }, [types]);

  return (
    <>
      {isOpen && (
        <div
          className={`border-l-4 ${alertTypes} p-4 rounded-lg flex justify-between items-center w-full mb-4  transition-all`}
        >
          <div className="flex items-center">
            <img src={alertIcon} alt="" width={45} className="mr-4" />
            <div className="w-full mr-[7px]">
              <h1 className="text-lg font-semibold">{alertHeading}</h1>
              <p className="text-sm">{message}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.293a1 1 0 111.414-1.414L10 8.586l4.293-4.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;

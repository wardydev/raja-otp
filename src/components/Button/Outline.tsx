import React, { useCallback } from "react";
import { IButton } from "../../utils/interfaces";

const Outline: React.FC<IButton> = ({
  title,
  handleButton,
  isDisabled = false,
}) => {
  const handleButtonAction = useCallback(() => {
    handleButton();
  }, [handleButton]);
  return (
    <button
      className={`text-[white] ${
        isDisabled ? "bg-[#bdbcbc]" : "bg-[#c2c2c2] hover:bg-[#acacac]"
      } p-2 rounded-lg shadow-xl w-full`}
      onClick={handleButtonAction}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Outline;

import React, { useCallback } from "react";

interface IButton {
  title: string;
  handleButton: () => void;
  isDisabled: boolean;
}

const Button: React.FC<IButton> = ({
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
        isDisabled ? "bg-[#bdbcbc]" : "bg-gradient-to-tr shadow-primary-100/30"
      } from-primary-100 to-secondary-100 hover:from-primary-200 hover:to-secondary-100 p-3 rounded-lg shadow-xl w-full`}
      onClick={handleButtonAction}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;

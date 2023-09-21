import React from "react";

interface ICardContainer {
  children: React.ReactNode;
  isCustomBackground?: boolean;
  customBackground?: string;
}

const CardContiner: React.FC<ICardContainer> = ({
  children,
  isCustomBackground = false,
  customBackground,
}) => {
  return (
    <div
      className={`${
        isCustomBackground
          ? `bg-[${customBackground}]`
          : "bg-[white]" ?? "bg-[white]"
      } shadow-lg shadow-primary-100/10 rounded-3xl p-6`}
    >
      {children}
    </div>
  );
};

export default CardContiner;

import React from "react";

const CardContiner = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[white] shadow-lg shadow-primary-100/10 rounded-xl p-6 mt-8">
      {children}
    </div>
  );
};

export default CardContiner;

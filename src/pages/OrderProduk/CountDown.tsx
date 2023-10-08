import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialSeconds: number;
}

const Countdown: React.FC<CountdownProps> = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        clearInterval(interval);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const displayMinutes = Math.floor(seconds / 60);
  const displaySeconds = seconds % 60;

  return (
    <div className="bg-[#c9c9c9] rounded p-2">
      <div className="font-medium text-[#4e4e4e] text-xl lg:text-base">
        {displayMinutes.toString().padStart(2, "0")}:
        {displaySeconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default Countdown;

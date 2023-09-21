import React, { useState, useEffect } from "react";

interface CountdownProps {
  initialMinutes: number;
  status: string;
}

const Countdown: React.FC<CountdownProps> = ({ initialMinutes, status }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        // Handle ketika hitung mundur selesai
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  useEffect(() => {
    if (status === "3") {
      setMinutes(initialMinutes);
      setSeconds(0);
    }
  }, [status, initialMinutes]);

  return (
    <div>
      <div className="font-bold text-primary-100 text-xl lg:text-base">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default Countdown;

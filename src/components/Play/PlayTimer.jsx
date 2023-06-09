import React, { useState, useEffect } from "react";

const PlayTimer = ({setTime}) => {

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the seconds
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update minutes and hours when seconds reach 60
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }

    if (minutes === 60) {
      setMinutes(0);
      setHours((prevHours) => prevHours + 1);
    }

    setTime(seconds + minutes * 60 + hours * 60 * 60);
  }, [seconds, minutes]);

  return (
    <div>
      <span>{hours.toString().padStart(2, "0")}:</span>
      <span>{minutes.toString().padStart(2, "0")}:</span>
      <span>{seconds.toString().padStart(2, "0")}</span>
    </div>
  );
};

export default PlayTimer;

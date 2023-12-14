"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        onTimeUp();
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onTimeUp]);

  const formattedTime = `${
    timeLeft.days ? `${timeLeft.days} days : ` : ""
  }${String(timeLeft.hours).padStart(2, "0")}:${String(
    timeLeft.minutes
  ).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`;

  return (
    <div className="timer font-mono text-lg">
      {Object.keys(timeLeft).length > 0 ? formattedTime : "Time's up!"}
    </div>
  );
};

export default CountdownTimer;

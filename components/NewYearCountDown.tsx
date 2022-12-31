import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export const Countdown = () => {
  const getTimeUntilNewYear = () => {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const difference = nextYear.getTime() - now.getTime();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeUntilNewYear, setTimeUntilNewYear] = useState(
    getTimeUntilNewYear()
  );

  const [isConfetti, setIsConfetti] = useState(false);

  const tick = () => {
    setTimeUntilNewYear(getTimeUntilNewYear());
  };

  const startConfetti = () => {
    setIsConfetti(true);
    confetti({
      particleCount: 200,
      spread: 200,
      origin: { y: 0.6 },
    });
  };

  const stopConfetti = () => {
    setIsConfetti(false);
  };

  React.useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  useEffect(() => {
    if (timeUntilNewYear.hours === 0 && timeUntilNewYear.minutes === 0) {
      startConfetti();
    } else {
      stopConfetti();
    }
  }, [timeUntilNewYear]);


  return (
    <div className="flex flex-col items-center justify-center gap-5 m-5">
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <p className="text-5xl md:text-6xl font-extrabold text-slate-100">
          {timeUntilNewYear.days} days, {timeUntilNewYear.hours} hours,{" "}
          {timeUntilNewYear.minutes} minutes and {timeUntilNewYear.seconds}{" "}
          seconds
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-500">Countdown</h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-100 m-3">
          {timeUntilNewYear.days.toString().padStart(2, "0")}:
          {timeUntilNewYear.hours.toString().padStart(2, "0")}:
          {timeUntilNewYear.minutes.toString().padStart(2, "0")}:
          {timeUntilNewYear.seconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}



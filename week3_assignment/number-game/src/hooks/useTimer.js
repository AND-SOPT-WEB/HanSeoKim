import { useState, useRef, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const timerInterval = useRef(null);
  const startTime = useRef(0);
  const isRunning = useRef(false);

  const startTimer = () => {
    if (isRunning.current) return;
    startTime.current = Date.now();
    isRunning.current = true;
    timerInterval.current = setInterval(() => {
      const addedTime = Date.now() - startTime.current;
      setTime((addedTime / 1000).toFixed(2));
    }, 10);
  };
  const stopTimer = () => {
    clearInterval(timerInterval.current);
    isRunning.current = false;
  };
  const resetTimer = () => {
    stopTimer();
    setTime(0);
    startTime.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerInterval.current);
  }, []);

  return { time, startTimer, resetTimer, stopTimer };
};

import { useState, useRef, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const timerInterval = useRef(null);
  const startTime = useRef(0);

  const startTimer = () => {
    startTime.current = Date.now();
    timerInterval.current = setInterval(() => {
      const addedTime = Date.now() - startTime.current;
      setTime((addedTime / 1000).toFixed(2));
    }, 10);
  };
  const resetTimer = () => {
    clearInterval(timerInterval.current);
    setTime(0);
    startTime.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerInterval.current);
  }, []);

  return { time, startTimer, resetTimer };
};

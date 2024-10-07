import { useState, useEffect } from 'react';

export const useResendCodeTimer = (initialTime: number) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const resetTimer = () => {
    setTimer(initialTime);
  };

  return { timer, resetTimer };
};

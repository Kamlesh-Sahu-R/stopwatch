import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    } else if (!isRunning && interval !== null) {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // cleanup
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimer(0);
  };

  return (
    <div >
      <h1>Stopwatch</h1>
      <h4>Time: {formatTime(timer)}</h4>
      <div>
        <button onClick={handleStartStop} >{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset} >Reset</button>
      </div>
    </div>
  );
}



export default Stopwatch;

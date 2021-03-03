import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type AuthTimerProps = {
  initialTime: number;
  setInitialTime: Dispatch<SetStateAction<number>>;
};

const AuthTimer = ({ initialTime, setInitialTime }: AuthTimerProps) => {
  useEffect(() => {
    if (initialTime > 0) {
      const Counter = setInterval(() => {
        setInitialTime((prevState) => prevState - 1);
      }, 1000);
      return () => clearInterval(Counter);
    }
  }, [initialTime]);
  const timeFormat = (initialTime: number) => {
    const m = Math.floor(initialTime / 60).toString();
    let s = (initialTime % 60).toString();
    if (s.length === 1) s = `0${s}`;
    return `${m}:${s}`;
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "0",
        fontSize: "14px",
        color: "#ff5252",
        letterSpacing: "-0.4px",
        position: "relative",
        left: "70%",
        margin: "0",
      }}
    >
      {timeFormat(initialTime)}
    </span>
  );
};

export default AuthTimer;

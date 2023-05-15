"use client";
import { useState, useEffect } from "react";

export const useCheckDevice = () => {
  const [device, setDevice] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setDevice(screenWidth >= 768 ? "tablet" : "mobile");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

"use client";

export const checkDevice = () => {
  const width = window.innerWidth;
  if (width <= 768) {
    return "mobile";
  } else {
    return "tablet";
  }
};

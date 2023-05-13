"use client";
import { useEffect } from "react";

const HeaderBurgerWrapper = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <section className="w-full h-full fixed top-0 left-0 right-0 bg-white z-50">
      {children}
    </section>
  );
};

export default HeaderBurgerWrapper;

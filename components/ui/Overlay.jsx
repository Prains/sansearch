"use client";

import { useEffect } from "react";

const Overlay = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <section className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full bg-[#939393]/60 z-50">
      {children}
    </section>
  );
};

export default Overlay;

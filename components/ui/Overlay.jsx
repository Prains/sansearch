"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import links from "@/utils/links";

const Overlay = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const handleOverlayClick = (e) => {
      if (e.target.id !== "overlay") {
        return null;
      }
      router.push(links.mainpage);
    };
    const overlay = document.querySelector("#overlay");
    overlay.addEventListener("click", handleOverlayClick);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      overlay.removeEventListener("click", handleOverlayClick);
    };
  }, [router]);

  return (
    <section
      id="overlay"
      className="fixed top-0 left-0 right-0 flex items-center justify-center w-full h-full bg-[#939393]/60 z-50"
    >
      {children}
    </section>
  );
};

export default Overlay;

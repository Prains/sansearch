"use client";
import AccesErrorPopup from "@/components/Popups/AccesErrorPopup/AccesErrorPopup";
import { useSearchParams } from "next/navigation";

const Error = () => {
  const params = useSearchParams();
  const name = params.get("name");

  return <AccesErrorPopup name={name} />;
};

export default Error;

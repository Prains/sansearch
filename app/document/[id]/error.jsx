"use client";
import Main from "@/components/Main/Main";

export default function ErrorWrapper({ error }) {
  return (
    <>
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      <h1>ERROR {error.message}</h1>;
    </>
  );
}

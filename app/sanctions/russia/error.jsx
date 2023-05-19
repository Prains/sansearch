"use client";
import Main from "@/components/Main/Main";
import ErrorMessage from "@/components/DocumentPage/ErrorMessage/ErrorMessage";

export default function ErrorWrapper() {
  return (
    <>
      <Main searchingZone="Russia" searchingZoneTitle="Санкции РФ" />
      <ErrorMessage>
        На сервере произошла ошибка. Мы прилагаем все усилия, чтобы решить эту
        проблему как можно скорее.
      </ErrorMessage>
    </>
  );
}

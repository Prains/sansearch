import ErrorMessage from "@/components/DocumentPage/ErrorMessage/ErrorMessage";
import Main from "@/components/Main/Main";

export default function NotFound() {
  return (
    <>
      <Main searchingZone="Eu" searchingZoneTitle="Санкции ЕС" />
      <ErrorMessage>Документ не найден</ErrorMessage>
    </>
  );
}

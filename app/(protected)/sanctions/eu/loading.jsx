import Main from "@/components/Main/Main";
import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    <>
      <Main searchingZone="eu" searchingZoneTitle="Санкции ЕС" />
      <Loader className="mt-[30px]" />;
    </>
  );
}

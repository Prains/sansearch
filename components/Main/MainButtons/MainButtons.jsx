import Button from "@/components/ui/Button";

const buttons = [
  {
    id: "ru",
    title: "Санкции РФ",
  },
  {
    id: "usa",
    title: "Санкции США",
  },
  {
    id: "eu",
    title: "Санкции ЕС",
  },
];

const MainButtons = ({ zone, setZone }) => {
  const extraStyleForButton = (id) => id === zone && `!bg-white-orange`;
  return (
    <article className="flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5">
      {buttons.map((button) => (
        <Button
          onClick={() => setZone(button.id)}
          className={extraStyleForButton(button.id)}
          key={button.id}
          type="rounded"
        >
          {button.title}
        </Button>
      ))}
    </article>
  );
};

export default MainButtons;

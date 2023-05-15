import Button from "@/components/ui/Button";

const MainButtons = () => {
  return (
    <article className="flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5">
      <Button type="rounded">Санкции РФ</Button>
      <Button type="rounded">Санкции США</Button>
      <Button type="rounded">Санкции ЕС</Button>
    </article>
  );
};

export default MainButtons;

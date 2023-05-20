import Button from "@/components/ui/Button";
import { setSearchingZone } from "@/services/reducers/ui/uiReducer";
import { useDispatch, useSelector } from "react-redux";

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

const MainButtons = () => {
  const dispatch = useDispatch();
  const searchingZone = useSelector((state) => state.ui.searchingZone);

  const handleClickButton = (zone) => {
    dispatch(setSearchingZone(zone));
  };

  const extraStyleForButton = (zone) =>
    zone === searchingZone && `!bg-white-orange`;

  return (
    <article className="flex items-center justify-center flex-col mt-[25px] gap-4 lg:flex-row lg:justify-start lg:mt-5">
      {buttons.map((button) => (
        <Button
          onClick={() => handleClickButton(button.id)}
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

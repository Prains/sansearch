import Subtitle from "@/components/ui/Subtitle";
import VBlock from "./VBlock/VBlock";

const Valueables = () => {
  return (
    <section className="w-[75%] mx-auto my-0 flex items-center justify-center flex-col">
      <Subtitle className="w-[200px]">наши ценности</Subtitle>
      <div>
        <VBlock />
      </div>
    </section>
  );
};

export default Valueables;

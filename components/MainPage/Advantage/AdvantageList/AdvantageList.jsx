"use client";

import AdvantageListItem from "./AdvantageListItem/AdvantageListItem";

const AdvantageList = ({ list }) => {
  return (
    <ul className="max-w-[90%] mt-[28px] mb-[30px] lg:my-[52px]">
      {list?.map((advantage, i) => (
        <AdvantageListItem key={i} text={advantage} />
      ))}
    </ul>
  );
};

export default AdvantageList;

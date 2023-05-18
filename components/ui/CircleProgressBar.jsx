import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/**
 * @param {number}  percentage - от 0 до 100.
 * @param {number}  current - текущее значение.
 * @param {number}  total - общее значение.
 */

const CircleProgressBar = ({ percentage, current, total }) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={current + " из " + total}
      styles={{
        path: {
          stroke: "#FFC56D",
        },
        trail: {
          stroke: "rgba(255, 197, 109, 50%)",
          height: "10",
        },
        text: {
          fontSize: "16px",
          fill: "#939393",
        },
      }}
    />
  );
};

export default CircleProgressBar;

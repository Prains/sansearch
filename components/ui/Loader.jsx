import { PulseLoader } from "react-spinners";

/**
 * @param {number}  size - размер лоадера
 * @param {string}  color - HEX-code цвета, пример: "#FFC56D"
 * @param {string}  className - стилизация для обертки над спиннером
 * @param {any}  rest - все остальное
 */

const Loader = ({ size = 16, color = "#FFC56D", className, ...rest }) => {
  return (
    <div
      className={`w-full flex items-center justify-center ${className}`}
      {...rest}
    >
      <PulseLoader size={size} color={color} />
    </div>
  );
};

export default Loader;

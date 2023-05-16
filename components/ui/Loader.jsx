import { PulseLoader } from "react-spinners";

/**
 * @param {number}  size - размер лоадера
 */

const Loader = ({ size = 16, className, ...rest }) => {
  return (
    <div
      className={`w-full flex items-center justify-center ${className}`}
      {...rest}
    >
      <PulseLoader size={size} color="#FFC56D" />
    </div>
  );
};

export default Loader;

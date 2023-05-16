import { PulseLoader } from "react-spinners";

/**
 * @param {number}  size - размер лоадера
 */

const Loader = ({ size = 16, ...rest }) => {
  return (
    <div {...rest}>
      <PulseLoader size={size} color="#FFC56D" />
    </div>
  );
};

export default Loader;

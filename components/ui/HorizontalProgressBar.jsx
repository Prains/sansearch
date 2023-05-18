import ProgressBar from "@ramonak/react-progress-bar";

const HorizontalProgressBar = ({ completed = 1 }) => {
  return (
    <ProgressBar
      completed={completed}
      bgColor="#FFB443"
      height="7px"
      borderRadius="5px"
      labelAlignment="left"
      isLabelVisible={false}
      baseBgColor="rgba(255, 197, 109, 50%)"
      labelColor="#de3737"
      maxCompleted={100}
    />
  );
};

export default HorizontalProgressBar;

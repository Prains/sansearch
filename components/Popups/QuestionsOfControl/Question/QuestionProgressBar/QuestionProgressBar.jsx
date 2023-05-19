import CircleProgressBar from "@/components/ui/CircleProgressBar";
import HorizontalProgressBar from "@/components/ui/HorizontalProgressBar";
import { useCheckDevice } from "@/hooks/useCheckDevice";

const QuestionProgressBar = ({ numberOfCurrentQuestion, questions }) => {
  const device = useCheckDevice();
  const percentage = (numberOfCurrentQuestion / questions.length) * 100;
  return (
    <>
      {device === "mobile" && (
        <div className="flex items-center order-3 justify-center w-[93px] h-[93px] mx-auto">
          <CircleProgressBar
            percentage={percentage}
            current={numberOfCurrentQuestion}
            total={questions.length}
          />
        </div>
      )}
      {device === "tablet" && (
        <div className="w-full mb-[26px] md:order-1">
          <p className="text-[24px] mb-[10px] text-white-black text-center">
            Вопрос {numberOfCurrentQuestion} из {questions.length}
          </p>
          <HorizontalProgressBar completed={percentage} />
        </div>
      )}
    </>
  );
};

export default QuestionProgressBar;

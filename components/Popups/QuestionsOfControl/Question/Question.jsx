"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import QuestionProgressBar from "./QuestionProgressBar/QuestionProgressBar";
import QuestionRadioButtons from "./QuestionRadioButtons/QuestionRadioButtons";
import QuestionText from "./QuestionText/QuestionText";

const Question = ({
  questions,
  setAnswers,
  setIsFinished,
  numberOfCurrentQuestion,
  setNumberOfCurrentQuestion,
  currentQuestion,
}) => {
  const [value, setValue] = useState("");
  // const currentQuestion = questions[numberOfCurrentQuestion - 1];

  const handleClickNextQuestion = () => {
    setAnswers((prevAnswers) => [...prevAnswers, value]);
    if (numberOfCurrentQuestion === questions.length) {
      setIsFinished(true);
    } else {
      setNumberOfCurrentQuestion((p) => p + 1);
      setValue("");
    }
  };

  const handleClickPrevQuestion = () => {
    if (numberOfCurrentQuestion !== 1) {
      setAnswers((prevAnswers) => prevAnswers.slice(0, -1));
      setNumberOfCurrentQuestion((p) => p - 1);
      setValue("");
    }
  };

  const valueForButton = () => {
    if (!value) {
      return "Выберите ответ";
    }

    if (numberOfCurrentQuestion === questions.length) {
      return "Показать результат";
    }
    return "Следующий вопрос";
  };

  return (
    <div>
      <div className="flex flex-wrap mb-[30px] md:mb-0">
        <div className="hidden order-1 overflow-scroll md:order-2 md:flex md:h-auto">
          <QuestionText question={currentQuestion.question} />
        </div>
        <QuestionRadioButtons
          answers={currentQuestion.answers}
          value={value}
          setValue={setValue}
        />
        <QuestionProgressBar
          numberOfCurrentQuestion={numberOfCurrentQuestion}
          questions={questions}
        />
      </div>

      <div className="flex flex-col items-center md:flex-row-reverse md:justify-between">
        <Button
          type="long-fill"
          onClick={handleClickNextQuestion}
          disabled={!value}
        >
          {valueForButton()}
        </Button>
        <Button type="long" onClick={handleClickPrevQuestion}>
          {numberOfCurrentQuestion === 1 ? "Отмена" : "Предыдущий вопрос"}
        </Button>
      </div>
    </div>
  );
};

export default Question;

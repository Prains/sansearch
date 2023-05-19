"use client";

import { useState } from "react";
import Image from "next/image";
import Overlay from "@/components/ui/Overlay";
import QuestionInfoText from "./QuestionInfoText/QuestionInfoText";
import Question from "./Question/Question";
import QuestionResult from "./QuestionResult/QuestionResult";
import { questionsOfControl as questions } from "@/utils/questionsOfControl";
import { closeCross } from "@/images/icons";
import QuestionText from "./Question/QuestionText/QuestionText";

const QuestionsOfControl = () => {
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [numberOfCurrentQuestion, setNumberOfCurrentQuestion] = useState(1);

  const currentQuestion = questions[numberOfCurrentQuestion - 1];

  return (
    <Overlay>
      <div
        className={`relative ${isFinished &&
          "overflow-y-auto !h-auto"} !h-auto flex-center w-[94%] h-[600px] max-h-[90%] rounded-3xl bg-white md:h-auto md:overflow-y-auto lg:mx-[122px] lg:max-w-[1020px]`}
      >
        <article
          className={`flex flex-col items-center ${
            isFinished ? "h-auto" : "h-full"
          }   mx-[20px]`}
        >
          <h4 className="text-[20px] mb-[18px] mt-[18px] text-center lg:text-[26px]">
            Определение контроля
          </h4>
          <div
            className={`${!isFinished &&
              "overflow-y-auto  h-auto max-h-[300px] mb-[10px]  md:h-auto md:max-h-[150px] md:overflow-hidden"}`}
          >
            {!isFinished && (
              <>
                <QuestionInfoText>
                  Законодательство ЕС предусматривает применение санкций к
                  юридическим лицам, которые не включены в санкционные списки
                  (non-listed persons), но которые подконтрольны подсанкционным
                  лицам (listed persons).
                </QuestionInfoText>
                <QuestionInfoText>
                  Ниже представлены вопросы, которые помогут определить наличие
                  контроля со стороны подсанкционных лиц в отношении
                  юридического лица (организации).
                </QuestionInfoText>
                <div className="flex  md:hidden">
                  <QuestionText question={currentQuestion.question} />
                </div>
              </>
            )}
          </div>

          {!isFinished && (
            <Question
              questions={questions}
              setAnswers={setAnswers}
              setIsFinished={setIsFinished}
              numberOfCurrentQuestion={numberOfCurrentQuestion}
              setNumberOfCurrentQuestion={setNumberOfCurrentQuestion}
              currentQuestion={currentQuestion}
            />
          )}

          {isFinished && <QuestionResult answers={answers} />}
          <button className="absolute top-[12px] right-[12px] w-[22px] h-[22px] bg-transparent md:top-[20px] md:right-[20px]">
            <Image
              className="w-full h-full"
              src={closeCross}
              alt="кнопка закрыть в виде перекрестия"
            />
          </button>
        </article>
      </div>
    </Overlay>
  );
};

export default QuestionsOfControl;

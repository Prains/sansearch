"use client";

import { useState } from "react";
import Image from "next/image";
import Overlay from "@/components/ui/Overlay";
import QuestionInfoText from "./QuestionInfoText/QuestionInfoText";
import Question from "./Question/Question";
import QuestionResult from "./QuestionResult/QuestionResult";
import { questionsOfControl as questions } from "@/utils/questionsOfControl";
import { closeCross } from "@/images/icons";

const QuestionsOfControl = () => {
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <Overlay>
      <div className="relative overflow-scroll flex-center w-full h-[80%] mx-[10px] rounded-3xl bg-white md:h-auto lg:mx-[122px] lg:max-w-[1020px]">
        <article className="flex flex-col items-center mt-[65px] mx-[20px] h-full mb-[30px] md:mt-[30px]">
          <h4 className="text-[20px] mb-[20px] text-center lg:text-[26px]">
            Определение контроля
          </h4>
          <QuestionInfoText>
            Законодательство ЕС предусматривает применение санкций к юридическим
            лицам, которые не включены в санкционные списки (non-listed
            persons), но которые подконтрольны подсанкционным лицам (listed
            persons).
          </QuestionInfoText>
          {!isFinished && (
            <>
              <QuestionInfoText>
                Ниже представлены вопросы, которые помогут определить наличие
                контроля со стороны подсанкционных лиц в отношении юридического
                лица (организации).
              </QuestionInfoText>
              <Question
                questions={questions}
                setAnswers={setAnswers}
                setIsFinished={setIsFinished}
              />
            </>
          )}
          {isFinished && <QuestionResult answers={answers} />}
        </article>
        <button className="absolute top-[12px] right-[12px] w-[22px] h-[22px] bg-transparent md:top-[20px] md:right-[20px]">
          <Image
            className="w-full h-full"
            src={closeCross}
            alt="кнопка закрыть в виде перекрестия"
          />
        </button>
      </div>
    </Overlay>
  );
};

export default QuestionsOfControl;

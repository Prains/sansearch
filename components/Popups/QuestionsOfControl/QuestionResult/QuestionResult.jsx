import Link from "next/link";

const QuestionResult = ({ answers }) => {
  const result = answers.every((answer) => answer === "no")
    ? "Юридическое лицо (организация) не контролируется подсанкционным лицом."
    : "Юридическое лицо (организация) возможно контролируется подсанкционным лицом.";
  return (
    <>
      <p className="text-[18px] mb-[30px] underline text-center lg:text-[28px]">
        Результат
      </p>
      <p className="text-[18px] mb-[30px] text-white-orange text-center lg:text-[24px] lg:mb-[40px]">
        {result}
      </p>
      <p className="text-[18px] mb-[20px] text-center lg:text-[24px] lg:mb-[30px] lg:text-start">
        Обращаем ваше внимание, что результат теста не является юридической
        консультацией. Для детального анализа ситуации рекомендуется обращаться
        к консультантам.
      </p>
      <p className="text-[16px] text-white-black text-center lg:text-[18px] lg:text-start">
        Оригинал текста, в котором перечислены критерии контроля, в{" "}
        <Link
          href="https://data.consilium.europa.eu/doc/document/ST-5664-2018-INIT/en/pdf"
          className="underline"
          target="_blank"
        >
          Guidelines on the implementation and evaluation of restrictive
          measures (sanctions) - 4 May 2018
        </Link>{" "}
        (стр. 20 – 21).{" "}
      </p>
      <p className="text-[16px] text-white-black text-center mb-[10px] lg:text-[18px] lg:mr-auto lg:text-start">
        Дополнительно см. актуальную версию{" "}
        <Link
          href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02001R2580-20220413"
          className="underline"
          target="_blank"
        >
          Regulation 2580/2001
        </Link>
        .
      </p>
    </>
  );
};

export default QuestionResult;

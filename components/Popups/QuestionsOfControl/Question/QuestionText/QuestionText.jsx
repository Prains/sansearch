const QuestionText = ({ question }) => {
  const text = question.split("\n");

  if (text.length === 1) {
    return (
      <p className="text-[16px] mb-[30px] text-center  lg:text-start lg:text-[20px]">
        {text}
      </p>
    );
  }

  return (
    <div className="text-[16px] mb-[30px] text-center md:mb-[10px] lg:text-start lg:text-[20px]">
      {text.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  );
};

export default QuestionText;
